import visualizer from "rollup-plugin-visualizer";
import { Plugin } from "vite";
/**
 * @description 对打包之后的包依赖进行分析
 */
export const configVisualizerConfig: any = () => {
  return visualizer({
    filename: "./node_modules/.cache/visualizer/stats.html",
    open: true,
    gzipSize: true,
    brotliSize: true,
  });
};
