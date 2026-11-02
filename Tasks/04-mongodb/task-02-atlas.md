# Task 2: Atlas setup

Time: about 30 minutes. Read first: `mern-examples/04-mongodb/02-atlas-setup.md`

## What to do

1. Create a free Atlas account, a free cluster, a database user and add your IP under Network Access.
2. Copy the connection string, add `/tracker` before the `?`.
3. Paste it into `placement-tracker/server/.env` as `MONGO_URI=...` and make sure `.env` is in `.gitignore`.
4. Take a screenshot of the cluster showing it is active (hide the password).

## Expected result

Cluster is active and `.env` contains MONGO_URI.

## Hint

If the password has special characters, URL-encode them or choose a simpler password.

## Done when

- [ ] Cluster active
- [ ] MONGO_URI in .env
- [ ] .env not in git
