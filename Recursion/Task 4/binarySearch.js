// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

const recursiveBinarySearch = (arr, start, end, mid, target) => {
  if (start > end) {
    return -1;
  }

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    end = mid - 1;
    mid = Math.floor((start + end) / 2);
    return recursiveBinarySearch(arr, start, end, mid, target);
  } else {
    start = mid + 1;
    mid = Math.floor((start + end) / 2);
    return recursiveBinarySearch(arr, start, end, mid, target);
  }
};
const main = (matrix) => {
  const ans = [];
  matrix.forEach((values) => {
    const arr = values[0];
    const target = values[1];
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);

    let index = recursiveBinarySearch(arr, start, end, mid, target);
    ans.push(index);
  });
  return ans;
};

console.log(
  main([
    [[1, 2, 3, 4, 5, 6], 3],
    [[11, 21, 31, 41, 51, 61], 61],
    [[61, 82, 93, 124, 135, 146], 61],
    [[10, 20, 30, 40, 50], 40],
    [[100, 200, 300, 400, 500], 300],
  ])
);
