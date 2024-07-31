// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

const main = (arr) => {
  const result = [];
  arr.forEach((str) => {
    let s = 0;
    let e = str.length - 1;
    const ans = isPalindrome(str, s, e);
    result.push(ans);
  });
  return result;
};

const isPalindrome = (str, s, e) => {
  if (s >= e) return true;
  if (str[s] === str[e]) {
    return isPalindrome(str, s + 1, e - 1);
  } else {
    return false;
  }
};

console.log(main(["deed", "wow", "char"]));

