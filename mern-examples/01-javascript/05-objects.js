// TOPIC: Objects
// An object stores related data as key: value pairs, like a record card.
// Read a value with dot notation. Destructuring pulls several values out at once.
// Spread (...) copies an object and lets you change one field.
// RUN: node 05-objects.js

const job = { company: "Acme", role: "Developer", ctc: 8 };

console.log(job.company);       // Acme  (dot notation)
console.log(job["role"]);       // Developer (bracket notation)

job.status = "applied";         // add a new key
job.ctc = 9;                    // change a value
console.log(job);

// Destructuring: pull values out into variables
const { company, ctc } = job;
console.log(company, ctc);      // Acme 9

// Spread: make a copy with one change (original stays the same)
const updated = { ...job, ctc: 12 };
console.log(job.ctc, updated.ctc);   // 9 12
