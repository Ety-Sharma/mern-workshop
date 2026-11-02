// 09 ADD, UPDATE, DELETE
// Pattern: call the API first, then update state with the result,
// so the screen only shows what was really saved.
// Needs the Express server from example 08 running.

import { useEffect, useState } from "react";

const getId = (job) => job._id ?? job.id;     // MongoDB uses _id, the array server uses id

export default function Ex09() {
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState("");

  useEffect(() => {
    fetch("/api/jobs").then((r) => r.json()).then(setJobs);
  }, []);

  async function handleAdd(e) {
    e.preventDefault();
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ company, ctc: 5 }),
    });
    if (!res.ok) return alert("Save failed");
    const created = await res.json();
    setJobs((prev) => [created, ...prev]);          // new array with the new job first
    setCompany("");
  }

  async function handleRaise(job) {
    const res = await fetch("/api/jobs/" + getId(job), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ctc: (job.ctc || 0) + 1 }),
    });
    const updated = await res.json();
    setJobs((prev) => prev.map((j) => (getId(j) === getId(updated) ? updated : j)));
  }

  async function handleDelete(id) {
    const res = await fetch("/api/jobs/" + id, { method: "DELETE" });
    if (!res.ok) return alert("Delete failed");
    setJobs((prev) => prev.filter((j) => getId(j) !== id));
  }

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />{" "}
        <button type="submit">Add</button>
      </form>
      <ul>
        {jobs.map((job) => (
          <li key={getId(job)}>
            {job.company} - {job.ctc} LPA{" "}
            <button onClick={() => handleRaise(job)}>+1 LPA</button>{" "}
            <button onClick={() => handleDelete(getId(job))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
