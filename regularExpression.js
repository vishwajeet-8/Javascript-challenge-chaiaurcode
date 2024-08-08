// Activity 1: Basic Regular Expressions
// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
const basicRegex = /Javascript/g;
let str = "Javascript is a first choice for the Frontend Javascript developer";

console.log(str.match(basicRegex));

// Task 2: Write a regular expression to match all digits in a string. Log the matches.
const digitRegex = /\d/g;
str = "The count is 1 and can be 2";
console.log(str.match(digitRegex));

// Activity 2: Character Classes and Quantifiers
// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const wordRegex = /\b[A-Z][a-z]*\b/g;
str = "This is just a Normal string to test the Regex";
const result = str.match(wordRegex);
console.log(result);

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const digitSequenceRegex = /\d+/g;
str = "The count is 1787 and can be 27767";
console.log(str.match(digitSequenceRegex));

// Activity 3: Grouping and Capturing
// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
const phoneNumber = "(123) 456-7890";
const phoneRegex = /\((\d{3})\)\s(\d{3})-(\d{4})/;

const matches = phoneNumber.match(phoneRegex);
if (matches) {
  const areaCode = matches[1];
  const centralOfficeCode = matches[2];
  const lineNumber = matches[3];

  console.log(`Area Code: ${areaCode}`); // Output: Area Code: 123
  console.log(`Central Office Code: ${centralOfficeCode}`); // Output: Central Office Code: 456
  console.log(`Line Number: ${lineNumber}`); // Output: Line Number: 7890
} else {
  console.log("No match found.");
}

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
const email = "user@example.com";
const emailRegex = /^([^@]+)@([^@]+)$/;

const ans = email.match(emailRegex);

if (ans) {
  const username = ans[1];
  const domain = ans[2];

  console.log(`Username: ${username}`); // Output: Username: user
  console.log(`Domain: ${domain}`); // Output: Domain: example.com
} else {
  console.log("No match found.");
}

// Activity 4: Assertions and Boundaries
// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
console.log("Hello world".match(/^\w+/)[0]);
// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
console.log("Hello world".match(/\w+$/)[0]);

// Activity 5: Practical Applications
// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
function validatePassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isValid = regex.test(password);

  if (isValid) {
    console.log("Password is valid.");
  } else {
    console.log("Password is invalid.");
  }
}

// Test examples
validatePassword("Password123!"); // Output: Password is valid.
validatePassword("password123!"); // Output: Password is invalid.
validatePassword("PASSWORD123!"); // Output: Password is invalid.
validatePassword("Password!"); // Output: Password is invalid.
validatePassword("Password123"); // Output: Password is invalid.

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
function validateURL(url) {
  const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
  const isValid = regex.test(url);
  console.log(`The URL "${url}" is ${isValid ? "valid" : "invalid"}.`);
}

// Test examples
validateURL("http://example.com"); // valid
validateURL("https://example.com/path/to/resource"); // valid
validateURL("ftp://example.com"); // invalid
validateURL("example.com"); // valid
validateURL("http://example"); // invalid
