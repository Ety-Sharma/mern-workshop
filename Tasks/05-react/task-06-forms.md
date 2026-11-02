# Task 6: Forms

Time: about 30 minutes. Read first: `mern-examples/05-react/src/examples/Ex06_Forms.jsx`

## What to do

1. Create `JobForm.jsx` with a controlled form: `company`, `ctc` and a `status` select.
2. Use one state object and one `handleChange` using `e.target.name`.
3. On submit call `e.preventDefault()`, print the object with `console.log`, then clear the form.
4. Show the live form state below the form while typing (`JSON.stringify(form)`).

## Expected result

You type and see the state change on every key. Submit logs the object and clears the form.

## Hint

`setForm({ ...form, [name]: value })`

## Done when

- [ ] All 3 fields controlled
- [ ] Page does not reload on submit
