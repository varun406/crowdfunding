import React, { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Auth from "../../components/Auth";
import { SignupSchema } from "../../validations/signup";
import { DataContext } from "../../App";
import axiosInstance from "../../api/axios";

const Signup = () => {
  const { setLoginOpen, setSignupOpen, setSnackbarOpen, setSnackbarMsg } =
    useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(SignupSchema) });

  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    const getData = async () => {
      const res = await axiosInstance.post("/user/register", data);
      console.log(res.data);
      if (res.data) {
        setSnackbarOpen(true);
        setSnackbarMsg(res.data.message);
      }
      setLoginOpen(true);
    };
    getData();

    handleClose();
  };

  const handleClose = () => {
    setLoginOpen(false);
    setSignupOpen(false);
  };

  return (
    <Auth
      method="signup"
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
    />
  );
};

export default Signup;
