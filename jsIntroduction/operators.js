// Operators performs operations on one or more operands


// 1. Arithmetic Operators
// we use them for add,sub,mul etc

let x = 10;


console.log("Addition: x + 3 = ", x+3);
console.log("Subtraction: x - 3 = ", x-3);
console.log("Multiplication: x * 3 = ", x*3);
console.log("Division: x / 3 = ", x/3);
console.log("Remainder: x % 3 = ", x%3);
console.log("Increment: ++x = ", ++x);
console.log("Decrement: --x = ", --x);
console.log("Exponentiation: x ** 3 = ", x**3);


// 2. Assignment Operators
// we use them to assign values to variables
console.log("Assignment: x =10, x=",x);
console.log("Addition Assignment: x +=5, x=",x +=5);
console.log("Subtraction Assignment: x -=5, x=",x -=5);
console.log("Multiplication Assignment: x *=5, x=",x *=5);
console.log("Division Assignment: x /=5, x=",x /=5);
console.log("Remainder Assignment: x %=5, x=",x %=5);
console.log("Exponentiation Assignment: x **=5, x=",x **=5);


// 3. Comparison Operators
// we use them to compare two values and return a boolean value

console.log("Equal to: 2 == 2 is", 2 == 2);
console.log("Not Equal to: 2 != 2 is", 2 != 2);
console.log("Strictly Equal to: 2 === '2' is", 2 === '2');
console.log("Strictly not Equal to: 2 !== '2' is", 2 !== '2');
console.log("Greater than: 2 > 2 is", 2 > 2);
console.log("Less than: 2 < 2 is", 2 < 2);
console.log("Greater than or Equal to: 2 >= 2 is", 2 >= 2);
console.log("Less than or Equal to: 2 >= 2 is", 2 >= 2);


// 4. Logical Operators
// we use them to perform logical operations on boolean expressions.

let a = 10;

// logical AND
console.log((a < 5) && (a > 0));
console.log((a > 5) && (a > 6));

// logical OR
console.log((a > 2) || (a > 5));
console.log((a > 10) || (a < 0));

// logical NOT
console.log((a == 10));
console.log(!(a > 5));

