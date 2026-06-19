// some() : Definition
// Returns true if ANY element passes condition.

//Syntax
// array.some((element) => {
//   return condition;
// });

// Task 1: check if any > 2
// const arr = [1, 2, 3];
// const res = arr.some((ele) => ele > 2);
// console.log(res);

// Task 2: check admin exists
// const users = [{ role: "user" }, { role: "admin" }];
// const res = users.some((ele) => ele.role == "admin");
// console.log(res);

// Task 3: any product stock true AND price < 500
// const products = [
//     { price: 400, stock: false },
//     { price: 600, stock: true },
//     { price: 300, stock: true }
// ];
// const res = products.some((ele) => ele.stock == true && ele.price < 500);
// console.log(res);