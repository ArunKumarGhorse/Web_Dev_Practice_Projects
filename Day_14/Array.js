// 1. Declare an array
// let mark = [1, 2, 3, 4];
// console.log(mark[0]);

// 3. Sum of all the elements in the array
// let sum = 0;
// for (let i = 0; i < mark.length; i++) {
//     sum += mark[i];
// }
// console.log(sum);

// 4.Find the maximum element in the array
// let mark = [1, 2, 3, 4];
// let max = mark[0];
// let min = mark[0];
// for (let i = 0; i < mark.length; i++) {
//     if (mark[i] > max) {
//         max = mark[i];
//     }
//     if (mark[i] < min) {
//         min = mark[i];
//     }
// }
// console.log("Maximum element:", max);
// console.log("Minimum element:", min);

// 5. Reverse the array
//   let mark = [1, 2, 3, 4];
// let l = 0, r = mark.length - 1
// while (l < r) {
//     let temp = mark[l];
//     mark[l] = mark[r];
//     mark[r] = temp;
//     l++;
//     r--;
// }
// for (let i = 0; i < mark.length; i++) {
//     console.log(mark[i]);
// }

// 6. Largest and second largest element in the array
//   let mark = [1, 2, 3, 4];
// let largest = mark[0], seclarg = mark[0];
// for (let i = 0; i < mark.length; i++) {
//     if (mark[i] > largest) {
//         seclarg = largest;
//         largest = mark[i];
//     }
//     if (mark[i] > seclarg && mark[i] != largest) {
//         seclarg = mark[i];
//     }
// }
// console.log("Largest Element:", largest);
// console.log("Second Largest Element:", seclarg);

// 7. Find the duplicate elements in the array
// let mark = [1, 2, 3, 4, 3, 4, 5];
// let ans = [];
// for (let i = 0; i < mark.length; i++) {
//     let count = 0;
//     for (let j = 0; j < mark.length; j++) {
//         if (mark[i] == mark[j]) {
//             count++;
//         }
//         if (count > 1) {
//             break;
//         }
//     }
//     if (count > 1) {
//         ans.push(mark[i]);
//     }
// }
// console.log(ans);

//8.
let mark = [1, 2, 3, 4, 3, 4, 5];
console.log("Before:", mark);
for (let i = 0; i < mark.length; i++) {
    let count = 0;
    for (let j = 0; j < mark.length; j++) {
        if (mark[i] == mark[j]) {
            count++;
        }
    }
    if (count > 1) {
        mark.splice(i, 1);
        i--;
    }
}
console.log("After:", mark);
