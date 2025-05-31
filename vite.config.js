import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "CubexUI",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.esm.js" : "index.js")
    },
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled"
        }
      }
    }
  }
});
