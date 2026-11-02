# Task 4: Events and conditions

Time: about 25 minutes. Read first: `mern-examples/05-react/src/examples/Ex04_Events.jsx`

## What to do

1. Create a component with a state `loading` (true) and a button `Finish loading`. While loading show `Loading...`.
2. After loading show a `jobs` array (state) and a button `Add job` that adds `Job N` to it. Use a new array, not `push`.
3. When the array is empty show `No jobs yet`.
4. Add a button that shows or hides a details paragraph (ternary or `&&`).

## Expected result

Loading message, then an empty message, then jobs appear one by one.

## Hint

`setJobs([...jobs, "Job " + (jobs.length + 1)])`

## Done when

- [ ] Three states handled: loading, empty, list
- [ ] Show/hide works
