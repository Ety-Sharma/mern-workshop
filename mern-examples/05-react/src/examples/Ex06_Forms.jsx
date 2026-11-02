// 06 FORMS
// A controlled input gets its value from state.
// onChange updates the state on every keystroke.
// e.preventDefault() stops the page from reloading when the form is submitted.

import { useState } from "react";

export default function Ex06() {
  const [form, setForm] = useState({ company: "", ctc: "" });
  const [saved, setSaved] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;                  // name="company" or name="ctc"
    setForm({ ...form, [name]: value });               // copy old values, change one
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSaved(form);
    setForm({ company: "", ctc: "" });                 // clear the form
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="company" placeholder="Company" value={form.company} onChange={handleChange} />{" "}
      <input name="ctc" placeholder="CTC" value={form.ctc} onChange={handleChange} />{" "}
      <button type="submit">Save</button>
      <p>Typing now: {JSON.stringify(form)}</p>
      {saved && <p>Saved: {JSON.stringify(saved)}</p>}
    </form>
  );
}
