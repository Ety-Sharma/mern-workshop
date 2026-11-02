// TASK 9: async/await. Run: node task-09-async-await.js
const wait = (ms, value) => new Promise((resolve) => setTimeout(() => resolve(value), ms));

// Fake slow functions: do not change these
const fakeFetchJobs = () => wait(500, [{ company: "Acme" }, { company: "Globex" }]);
const fakeFetchFail = () =>
  new Promise((_, reject) => setTimeout(() => reject(new Error("Network down")), 300));

// TODO: write async function main() as described in the task, then call it
