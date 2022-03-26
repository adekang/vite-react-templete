import { Plugin, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import { VITE_APP_VISUALIZER } from "../index";
import { configVisualizerConfig } from "./visualizer";

export default function createVitePlugins() {
  const vitePlugins: (Plugin | Plugin[] | PluginOption[])[] = [react()];
  VITE_APP_VISUALIZER && vitePlugins.push(configVisualizerConfig);
  return vitePlugins;
}
