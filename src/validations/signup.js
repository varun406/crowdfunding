import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  userName: yup.string().required("Please provide a username"),
  address: yup
    .string()
    .test("len", "address length should be 42", (val) => {
      if (val == undefined) {
        return true;
      }
      return val.length === 0 || (val.length >= 42 && val.length <= 42);
    })
    .required("Please provide a address"),
  email: yup.string().email().required("Please provide a valid email address"),
  password: yup.string().min(8).required("Please provide a valid password"),
});
