// Activity 1: Class Definition
// Task 1: Define a class `Person` with properties `name` and `age`, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Task 5: Add a static method to the `Person` class that returns a generic greeting message. call this static method without creating an instance of the class and log the message.
  static genericGreet() {
    return "Hello, my this is just a generic greet";
  }
  greet() {
    return `Hello my name is ${this.name} and I am ${this.age} years old`;
  }

  // Task 2: Add a method to the `Person` class that updates the age property and logs the updated age.
  updateAge(updateAge) {
    this.age = updateAge;
  }

  // Task 7: Add a getter method to the `Person` class to return the full name (assume a `firstNmae` and `lastName` property). Create an  instance and log the full name using the getter.
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  // Task 8: Add a setter method to the `Person` class to update the name properties (`firstName` and `lastName). update the name using the setter and log the updated full name.
  set fullName(name) {
    this.name = name;
    return this.name;
  }
}

const person = new Person("vishu", 21); // Task 1
console.log(person.greet()); // Task 1
person.updateAge(23); // Task 2
console.log(person.age); // Task 2

// Activity 2: Class Inheritance
// Task 3: Define a class `Student that extends the `Person` class. Add property `studentId` and a method to return the student ID. Create an instance of the `Student` class and log the student ID.
class Student extends Person {
  static count = 0; // Task 6: Add a static property to the `Student` class to keep track of the number of students created. increment this property in the constructor and log the total number of students.
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.count++;
  }
  getStudentId() {
    return this.studentId;
  }

  // Task 4: Override the greeting method in the student class to include the student ID in the message. Log the overriden greeting message.
  greet() {
    return `Hello my name is ${this.name} and my student ID is ${this.studentId}`;
  }
}
const student = new Student("Raj", 26, 893849); //Task 3
console.log(student.getStudentId()); // Task 3
console.log(student.greet()); // Task 4

// Activity 3: Static Methods and Properties
console.log(Person.genericGreet()); // Task 5
console.log(Student.count); // Task 6

// Activity 4: Getters and Setters
const newPerson = new Person("Virat", 32); // Task 7
newPerson.fullName; // Task 7

const player = new Person("raj dhoni", 39); // Task 8
console.log(player.name); // Task 8
player.fullName = "MS Dhoni"; // Task 8
console.log(player.name); // Task 8

// Activity 5: Private Fields (Optional)
// Task 9: Define a class `Account` with private fields for `balance` and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    this.#balance -= amount;
    return this.#balance;
  }
}

// Task 10: Create an instance of the `Account` class and test the deposit and withdraw methods, logging the balance after each operation.

const sbi = new Account();
console.log(sbi.deposit(1000));
console.log(sbi.withdraw(500));