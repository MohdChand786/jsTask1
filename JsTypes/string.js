// The JavaScript string is a primitive data type that represents textual data

// access string characters

// 1. using indexes
let message = "hello";

console.log(message[1]);  

// 2. using the charAt() Method
console.log(message.charAt(1));

// Features of js strings

// 1. js strings are immutable
message[0] = "H";
console.log(message);

message = "Hello";
console.log(message);

// 2. js strings are case-sensitive
let value1 = "a";
let value2 = "A"
console.log(value1 == value2);


// js string methods

let text1 = "hello";
let text2 = "world";
let text3 = "     JavaScript    ";

// concatenate two strings
let result1 = text1.concat(' ', text2);
console.log(result1); 

// convert the text to uppercase
let result2 = text1.toUpperCase();
console.log(result2); 

// remove whitespace from the string
let result3 = text3.trim();
console.log(result3);  

// convert the string to an array
let result4 = text1.split();
console.log(result4); 

// slice the string
let result5= text1.slice(1, 3);
console.log(result5); 