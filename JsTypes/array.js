
// // Modification Methods
// // push(element)- Add to end
// let fruits = ["Apple","Mango","Orange"];

// console.log(fruits)

// fruits.push("Banana");
// console.log(fruits)


// // pop - Remove from end
// fruits.pop();
// console.log(fruits);

// // shift() - Remove from start
// fruits.shift();
// console.log(fruits);

// // unshift(element) - Add to start
// fruits.unshift("Kiwi");
// console.log(fruits);


// // splice(start, deleteCount, ...items) – Add/remove at any index
let friends = ["Abdullah","Affan","Sameer","Dhanunjaya","Riyaz","Arham","Taj"];
// console.log(friends);
// friends.splice(1,3);
// console.log(friends);

// // reverse() - reverse the array
// friends.reverse();
// console.log(friends);

// // sort() - sorts the array
// friends.sort();
// console.log(friends);


// reverse sort
// friends.sort().reverse();
// console.log(friends);
                // or
// console.log(friends.sort((a,b)=> b-a))

// fill(value,start,end) - 
// friends.fill("zaid",1,3);
// console.log(friends);
// console.log(friends.fill("Hello"));

// copyWithin(target, start, end) – Copies part of array to another location in the same array.
// friends.copyWithin(0,2,5);
// console.log(friends);






// Searching and Indexing
// includes(value) - checks if the value exists in the array
// console.log(friends.includes("Sameer"));
// console.log(friends.includes("Saffan"));

//indexOf(value) – First index of value (or -1).
// console.log(friends.indexOf("Sameer"));

// // lastIndexOf(value) – Last index of value (or -1).
// console.log(friends.lastIndexOf("Sameer"));

// find(...) – Finds first match.
let numArray = [2,4,5,6,7,3,1];
console.log(numArray.find((x)=>x%2==0))

// findIndex(...) – Finds index of first match.
console.log(numArray.findIndex((x)=>x%2==0))








// every(condition) - gives true or false based upon condition(if one element fails the condition it gives false)
// let arr = [-5,2,4,6,8];
// let check = arr.every((value)=>value>1)
// console.log(check);

// // .some()
// let arr2 = [2,5,-4,1,5,8]
// let output = arr2.some((value)=>value<0)
// console.log(output);

// // .flat()
// let arr3 = [1,2,[2,4],[4,5]]
// // [1,2,2,4,4,5]
// let final = arr3.flat();
// console.log(final);







// Conversion
//  .join(separator)
// let fname = ["c", "h", "a", "n", "d"];
// let output2 = fname.join("");
// console.log(output2);

// toString()

let a1 = ["Chand","22","male"]
console.log(a1.toString());
