// TASK 7: map and filter. Run: node task-07-map-filter.js
const jobs = [
  { company: "Acme", ctc: 6 },
  { company: "Globex", ctc: 9 },
  { company: "Initech", ctc: 12 },
  { company: "Umbrella", ctc: 4 },
  { company: "Hooli", ctc: 8 },
];

// TODO 1: map -> names only, print
const names= jobs.map((job)=>
  jobs.name);
console.log(names);
// TODO 2: filter -> ctc >= 8, print
const highctc =jobs.filter((job)=>
  job.ctc>=8);
console.log(highctc);


// TODO 3: filter then map -> names of those, print
console.log(jobs.filter((j)=>j.ctc>=8).map((j)=>j.company));
// TODO 4: map -> "Acme: 6 LPA" style labels, print
const labels = jobs.map((job) => `${job.company}: ${job.ctc} LPA`);
console.log(labels);
