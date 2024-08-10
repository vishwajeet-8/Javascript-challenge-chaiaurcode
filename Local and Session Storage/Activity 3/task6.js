// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

let car = {
  make: "Toyota",
  model: "Camry",
  year: 2015,
};

sessionStorage.setItem("Car", JSON.stringify(car));
const vehicle = sessionStorage.getItem("Car");
const parsedVehicle = JSON.parse(vehicle);
console.log(parsedVehicle);
