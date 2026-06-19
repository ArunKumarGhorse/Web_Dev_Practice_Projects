class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hey", this.name);
    }
}

const obj1 = new person("Arun", 20);
console.log(obj1);
obj1.greet();

const obj2 = new person("Varun", 15);
console.log(obj2);
obj2.greet();
