// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function main(arr) {
  // console.log(arr);
  const result = [];
  arr.forEach((n) => {
    // console.log(n);
    let i = 1;
    function factorial(i) {
      if (i === n) return i;
      // console.log(i);
      return i * factorial(i + 1);
    }

    const ans = factorial(i);
    result.push(ans);
  });
  return result;
}

console.log(main([5, 6, 4]));
