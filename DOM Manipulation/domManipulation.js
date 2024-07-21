// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML element by its ID and change its text content.
const newId = document.getElementById("htmlId");
newId.textContent = "Hello chai aur code, this is day 9 challenge";

// Task 2: Select an HTML element by its class and change its background color.
const newClass = document.getElementsByClassName("htmlClass");
newClass[0].style.backgroundColor = "red";

// Activity 2: Creating and Appending Elements.
// Task 3: Crate a new `div` elements with some text content and append it to the body.
const newDiv = document.createElement("div");
newDiv.className = "newDiv";
newDiv.textContent = "This is a new div element created by JS";
document.body.appendChild(newDiv);

// Task 4: create a new `li` element and add it to an existing `ul` list.
const listItem = document.getElementsByClassName("listItem")[0];
const li = document.createElement("li");
li.textContent = "new list item";
listItem.appendChild(li);

// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM.
const removeElement = document.getElementsByClassName("newDiv")[0];
removeElement.remove();

// Task 6: Remove the last child of a specific HTML element.
const lastChild = listItem.lastElementChild;
listItem.removeChild(lastChild);

// Activity 4: Modifying Attributes and Classes.
// Task 7: Select an HTML element and change of its attribute.
const changeAttribute = document.getElementsByClassName("image");
changeAttribute[0].setAttribute("src", "./chai.JPG");

// Task 8: Add and remove a CSS class to/form an HTML element.
const addClass = document.getElementsByTagName("h3");
addClass[0].classList.add("newClass");

console.log(addClass[0].classList);
addClass[0].classList.remove("newClass");
console.log(addClass[0].classList);

// Activity 5: Event Handling.
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const para = document.getElementsByClassName("para")[0];
const button = document.getElementsByClassName("btn")[0];
button.addEventListener("click", () => {
  para.textContent = "The content of a paragraph has changed.";
});

// Task 10: Add a mouseover event listener to an element that changes its border color.
button.addEventListener("mouseover", () => {
  button.style.border = "2px solid red";
});
