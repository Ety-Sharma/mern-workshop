# Testing with Postman

The browser address bar can only send GET. To test POST, PUT and DELETE use Postman,
Thunder Client (a VS Code extension) or curl.

## Postman steps for a POST
1. Choose method POST and the URL `http://localhost:5000/api/jobs`.
2. Open the Body tab, choose raw, and choose JSON in the dropdown.
3. Type `{ "company": "Acme", "ctc": 8 }` and click Send.
4. Read the status code (201) and the JSON that came back.

## Same thing with curl

```bash
curl localhost:5000/api/jobs

curl -X POST localhost:5000/api/jobs \
  -H "Content-Type: application/json" \
  -d '{"company":"Acme","ctc":8}'
```

Use `requests.http` with the VS Code REST Client extension for one-click requests.
Save your requests in a Postman collection so you can rerun them after every change.
