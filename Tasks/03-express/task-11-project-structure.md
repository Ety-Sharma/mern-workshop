# Task 11: Project structure

Time: about 30 minutes. Read first: `mern-examples/03-express/11-project-structure/`

## What to do

1. Create `src/app.js` that builds the app (middleware and routes) and exports it.
2. Make `server.js` only import the app and call `listen`.
3. Create folders `routes`, `controllers`, `models`, `config` inside `src` (empty ones are fine for now).
4. Everything must still work in Postman after the move.

## Expected result

Folder tree: `server.js`, `src/app.js`, `src/routes`, `src/controllers`, `src/models`, `src/config`. Same behaviour as before.

## Hint

`export default app` in app.js, `import app from "./src/app.js"` in server.js.

## Done when

- [ ] server.js is only a few lines
- [ ] All routes still work
- [ ] Committed to git
