# Part 5: React examples

```bash
cd 05-react
npm install
npm run dev          # open http://localhost:5173
```

The page has a dropdown at the top. Pick an example, read the code in `src/examples/`,
change it, and watch the browser update instantly.

| Example | File |
|---|---|
| 01 What React is | Ex01_Hello.jsx |
| 02 JSX, components, props | Ex02_Props.jsx |
| 03 State | Ex03_State.jsx |
| 04 Events and conditions | Ex04_Events.jsx |
| 05 Lists and keys | Ex05_Lists.jsx |
| 06 Forms | Ex06_Forms.jsx |
| 07 useEffect and fetching | Ex07_Effect.jsx (uses a free public API) |
| 08 Connect to Express | Ex08_ConnectExpress.jsx |
| 09 Add, update, delete | Ex09_Crud.jsx |
| 10 Lifting state up | Ex10_Lifting.jsx |
| 11 React Router | Ex11_Router.jsx |

Examples 08 and 09 need the Express server running in a second terminal:

```bash
cd 03-express/12-routers-and-controllers
node server.js
```

(Later, in your real project, the same React code talks to your MongoDB API.)
