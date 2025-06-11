// The continue statement skips the current iteration of the loop and proceeds to the next iteration.



for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}


// 1. continue with for loop

for (let i = 1; i <= 10; ++i) {

    if (i > 4 && i < 9) {
        continue;
    }
    console.log(i);
}


// 2. continue with while loop

var num = 1;

while (num <= 10) {

    if (num % 2 === 0) {
        ++num;
        continue;
    }

    console.log(num);
    ++num;
}
