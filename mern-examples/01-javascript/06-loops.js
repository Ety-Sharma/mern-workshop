// TOPIC: Loops
// A loop repeats code once per item.
// for...of  = go through every item of an array (use this most).
// for       = repeat with a counter.
// while     = repeat until a condition becomes false.
// RUN: node 06-loops.js

const skills = ["HTML", "CSS", "JS"];

// for...of: one pass per item
for (const skill of skills) {
  console.log("I know", skill);
}

for (let i = 0; i < skills.length; i++) {
  
  console.log("I konw " + skills[i])
  
}

// for with a counter: 0, 1, 2, 3, 4
for (let i = 0; i < 5; i++) {
  console.log("count", i);
}

// while: runs until the condition is false
let n = 3;
while (n > 0) {
  console.log("countdown", n);
  n--;
}

// Sum of numbers using a loop
const marks = [70, 80, 90];
let total = 0;
for (const m of marks) {
  total += m;
}
console.log("total", total);   // 240
