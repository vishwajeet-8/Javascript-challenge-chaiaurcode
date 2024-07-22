// Activity 1: Basic Event Handling
// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const btn = document.getElementsByClassName("clickBtn")[0];
const h1 = document.getElementsByClassName("clickH1")[0];
btn.addEventListener("click", () => {
  h1.textContent = "You clicked the button!";
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
const image = document.getElementById("myImage");
image.addEventListener("dblclick", () => {
  image.style.visibility =
    image.style.visibility === "visible" ? "hidden" : "visible";
});

// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color.
const div = document.getElementsByClassName("myDiv")[0];
div.addEventListener("mouseover", () => {
  div.style.backgroundColor = "red";
});

// Task 4: Add a mouseout event listener to an element that resets its background color.
div.addEventListener("mouseout", () => {
  div.style.backgroundColor = "";
});

// Activity 3: Keyboard Events
//Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const input = document.getElementsByClassName("input")[0];
input.addEventListener("keydown", (e) => {
  console.log(e.key);
});
//Task 6: Add a keyup event listener to an input field that displays the current value in paragraph.
input.addEventListener("keyup", (e) => {
  document.getElementsByClassName("para")[0].textContent = e.target.value;
});

// Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
  input.value = "";
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const select = document.getElementById("select");
const p = document.getElementById("p");
select.addEventListener("change", () => {
  p.textContent = select.value;
});

// Activity 5: Event Delegation
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
document.getElementsByClassName("items")[0].addEventListener("click", (e) => {
  if (e.target && e.target.matches("li.item")) {
    console.log("Item clicked:", e.target.textContent);
  }
});

// Task 10: Add a event listener to a parent element that listens for events from dynamically added child elements.
const buttonContainer = document.getElementById("buttonContainer");
buttonContainer.addEventListener("click", (e) => {
  if (e.target && e.target.matches("button")) {
    console.log("Button clicked:", e.target.textContent);
  }
});

setTimeout(() => {
  const button = document.createElement("button");
  button.textContent = "Dynamic Button";
  buttonContainer.appendChild(button);
}, 2000);
