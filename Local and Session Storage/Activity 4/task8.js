// Task 8: Write a script to remove an item from sessionStorage . Log the sessionStorage content before and after removal.

console.log(sessionStorage.getItem("user"));
sessionStorage.removeItem("user");
console.log(sessionStorage.getItem("user"));
