import arrayFlattener from "./src/array-flattener";

const userInput = JSON.parse(process.argv.slice(2)[0] || "[]");
console.log(arrayFlattener(userInput));
