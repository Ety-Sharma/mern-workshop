# Task 8: find, reduce and JSON

Time: about 20 minutes. Read first: `mern-examples/01-javascript/08-find-reduce-json.js`

## What to do

1. Open `task-08-find-reduce-json.js`.
2. Use `find` to get the job of company `Globex` and print it.
3. Use `reduce` to get the total ctc, then print the total and the average on one line.
4. Turn the first job into JSON text with `JSON.stringify`, print the text and its `typeof`.
5. Turn the text back with `JSON.parse`, print the company and `typeof` the result.

## Expected result

```
{ company: 'Globex', ctc: 9 }
27 9
{"company":"Acme","ctc":6} string
Acme object
```

## Hint

`reduce((total, j) => total + j.ctc, 0)`: the `0` is the starting value.

## Done when

- [ ] Output matches
- [ ] You can explain why APIs send JSON text
