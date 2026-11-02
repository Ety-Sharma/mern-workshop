# Task 3: Functions

Time: about 20 minutes. Read first: `mern-examples/01-javascript/03-functions.js`

## What to do

1. Open `task-03-functions.js`.
2. Write an arrow function `add(a, b)`, an arrow function `isEven(n)` that returns true or false, and `greet(name)` with default value `friend`.
3. Write `makeCounter()` that returns a function. Each call of the returned function gives 1, 2, 3...
4. Call them as shown in the file and compare with the expected output.

## Expected result

```
10
false
true
Hello friend
Hello Asha
3
```

## Hint

A closure is a function that remembers variables from where it was created. Put `let count = 0` inside `makeCounter`, outside the returned function.

## Done when

- [ ] Output matches
- [ ] You can explain in one sentence what a closure is
