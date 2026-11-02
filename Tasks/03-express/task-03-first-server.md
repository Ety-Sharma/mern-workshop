# Task 3: Your first server

Time: about 15 minutes. Read first: `mern-examples/03-express/03-first-server.js`

## What to do

1. In `placement-tracker/server` create `server.js`.
2. `GET /` sends `API is running`.
3. `GET /about` sends your name and college as text.
4. `GET /health` sends JSON `{ "status": "ok" }`.
5. Run `npm run dev`. Open all three in the browser, then edit a message and watch nodemon restart.

## Expected result

Three URLs answer. `/health` shows `{"status":"ok"}`.

## Hint

Text uses `res.send`, JSON uses `res.json`.

## Done when

- [ ] All three URLs work
- [ ] Server restarts by itself when you save
