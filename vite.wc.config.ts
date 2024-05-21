import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import path from "path";

export default defineConfig({
  plugins: [
    nodePolyfills(),
    svelte({
      compilerOptions: {
        customElement: true,
      },
      emitCss: false,
    }),
  ],
  resolve: {
    alias: {
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      assert: "assert",
      zlib: "browserify-zlib",
      $src: path.resolve(__dirname, "src"),
      $utils: path.resolve(__dirname, "src/utils"),
      $lib: path.resolve(__dirname, "src/lib"),
    },
  },
  build: {
    emptyOutDir: false,
    sourcemap: true,
    target: "modules",
    lib: {
      entry: "./src/lib/index.ts",
      name: "<<name>>",
      fileName: "web-component",
    },
    rollupOptions: {
      plugins: [
        nodePolyfills({
          include: [
            "crypto",
            "http",
            "buffer",
            "fs",
            "process",
            "stream",
            "url",
            "zlib",
          ],
        }),
      ],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    exclude: ["@ethersproject/hash", "wrtc", "http"],
    include: ["js-sha3", "@ethersproject/bignumber", "multiformats"],
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  define: {
    global: "window",
  },
});
