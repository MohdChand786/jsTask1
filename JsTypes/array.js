
// // Modification Methods
// //1. push(element)- Add to end
// let fruits = ["Apple","Mango","Orange"];

// console.log(fruits)

// fruits.push("Banana");
// console.log(fruits)


// //2. pop - Remove from end
// fruits.pop();
// console.log(fruits);

// //3. shift() - Remove from start
// fruits.shift();
// console.log(fruits);

// //4. unshift(element) - Add to start
// fruits.unshift("Kiwi");
// console.log(fruits);


// 5. splice(start, deleteCount, ...items) – Add/remove at any index
let friends = ["Abdullah","Affan","Sameer","Dhanunjaya","Riyaz","Arham","Taj"];
// console.log(friends);
// friends.splice(1,3);
// console.log(friends);

// 6. reverse() - reverse the array
// friends.reverse();
// console.log(friends);

// 7. sort() - sorts the array
// friends.sort();
// console.log(friends);


// 8. reverse sort
// friends.sort().reverse();
// console.log(friends);
                // or
// console.log(friends.sort((a,b)=> b-a))

// 9. fill(value,start,end) - 
// friends.fill("zaid",1,3);
// console.log(friends);
// console.log(friends.fill("Hello"));

// 10. copyWithin(target, start, end) – Copies part of array to another location in the same array.
// friends.copyWithin(0,2,5);
// console.log(friends);






// Searching and Indexing
// 10. includes(value) - checks if the value exists in the array
// console.log(friends.includes("Sameer"));
// console.log(friends.includes("Saffan"));

//11. indexOf(value) – First index of value (or -1).
// console.log(friends.indexOf("Sameer"));

//12. lastIndexOf(value) – Last index of value (or -1).
// console.log(friends.lastIndexOf("Sameer"));

//13. find(...) – Finds first match.
let numArray = [2,4,5,6,7,3,1];
console.log(numArray.find((x)=>x%2==0))

//14. findIndex(...) – Finds index of first match.
console.log(numArray.findIndex((x)=>x%2==0))








//15. every(condition) - gives true or false based upon condition(if one element fails the condition it gives false)
// let arr = [-5,2,4,6,8];
// let check = arr.every((value)=>value>1)
// console.log(check);

//16. .some()
// let arr2 = [2,5,-4,1,5,8]
// let output = arr2.some((value)=>value<0)
// console.log(output);

//17. .flat()
// let arr3 = [1,2,[2,4],[4,5]]
// // [1,2,2,4,4,5]
// let final = arr3.flat();
// console.log(final);







// Conversion
//18.  .join(separator)
// let fname = ["c", "h", "a", "n", "d"];
// let output2 = fname.join("");
// console.log(output2);

//19. toString()

// let a1 = ["Chand","22","male"]
// console.log(a1.toString());

//20. at()
// It accepts the index number and gives the element of that specific index

// const arr = ["Java", "C", "C++", "Python"];

// console.log(arr.at(2));



//21. concat()
// It will concat multiple arrays and returns a new array

// const arr1 = [1,2,3,4,5];
// const arr2 = ["Java", "C", "C++", "Python"];

// console.log(arr1.concat(arr2));

// 22. Array constructor
// const arr = [1,2,3,4,5];
// let store = arr.constructor;

// console.log(store);

// 23. array entries()
// it returns a array with object key/value pairs in the form of index

// the entries() method returns a new array iterator object containing key/value pairs for each array index

// const arr = [1,2,3,4,5];
// let store = arr.entries();

// for(let i of store){
//     console.log(i);
// }



// 24.flatMap()
// it first maps each element of an array using a mapping function then flattens it into a new array

// const arr = [1,2,3,4,5];
// console.log(arr.flatMap((x) => x**2));


// 25. forEach()
// The forEach() method is an array method that executes a provided function once for each array element.
// It is mainly used for iteration (looping) through arrays.

// const numbers = [1,2,3,4];
// numbers.forEach(function(num){
//     console.log(num);
// });


// 26. Array from()
// Array.from() method returns a new array from any array like iterable object

// let names = "Chand";

// console.log(Array.from(names));

// let num = "12345";
// console.log(Array.from(num, (ele)=> ele*ele));

// console.log(num);


// 27.isArray()
// checks the array is an array or not

// const arr = [1,2,3,4,5];

// console.log(arr);

// console.log(Array.isArray(arr));


// 28.Array keys()
// The keys() method returns a new Array Iterator object that contains the keys for each element in the array

// const arr = [1,2,3,4,5];
// let store = arr.keys();
// console.log(store);

// for(let i of store){
//     console.log(i);

// }


// 29. Array map()
// The map method returns a new array by applying the callback function on each element of an array

// const numbers = [1,2,3,4];

// const squared = numbers.map(function(num){
//     return num*num;
// });
// console.log(numbers);
// console.log(squared);


// 30. Array of()
// The of() method creates a new array instance from the given arguments

// console.log(Array.of(2,4,5,6));
// let data = Array.of("Hello", "Java", "C", "C++");
// console.log(data);


//31. Array reduce()
// The reduce() method executes a reducer function on each element of the array and returns a single output value


// const values = [2,4,1,5,6];
// const total = values.reduce((acc, item) =>{
//     return acc+item;
// }, 0);

// console.log(total);
