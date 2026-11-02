// TOPIC: What Node.js is
// Node runs JavaScript outside the browser (on your computer or a server).
// node file.js runs a file. Typing just "node" opens an interactive prompt.
// RUN: node hello.js

console.log("Hello MERN");

// In the browser there is a window object. Node has no browser, so:
console.log(typeof window);          // undefined

// Node gives you things the browser does not have
console.log("Running Node version", process.version);
console.log("This file is in folder", process.cwd());
