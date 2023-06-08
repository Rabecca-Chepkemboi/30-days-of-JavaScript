// 1. Implement a JavaScript function that uses closure to create a counter. The counter should start at
// 1 and increment by 1 each time it is called. Test the counter by calling it multiple times and 
// printing the output.

function createClosureCounter(){
    let myCount = 10;
    return function(){
        return myCount ++;
    };
}
let counted = createClosureCounter();
console.log(counted());
console.log(counted());
console.log(counted());


// 2. Write a JavaScript function that takes an array of numbers as input and returns a function. 
// The returned function should accept a number and return a new array where each element is 
// multiplied by the number passed to the function. Test the function with different inputs.

function multiplyArrayByNumber(numbers){
    return function(numb){
        return numbers.map(element => element * numb);
    };
}
let num1 = [5, 6, 7, 8, 9];
let returnedFunction = multiplyArrayByNumber(num1);
console.log(returnedFunction(4));
console.log(returnedFunction(5));


// 3. Implement a JavaScript module that maintains a private variable. The module should provide
// methods to get and set the value of the variable. Test the module by creating multiple 
// instances and verifying that each instance has its own private variable.

const mantainsPrivateVariable = () => {
    let privatevariable;
    const getPrivateVariable = () => {
        return privatevariable;
    };
    const setPrivateVariable = (newInstance) => {
        privatevariable = newInstance;
    };
    return {
        getPrivateVariable,
        setPrivateVariable
    };
};
let myModule1 = mantainsPrivateVariable();
let myModule2 = mantainsPrivateVariable();

myModule1.setPrivateVariable("tech school");
console.log(myModule1.getPrivateVariable());

myModule2.setPrivateVariable("my coding skills");
console.log(myModule1.getPrivateVariable());
console.log(myModule2.getPrivateVariable());


