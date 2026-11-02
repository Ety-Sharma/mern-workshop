// TOPIC: Arrays
// An array is an ordered list. The first item is at index 0.
// length counts the items. push adds at the end.
// Real app data is usually an ARRAY OF OBJECTS (a list of jobs, users, products).
// RUN: node 04-arrays.js

const skills = ["HTML", "CSS", "JS"];

console.log(skills[0]);         // HTML  (index starts at 0)
console.log(skills[2]);         // JS
console.log(skills.length);     // 3

skills.push("Node");            // add at the end
console.log(skills);            // [ 'HTML', 'CSS', 'JS', 'Node' ]

console.log(skills[10]);        // undefined (no item there)

// Array of objects: how real data looks
const jobs = [
  { company: "Acme", ctc: 6 },
  { company: "Globex", ctc: 9 },
];
console.log(jobs[1].company);   // Globex
