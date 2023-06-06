// 1. Write a program that prints the multiplication table of a 
//given number using a for loop.

const myNum = 9;
for (let x = 1; x <= 100; x++) {
    console.log(myNum + "*" + x + "=" +myNum * x);
}


// 2. Write a program that uses a while loop to find the 
//factorial of a given number.

function findFactorial(number){
    var answer = number
    if (number === 0 || number === 1){
        return 1;
    }
    while(number > 1){
        number --;
        answer *= number;
    }
    return answer;
}
console.log(findFactorial(7));

// 3. Write a program that uses a do-while loop to get user input 
//until a valid input is provided.

let a = 0
let answer = "";
do{
    a = a + 1;
    answer = answer + a;
}
while ( a < 6);
console.log(answer);


// 4. Write a program that uses a break statement to exit a loop 
//when a specific value is found in an array.

let myNumbers = [12, 5, 7, 9, 2, 3, 7];
for(let x = 0; x < myNumbers.length; x++){
    console.log({x});
    if ( x === 5){
        break;
    }
}


// 5. Write a program that uses a continue statement to skip over
//negative numbers in an array and only print positive numbers.



// 6. Write a program that uses a switch statement to determine 
//the grade of a student based on their percentage.



// 7. Write a program that uses if-else statements to determine 
//if a given number is prime or not.



// 8. Write a program that uses for loops to print a pattern of 
//asterisks based on user input.