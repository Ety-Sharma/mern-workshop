# Task 8: Delete

Time: about 20 minutes. Read first: `mern-examples/04-mongodb/08-delete.js`

## What to do

1. Write `deleteJob` using `findByIdAndDelete`. Answer 204 on success, 404 when the result is null.
2. Delete a job in Postman, check Atlas, then delete the same id again (404).
3. Stretch: add an `isDeleted` Boolean to the schema and make delete a soft delete (`findByIdAndUpdate(id, { isDeleted: true })`). Make list hide deleted jobs with `Job.find({ isDeleted: { $ne: true } })`.

## Expected result

Hard delete: second delete returns 404. (Stretch) soft delete keeps the document in Atlas but hides it from the list.

## Hint

Explain hard vs soft delete in `notes.txt`.

## Done when

- [ ] Delete returns 204 then 404
- [ ] notes.txt explains hard vs soft
