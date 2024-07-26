// Task 2: Create a module that exports an object representing a person with properties and methods. import and use this module in another script.

export const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old."
    );
  },
};
