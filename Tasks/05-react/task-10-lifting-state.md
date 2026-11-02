# Task 10: Lifting state up

Time: about 40 minutes. Read first: `mern-examples/05-react/src/examples/Ex10_Lifting.jsx`

## What to do

1. Split your app into `App` (owns `jobs` state and API calls), `JobForm`, `JobList` and `JobCard`.
2. `JobForm` gets `onAdd` as a prop. `JobList` gets `jobs` and `onDelete`. `JobCard` gets one job.
3. Make sure nothing else owns the jobs data.
4. Draw the component tree on paper or in `tree.txt`.

## Expected result

The app behaves exactly as before, but the code is split into 4 components.

## Hint

Data goes down as props, events go up as function props.

## Done when

- [ ] Only App has the jobs state
- [ ] tree.txt (or drawing) matches your code
