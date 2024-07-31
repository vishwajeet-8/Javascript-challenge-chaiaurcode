// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function main(values) {
  //   console.log(values);
  const result = [];
  values.forEach((value) => {
    // console.log(value);
    let n = value.length - 1;
    function addToSum(n) {
      if (n < 0) return 0;
      // console.log(i);
      return value[n] + addToSum(n - 1);
    }

    const ans = addToSum(n);
    result.push(ans);
  });
  return result;
}

console.log(
  main([
    [10, 2, 3],
    [30, 2, 1],
    [2, 100, 3],
    [55, 60, 15],
  ])
);
