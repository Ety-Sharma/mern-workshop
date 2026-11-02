// 07 useEffect AND FETCHING
// useEffect runs code AFTER the screen draws. Use it to load data.
// [] at the end means: run once, when the component first appears.
// Always keep loading and error state next to the data.
// This example uses a free public API, so it works without your own server.

import { useEffect, useState } from "react";

export default function Ex07() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=5");
        if (!res.ok) throw new Error("Request failed: " + res.status);  // fetch does NOT reject on 404/500
        setUsers(await res.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name} ({u.email})</li>
      ))}
    </ul>
  );
}
