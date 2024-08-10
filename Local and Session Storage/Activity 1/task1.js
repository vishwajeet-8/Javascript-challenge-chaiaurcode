// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.

localStorage.setItem("myKey", "Hello, World!");
let str = localStorage.getItem("myKey");
console.log(str); // Output: Hello, World!
