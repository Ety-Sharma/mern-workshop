// 11 REACT ROUTER
// Routing changes the page WITHOUT a full reload.
// Route maps a path to a component. Link replaces the <a> tag. useParams reads :id from the URL.
// MemoryRouter is used here only so the example works inside the dropdown page.
// In your real app use BrowserRouter (same code, real URLs).

import { MemoryRouter, Routes, Route, Link, useParams } from "react-router-dom";

const jobs = [
  { id: "1", company: "Acme" },
  { id: "2", company: "Globex" },
];

function Home() {
  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.id}>
          <Link to={`/jobs/${job.id}`}>{job.company}</Link>
        </li>
      ))}
    </ul>
  );
}

function JobPage() {
  const { id } = useParams();                          // from /jobs/:id
  const job = jobs.find((j) => j.id === id);
  return (
    <div>
      <h3>{job ? job.company : "Not found"}</h3>
      <Link to="/">Back</Link>
    </div>
  );
}

export default function Ex11() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/:id" element={<JobPage />} />
      </Routes>
    </MemoryRouter>
  );
}
