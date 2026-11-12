// TASK 8: find, reduce and JSON. Run: node task-08-find-reduce-json.js
const jobs = [
  { company: "Acme", ctc: 6 },
  { company: "Globex", ctc: 9 },
  { company: "Initech", ctc: 12 },
];

// TODO 1: find Globex, print it
const globlex= jobs.find((j)=>
  j.company==="Globlex"
);
console.log(globlex);
// TODO 2: reduce -> total ctc; print total and average (total / jobs.length)
const totalCtc = jobs.reduce((total, j) => total + j.ctc, 0);
console.log(totalCtc);          
// TODO 3: JSON.stringify(jobs[0]); print the text and typeof it
const text = JSON.stringify(jobs[0]);
console.log(text);
// TODO 4: JSON.parse it back; print the company and typeof the result
const back = JSON.parse(text);
console.log(back.company);