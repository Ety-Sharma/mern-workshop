# Task 6: Read

Time: about 30 minutes. Read first: `mern-examples/04-mongodb/06-read.js`

## What to do

1. `getJobs` returns `await Job.find()` newest first (`.sort({ createdAt: -1 })`).
2. Add filter: `GET /api/jobs?status=offered` returns only offered jobs.
3. `getJob` uses `findById` and answers 404 when the result is null.
4. Test with a real id, with a made-up 24-character id (404), and with `abc` (should be 400, handle the CastError).

## Expected result

Real id: 200. Fake 24-character id: 404. `abc`: 400 `Invalid id`.

## Hint

Build the filter like `const filter = status ? { status } : {}`.

## Done when

- [ ] Newest first
- [ ] Filter works
- [ ] 404 and 400 both handled
