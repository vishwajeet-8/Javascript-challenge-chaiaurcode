// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

const countOccurrences = (arr, target, n, cnt) => {
  if (n >= arr.length) return cnt;

  if (arr[n] === target) {
    cnt++;
    return countOccurrences(arr, target, n + 1, cnt);
  } else {
    return countOccurrences(arr, target, n + 1, cnt);
  }
};
const main = (values) => {
  const ans = [];
  values.forEach((value) => {
    const arr = value[0];
    const target = value[1];
    const cnt = 0;
    const n = 0;
    const result = countOccurrences(arr, target, n, cnt);
    ans.push(result);
  });
  return ans;
};

console.log(
  main([
    [[3, 2, 3, 3, 5, 6], 3],
    [[11, 61, 61, 41, 51, 61], 61],
    [[61, 82, 93, 124, 135, 146], 61],
    [[40, 40, 40, 40, 40], 40],
    [[100, 200, 300, 400, 500], 300],
  ])
);
