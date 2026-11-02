// TOPIC: Operators and if/else
// if / else if / else chooses ONE path.
// === compares type AND value (always use it, not ==).
// && means both must be true, || means at least one.
// Falsy values: false, 0, "", null, undefined, NaN. Everything else is truthy.
// RUN: node 02-operators-and-if-else.js

const score = 72;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 60 && score < 90) {
  console.log("Grade B");        // this one runs
} else {
  console.log("Fail");
}

// Ternary: a short if/else that gives back a value
const result = score >= 40 ? "Pass" : "Fail";
console.log(result);

// == vs ===
console.log(0 == "0");          // true  (== converts types, confusing)
console.log(0 === "0");         // false (=== compares type too, safe)

// Truthy / falsy
if ("") console.log("empty string is truthy");   // does NOT print
if ("0") console.log("\"0\" is truthy");         // prints
if ([]) console.log("empty array is truthy");    // prints
