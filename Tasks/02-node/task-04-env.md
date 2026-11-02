# Task 4: Environment variables

Time: about 15 minutes. Read first: `mern-examples/02-node/04-environment-variables/`

## What to do

1. In a new folder run `npm init -y`, add `"type": "module"` and `npm install dotenv`.
2. Create `.env` with `PORT=5000` and `APP_NAME=Placement Tracker`. Create `.env.example` with the same keys and no secret values.
3. Create `.gitignore` containing `.env`.
4. Write `show.js` that loads dotenv and prints both values. If PORT is missing it should use 3000.
5. Run it. Rename `.env` to `.env.bak`, run again and see the fallback port.

## Expected result

```
PORT is 5000
APP_NAME is Placement Tracker
```
(After renaming .env: PORT falls back to 3000, APP_NAME is undefined.)

## Hint

`import "dotenv/config";` must come first. Values are always text.

## Done when

- [ ] Output matches
- [ ] .env is in .gitignore, .env.example is not
