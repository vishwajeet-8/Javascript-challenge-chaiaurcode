// Activity 1: Sorting Algorithms
// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);

  return arr;
}

console.log("Bubble Sort " + bubbleSort([101, 29, 383, 3, 38, 87]));
// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log("Selection Sort " + selectionSort([5, 3, 8, 4, 2]));

//Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

const sort = (arr) => {
  let low = 0;
  let high = arr.length - 1;
  function quicksort(arr, low, high) {
    if (arr.length <= 1) {
      return arr;
    }

    let mid = Math.ceil((low + high) / 2);
    let pivot = arr[mid];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else if (arr[i] > pivot) {
        right.push(arr[i]);
      } else {
        continue;
      }
    }
    return [
      ...quicksort(left, 0, left.length - 1),
      pivot,
      ...quicksort(right, 0, right.length - 1),
    ];
  }

  return quicksort(arr, low, high);
};

console.log("Quick Sort " + sort([101, 29, 383, 3, 38, 87]));

// Activity 2: Searching Algorithms
// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
};

console.log("Linear Search " + linearSearch([2, 3, 4, 6, 90], 4));

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  const binarySeaechAlgo = (arr, target, low, high) => {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] < target) {
      return binarySeaechAlgo(arr, target, mid + 1, high);
    } else if (arr[mid] > target) {
      return binarySeaechAlgo(arr, target, low, mid - 1);
    } else {
      return mid;
    }
  };

  return binarySeaechAlgo(arr, target, low, high);
};

console.log("Binary Search " + binarySearch([10, 20, 30, 40, 44, 48, 50], 48));

//Activity 3: String Algorithms
// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
const countChar = (str) => {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char in charCount) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  for (const key in charCount) {
    console.log(key + "-> " + charCount[key]);
  }
};
countChar("vishwajeet");

//Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
const longestSubstring = (str) => {
  let maxLen = 0;
  let set = new Set();
  let i = 0;
  let j = 0;
  while (i < str.length && j < str.length) {
    if (!set.has(str[j])) {
      set.add(str[j]);
      j++;

      maxLen = Math.max(maxLen, j - i);
    } else {
      set.delete(str[i]);
      i++;
    }
  }
  return maxLen;
};

console.log(longestSubstring("sksituwksabs"));

//Activity 4: Array Algorithms
// Task 8: Write a function to rotate an array by k positions. Log the rotated array.
const rotateArray = (arr, k) => {
  return arr.slice(-k).concat(arr.slice(0, -k));
};

console.log(rotateArray([1, 2, 3, 4, 5], 3));

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
const mergeSortedArray = (arr1, arr2) => {
  let ans = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      ans.push(arr1[i]);
      i++;
    } else {
      ans.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    ans.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    ans.push(arr2[j]);
    j++;
  }

  return ans;
};

console.log(mergeSortedArray([1, 4, 6, 9], [2, 3, 5]));
