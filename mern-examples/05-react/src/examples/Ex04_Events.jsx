// 04 EVENTS AND CONDITIONS
// Handlers use camelCase: onClick, onChange, onSubmit.
// Pass the function itself: onClick={handle}  (NOT onClick={handle()} which runs it immediately).
// Show or hide things with a ternary (? :) or &&.

import { useState } from "react";

export default function Ex04() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  function handleAdd() {
    setJobs([...jobs, "Job " + (jobs.length + 1)]);   // new array, never push into state
  }

  // Early return: show a loading message instead of the screen
  if (loading) {
    return (
      <div>
        <p>Loading...</p>
        <button onClick={() => setLoading(false)}>Finish loading</button>
      </div>
    );
  }

  return (
    <div>
      {jobs.length === 0 && <p>No jobs yet</p>}
      {jobs.length > 0 ? <p>{jobs.length} job(s)</p> : null}
      <button onClick={handleAdd}>Add job</button>
    </div>
  );
}
