import React, { useContext } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Error, Input, Label } from "../../styles/Home/Header";
import { DataContext } from "../../App";
import { FormButton, FormWrap } from "../../styles/Auth";

const Auth = ({ method, register, handleSubmit, onSubmit, errors }) => {
  const { openLogin, setLoginOpen, openSignup, setSignupOpen } =
    useContext(DataContext);

  const handleSwitch = () => {
    setLoginOpen((prev) => !prev);
    setSignupOpen((prev) => !prev);
  };

  const handleClose = () => {
    setLoginOpen(false);
    setSignupOpen(false);
  };

  return (
    <Dialog
      maxWidth="sm"
      open={openLogin || openSignup}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>{method}</DialogTitle>
      <DialogContent>
        <FormWrap onSubmit={handleSubmit(onSubmit)}>
          {method === "signup" && (
            <>
              {" "}
              <Label>Username</Label>
              <Input {...register("userName")} />
              <Error>{errors.userName?.message}</Error>
              <Label>Address</Label>
              <Input {...register("address")} />
              <Error>{errors.address?.message}</Error>
            </>
          )}
          <Label>Email</Label>
          <Input {...register("email")} />
          <Error>{errors.email?.message}</Error>
          <Label>Password</Label>
          <Input {...register("password")} />
          <Error>{errors.password?.message}</Error>
          <FormButton>{method === "signup" ? "Signup" : "Login"}</FormButton>
          <p>
            Don't have an account,
            <span onClick={handleSwitch}>Click here</span>{" "}
          </p>
        </FormWrap>
      </DialogContent>
    </Dialog>
  );
};

export default Auth;
