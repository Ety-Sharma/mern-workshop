// TASK 10: The event loop. Run: node task-10-event-loop.js (but predict first!)

// MY PREDICTION:


console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
setTimeout(() => console.log("4"), 0);
Promise.resolve().then(() => console.log("5"));
console.log("6");

// MY EXPLANATION (2 lines):
