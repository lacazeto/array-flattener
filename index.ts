const isArray = (input: unknown): input is unknown[] => {
  return Object.prototype.toString.call(input) === "[object Array]";
};

const flattener = (arr: unknown[]) => {
  return arr.reduce((prev: unknown[], curr): unknown[] => {
    if (isArray(curr)) {
      return prev.concat(flattener(curr));
    } else {
      return prev.concat(curr);
    }
  }, [] as unknown[]);
};

const main = (input: unknown) => {
  if (!isArray(input)) throw new TypeError("Input is not an array");

  return flattener(input);
};

console.log(main([1, 2, [3, 4]]));

export default main;
