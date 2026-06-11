// sort(): Sorts array in place (changes original array).

// Syntax:
// array.sort((a, b) => {
//   return a - b; // numeric ascending
// });

// Task 1: accending sort
// const arr = [5, 1, 3];
// arr.sort((a, b) => {
//     return a - b;
// })
// console.log(arr);
// Task 2: Decccending sort
// const arr2 = [5, 1, 3];
// arr2.sort((a, b) => {
//     return b - a;
// })
// console.log(arr2);

// Task 3: sort by age
// const users = [
//     { age: 30 },
//     { age: 20 },
//     { age: 25 }
// ];
// users.sort((a, b) => {
//     return a.age - b.age;
// })
// console.log(users);

// Task 4: SORT CHAR
// const arr = ['b', 'c', 'a'];
// arr.sort((a, b) => {
//     return (a - 'a') - (b - 'a');
// })
// console.log(arr);