import { defineConfig } from "vite";

import paths from "vite-tsconfig-paths";

import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [paths({ loose: true }), vue(), jsx()],
});
