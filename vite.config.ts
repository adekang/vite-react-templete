import { defineConfig } from "vite";
import * as path from "path";
import createVitePlugins from "./config/plugins";
import cssOption from "./config/style";
import build from "./config/build";

export default defineConfig((config) => {
  console.log(config);

  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: createVitePlugins(),
    css: cssOption,
    build,
  };
});
