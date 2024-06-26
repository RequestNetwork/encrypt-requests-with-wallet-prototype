import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      $src: "./src",
      $utils: "./src/utils",
      $stores: "./src/stores",
      $components: "./src/components",
    },
  },
  compilerOptions: {
    customElement: true,
  },
};

export default config;
