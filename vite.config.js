import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages({
      extensions: ["jsx", "js"],
    }),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
