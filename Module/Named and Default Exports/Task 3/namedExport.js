// Task 3: Crate a module that exports multiple functions using named exports. import and use these function in another script.

export function addNum(num1, num2) {
  return num1 + num2;
}

export function multiply(num1, num2) {
  return num1 * num2;
}

export function divide(num1, num2) {
  return num1 / num2;
}

export function print(name, age) {
  return name + " is " + age + " years old";
}
