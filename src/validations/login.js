import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("Please provide a valid email address"),
  password: yup.string().min(8).required("Please provide a valid password"),
});
