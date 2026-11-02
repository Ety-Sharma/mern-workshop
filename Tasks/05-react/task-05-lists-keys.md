# Task 5: Lists and keys

Time: about 30 minutes. Read first: `mern-examples/05-react/src/examples/Ex05_Lists.jsx`

## What to do

1. Make an array of 5 jobs (id, company, ctc, status) in `App.jsx`.
2. Render them with `map` and a `key` (use the id).
3. Add a `select` with `all / applied / interview / offered` stored in state. Show only matching jobs with `filter` before `map`.
4. Open the console and make sure there is no key warning.

## Expected result

Changing the dropdown changes the list instantly.

## Hint

`jobs.filter(...).map(...)` inside the JSX, the same chain as Task 7 in JavaScript.

## Done when

- [ ] Filter works
- [ ] No key warning
- [ ] You can say why keys are needed
