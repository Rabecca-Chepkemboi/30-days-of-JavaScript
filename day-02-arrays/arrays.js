// 1. Array Sorting: Write a function that takes an array of numbers as input and returns a 
// new array with the numbers sorted in ascending order.

let numbers = [2, 8, 9, 0, 4, 6, 5];
numbers.sort();
console.log(numbers);


// 2. Remove Duplicates: Write a function that takes an array as input and returns a new array
// with all duplicate elements removed.

function removeDuplicates(fruits){
    return[... new Set(fruits)];
}
let fruits = ["apple", "mango", "apple", "pineapple", "mango", "kiwi"];
let newFruits = removeDuplicates(fruits);
console.log(newFruits);


// 3. Array Intersection: Write a function that takes two arrays as input and returns a new array
// containing the elements that are present in both arrays.

function findArrayIntersection(num1, num2){
    return num1.filter(element => num2.includes(element));
}
let nums1 = [1, 2, 3, 4, 5];
let nums2 = [4, 5, 6, 7, 8];
let joined = findArrayIntersection(nums1, nums2);
console.log(joined);


// 4. Array Flattening: Write a function that takes a nested array as input and returns a new array
// with all the elements flattened (i.e., all nested arrays are merged into a single array).

function getFlattenedArray(nestedArray){
    return nestedArray.flat(Infinity);
}
const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
let flattenArray = getFlattenedArray(nestedArray);
console.log(flattenArray);