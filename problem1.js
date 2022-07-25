// Given a sorted array of integers "arr" and a Value "value".
// If given in a function that takes "arr" and "value" as input 
// parameters should returns the lower bound of "value".
// If "value" is less than smallest element of array "arr" then 
// return '-1' in that case.

// Example 1
// arr = [-1, -1, 2, 3, 5];
// value = 4;
// Expected output: 3
// As 3 is just smaller than 4 in the array.

// Example 2
// arr = [1, -1, 2, 3, 4, 6];
// value = 4;
// Expected output: 4
// As 4 equals to 4


const findLowerBound = (arr, value) => {
    const size = arr.length;
    let left = 0, right = (size - 1);
    let result = -1;

    while (left <= right) {
        let mid = parseInt((left + right) / 2);
        if (arr[mid] > value) {
            right = mid - 1;
        }
        else {
            result = arr[mid];
            left = mid + 1;
        }
    }

    return result;
}

const arr = [1, -1, 2, 3, 4, 6];
const value = 4;
const res = findLowerBound(arr, value);
console.log(res)