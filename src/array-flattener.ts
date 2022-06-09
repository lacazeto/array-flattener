import { isArray } from "./helpers";

const recursiveReducer = (arr: unknown[]) => {
  return arr.reduce((prev: unknown[], curr): unknown[] => {
    if (isArray(curr)) {
      return prev.concat(recursiveReducer(curr));
    } else {
      return prev.concat(curr);
    }
  }, [] as unknown[]);
};

const arrayFlattener = (input: unknown) => {
  if (!isArray(input)) throw new TypeError("Input is not an array");

  return recursiveReducer(input);
};

export default arrayFlattener;
