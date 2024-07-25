// Activity 1: Basic Error Handling with Try-Catch
// Task 1: Write a fucntion that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
try {
  throw new Error("This is an intentionally thrown messsage");
} catch (error) {
  console.log("An error occurred", error.message);
}
// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. use a try-catch block to handle this error.
function divide() {
  try {
    let a = 10;
    let b = 0;
    let result = a / b;
    if (b === 0) {
      throw new Error("Denominator cannot be zero");
    }
  } catch (error) {
    console.log("An error occurred", error.message);
  }
}
divide();

// Activity 2: Finally Block
// Task 3: Write a script that includes a try-catch block and finally block. log messages in the try, catch, and finally blocks to observe the execution flow.
try {
  console.log("Entering in the try block");
  throw new Error("Ecntering in the catch block");
} catch (error) {
  console.log(error.message);
  console.log("Leaving the catch block");
} finally {
  console.log("finally in finally block");
}

// Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using try-catch block.
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "customError";
  }
}

function customErrorFunc() {
  throw new CustomError("This is the custom error");
}

try {
  customErrorFunc();
} catch (error) {
  console.log("An error occurred", error.message);
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class InputCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "inputCustomError";
  }
}

function validateUser(user) {
  if (user === "") {
    throw new InputCustomError("User cannot be empty");
  } else {
    console.log("User is valid");
  }
}

try {
  validateUser("");
} catch (error) {
  console.log("Validation Fail:", error.message);
}

// Activity 4: Error Handling in Promises
// Task 6: Create a promise that randomly resolve or rejects. Use `.catch()` to handle the rejection and log an appropriate message to the console.
new Promise((resolve, reject) => {
  const random = Math.random();
  if (random < 0.5) {
    resolve("The promise is resolved");
  } else {
    reject("The promise is rejected");
  }
})
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
const randomFunc = async () => {
  try {
    const random = Math.random();
    if (random < 0.5) {
      console.log("The promise is resolved");
    } else {
      throw new Error("The promise is rejected");
    }
  } catch (error) {
    console.log(error.message);
  }
};
randomFunc();

// Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the `fetch` API to request data from an invalid URL and handle the error using `.catch()`. log an appropriate error message to the console.
fetch("https://www.google.com/inval8id")
  .then((response) => {
    if (!response.ok) {
      throw new Error("You try to access the invalid URL");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });

// Task 9: Use the `fetch` API to request data from an invalid URL within an async function and handle the error using try-catch. log an appropriate error message.
const fetchFunc = async () => {
  try {
    const response = await fetch("https://www.google.com/invalid");
    if (!response.ok) {
      throw new Error("You try to access the invalid URL");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
fetchFunc();
