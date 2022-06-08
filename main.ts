const isArray = (input: unknown): input is unknown[] => {
  return Object.prototype.toString.call(input) === "[object Array]";
};

const flatten = (arr: unknown[]) => {
  return arr.reduce((prev: unknown[], curr): unknown[] => {
    if (isArray(curr)) {
      return prev.concat(flatten(curr));
    } else {
      return prev.concat(curr);
    }
  }, [] as unknown[]);
};

export const main = (input: unknown) => {
  if (!isArray(input)) throw new TypeError("Input is not an array");

  return flatten(input);
};
