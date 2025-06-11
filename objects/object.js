// JavaScript object is a variable that can store multiple data in key-value pairs.

const student = {
    firstName: "Chand",
    rollNo: 715
};

console.log(student);

// we can access object properties
// 1. using dot notation

const dog = {
    name: "Rocky",
};

console.log(dog.name);



// 2. using bracket notation

const cat = {
    name: "Luna",
};

console.log(cat["name"]);


// Object Operations

// 1. Modify Object Properties
// We can modify object properties by assigning a new value to an existing key. For example,

const person = {
    name: "Bobby",
    hobby: "Dancing",
};

person.hobby = "Singing";

console.log(person);



// 2. add object properties

const student1 = {
    name: "John",
    age: 20,
};

student1.rollNo = 14;
student1.faculty = "Science";

console.log(student1);

// 3. delete object properties

const employee = {
    name: "Tony",
    position: "Officer",
    salary: 30000,
};

delete employee.salary

console.log(employee);



// object methods

const person = {
    name: "Bob",
    age: 30,
    
    greet: function () {
        console.log("Bob says Hi!");
    }
};

person.greet(); 