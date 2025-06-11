//In programming, type conversion is the process of converting data of one type to another. 
// For example, converting string data to number.

// 1. Implicit Conversion
// automatic type conversion

// numeric string used with + gives string type
let result;

// convert number to string
result = "3" + 2; 
console.log(result, "-", typeof(result));

result = "3" + true; 
console.log(result, "-", typeof(result));

result = "3" + null; 
console.log(result, "-", typeof(result));


// 2. Explicit Conversion
// we manually convert one type of data into another using built-in functions

let result2;

// convert string to number
result2 = Number("5");
console.log(result2, "-", typeof(result2));

// convert boolean to string
result2 = String(true);
console.log(result2, "-", typeof(result2));

// convert number to boolean
result2 = Boolean(0);
console.log(result2, "-", typeof(result2));