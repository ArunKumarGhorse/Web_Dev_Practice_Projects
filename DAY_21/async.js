async function greet() {
    return new Promise((resolve, reject) => {
        // resolve("Arun");
        reject("Rejected");
    })
}
const response = greet();
// console.log(response);

response.then((data) => console.log(data))
    .catch((error) => console.log("Error", error));
