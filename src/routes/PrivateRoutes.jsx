import React, { useContext, useEffect } from "react";
import { isLogin } from "../utils/isLogin";
import { Navigate, Outlet } from "react-router-dom";
import { DataContext } from "../App";

const PrivateRoutes = () => {
  const { setLoginOpen } = useContext(DataContext);

  useEffect(() => {
    !isLogin() && setLoginOpen(true);
  }, []);
  return isLogin() ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
