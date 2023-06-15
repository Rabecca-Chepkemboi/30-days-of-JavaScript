// Write an arrow function that takes a number as an 
//argument and returns true if the number is prime, and false otherwise.

const checkPrimeNumbrs = (nums)=>{
    if (nums <= 1){
        return false;
    }
    for(let a = 2; a <= Math.sqrt(nums); a ++){
        if (nums % a === 0){
            return false;
        }
    }
    return true;
};
console.log(checkPrimeNumbrs(99));
console.log(checkPrimeNumbrs(37));


// Write an arrow function that takes a string as an 
//argument and returns a new string with the characters in reverse order.

const reverseString = (name)=>{
    return name.split("").reverse().join("")
}
console.log(reverseString("chepkemboi"));


// Write an arrow function that takes an array of strings as
//an argument and returns an object that contains the count of each string in the array.

const countOccurences = (arry)=>{
    const occured = {};

    arry.forEach((names)=>{
        occured[names] = occured[names] ? occured[names] + 1:1;
    });
    return occured;
}

const arry = ["clara", "daisy", "vince", "morgan", "daisy", "morgan"];
console.log(countOccurences(arry));