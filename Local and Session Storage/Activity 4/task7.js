// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.

function handleSubmit(event) {
  event.preventDefault();
  const form = document.getElementsByTagName("form");
  const formElement = form.item(0).children;
  const name = formElement.item(0);
  const email = formElement.item(1);

  const user = {
    name: name.value,
    email: email.value,
  };

  sessionStorage.setItem("user", JSON.stringify(user));
  // Clear the form fields after submission
  name.value = "";
  email.value = "";
}

const form = document.getElementsByTagName("form");
if (sessionStorage.getItem("user")) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  document.getElementById("user").style.display = "block";
  document.getElementById("name").innerText = user.name;
  document.getElementById("email").innerText = user.email;
  form[0].style.display = "none";
}
