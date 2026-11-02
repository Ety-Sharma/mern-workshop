# Task 4: Schema and model

Time: about 30 minutes. Read first: `mern-examples/04-mongodb/04-schema-and-model.js`

## What to do

1. Create `src/models/Job.js`: `company` (String, required), `ctc` (Number, min 0), `status` (String, enum applied/interview/offered/rejected, default applied), `location` (String). Add `timestamps`.
2. Write `check-model.js` (like the example) that makes 3 bad jobs with `new Job(...)` and prints each `validateSync()` message: missing company, negative ctc, wrong status.
3. Run it. It does not need the database.

## Expected result

Three different validation messages are printed, and a good job prints `undefined` errors.

## Hint

Look at `04-schema-and-model.js` in the examples.

## Done when

- [ ] All 3 rules produce a message
- [ ] Default status is applied
