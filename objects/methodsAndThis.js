// method = a function defined within an object

const dog ={
    naam: "Rocky",

    bark: function(){
        console.log("Woof!");
    }
};

dog.bark();


// this keyword
// we use this keyword in an object method to access a property of the same object


const person ={
    fname: "John",
    age: 30,
    introduce: function(){
        console.log(`My name is ${this.fname} and I'm ${this.age} years old.`);
    }
};

person.introduce();

// add a new method to an object

let student = {
    fname: "John"
};

student.great = function(){
    console.log("Hello");
};

student.greet();


