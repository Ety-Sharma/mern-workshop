# Task 3: Connect with Mongoose

Time: about 25 minutes. Read first: `mern-examples/04-mongodb/03-connect.js`

## What to do

1. Run `npm install mongoose` in your server folder.
2. Create `src/config/db.js` that connects with `process.env.MONGO_URI` and logs `MongoDB connected`.
3. In `server.js` load dotenv first, `await connectDB()`, then `listen`.
4. Run it. Then change one letter of the password in `.env`, run again and read the error. Fix it back.

## Expected result

```
MongoDB connected
Server on port 5000
```

## Hint

Top-level `await` works because your package.json has `type: module`.

## Done when

- [ ] Connected message appears
- [ ] You saw an error with a wrong password
