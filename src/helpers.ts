export const isArray = (input: unknown): input is unknown[] => {
  return Object.prototype.toString.call(input) === "[object Array]";
};
