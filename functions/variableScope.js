// the scope of a variable determines where it can be accessed within the code.


// 1. Local Variables

function greet() {

    var message = "Hello";
    
    console.log(`Local: ${message}`);
}

greet();

console.log(`Global: ${message}`);


// 2. Global Variables

var message = "Hello";

function greet() {
    console.log(`Local: ${message}`);
}

greet();

console.log(`Global: ${message}`);


// 3. Block-Level Variables
// Block-level variables are accessible only within the block {} they are defined in,
//  which can be smaller than a function's scope. 

function display_scopes() {
    let message = "local";

    if (true) {

        let message = "block-level";

        console.log(`inner scope: ${message}`);
    }

    console.log(`outer scope: ${message}`);
}

display_scopes();

