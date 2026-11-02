# Final project: Placement Tracker

By now you have built every part. Put it together and finish it.

## Required features

- [ ] Add a job application (company, ctc, status)
- [ ] List all jobs (newest first)
- [ ] Filter the list by status
- [ ] Change the status of a job
- [ ] Delete a job
- [ ] Open one job on its own page (`/jobs/:id`)
- [ ] Loading, empty and error messages on every screen

## Definition of done

- [ ] 5 API routes tested in Postman
- [ ] Data persists in MongoDB Atlas
- [ ] `.env` is ignored by git and `.env.example` is committed
- [ ] Code is split into routes, controllers and models (server) and components (client)
- [ ] One GitHub repo with `client` and `server` folders
- [ ] README with: what the project is, how to run the server, how to run the client

## Interview question (practise out loud)

> Walk me through your project.

Answer: React sends a fetch to an Express route. The controller uses a Mongoose model to read or write MongoDB.
The result goes back as JSON with a status code. React updates its state and the screen redraws.

Say it in 30 seconds without reading. Then record yourself or tell a friend.

## Stretch (optional)

- Search jobs by company name
- Count jobs per status and show it at the top
- Add authentication (login) with JWT
