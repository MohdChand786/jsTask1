// In JS, a constructor function is used to create and initialize objects

function Person1(){
    this.name= "John",
    this.age= 23;
}

const person = new Person1();

console.log(person.name);
console.log(person.age);


//create multiple objects with constructor function

function Person2 (){
    this.name = "john",
    this.age = 24,
    this.greet= function(){
        console.log("hello");
    }
}

const person1 = new Person2();
const person2 = new Person2();


console.log(person1.name);
console.log(person2.name);


//constructor with parameters

function friend (friend_name, friend_age, friend_gender){
    this.name = friend_name;
    this.age = friend_age;
    this.gender = friend_gender;

    this.greet = function(){
        return (`Hi ${this.name}`);

    }
}


const friend1 = new friend("abdullah",21, "male");
const friend2 = new friend("affan", 20, "male");


console.log(friend1.name);
console.log(friend2.name);