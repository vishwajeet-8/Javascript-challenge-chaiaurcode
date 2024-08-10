// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

let car = {
  make: "Toyota",
  model: "Camry",
  year: 2015,
};

localStorage.setItem("Car", JSON.stringify(car));
const vehicle = localStorage.getItem("Car");
const parsedVehicle = JSON.parse(vehicle);
console.log(parsedVehicle);
