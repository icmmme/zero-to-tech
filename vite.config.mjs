import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  input: {
    main: fileURLToPath(new URL("./index.html", import.meta.url)),
    lab: fileURLToPath(new URL("./text-lab.html", import.meta.url)),
  },
});
