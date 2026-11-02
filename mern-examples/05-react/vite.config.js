import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Examples 08 and 09 call /api/jobs. The proxy forwards it to the Express server on port 5000.
    proxy: { "/api": "http://localhost:5000" },
  },
});
