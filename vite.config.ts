import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  root: "docs",
  plugins: [react()],
  server: {
    port: 1235,
    open: true,
  },
  build: {
    outDir: "../build",
    emptyOutDir: true,
  },
});
