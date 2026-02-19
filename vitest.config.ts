import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vitest/config";

/** Transforms static asset imports (png, jpg, webp…) to a stub string so
 *  jsdom tests don't crash on binary file imports (e.g. next/image logo). */
const staticAssetStub: Plugin = {
  name: "static-asset-stub",
  transform(_, id) {
    if (/\.(png|jpe?g|gif|svg|webp|ico|avif)(\?.*)?$/.test(id)) {
      return { code: 'export default "test-file-stub"', map: null };
    }
  },
};

export default defineConfig({
  plugins: [react(), staticAssetStub],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    globals: true,
    include: [
      "src/**/*.{test,spec}.{ts,tsx}",
      "tests/**/*.{test,spec}.{ts,tsx}",
    ],
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
