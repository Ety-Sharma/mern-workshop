// TOPIC: Schema and model
// A schema describes fields, types and rules. A model gives you create/find/update/delete.
// This example does NOT need Atlas: it only checks the rules, so you can run it anywhere.
// The server must validate even if React already does, because clients can be bypassed.
// RUN: node 04-schema-and-model.js

import Job from "./Job.js";

// A valid job
const good = new Job({ company: "Acme", ctc: 8 });
console.log("good job errors:", good.validateSync());   // undefined = no errors
console.log("status default:", good.status);            // "applied" (default)

// Missing company (required)
const bad1 = new Job({ ctc: 8 });
console.log("missing company ->", bad1.validateSync().errors.company.message);

// Negative ctc (min: 0)
const bad2 = new Job({ company: "Acme", ctc: -5 });
console.log("negative ctc ->", bad2.validateSync().errors.ctc.message);

// Wrong status (enum)
const bad3 = new Job({ company: "Acme", status: "flying" });
console.log("bad status ->", bad3.validateSync().errors.status.message);
