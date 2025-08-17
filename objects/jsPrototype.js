// in js, prototypes allow properties and methoes to be shared among instances of the function or object.



function Car1(){
    console.log("Car instance created!");
};


Car1.prototype.color = "Red";

Car1.prototype.drive = function(){
    console.log(`Driving the car painted in ${this.color}...`);
}


console.log(`The Car's color is: ${Car1.prototype.color}`);

Car1.prototype.drive();




// Protype Inheritance

// Propertiess or methods added to the prototype of a constructor function are accessible to all objects derive from it.

function Car2(model, year){
    this.model = model;
    this.year = year;
};

let c1= new Car2("Mustang", 1964);
let c2= new Car2("Corolla", 1966);


Car2.prototype.color = "Green";

Car2.prototype.drive = function(){
    console.log(`Driving ${this.model}`);
};


console.log(`${c1.model} color: ${c1.color}`);
console.log(`${c2.model} color: ${c2.color}`);

c1.drive();
c2.drive();