// Task 3: Crate a module that exports multiple functions using named exports. import and use these function in another script.

import { addNum, multiply, divide, print } from "./namedExport.js";

console.log(addNum(90, 10));
console.log(multiply(90, 10));
console.log(divide(90, 10));
console.log(print("vishwajeet", 21));
