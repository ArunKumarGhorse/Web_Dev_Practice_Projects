// JSON stands for JavaScript Object Notation.
//  It is a lightweight format used for data exchange. 
// Data is stored in key-value pairs and is easy for both humans to read and machines to parse.

// Does not support functions, undefined, or comments.

// JS object to JSON convertion
const obj = {
    name: "Arun",
    age: 20,
    addresh: "bhopal",
}

const json_Obj = JSON.stringify(obj);
console.log(json_Obj);

//JSON to js Obj conv.

const json_obj = `{
    "name": "Arun",
    "age": 20,
    "addresh": "bhopal"
}`

const JS_OBJ = JSON.parse(json_obj);
console.log(JS_OBJ);