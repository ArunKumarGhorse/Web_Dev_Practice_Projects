let student = {
    name: "John Doe",
    age: 20,
    grade: "A",
    displayInfo: function () {
        return this.name + " is " + this.age + " years old and has a grade of " + this.grade + ".";
    }
}

let student2 = {
    name: "Jane Smith",
    age: 22,
    grade: "B",
    displayInfo: function () {
        return this.name + " is " + this.age + " years old and has a grade of " + this.grade + ".";
    }
}
student = student2;
console.log(student.displayInfo());