// 1. Anagram Check: Write a function that takes two strings as input and returns true if they are
// anagrams (contain the same letters in a different order), and false otherwise.

function checkAnagram(x, y){
    let str1 = x.split("").sort().join("");
    let str2 = y.split("").sort().join("");
    if (str1 === str2){
        console.log("True");
    }
    else{
        console.log("False");
    }
}
checkAnagram("Clarah", "Ateng'e");


// 2. Duplicate Characters: Write a function that takes a string as input and returns an array of 
// characters that appear more than once in the string.

const names = ["clarah", "issabela", "clarah", "vince", "clarah"];
const findDuplicates = names => names.filter((item, index) => names.indexOf(item) !==index)
const duplicateNames = findDuplicates(names);
console.log(duplicateNames);


// 3. Unique Characters: Write a function that takes a string as input and returns an array of 
// unique characters present in the string.

function getUniqueCharacters(strng){
    let unique = "";
    for(let x = 0; x < strng.length; x++){
        if (unique.includes(strng[x]) === false){
            unique += strng=[x]
        }
    }
    return unique;
}
console.log(getUniqueCharacters("geeks for geeks"));


// 4. String Compression: Write a function that takes a string as input and returns a compressed
// version of the string. The compressed string should count consecutive occurrences of the
// same character and replace them with the character followed by the count.

function stringCompression(myStr){
    let compress = "";
    let occurrence = 1;

    for(let x = 0; x < myStr.length; x++){
        if(myStr[x] === myStr[x + 1]){
            occurrence ++;
        }
        else{
            compress += myStr[x] + occurrence;
            occurrence = 1;
        }
    }
    return compress;
}
const string = "aaabbcccccdddeeeeee";
const compressString = stringCompression(string);
console.log(compressString);