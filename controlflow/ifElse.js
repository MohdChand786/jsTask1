let num = 45;

// check if num is fifty or greater
if (num >= 50) {
    console.log("You passed the examination.");
}
else {
    console.log("You failed the examination.");
}



// 1. if statement

const num1 = prompt("Enter a number: ");

if (num1 > 0) {
    console.log("positive number");
}

console.log("nice number");



// 2. else statement
let age = 17;

if (age >= 18) {
    console.log("You are an adult");
}
else {
    console.log("You are a minor");
}



// 3. else if statement

let rating = 4;

if (rating <= 2) {
    console.log("Bad rating");
}
else if (rating >= 4) {
    console.log("Good rating!");
}
else {
    console.log("Average rating");
}



// 4. nested if else statement

let marks = 60;


if (marks >= 40) {

    if (marks >= 80) {
        console.log("Distinction");
    }
    else {
        console.log("Passed");
    }
}

else {
    console.log("Failed");
}
