# What MongoDB is

MongoDB stores data as **documents**: JSON-like objects, the same objects you wrote in JavaScript.
A **collection** is a group of documents (like a table). Every document gets a unique `_id`.

```json
{
  "_id": "665f1c9e2a1b",
  "company": "Acme",
  "ctc": 8,
  "status": "applied"
}
```

| SQL (tables)      | MongoDB            |
|-------------------|--------------------|
| table             | collection         |
| row               | document           |
| column            | field              |
| fixed columns     | flexible fields    |

SQL uses tables with a fixed schema and joins. MongoDB uses flexible documents that
look like JavaScript objects. Mongoose (next topics) adds rules on top.
