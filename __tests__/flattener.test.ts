import arrayFlattener from "../src/array-flattener";
import fc from "fast-check";

const randomArbitrary = fc.anything({
  withBigInt: true,
  withBoxedValues: true,
  withDate: true,
  withMap: true,
  withNullPrototype: true,
  withObjectString: true,
  withSet: true,
});

const randomNonArrayArbitrary = randomArbitrary.filter(
  (value) => Object.prototype.toString.call(value) !== "[object Array]",
);

describe("arrayFlattener", () => {
  it("should not accept non-array values", () => {
    fc.assert(
      fc.property(randomNonArrayArbitrary, (randomNonArrayValue) => {
        expect(() => arrayFlattener(randomNonArrayValue)).toThrowError(new TypeError("Input is not an array"));
      }),
    );
  });

  it("should not cause mutations on flat arrays", () => {
    fc.assert(
      fc.property(fc.array(randomNonArrayArbitrary), (randomFlatArray) => {
        expect(arrayFlattener(randomFlatArray)).toEqual(randomFlatArray);
      }),
    );
  });

  it("should flatten nested arrays", () => {
    fc.assert(
      fc.property(fc.array(fc.array(randomNonArrayArbitrary)), (randomAtOneLevelDeepArray) => {
        expect(arrayFlattener(randomAtOneLevelDeepArray)).toEqual(randomAtOneLevelDeepArray.flat());
      }),
    );

    fc.assert(
      fc.property(fc.array(fc.array(fc.array(randomNonArrayArbitrary))), (randomAtTwoLevelDeepArray) => {
        expect(arrayFlattener(randomAtTwoLevelDeepArray)).toEqual(randomAtTwoLevelDeepArray.flat().flat());
      }),
    );
  });
});
