const newel = document.createElement("h2");
newel.textContent = "This is a new element";
const newel2 = document.createElement("h3");
newel2.textContent = "This is another new element";

// select element
// const element = document.getElementById("frS");
// element.after(newel);
// element.before(newel);

// newel2.id = "sec";


// newel.className = "holi";
// newel.className += " diwali";
// console.log(newel.className);
// // calssList Add
// newel.classList.add("christmas");
// newel.classList.add("goodfriday");
// // classList Remove
// newel.classList.remove("diwali");
// newel.classList.remove("goodfriday");

// // styling 

// newel2.style.backgroundColor = "red";
// newel2.style.fontSize = "30px";

// Attribute
newel2.setAttribute("title", "This is a title");
console.log(newel2.getAttribute("title"));

// appemmding element

const list1 = document.createElement("li");
list1.textContent = "MILK";
const ul = document.querySelector("ul");
ul.appendChild(list1);
