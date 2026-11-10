// TASK 4: Arrays. Run: node task-04-arrays.js
const skills = ["HTML", "CSS", "JS"];

// TODO 1: print first item, last item and length in one console.log
console.log(skills[0],skills[skills.length-1],skills.length);
// TODO 2: push "React", print the array
skills.push("react");
console.log(skills);
// TODO 3: pop, print the array
skills.pop();
console.log(skills);
// TODO 4: print skills.includes("Node")
console.log(skills.includes("Node"));