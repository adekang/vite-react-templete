import { ProxyOptions } from "vite";

/**
 * @description 开发服务器配置自定义代理规则
 */
const proxy: Record<string, string | ProxyOptions> = {
  // 选项写法
  "/api": {
    target: "http://121.41.42.16",
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^\//, ""),
    // 更多请参看：https://cn.vitejs.dev/config/#server-proxy
  },
};
export default proxy;
