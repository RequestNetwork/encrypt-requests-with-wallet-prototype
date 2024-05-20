import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [nodePolyfills(), sveltekit()],
  optimizeDeps: {
    include: [
      "js-sha3",
      "@ethersproject/bignumber",
      "multiformats",
      "multiformats/cid",
    ],
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  resolve: {
    alias: {
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      assert: "assert",
      zlib: "browserify-zlib",
      "multiformats/cid": "multiformats/cid",
    },
  },
});
