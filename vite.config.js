import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/demo_ci-cd_pipeline_with_github-actions/", // tells vite from where the subdirectory will be served
});
