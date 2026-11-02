// TOPIC: Modules: import and export
// Each file has its own scope. export shares code, import uses it.
// The package.json next to this file has "type": "module" so import works.
// RUN: node app.js

import hello, { add } from "./utils.js";

console.log(hello("Asha"));          // Hello Asha
console.log(add(2, 3));              // 5

