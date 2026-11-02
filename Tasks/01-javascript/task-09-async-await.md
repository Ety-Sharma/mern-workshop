# Task 9: async/await

Time: about 20 minutes. Read first: `mern-examples/01-javascript/09-async-await.js`

## What to do

1. Open `task-09-async-await.js`. Two fake slow functions are already written for you.
2. Write `async function main()`.
3. Inside: print `loading...`, then `await fakeFetchJobs()` and print `loaded 2 jobs` using the real length.
4. Then wrap `await fakeFetchFail()` in `try/catch` and print `error: Network down` using `err.message`.
5. Call `main()` and, on the next line, print `main() called`. Notice what order the lines appear in.

## Expected result

```
loading...
main() called
loaded 2 jobs
error: Network down
```

## Hint

`await` pauses only `main`. The line after `main()` runs while it waits, so `main() called` appears before `loaded`.

## Done when

- [ ] Output matches in the same order
- [ ] You can explain why `main() called` is not last
