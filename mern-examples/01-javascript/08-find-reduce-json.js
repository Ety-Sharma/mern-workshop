// TOPIC: find, reduce and JSON
// find   = return the FIRST item that matches (or undefined).
// reduce = combine all items into ONE value (like a total).
// JSON   = text form of data. stringify: data -> text, parse: text -> data.
// RUN: node 08-find-reduce-json.js

const jobs = [
  { company: "Acme", ctc: 6 },
  { company: "Globex", ctc: 9 },
];

// find: first match
const globex = jobs.find((j) => j.company === "Globex");
console.log(globex);            // { company: 'Globex', ctc: 9 }

// reduce: start at 0, add every ctc
const totalCtc = jobs.reduce((total, j) => total + j.ctc, 0);
console.log(totalCtc);          // 15

// JSON: APIs send text, not objects
const text = JSON.stringify(jobs[0]);
console.log(text);              // {"company":"Acme","ctc":6}
console.log(typeof text);       // string

const back = JSON.parse(text);
console.log(back.company);      // Acme
