// every(): Returns true if ALL elements pass condition.
// array.every((element) => {
//   return condition;
// });

// Task 1 : all even?
// const arr = [2, 4, 6];
// let res = arr.every((ele) => ele % 2 == 0);
// console.log(res);

// Task 2: all active?
// const users = [{ active: false }, { active: false }];
// let res = users.every((ele) => ele.active == false);
// console.log(res);

// Task 3: all stock true AND price < 1000
// const products = [
//     { price: 500, stock: true },
//     { price: 700, stock: true }
// ];

// let res = products.every((ele) => {
//     return (ele.price < 1000) && (ele.stock == true);
// })
// console.log(res);
// // NOTE: {} require return () not req return , direct return
// // without {}
// let res = products.every((ele) =>
//      (ele.price < 1000) && (ele.stock == true)
// )
// console.log(res);