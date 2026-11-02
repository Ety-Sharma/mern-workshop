# Task 7: Update

Time: about 20 minutes. Read first: `mern-examples/04-mongodb/07-update.js`

## What to do

1. Write `updateJob` with `findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })`.
2. Return 404 if the result is null.
3. In Postman update the `status` of a job to `interview` and check the response shows the NEW value.
4. Try to update `ctc` to -5. Then remove `runValidators`, try again and note the difference in `notes.txt`.

## Expected result

With `runValidators` the -5 is rejected (400). Without it, it is saved.

## Hint

`{ new: true }` returns the updated document, not the old one.

## Done when

- [ ] Update works
- [ ] You saw the runValidators difference
