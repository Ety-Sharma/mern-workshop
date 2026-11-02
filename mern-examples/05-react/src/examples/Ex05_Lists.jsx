// 05 LISTS AND KEYS
// map (from the JavaScript part!) turns an array of data into an array of JSX.
// Every item needs a unique key. With a database, use the _id (here we use id).
// Keys help React tell which item changed.

const jobs = [
  { id: 1, company: "Acme", ctc: 6 },
  { id: 2, company: "Globex", ctc: 9 },
  { id: 3, company: "Initech", ctc: 12 },
];

export default function Ex05() {
  return (
    <div>
      <h2>Jobs</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {job.company} - {job.ctc} LPA
          </li>
        ))}
      </ul>

      <h3>Only jobs above 8 LPA (filter, then map)</h3>
      <ul>
        {jobs
          .filter((job) => job.ctc > 8)
          .map((job) => (
            <li key={job.id}>{job.company}</li>
          ))}
      </ul>
    </div>
  );
}
