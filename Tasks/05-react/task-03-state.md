# Task 3: State

Time: about 20 minutes. Read first: `mern-examples/05-react/src/examples/Ex03_State.jsx`

## What to do

1. Create `ApplicationCounter.jsx` with a state `sent` starting at 0.
2. Buttons: `+1`, `-1` and `Reset`. The count must never go below 0.
3. Show `Applications sent: N`.
4. Render it in `App.jsx`.

## Expected result

Count goes up and down, never below 0, Reset returns to 0.

## Hint

Use `setSent(sent - 1)` only if `sent > 0`. Never write `sent++`.

## Done when

- [ ] Never below 0
- [ ] You can say why we use the setter
