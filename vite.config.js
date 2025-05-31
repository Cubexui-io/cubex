import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"), 
      name: "CubexUI",
      formats: ["es", "cjs"],
      fileName: "index", 
    },
    rollupOptions: {
      external: ["react", "react-dom"], 
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
