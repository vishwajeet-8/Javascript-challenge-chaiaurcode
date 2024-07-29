// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
const outerFunc = () => {
  const outerVar = "This is the outer Variable";
  const innerFunc = () => {
    console.log(outerVar);
  };

  return innerFunc;
};
const innerFunc = outerFunc();
innerFunc(); // Output: This is the outer Variable

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function counter() {
  let count = 0;
  return {
    increment: () => {
      count++;
    },
    getCount: () => {
      return count;
    },
  };
}

const counterInstance = counter();
counterInstance.increment();
counterInstance.increment();
console.log(counterInstance.getCount()); // Output: 2

// Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function generateId() {
  let id = 0;
  return function () {
    id++;
    return id;
  };
}
const generateIdFunc = generateId();
console.log(generateIdFunc()); // Output: 1

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function greet(user) {
  const name = user;
  return function () {
    console.log(`Hello, ${name}!`);
  };
}
const greetFunc = greet("John");
greetFunc();

// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function createFunctions() {
  const functions = [];
  for (let i = 0; i < 5; i++) {
    functions.push(function () {
      console.log(i);
    });
  }
  return functions;
}
const arrOfFunc = createFunctions();
for (let i = 0; i < arrOfFunc.length; i++) {
  arrOfFunc[i]();
}

// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function itemManager() {
  const items = [];
  return {
    addItem: function (item) {
      items.push(item);
    },
    removeItem: function (item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
      }
    },
    getItem: function () {
      return items;
    },
  };
}
const collection = itemManager();
collection.addItem("Apple");
collection.addItem("Banana");
collection.addItem("Cherry");
console.log(collection.getItem());
collection.removeItem("Cherry");
console.log(collection.getItem());

// Activity 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
// Task 8: Create a memoized version of a function that calculates the factorial of a number.

function memoize(fn) {
  const map = {};
  return function memoizedReturnfunc(...args) {
    const key = JSON.stringify(args);
    if (map[key]) return map[key];
    const result = fn(...args);
    map[key] = result;
    return result;
  };
}

function factorial(args) {
  if (args === 1) return 1;
  return args * factorial(args - 1);
}

const memoizefunc = memoize(factorial);
console.log(memoizefunc(5));
console.log(memoizefunc(5));
