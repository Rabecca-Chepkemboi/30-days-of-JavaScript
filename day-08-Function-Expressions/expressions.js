
// 2. Create a JavaScript function expression named sumAllNumbers that takes a variable
// number of arguments and returns the sum of all the numbers.

const sumAllNumbers = function(...nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      if (typeof nums[i] === 'number') {
        total += nums[i];
      }
    }
    return total;
  };
  

console.log(sumAllNumbers(23, 76, 12, 66));
console.log(sumAllNumbers(13, 14, 15, 16));



// 3. Write a JavaScript function expression named filterEvenNumbers that takes an array 
// of numbers as a parameter and returns a new array containing only the even
// numbers from the original array.

const getEvenNumbers = function(myNums){
    if(! Array.isArray(myNums)){
        return [];
    }
    return myNums.filter(myNums => myNums % 2 === 0)
}
let myNums = [9, 8, 6, 5, 4, 3, 2];
console.log(getEvenNumbers(myNums));