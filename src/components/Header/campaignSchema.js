import * as yup from "yup";

export const campaignSchema = yup.object().shape({
  address: yup
    .string()
    .test("len", "address length should be 42", (val) => {
      if (val == undefined) {
        return true;
      }
      return val.length == 0 || (val.length >= 42 && val.length <= 42);
    })
    .required("Please provide a address"),
  charityName: yup
    .string()
    .matches(/^([^0-9]*)$/, "name should not contain any number")
    .required("Please provide a charity name"),
  title: yup.string().required("Please provide a title"),
  desc: yup.string().required("Please provide a description"),
  endDate: yup.date().min(new Date()).required("Please provide a end date"),
  target: yup
    .number()
    .typeError("Amount must be a number")
    .moreThan(0)
    .min(0.0001)
    .required("Please provide a message"),
  attachment: yup.mixed().required("Please provide a attachment"),
});
