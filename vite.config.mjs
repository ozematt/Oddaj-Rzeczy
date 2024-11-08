import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      reporter: ["cobertura", "json", "html"],
    },
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.{spec,test}.{ts,tsx}"],
    setupFiles: ["/setupTests.mjs"],
  },
});
