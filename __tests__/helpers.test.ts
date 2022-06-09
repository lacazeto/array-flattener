import { isArray } from "../src/helpers";
import fc from "fast-check";

const arrayArbitrary = fc.oneof(fc.tuple(fc.anything()), fc.array(fc.anything()));
const nonArrayArbitrary = fc.oneof(
  fc.boolean(),
  fc.integer(),
  fc.float(),
  fc.char(),
  fc.string(),
  fc.json(),
  fc.date(),
  fc.object(),
  fc.func(fc.anything()),
);

describe("isArray", () => {
  it("should return true for array inputs", () => {
    fc.assert(
      fc.property(arrayArbitrary, (randomArrayValue) => {
        expect(isArray(randomArrayValue)).toBe(true);
      }),
    );
  });

  it("should return false for non-array inputs", () => {
    fc.assert(
      fc.property(nonArrayArbitrary, (randomArrayValue) => {
        expect(isArray(randomArrayValue)).toBe(false);
      }),
    );
  });
});
