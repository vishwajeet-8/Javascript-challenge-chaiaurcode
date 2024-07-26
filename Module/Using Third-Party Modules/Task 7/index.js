// Task 7: Install a third-party module (e.g., axios) using npm. import and use this module to make a network request in a script.

import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => console.log(error));
