import { thyseusPlugin } from "@thyseus/transformer-rollup";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext",
    minify: false,
  },
  plugins: [thyseusPlugin()],
});
