# Task 8: Testing with Postman

Time: about 25 minutes. Read first: `mern-examples/03-express/08-testing-with-postman/`

## What to do

1. Install Postman, Thunder Client (VS Code) or the REST Client extension.
2. Create a collection `Placement Tracker` with five requests: list, create, read one, update, delete (the last three can return 404 for now).
3. For the POST, use Body, raw, JSON and send `{ "company": "Acme", "ctc": 8 }`.
4. If you use REST Client, put them all in `requests.http` in your server folder. Otherwise take a screenshot of the collection.

## Expected result

You can send all five requests and read their status codes.

## Hint

Header `Content-Type: application/json` is needed for JSON bodies (Postman adds it when you choose JSON).

## Done when

- [ ] Collection or requests.http exists
- [ ] POST sends a JSON body
