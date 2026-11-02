// TOPIC: Variables and data types
// A variable is a labelled box that stores a value.
// const = the value will not change (use this by default).
// let   = the value will change later.
// Types: string (text), number, boolean (true/false), null, undefined.
// RUN: node 01-variables.js

const name = "Asha";        // string
let age = 20;               // number (let, because it changes)
const isStudent = true;     // boolean

console.log(name, age, isStudent);

age = 21;                   // allowed: age was declared with let
console.log("Next year:", age);

// name = "Ravi";           // remove the // and run: const cannot be reassigned

// Template literal: backticks + ${ } puts values inside text
console.log(`${name} is ${age} years old`);

// typeof tells you the type
console.log(typeof name, typeof age, typeof isStudent);


const obj = {
    userName: "Krunal",
    age: 25
}

console.log(obj.userName);
