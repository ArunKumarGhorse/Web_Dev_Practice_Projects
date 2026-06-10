// reduce() array ke saare elements ko combine karke ek single value return karta hai.
// SYNTAX
//arr.reduce((acc, curr) => {
//    return acc;
// }, initialValue);
// acc = accumulator (result store karta hai)
// curr = current element

// Task 1: Find sum of all element using reduce funtion
// const nums = [10, 20, 30, 40];
// const sum = nums.reduce((acc, curr) => acc + curr, 0)
// console.log(sum);

// Task 2: Array ka maximum element find karo using reduce().
// const nums = [12, 45, 7, 89, 23];
// const max = nums.reduce((acc, curr) => {
//     if (acc < curr) acc = curr;
//     return acc;
// }, nums[0]);
// console.log("Max Element is : ", max);


// Task 3: Find users total salary sum
// const users = [
//     { name: "Arun", salary: 50000 },
//     { name: "Rahul", salary: 60000 },
//     { name: "Aman", salary: 70000 }
// ];
// const sum = users.reduce((acc, curr) => {
//     acc += curr.salary;v
//     return acc;
// }, 0)
// console.log(sum);