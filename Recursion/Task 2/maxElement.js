// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function main(values) {
  //   console.log(values);
  const result = [];
  values.forEach((value) => {
    // console.log(value);
    let map = [];
    map.push(value[0]);
    let n = 1;
    function maxElement(n) {
      if (n >= value.length) return;
      // console.log(i);
      if (value[n] > map[0]) {
        map.pop();
        map.push(value[n]);
      }
      maxElement(n + 1);
      return map[0];
    }

    const ans = maxElement(n);
    result.push(ans);
  });
  return result;
}

console.log(
  main([
    [10, 2, 3],
    [30, 2, 1],
    [2, 100, 3],
    [55, 60, 15, 1],
  ])
);
