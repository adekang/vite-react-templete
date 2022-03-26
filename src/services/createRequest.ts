import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const API_TIME_OUT = 20000;

function isRspSuccess({ status, code }: { status: number; code: number }, config: any) {
  return status === 200 || code === 200 || (config || {}).byPassStatusCheck;
}

let axiosRequest;

function handleRequest(
  instance: AxiosInstance,
  createConfig: { interceptors: { request: any[] }; setHeaders: any },
) {
  if (Array.isArray(createConfig.interceptors?.request)) {
    createConfig.interceptors?.request.forEach((resInterceptor: any) => {
      instance.interceptors.request.use(...resInterceptor);
    });
  }
  instance.interceptors.request.use((options) => {
    const setHeaders =
      typeof createConfig?.setHeaders === "function"
        ? createConfig?.setHeaders
        : () => ({});
    const headers = setHeaders();

    return {
      ...(options || {}),
      headers: {
        ...(options?.headers || {}),
        ...(typeof headers === "object" ? headers : {}),
      },
    };
  });
}

function handleError(
  instance: AxiosInstance,
  createConfig: {
    responseStatusMap: {};
    httpStatusErrorHandler: (arg0: any, arg1: any) => any;
    interceptors: { response: any[] };
  },
) {
  const processError = (response: AxiosResponse<any, any> | undefined) => {
    const { data, config, status }: any = response || {};
    const responseStatusMap: any = createConfig.responseStatusMap || {};
    const errorText = responseStatusMap[data?.status] || data?.msg || "系统错误";

    const errorResult =
      typeof createConfig.httpStatusErrorHandler === "function" &&
      createConfig.httpStatusErrorHandler(status, response);

    return (
      errorResult ||
      Promise.reject(
        config?.needDetail
          ? {
              ...(data && typeof data === "object" ? data : { data }),
              errorText,
            }
          : errorText,
      )
    );
  };

  if (Array.isArray(createConfig.interceptors?.response)) {
    createConfig.interceptors?.response.forEach((resInterceptor: any) => {
      instance.interceptors.response.use(...resInterceptor);
    });
  }

  // http response 拦截器
  instance.interceptors.response.use(
    (response: AxiosResponse<any>) => {
      // http status 200
      // const { needDetail, needHttpResponse } = config || {}

      /* 之前的 */
      // const { data, config } = response || {};
      // const responseData = data || {};

      /* TODO 修改后的 这里将status 合并到了返回的数据中，后续数据报错，请用上面代码，并对 checkMusic 做修改 */
      const { data, config, status } = response || {};

      const responseData = { status, ...data } || {};

      if (isRspSuccess(responseData, config)) {
        return responseData;
      }

      return processError(response);
    },
    (error: AxiosError) => processError(error.response),
  );
}

function createInstance(createConfig: any) {
  axiosRequest =
    // axiosRequest ||
    axios.create({
      timeout: API_TIME_OUT,
      ...(createConfig || {}),
    });
  handleRequest(axiosRequest, createConfig);
  handleError(axiosRequest, createConfig);
  return axiosRequest;
}

const createRequest = (createConfig: {
  baseURL: string;
  timeout: number;
  withCredentials: boolean;
  responseStatusMap: any;
  headers: { "Content-Type": string };
}) => {
  const instance = createInstance(createConfig) as any;
  const res = ({
    url,
    method = "get",
    data,
    ...config
  }: {
    url: string;
    method?: string;
    data?: any;
    config?: any;
  }) => {
    if (method.toLowerCase() === "get") {
      // const query = querystring.stringify(data);
      // return instance.get(`${url}${query ? `?${query}` : ""}`, config);

      const params = new URLSearchParams(data);
      const query = params.toString();
      return instance.get(`${url}${query !== "" ? `?${query}` : ""}`, config);
    }
    return instance[method.toLowerCase()](url, data, config);
  };

  res.instance = instance;
  return res;
};

export default createRequest;
