// Data types represent the different kinds of values we can use in javascipt.


// 1.String
// a string represents textual data.


// string with single quotes
let car1 = 'lamborgini';
console.log(car1);


// string with double quotes
let car2 = "BMW";
console.log(car2);


// string with backticks
let car3 = `mercedes`;
console.log(car3);

// 2. Number
// it represents numeric values

// i. Integers
// values without any decimal parts
let num1 = 3;
console.log(num1);

// ii. Floating-point
// values with decimal parts
let num2 = 3.14;
console.log(num2);

// 3. BigInt
// a BigInt number is created by appending n to the end
// we can't mix BigInt and Int values
let value = 909839987953292752897n;
console.log(value);

// 4. Boolean
// a boolean data can only have one of two values i,e., true or false
let check = true;
console.log(check);
console.log(!check);

// 5. Undefined
// it represents the absence of the value
let name1;
console.log(name1);

// 6. Null
// it represents no value or nothing
let number1 = null;
console.log(number1);

// 7. Symbol
// it is a unique and primitive value, when we create a symbol, js gurantees that it is different from all other symbols even if they have the same descriptions
let myName1 = Symbol("Mohd Chand");
let myName2 = Symbol("Mohd Chand");

console.log(myName1 === myName2);

// 8. Object
// it holds data in the form of key-value pairs.
let student = {
    name:"Mohd Chand",
    age: 22,
    branch: "DataScience"
}

console.log(student);
