// if-else statements

function checkNum(num) {
  if (num > 0) {
    console.log("Positive Number");
  } else if (num < 0) {
    console.log("Negative Number");
  } else {
    console.log("The number is 0");
  }
}
checkNum(12);

function checkAgeToVote(age) {
  if (age >= 18) {
    console.log("You can vote");
  } else {
    console.log("You cannot vote");
  }
}
checkAgeToVote(17);

// Nested if-else statements

function largeNum(num1, num2, num3) {
  if (num1 > num2) {
    if (num1 > num3) {
      console.log(num1 + " is the largest number");
    }
  } else if (num2 > num1) {
    if (num2 > num3) {
      console.log(num2 + " is the largest number");
    }
  } else {
    console.log(num3 + " is the largest number");
  }
}

largeNum(1, 3, 2);

// Switch case

function checkWeekDays(num) {
  switch (num) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Invalid day");
      break;
  }
}

checkWeekDays(7);

function checkScore(score) {
  switch (true) {
    case score > 80:
      console.log("A Grade");
      break;
    case score > 70:
      console.log("B Grade");
      break;
    case score > 60:
      console.log("C Grade");
      break;
    case score >= 40:
      console.log("D Grade");
      break;
    default:
      console.log("F Grade");
  }
}
checkScore(85);

//Ternary operator

function checkOddEven(num) {
  num % 2 === 0 ? console.log("Even") : console.log("Odd");
}

checkOddEven(29);

//checking leap year using multiple conditions
function checkLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 === 0) {
      console.log("Leap Year");
      return;
    }
    console.log("Leap Year");
  }
}

checkLeapYear(2000);
