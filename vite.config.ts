import { thyseusPlugin } from "@thyseus/transformer-rollup";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext",
    minify: false,
  },
  plugins: [
    thyseusPlugin(),
    // Cross Origin Isolation required for multi-threading
    {
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
          res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
          next();
        });
      },
      name: "configure-response-headers",
    },
  ],
});
