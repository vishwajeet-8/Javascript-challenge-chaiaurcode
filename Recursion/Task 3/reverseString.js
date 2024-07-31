// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

const main = (arr) => {
  const result = [];
  arr.forEach((str) => {
    const newStr = "";
    const n = str.length - 1;
    const reversed = reverseString(str, newStr, n);
    result.push(reversed);
  });
  return result;
};

const reverseString = (str, newStr, n) => {
  if (n < 0) return newStr;

  newStr += str[n];
  return reverseString(str, newStr, n - 1);
};

console.log(main(["string", "array", "char"]));
