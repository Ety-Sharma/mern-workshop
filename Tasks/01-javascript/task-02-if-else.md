# Task 2: Operators and if/else

Time: about 15 minutes. Read first: `mern-examples/01-javascript/02-operators-and-if-else.js`

## What to do

1. Open `task-02-if-else.js`. `marks` is 67 and `attendance` is 80.
2. Print the grade: A for 80 and above, B for 60 to 79, C for 40 to 59, otherwise Fail.
3. Print `Eligible` if marks are 60 or more AND attendance is 75 or more, otherwise `Not eligible`. Use a ternary.
4. Change `marks` to 35 and `attendance` to 90. Run again and check the new output.

## Expected result

With marks 67 and attendance 80:
```
Grade B
Eligible
```
With marks 35 and attendance 90:
```
Fail
Not eligible
```

## Hint

Use `else if`. Join conditions with `&&`. Compare with `===` or `>=`, never `==`.

## Done when

- [ ] Both runs print the expected lines
- [ ] You used a ternary for the eligibility line
