// function decleration
// Check a number is odd or even
function checkOdd(num) {
  if (num % 2 === 0) console.log("number is even");
  else console.log("number is odd");
}

checkOdd(97);

// calculate the square of a number
function square(num) {
  console.log(num * num);
}

square(3);

// function expression
// find the max number
const max = function (a, b) {
  if (a > b) console.log(a);
  else console.log(b);
};

max(84, 43);

//print the added string
const addStr = function (str1, str2) {
  return str1 + " " + str2;
};

addStr("vishu", "rout");

// arrow function
const sum = (num1, num2) => {
  return num1 + num2;
};

sum(1, 2);

const containSpeVal = (str) => {
  return str.includes("a");
};

containSpeVal("vfgl");

// default parameters

function product(num1, num2 = 3) {
  return num1 * num2;
}

product(4);

function greet(name, age = 20) {
  return `Hello ${name} you are ${age} years old.`;
}

greet("vishwajeet");

// Higher order functions
const func = () => console.log("function called")

function main(func, num) {
  for (let i = 0; i < num; i++) {
    func();
  }
}

main(other, 3);

////////
const func1 = (val) => val + 2;
const func2 = (result) => result * 2;

const hof = (func1, func2, val) => {
    let temp = func1(val);
    let ans = func2(temp);
    return ans;
}