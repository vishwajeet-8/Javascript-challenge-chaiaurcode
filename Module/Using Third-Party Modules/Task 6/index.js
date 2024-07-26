// Task 6: Install a third-party module (e.g., `lodash`) and use a function from this module in a script.

import _ from "lodash";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const ans = _.map(arr, (num) => num * 2);
console.log(ans);
