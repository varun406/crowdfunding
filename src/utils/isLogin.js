export const isLogin = () => {
  return localStorage.getItem("authToken")
    ? localStorage.getItem("authToken")
    : null;
};
