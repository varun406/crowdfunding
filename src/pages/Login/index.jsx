import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "../../App";
import Auth from "../../components/Auth";
import { loginSchema } from "../../validations/login";
import axiosInstance from "../../api/axios";

const Login = () => {
  const { setLoginOpen, setSignupOpen } = useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(loginSchema) });

  const onSubmit = async (data) => {
    const res = await axiosInstance.post("/user/login", data);
    console.log(res.data.message._id);
    window.localStorage.setItem("authToken", res?.data.message._id);
    window.localStorage.setItem("userAddress", res?.data.message.address);
    window.location.reload();
    handleClose();
  };

  const handleClose = () => {
    setLoginOpen(false);
    setSignupOpen(false);
  };

  return (
    <Auth
      method="login"
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
    />
  );
};

export default Login;
