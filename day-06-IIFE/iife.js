
// Write an IIFE that accepts an array of numbers as an argument and returns the average of those numbers.

(function(myNums){
    let total = 0;
    for(let a = 0; a < myNums.length; a ++){
        total += myNums[a];
    }
    let average = total / myNums.length;
    console.log("the average number is" + average);
})([2, 3, 4, 5 ,6])


// Implement a module using an IIFE that exposes a public method to calculate the 
// factorial of a given number. The module should also have a private variable 
// to keep track of the number of times the factorial method is called.

let factorialModule = (function(){
    let count = 0;
    function factorial(x) {
        count ++
        return (x <= 1) ? 1 : x * factorial (x - 1); 
    }
    return {
        factorial : factorial,
        findCount : function(){
            return count;
        }
    };
})();
console.log(factorialModule.factorial(6));  
console.log(factorialModule.factorial(5)); 
   



