// prototype is a property that exists on constructor functions and classes.

// It is used to share methods and properties among all objects created from that constructor.

function person(name) {
    this.name = name;
}

person.prototype.sayhello = function () {
    console.log("Hello", this.name);
}

const p1 = new person("Arun");

p1.sayhello();

// All objects share one method ✅


// __proto__ is a reference to the object's prototype object.

const obj = {};

console.log(obj.__proto__);


// p1
//  |
//  └── __proto__
//         |
//         v
//  Person.prototype
//         |
//         v
//  Object.prototype
//         |
//         v
//       null