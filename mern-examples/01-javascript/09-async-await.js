// TOPIC: async/await
// Slow work (network, files, database) runs in the background.
// await pauses ONLY this function until the result arrives.
// Use try/catch to handle a failure.
// Here wait() is a fake slow task so you can see the order of events.
// RUN: node 09-async-await.js

// A fake slow task: gives back a value after some milliseconds

// Promise example

const fetchdata = () => {
  return new Promise((resolve, reject) => {
    const value = true;

    setTimeout(() => {
      value ? resolve("Promise successfully resolved") : reject(new Error("Promise rejected"));
    }, 200);
  });
}

fetchdata()
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err.message));



async function fetchDataUsingAsync(){

  const val = false;

  await setTimeout(() => {
    val ? console.log("Await Success") : console.log("Await Unsuccessfull");
    
  }, 100);

}

fetchDataUsingAsync()


function wait(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

// A fake task that fails
function fail() {
  return new Promise((_, reject) => reject(new Error("Server is down")));
}

async function main() {
  console.log("1. main() starts");

  const data = await wait(1000, "jobs loaded");   // waits 1 second here
  console.log("3.", data);

  try {
    await fail();
  } catch (err) {
    console.log("4. caught:", err.message);
  }
}

main();
console.log("2. this prints while main() waits in the background");
