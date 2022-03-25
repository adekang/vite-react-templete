import { Plugin } from "vite";
import react from "@vitejs/plugin-react";

export default function createVitePlugins() {
  const vitePlugins = [react()];

  return vitePlugins;
}
