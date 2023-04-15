import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  userName: yup.string().required("Please provide a username"),
  email: yup.string().email().required("Please provide a valid email address"),
  password: yup.string().min(8).required("Please provide a valid password"),
});
