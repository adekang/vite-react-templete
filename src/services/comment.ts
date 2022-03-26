import service from "./request";

export const getHotList = (data: { limit: number }) => {
  return service({
    url: "/personalized",
    data,
  });
};

export const phoneLogin = (data: { phone: number; md5_password: string }) => {
  return service({
    url: "/login/cellphone",
    method: "post",
    data,
  });
};
