// multidimensional arrays contain another array inside them.

const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];

console.log(data);


// Existing arrays as elements

// declare three arrays
let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];

// create multidimensional array

let studentsData = [student1, student2, student3];
console.log(studentsData);

// Add elements to a multidimensional array

// 1. using index notation
let studentsData1 = [["Jack", 24], ["Sara", 23]];

studentsData[1][2] = "hello";

console.log(studentsData1);

// 2. using the push() method

let studentsData = [["Jack", 24], ["Sara", 23]];

studentsData.push(["Peter", 24]);

console.log(studentsData);

studentsData[1].push("hello");

console.log(studentsData);


// 3. remove elements 
let studentsData = [['Jack', 24], ['Sara', 23],];

studentsData.splice(0,1);

console.log(studentsData);

// 4. iterate over multidimensional array

let studentsData = [["Jack", 24], ["Sara", 23]];

// loop over outer array
for(let i = 0; i < studentsData.length; i++) {

    // loop over inner array elements
    for(let j = 0; j < studentsData[i].length; j++) {
        console.log(studentsData[i][j]);
    }
}