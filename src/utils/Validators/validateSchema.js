import * as Yup from "yup";

// user auth
export const userLoginSchema = Yup.object({
  email: Yup.string().required("Required").email("Invalid email"),
  password: Yup.string()
    .min(8, "Password must at least 8 character")
    .required("Required"),
});

export const userSignUpSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid email"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must at least 8 characters"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Confirm password must match"
  ),
});

export const userForgotpasswordSchema = Yup.object({
  password: Yup.string()
    .required("Required")
    .min(8, "Password must at least 8 characters"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Confirm password must match"
  ),
});

export const userForgotPasswordSchema = Yup.object({
  email: Yup.string().required("Required").email("Invalid email"),
});

// checkout
export const userCheckoutFormSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid email"),
  address: Yup.string().required("Required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Required"),
  city: Yup.string(),
  note: Yup.string(),
  payment: Yup.string(),
  shipMethod: Yup.string(),
  product: Yup.array(),
  cartPrice: Yup.number(),
});
