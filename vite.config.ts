import { defineConfig } from "vite";
import * as path from "path";
import createVitePlugins from "./config/plugins";
import cssOption from "./config/style";

export default defineConfig((config) => {
  console.log(config);

  return {
    plugins: createVitePlugins(),
    css: cssOption,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
