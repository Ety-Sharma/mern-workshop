# Task 3: npm and package.json

Time: about 20 minutes. Read first: `mern-examples/02-node/03-npm-and-package-json/README.md`

## What to do

1. Create a new folder `npm-practice`, run `npm init -y`.
2. Install `express` (normal) and `nodemon` (as a dev dependency).
3. Add a script `dev` that runs `nodemon app.js`. Create `app.js` with one `console.log` and run `npm run dev`. Edit and save: it should restart.
4. Create `.gitignore` with `node_modules`. Delete the `node_modules` folder, run `npm install`, and watch it come back.
5. Write in a file `notes.txt`: what is the difference between dependencies and devDependencies?

## Expected result

Your package.json shows express under `dependencies` and nodemon under `devDependencies`, and `npm run dev` restarts when you save.

## Hint

`npm install -D` means a development-only package.

## Done when

- [ ] package.json has both lists
- [ ] node_modules came back with npm install
- [ ] notes.txt answers the question
