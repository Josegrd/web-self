import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // "/api": "http://localhost:8080",
      "/api": "https://web-self-backend-production.up.railway.app/api/v1",
    },
  },
});
