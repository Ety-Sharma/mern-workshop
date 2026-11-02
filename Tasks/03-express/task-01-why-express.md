# Task 1: Why Express: design the routes

Time: about 15 minutes. Read first: `mern-examples/03-express/01-why-express.js`

## What to do

1. Pick a new resource: `students`.
2. In a file `routes.md` write the five CRUD routes for students as a table: method, path, what it does.
3. Add two lines: what is Express? what is REST? (your own words).
4. Then copy `01-why-express.js` into a new file, change `jobs` to `students`, run it and open the GET route in the browser.

## Expected result

A table with five rows: GET /api/students, POST /api/students, GET /api/students/:id, PUT /api/students/:id, DELETE /api/students/:id.

## Hint

Nouns in the URL, the HTTP method is the verb.

## Done when

- [ ] routes.md has 5 correct rows
- [ ] Your students server answers in the browser
