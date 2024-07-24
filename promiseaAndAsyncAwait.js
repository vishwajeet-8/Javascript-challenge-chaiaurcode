// Activitie 1: Understanding Promises
//Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using `.catch()`.
let networkReq = false;
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (networkReq) {
      resolve("Task 1 Promise is resolved");
    } else {
      reject("Task 2 Promise is rejected");
    }
  }, 2000);
});
p.then((message) => {
  console.log(message);
}).catch((error) => {
  console.log(error);
});

// Activity 2: Chaining Promises
// Task 3: Create a sequence of promise that simulate fetching data from a server. chain the promise to log message in a specific order.
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 3 Promise 1 is resolved");
  }, 2000);
});

myPromise
  .then((message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Task 3 Promise 2 is resolved");
      }, 2000);
    });
  })
  .then((message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Task 3 Promise 3 is resolved");
      }, 2000);
    });
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then log the resolved value.
async function myFunction() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 4 Promise is resolved");
    }, 2000);
  });
  const result = await myPromise;
  console.log(result);
}
myFunction();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error.
const myFunction2 = async () => {
  try {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Task 5 Promise is rejected");
      }, 4000);
    });
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
myFunction2();

// Activity 4: Fetching Data from an API
// Task 6: Use the `fetch` API to get data from a public API and log the response data to the console using promises.
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Task 7: Uses the `fetch` API to get data  from a public API and log the response data to the console using async/await.
const fetchFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
};
fetchFunction();

// Activity 5: Concurrent Promises
// Task 8: Use `Promise.all` to wait for multilple promises to resolve and then log all their values.
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 8 Promise 1 is resolved");
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 8 Promise 2 is resolved");
  }, 3000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 8 Promise 3 is resolved");
  }, 4000);
});

Promise.all([promise1, promise2, promise3]).then((value) => {
  console.log(value);
});

// Task 9: Use the `Promsie.race` to log the value of the first promise that resolves among multiple Promises.
Promise.race([promise1, promise2, promise3]).then((value) => {
  console.log(value);
});
