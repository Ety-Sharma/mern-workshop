# Task 14: CORS

Time: about 20 minutes. Read first: `mern-examples/03-express/14-cors.js`

## What to do

1. Copy `14-cors-test.html` from the examples into your project folder.
2. Remove `app.use(cors())`, restart, open the html file with Live Server, press F12 and read the red CORS error.
3. Add it back as `cors({ origin: process.env.CLIENT_URL })` with `CLIENT_URL=http://127.0.0.1:5500` in `.env`. Load dotenv at the top of the file.
4. Refresh the page: it should work. Change CLIENT_URL to a wrong value and see it fail again.

## Expected result

Works only when CLIENT_URL matches the address in the browser bar.

## Hint

Live Server may use `127.0.0.1` or `localhost`: the origin must match exactly.

## Done when

- [ ] You saw the error and fixed it
- [ ] Origin comes from .env
