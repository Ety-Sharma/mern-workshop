# Task 7: map and filter

Time: about 20 minutes. Read first: `mern-examples/01-javascript/07-map-and-filter.js`

## What to do

1. Open `task-07-map-filter.js`.
2. Use `map` to print an array of company names.
3. Use `filter` to get the jobs with ctc 8 or more and print them.
4. Chain `filter` then `map` to print only the company names of those jobs.
5. Use `map` to print labels like `Acme: 6 LPA`.

## Expected result

```
[ 'Acme', 'Globex', 'Initech', 'Umbrella', 'Hooli' ]
[
  { company: 'Globex', ctc: 9 },
  { company: 'Initech', ctc: 12 },
  { company: 'Hooli', ctc: 8 }
]
[ 'Globex', 'Initech', 'Hooli' ]
[
  'Acme: 6 LPA',
  'Globex: 9 LPA',
  'Initech: 12 LPA',
  'Umbrella: 4 LPA',
  'Hooli: 8 LPA'
]
```

## Hint

These are the exact methods React uses to show lists, so practise until they feel easy. Neither changes the original array.

## Done when

- [ ] Output matches
- [ ] You can explain map vs filter in one line each
