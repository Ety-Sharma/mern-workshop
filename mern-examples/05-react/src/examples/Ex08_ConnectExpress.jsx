// 08 CONNECT TO EXPRESS
// Run the Express server first (second terminal):
//   cd 03-express/12-routers-and-controllers
//   node server.js
// vite.config.js has a proxy that forwards /api to port 5000,
// so fetch("/api/jobs") reaches Express and the browser never sees a CORS error.

import { useEffect, useState } from "react";

export default function Ex08() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => {
        if (!res.ok) throw new Error("Status " + res.status);
        return res.json();
      })
      .then(setJobs)
      .catch((err) => setError("Is the Express server running? " + err.message));
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Jobs from Express</h2>
      <ul>
        {jobs.map((job) => (
          // With MongoDB the id is job._id. The array server uses job.id.
          <li key={job._id ?? job.id}>{job.company} - {job.ctc} LPA</li>
        ))}
      </ul>
    </div>
  );
}
