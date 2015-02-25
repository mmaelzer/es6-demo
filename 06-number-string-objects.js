// Number.isInteger()
console.log(Number.isInteger(1.2));

// Number.isNaN()
console.log(Number.isNaN(NaN));

// "string".includes()
console.log("abc".includes("ab"));

// "string".repeat()
console.log("na".repeat(8));

// Object.assign
var obj = {};
Object.assign(obj, {a: 1});
console.log(obj);

// Array.find
console.log([1,2,3].find(x => x % 2 === 0));

// Array.findIndex
console.log([1,2,3].findIndex(x => x === 1));

// Array.values()
// for (let i of ['a', 'b', 'c']) {
//   console.log(i);
// }
