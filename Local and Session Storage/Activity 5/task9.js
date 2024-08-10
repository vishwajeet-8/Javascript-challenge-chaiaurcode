// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage . Retrieve and log the values from both storage mechanisms.

function storage(mobile, price) {
  localStorage.setItem(mobile, price);
  sessionStorage.setItem(mobile, price);
}

storage("Samsung", 120000);

console.log(localStorage.getItem("Samsung"));
console.log(sessionStorage.getItem("Samsung"));

