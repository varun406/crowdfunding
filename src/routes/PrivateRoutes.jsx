import React, { useContext, useEffect } from "react";
import { isLogin } from "../utils/isLogin";
import { Navigate, Outlet } from "react-router-dom";
import { DataContext } from "../App";
import { CampaignContext } from "../context/CampaignContext";
import { AuthContext } from "../context/AuthContext";

const PrivateRoutes = () => {
  const { setLoginOpen, setSnackbarOpen, setSnackbarMsg } =
    useContext(DataContext);
  const { userAddress } = useContext(AuthContext);
  const { currentAddress } = useContext(CampaignContext);

  useEffect(() => {
    if (currentAddress !== userAddress) {
      setLoginOpen(true);
      setSnackbarOpen(true);
      setSnackbarMsg(
        `Current wallet address does not match with your account wallet address (${userAddress})`
      );
    }
    !isLogin() && setLoginOpen(true);
  }, []);
  return isLogin() ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
