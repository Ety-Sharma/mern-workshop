// TOPIC: Functions
// A function is reusable code: inputs (parameters) go in, a result comes out (return).
// Arrow functions are the short form. React and Express use them everywhere.
// Closure: a function remembers the variables from where it was created.
// RUN: node 03-functions.js

// Normal function
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));         // 5

// Arrow function: same thing, shorter
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));    // 20

// Default value if nothing is passed
const greet = (name = "friend") => `Hi ${name}`;
console.log(greet());           // Hi friend
console.log(greet("Asha"));     // Hi Asha

// Closure: the inner function remembers "count"
function makeCounter() {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}
const next = makeCounter();
console.log(next());            // 1
console.log(next());            // 2  (count was remembered)
