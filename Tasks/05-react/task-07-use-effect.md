# Task 7: useEffect and fetching

Time: about 30 minutes. Read first: `mern-examples/05-react/src/examples/Ex07_Effect.jsx`

## What to do

1. Create `Users.jsx`. In `useEffect` fetch `https://jsonplaceholder.typicode.com/users?_limit=5`.
2. Keep three states: `users`, `loading`, `error`. Show `Loading...` first.
3. Check `res.ok` and throw an Error if it is not ok.
4. Show names and emails in a list. Break the URL on purpose to see your error message.

## Expected result

A list of 5 users after a short loading message. A broken URL shows your error text.

## Hint

The `[]` at the end of `useEffect` means run once.

## Done when

- [ ] Loading, error and success all handled
- [ ] Effect runs once
