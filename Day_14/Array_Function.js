// map in array
// const arr = [1, 2, 3, 4];
// function double(value) {
//     return value * 2;
// }
// const newarr = arr.map(double);
// console.log(newarr);

// using arrow function
// // Multiply by 2
// const newarr2 = arr.map((value) => value * 2);
// console.log(newarr2);

// // Add 10
// const newarr3 = arr.map((value) => value + 10);
// console.log(newarr3);

// Convet Elements in String
// const newarr4 = arr.map((value) => String(value));
// console.log(newarr4);

// Capitalize Word
// let arr = ["arun", "rahul", "rohit"];
// const newarr5 = arr.map((value) => value.toUpperCase());
// console.log(newarr5);

// Task 5: Get Name Only
// const users = [
//     { name: "Arun", age: 20 },
//     { name: "Rahul", age: 22 },
//     { name: "Rohit", age: 21 }
// ];
// const newarr = users.map((value) => value.name);
// console.log(newarr);

// Task 6: Add Property
const users = [
    { name: "Arun" },
    { name: "Satish" }
];
users.forEach((user) => {
    user.active = true;
});
// users[0].age = "20";
// users[1].age = "25";

console.log(users);