# MERN workshop: examples

One simple example for every topic in the slides. Each file starts with a comment that
explains the concept, then shows the code, and says how to run it.

## One-time setup

1. Install Node.js (LTS) and VS Code.
2. Open this folder in VS Code, open the terminal and run:

```bash
npm install
```

## How to use

Go in order. For each topic: read the comment at the top, run the file, change a value,
run it again.

| Folder | Topics | How to run |
|---|---|---|
| `01-javascript` | variables, if/else, functions, arrays, objects, loops, map/filter, find/reduce/JSON, async/await, event loop | `node 01-javascript/01-variables.js` |
| `02-node` | what Node is, modules, npm, environment variables | see each folder |
| `03-express` | 14 topics: first server to CORS | `node 03-express/03-first-server.js` then open the browser |
| `04-mongodb` | Atlas, Mongoose, create/read/update/delete | read `04-mongodb/README.md` first |
| `05-react` | 11 topics with a dropdown page | `cd 05-react`, `npm install`, `npm run dev` |

Stop any running server with `Ctrl + C` before starting the next one (they all use port 5000).

If a file says "TRY", do it. Breaking things on purpose is the fastest way to learn.
