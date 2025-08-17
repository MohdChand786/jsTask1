//js getter and setter
// In js, there are two kinds of object properties
// 1. Data properties
// 2. Accessor properties

// 1. Data property
const student1 ={
    //data property
    firstName: 'Sameer'  
};




// 2. Accessor property

//get-to define a getter method to get the property value
// set-to define a setter method to set the property value


// javascript getter

const student2 ={
    firstName: 'Affan',
    get getName(){
        return this.firstName;
    }
};


// accessing data property
console.log(student2.firstName);

// accessing getter property
console.log(student2.getName);

// trying to access as a method, causes an error
// console.log(student2.getName());





// javascript setter

const student3 ={
    firstName: 'Abdullah',

    set changeName(newName){
        this.firstName = newName;
    }
};


console.log(student3.firstName);
student3.changeName = 'Dhanunjaya';

console.log(student3.firstName);



