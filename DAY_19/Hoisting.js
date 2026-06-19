// Hoisting : Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution.
// Q: Are let and const hoisted?
// A: Yes, they are hoisted, but they cannot be accessed before initialization because they stay in the Temporal Dead Zone (TDZ).
// var - undefined
// let const - Refrence Error
// console.log(a); // undefined
// var a = 10;
// console.log(b); // refrence error
// let b = 11;
// console.log(c); // refrence error
// let c = 11;

let summ = ((a, b) => a + b);
console.log(summ(2, 3));

let fun = (a, b) => a + b;
console.log(fun(21, 21));

// IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("Hello");
})();

// Using arrow function
(() => console.log("Hello"))();