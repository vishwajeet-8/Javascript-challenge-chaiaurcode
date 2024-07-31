// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function main(arr) {
  // console.log(arr);
  const result = [];
  arr.forEach((n) => {
    function fibonacci(n) {
      if (n === 1) return 1;
      else if (n === 2) return 2;
      // console.log(i);
      return fibonacci(n - 1) + fibonacci(n - 2);
    }

    const ans = fibonacci(n);
    result.push(ans);
  });
  return result;
}

console.log(main([5, 6, 4, 7]));
