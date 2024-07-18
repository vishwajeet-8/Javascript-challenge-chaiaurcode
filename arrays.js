// Array Creation and Access
// 1. Create an array of numbers from 1 to 5 and log the array to the console.
const arr = [1, 2, 3, 4, 5];
console.log(arr);

// 2. Access the first and last elements of the array and log them to the console.
console.log(arr[0]);
console.log(arr[4]);

// Array Methods (Basic)
// 3. Use the `push` method to add a new number to the end of the array and log the updated array.
arr.push(6);
console.log(arr);

//4. Use the `pop` method to remove the last element from the array and log the updated array.
arr.pop();
console.log(arr);

// 5. Use the `shift` method to remove the first element from the array and log the updated array.
arr.shift();
console.log(arr);

// 6. Use the `unshift` method to add a new number to the beginning of the array and log the updated array.
arr.unshift(1);
console.log(arr);

// Array Methods (Intermediate);
// 7. Use the `map` method to create a new array where each number is doubled and log the new array.
const newArr = arr.map((val) => val * 2);
console.log(newArr);

// 8. Use the `filter` method to create a new array with only even number and log the new array.
const evenArr = arr.filter((val) => val % 2 === 0);
console.log(evenArr);

// 9. Use the `reduce` method to calculate the sum of all numbers in the array and log the results.
const sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum);

// Array Iteration
// 10. Use a `for` loop to iterate over the array and log each element to the console.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 11. Use the `forEach` method to iterate over the array and log each element to the console.
arr.forEach((val) => console.log(val));

// Multi-dimensional Arrays
// 12. Create a two-dimensional array(matrix) and log the entire array to the console.
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

// 13. Access and log the specific element from the two-dimensional array.
console.log(`This is the 5th element in thr matrix ${matrix[1][1]}`);
