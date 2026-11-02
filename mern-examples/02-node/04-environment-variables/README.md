# Environment variables

1. Copy `.env.example` to a new file named `.env` (same folder).
2. Run `node env-demo.js`.
3. Change PORT in `.env`, run again, and see the new value.

`.env` holds real secrets, so it is never committed. `.env.example` is committed so
teammates know which keys exist.
