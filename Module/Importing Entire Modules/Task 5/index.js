// Task 5: Create a module that exports multiple constants and functions. import the entire modules as an object in another script and use its properties.

import * as math from "./entireModule.js";

console.log(math.addNum(90, 10));
console.log(math.subtract(90, 10));
console.log(math.multiply(90, 10));
console.log(math.divide(90, 10));
