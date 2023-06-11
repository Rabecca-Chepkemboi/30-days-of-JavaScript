
// 1. Write a JavaScript code snippet that demonstrates hoisting by printing the 
// value of a variable before and after its declaration using var.

console.log(a);
var a = 10;
console.log(a);


// 2. Write a JavaScript code snippet that demonstrates hoisting with function 
// declarations and function expressions.
 var a = 4;
 var hello;

chepkemboi();

function chepkemboi(){
    console.log("chepkemboi");
}

hello = function(){
    console.log(hello);
};
hello();


// 3. Write a JavaScript code snippet that demonstrates hoisting with variable 
// declarations using let and const.

let y = 2;
console.log(y);

let z = 5;
console.log(z);

