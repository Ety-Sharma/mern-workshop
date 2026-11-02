# Task 5: Objects

Time: about 15 minutes. Read first: `mern-examples/01-javascript/05-objects.js`

## What to do

1. Open `task-05-objects.js`.
2. Add a new key `course` with value `BTech` to the student and print the object.
3. Use destructuring to pull out `name` and `marks`, then print them.
4. Use spread to make a copy called `moved` with `city` changed to `Gurugram`. Print both cities to prove the original did not change.

## Expected result

```
{ name: 'Ravi', city: 'Palwal', marks: 67, course: 'BTech' }
Ravi 67
Palwal Gurugram
```

## Hint

Spread copy: `{ ...student, city: "Gurugram" }`.

## Done when

- [ ] Output matches
- [ ] The original object still has city Palwal
