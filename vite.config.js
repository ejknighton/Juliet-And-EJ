import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // IMPORTANT for GitHub Project Pages:
  base: "/Juliet-And-EJ/",
});