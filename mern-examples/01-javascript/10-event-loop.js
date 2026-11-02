// TOPIC: The event loop
// JavaScript does one thing at a time on one call stack.
// Slow tasks go to helpers; when they finish, the callback waits in a queue.
// Order: normal code first, then promises, then timers.
// RUN: node 10-event-loop.js

console.log("A");                                    // normal code

setTimeout(() => console.log("B"), 0);               // timer queue

Promise.resolve().then(() => console.log("C"));      // promise queue

console.log("D");                                    // normal code

// Predict the output before you run it.
// Answer: A D C B
//   A, D  -> the stack runs normal code first
//   C     -> promise callbacks run as soon as the stack is empty
//   B     -> timer callbacks run after that, even with 0 ms
