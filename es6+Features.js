// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name = "Vishwajeet";
const age = 21;
console.log(`Hello my name is ${name}, I am ${age} years old`);

// Task 2: Create a multi-line string using template literals and log it to the console.
const multiLineString = `I am here for 
some coding Practise,
what are you doing
by the way`;
console.log(multiLineString);

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console;
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(`This is the first number ${first}`);
console.log(`This is the second number ${second}`);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};
const { title, author } = book;
console.log(`${title} is written by ${author}`);

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const players = ["Virat", "Dhoni", "Sachin", "Rohit", "Gambhir", "suresh"];
const newPlayers = [...players, "Jadeja", "Bumrah", "Shami"];
console.log(newPlayers);

// Task 6: Use the rest operator in a function to accept an arbitary number of arguments, sum them, and return the result.
function sum(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6));

// Activity 6: Default parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter, having a default value of 1. log the result of calling this function with and without the second parameter.
function product(a, b = 1) {
  return a * b;
}
console.log(`Without the parameter the product is ${product(10)}`);
console.log(`With parameter the product is ${product(10 * 20)}`);

// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with the methods and properties, and log the object to the console.
const person = {
  name: "Virat",
  age: 32,
  address: "Delhi",
  getDetails: function () {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`
    );
  },
};
console.log(person);

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const prop = "name";
const person1 = {
  [prop]: "Dhoni",
  age: 37,
};
console.log(person1);
