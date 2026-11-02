# Wire up and test

All five CRUD routes together, in the structure from Express topics 11 and 12.
Run from THIS folder (it uses the `.env` one level up, copy it here or run with
`node --env-file=../.env server.js`):

```bash
node --env-file=../.env server.js
```

Test every route in Postman or `../../03-express/08-testing-with-postman/requests.http`:
create, list, read one, update, delete. Then restart the server: the data is still there.
That is the difference between an array and a database.
