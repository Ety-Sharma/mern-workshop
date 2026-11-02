# Task 5: Create

Time: about 25 minutes. Read first: `mern-examples/04-mongodb/05-create.js`

## What to do

1. In your `jobController.js` rewrite `addJob` to use `await Job.create({ company, ctc, status, location })` (destructure from `req.body`).
2. Send a POST in Postman. You should get 201 and a job with an `_id`.
3. Open Atlas, Browse Collections, find your job.
4. Send a POST without `company` and read the error. Make your error handler answer 400 for `ValidationError`.

## Expected result

Job appears in Atlas. Missing company returns 400 with a clear message.

## Hint

Copy the pattern from `errorHandler.js` in the examples.

## Done when

- [ ] Job visible in Atlas
- [ ] 400 on invalid data
