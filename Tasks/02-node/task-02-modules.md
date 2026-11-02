# Task 2: Modules: import and export

Time: about 15 minutes. Read first: `mern-examples/02-node/02-modules/`

## What to do

1. In `node-practice` create `package.json` containing `{ "type": "module" }`.
2. Create `mathUtils.js`. Export `add` and `subtract` as named exports, and a default export `describe()` that returns `"math helpers"`.
3. Create `app.js` that imports all three and prints `add(5, 3)`, `subtract(5, 3)` and `describe()`.
4. Run `node app.js`. Then delete the package.json line and read the error.

## Expected result

```
8
2
math helpers
```

## Hint

Named exports are imported in `{ braces }`, the default export is imported without braces.

## Done when

- [ ] Output matches
- [ ] You saw the error without `type: module`
