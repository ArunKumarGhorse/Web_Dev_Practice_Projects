class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hey", this.name);
    }
}

class Customer extends Person {
    constructor(name, age, acc, balance) {
        super(name, age);
        this.acc = acc;
        this.balance = balance;
    }
}

const c1 = new Customer("vaishali", 23, 420, 150);
console.log(c1.name, "account balance is : ", c1.balance, " /rupees only")

