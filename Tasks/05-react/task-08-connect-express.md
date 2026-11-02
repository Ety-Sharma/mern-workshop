# Task 8: Connect to Express

Time: about 30 minutes. Read first: `mern-examples/05-react/src/examples/Ex08_ConnectExpress.jsx`

## What to do

1. In `client/vite.config.js` add the proxy `server: { proxy: { "/api": "http://localhost:5000" } }` and restart Vite.
2. Make sure your Express + MongoDB server is running and has 2-3 jobs (create them in Postman).
3. In `JobList.jsx` load `fetch("/api/jobs")` in `useEffect` and show company, ctc and status.
4. Use `job._id` as the key. Stop the server and see your error message.

## Expected result

The jobs you saved in MongoDB show in the browser.

## Hint

Restart Vite after editing the config.

## Done when

- [ ] Real data from MongoDB shows
- [ ] Error message shows when server is off
