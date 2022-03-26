import { CSSOptions } from "vite";

const cssOption: CSSOptions = {
  modules: {
    generateScopedName: "[name]_[local]_[hash:base64:5]",
    hashPrefix: "prefix",
    localsConvention: "camelCase",
  },
  preprocessorOptions: {
    less: {
      javascriptEnabled: true,
    },
    scss: {
      additionalData: '@import "./src/assets/scss/varible.scss";',
    },
  },
};

export default cssOption;
