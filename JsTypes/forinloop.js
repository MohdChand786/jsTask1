// The JavaScript for...in loop iterates over the keys of an object.

const student = {
    name: "Chand",
    rollNo: 715 
};

for (let key in student) {

    console.log(`${key} => ${student[key]}`);
};

