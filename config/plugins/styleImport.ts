import {
  createStyleImportPlugin,
  AndDesignVueResolve,
  VantResolve,
  ElementPlusResolve,
  NutuiResolve,
  AntdResolve,
} from "vite-plugin-style-import";

export default function configStyleImport() {
  return createStyleImportPlugin({
    resolves: [
      AndDesignVueResolve(),
      VantResolve(),
      ElementPlusResolve(),
      NutuiResolve(),
      AntdResolve(),
    ],
    libs: [
      {
        libraryName: "antd",
        esModule: true,
        resolveStyle: (name) => {
          return `antd/es/${name}/style/index`;
        },
      },
    ],
  });
}
