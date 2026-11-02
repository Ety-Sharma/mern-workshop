// 02 JSX, COMPONENTS AND PROPS
// JSX looks like HTML but lives inside JavaScript.
//   - use className (not class)
//   - use { } to put JavaScript values inside
// Props are inputs to a component, passed like HTML attributes. They are read-only.

function JobCard({ company, ctc }) {
  return (
    <li className="card">
      {company} - {ctc} LPA
    </li>
  );
}

export default function Ex02() {
  const city = "Gurugram";
  return (
    <div>
      <h2>Jobs in {city}</h2>
      <ul>
        <JobCard company="Acme" ctc={8} />
        <JobCard company="Globex" ctc={12} />
      </ul>
      <p>Total: {8 + 12} LPA</p>
    </div>
  );
}
