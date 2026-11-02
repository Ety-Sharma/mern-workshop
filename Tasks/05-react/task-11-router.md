# Task 11: React Router

Time: about 40 minutes. Read first: `mern-examples/05-react/src/examples/Ex11_Router.jsx`

## What to do

1. Run `npm install react-router-dom` and wrap your app in `BrowserRouter` in `main.jsx`.
2. Create two routes: `/` shows the list and form, `/jobs/:id` shows one job.
3. Make each job's company a `Link` to its page. On the detail page use `useParams` and fetch `GET /api/jobs/:id`.
4. Add a `Back` link. Handle the not-found case with a message.

## Expected result

Clicking a company opens its detail page without a full page reload.

## Hint

Use `Link`, not `<a>`.

## Done when

- [ ] Two pages work
- [ ] Not-found message shown for a wrong id
