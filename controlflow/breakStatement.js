// The break statement terminates the loop immediately when it's encountered.

while (true) {

    let num = Number(prompt("Enter a number: "));

    if (num == 0) {
        break;
    }

    console.log(num);
}


// 1. break with for loop

for (let i = 1; i <= 5; i++) {
    
    if (i == 3) {
        break;
    }

    console.log(i);
}


// 2. break with while loop


let sum = 0;

while (true) {

    let num = Number(prompt("Enter a number: "));


    if (num < 0){
        break;
    }

    else {
        sum += num;
    }
}

console.log(`Sum: ${sum}`);