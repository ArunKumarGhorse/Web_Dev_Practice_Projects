// Promise is a JavaScript object that represents the eventual completion (success) or failure of an asynchronous operation and its resulting value.

// States of a Promise

// Pending → Initial state, operation chal raha hai.
// Fulfilled (Resolved) → Operation successful ho gaya.
// Rejected → Operation fail ho gaya.


// const p1 = fetch("https://api.github.com/users?per_page=20");
// // console.log(p1); // state 1 pending

// const p2 = p1.then((response) => { return response });

// const p3 = p2.then((data) => { return data.json() });

// p3.then((d) => console.log(d));

// Promise Chaining
// fetch("https://api.github.com/users?per_page=20")
//     .then((response) => { return response.json() })
//     .then((data) => console.log(data));

// Printing Data in HTML
// fetch("https://api.github.com/users?per_page=20")
//     .then((response) => {
//         return
//         if (!response.ok) {
//             throw new Error("Data is not present");
//         }
//         response.json()
//     })
//     .then((data) => {
//         for (let i = 0; i < data.length; i++) {
//             const parent = document.getElementById("first");
//             const image = document.createElement('img');
//             image.src = data[i].avatar_url;
//             image.style.width = "100px";
//             image.style.height = "100px";
//             parent.append(image);
//         }
//     })
//     .catch((error) => {
//         const parent = document.getElementById("first");
//         parent.textContent = error.message;
//     })

// create promise

// const x = new Promise((resolve, reject) => {
//     resolve("Promise Resolved");
//     reject("Promise rejected");
// })

// x.then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// })