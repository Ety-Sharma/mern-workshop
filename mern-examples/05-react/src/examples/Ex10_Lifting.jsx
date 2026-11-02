// 10 LIFTING STATE UP
// When two components need the same data, keep the state in their closest common parent.
// Data goes DOWN as props. Events go UP as function props.
//
//   Ex10 (owns the jobs state)
//     JobForm  -> calls onAdd(company)
//     JobList  -> shows jobs, calls onDelete(id)

import { useState } from "react";

function JobForm({ onAdd }) {
  const [company, setCompany] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!company) return;
    onAdd(company);                       // tell the parent
    setCompany("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" />{" "}
      <button type="submit">Add</button>
    </form>
  );
}

function JobList({ jobs, onDelete }) {
  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.id}>
          {job.company} <button onClick={() => onDelete(job.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default function Ex10() {
  const [jobs, setJobs] = useState([{ id: 1, company: "Acme" }]);

  const addJob = (company) => setJobs((prev) => [...prev, { id: Date.now(), company }]);
  const deleteJob = (id) => setJobs((prev) => prev.filter((j) => j.id !== id));

  return (
    <div>
      <JobForm onAdd={addJob} />
      <JobList jobs={jobs} onDelete={deleteJob} />
      <p>{jobs.length} job(s) in the parent state</p>
    </div>
  );
}
