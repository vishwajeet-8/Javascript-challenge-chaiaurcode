// Activity: 1 - Object Creation and Access
// 1. Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
  tittle: "Ikigai",
  author: "Francescs miralles and Hector garcia",
  year: 2016,
};
console.log(book);

// 2. Access and log the tittle and author properties of the book object
console.log(book.tittle);
console.log(book.author);

// Activity: 2 - Object Methods
// 3. Add a method to the book object that returns a string with the book's tittle and author, and log the result of calling this method.
book.getBookInfo = function () {
  return book.tittle + " by " + book.author;
};
console.log(book.getBookInfo());

// 4. Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function (year) {
  this.year = year;
};
book.updateYear(2000);

console.log(book);

// Activity:3 - Nested Objects
// 5. Create a nested object representing a library with properties like name and books (an array of book object), and log the library object to the console.

const library = {
  name: "National Library of India",
  books: [
    { tittle: "11 Rules For Life", author: "Chetan Bhagat" },
    { tittle: "The Subtle Art Of Not Giving Fuck", author: "Mark Manson" },
    { tittle: "As A Man Thinketh", author: "James Allen" },
  ],
};

console.log(library);

// 6. Access and log the name of the library and titles of all the books in the library
console.log(library.name);
library.books.forEach((book) => console.log(book.tittle));

// Activity: 4 - `this` Keyword
// 7. Add a method to the book object that uses the `this` keyword to return a string with the book's title and year, and log the result of calling this method.
book.getBookPublishInfo = function () {
  return this.tittle + " published in " + book.year;
};
console.log(book.getBookPublishInfo());

// Activity: 5 - Object Iteration
// 8. Use a `for...in` loop to iterate over the properties of the book object and log each property and its value.
for (const key in book) {
  console.log(`${key} : ${book[key]}`);
}

// 9. Use `Object.keys` and `Object.values` methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book));
