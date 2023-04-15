import React from "react";
import { isLogin } from "../utils/isLogin";
import { useNavigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const navigate = useNavigate();
  return isLogin ? children : navigate("/");
};

export default PublicRoutes;
