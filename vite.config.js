import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/gh-pages-action-template/",
  build: {
    outDir: "build",
  },
  publicDir: "/gh-pages-action-template/public",
});
