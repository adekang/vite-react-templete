import { defineConfig } from "vite";
import * as path from "path";
import createVitePlugins from "./config/plugins";
import cssOption from "./config/style";
import build from "./config/build";
import proxy from "./config/setupProxy";
import { VITE_APP_BASE } from "./config";

export default defineConfig((config) => {
  return {
    base: VITE_APP_BASE,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: createVitePlugins(),
    css: cssOption,
    build,
    proxy,
  };
});
