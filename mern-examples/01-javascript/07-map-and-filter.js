// TOPIC: map and filter
// map    = make a NEW array by changing every item.   (React lists use this!)
// filter = make a NEW array with only the items that pass a test.
// Neither changes the original array.
// RUN: node 07-map-and-filter.js

const jobs = [
  { company: "Acme", ctc: 6 },
  { company: "Globex", ctc: 9 },
  { company: "Initech", ctc: 12 },
];

// map: one output item for every input item
const names = jobs.map((job) => job.company);
console.log(names);             // [ 'Acme', 'Globex', 'Initech' ]

const labels = jobs.map((job) => `${job.company}: ${job.ctc} LPA`);
console.log(labels);

// filter: keep only items where the test is true
const highPaying = jobs.filter((job) => job.ctc > 8);
console.log(highPaying);        // Globex and Initech

// Chain them: filter first, then map
console.log(jobs.filter((j) => j.ctc > 8).map((j) => j.company));

// The original array is unchanged
console.log(jobs.length);       // 3
