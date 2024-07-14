// Arithmetic Operators
// Addition +++++++
function addNums(num1, num2) {
    let ans = num1 + num2;
    console.log(ans);
  }
  addNums(2, 3);
  
  // Subtraction --------
  function subtractNums(num1, num2) {
    let ans = num1 - num2;
    console.log(ans);
  }
  subtractNums(2, 3);
  
  // Multipication ********
  function multiplyNums(num1, num2) {
    let ans = num1 * num2;
    console.log(ans);
  }
  multiplyNums(2, 3);
  
  // Division /////////
  function divideNums(num1, num2) {
    let ans = num1 / num2;
    console.log(ans);
  }
  divideNums(6, 3);
  
  // Remainder %%%%%%%%%%
  function remainder(num1, num2) {
    let ans = num1 % num2;
    console.log(ans);
  }
  remainder(6, 3);
  
  // Assignment Operators
  let num = 10;
  num += 20; //(+=)
  console.log(num);
  
  num -= 20; //(-=)
  console.log(num);
  
  // Comparison Operators
  
  function checkForDriving(age) {
    if (age < 18) {
      //(<)
      console.log("You are eligible for nothing except studying");
    } else if (age > 18) {
      //(>)
      console.log("You are also eligible for supercars");
    } else if (age <= 18) {
      //(<=)
      console.log("First issue a driving license");
    } else if (age >= 18) {
      //(>=)
      console.log("You are eligible to drive a car");
    }
  }
  
  checkForDriving(30);
  
  // Logical Operators
  let isSignup = true;
  let isLoggedin = true;
  let isAlreadyLogin = true;
  
  function facebook(isSignup, isLoggedin, isAlreadyLogin) {
    if (isSignup && isLoggedin) {
      //(&&)
      console.log("You can post a status");
    }
  
    if (isAlreadyLogin || isLoggedin) {
      //(||)
      console.log("You can post a status");
    }
  
    if (!isLoggedin) {
      //(!)
      console.log("You are logged out from facebook");
    }
  }
  
  //Ternary Operator
  let number = -20;
  number >= 0 ? console.log("Positive Number") : console.log("Negative Number");
  