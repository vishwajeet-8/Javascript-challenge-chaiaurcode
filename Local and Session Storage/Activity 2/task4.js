// Task 4: Write a script to remove an item from localStorage . Log the localStorage content before and after removal.
console.log(localStorage.getItem("user"));
localStorage.removeItem("user");
console.log(localStorage.getItem("user"));
