// server.js: ONLY starts the server. Everything else lives in src/.
import app from "./src/app.js";

app.listen(5000, () => console.log("http://localhost:5000/api/jobs"));
