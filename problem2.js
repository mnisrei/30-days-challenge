// Given a sorted array of integers "arr", create a function 
// that takes an array as input and returns the "maximum subarray sum".

// Example 1
// arr = [1, -2, 3, 4, 4, -2];
// Expected output: 11
// for arr, the subarray is [3, 4, 4] and It has max sum 3 + 4 + 4 = 11,

const findMaxSum = (arr) => {
    let largest_sum = 0;
    let current_sum = 0;
    for (let i = 0; i < arr.length; i++) {
        current_sum += arr[i];
        if (current_sum < 0) {
            current_sum = 0;
        }
        if (largest_sum < current_sum) {
            largest_sum = current_sum
        }
    }
    return largest_sum > 0 ? largest_sum : -1;
}

const arr = [1, -2, 3, 4, 4, -2];
const res = findMaxSum(arr);
console.log(res)