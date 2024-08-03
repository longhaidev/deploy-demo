import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// UI & icon
import { TextField } from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// validation
import * as Yup from "yup";
import DefaultButton from "components/Button/DefaultButton";
export default function SignUp() {
  const navigate = useNavigate();
  // state
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm_password: false,
  });
  const [errMsg, setErrMsg] = useState({});
  const [userRegisterForm, setUserRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const registerSchema = Yup.object({
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
  const handleOnChangeForm = (event) => {
    const { name, value } = event.target;
    setUserRegisterForm({
      ...userRegisterForm,
      [name]: value,
    });
  };
  const handleSignUp = async () => {
    try {
      await registerSchema.validate(userRegisterForm, { abortEarly: false });
      navigate("/login");
    } catch (error) {
      const newErr = {};
      error.inner.forEach((err) => {
        newErr[err.path] = err.message;
      });
      setErrMsg(newErr);
    }
  };
  return (
    <div
      style={{ backgroundColor: "rgba(158, 81, 59, 0.05)" }}
      className="relative w-full h-[90vh] flex flex-col items-center justify-center"
    >
      <div className="absolute w-[80%] md:w-[60%] h-auto p-[20px] flex flex-col items-center gap-3 bg-white shadow-md rounded-xl lg:w-[40%]">
        <h5 className="capitalize">Sign Up</h5>
        <TextField
          error={errMsg.name ? true : false}
          helperText={`${errMsg.name ? errMsg.name : ""}`}
          className="w-full mb-3"
          size="small"
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          name="name"
          onChange={handleOnChangeForm}
        />
        <TextField
          error={errMsg.email ? true : false}
          helperText={`${errMsg.email ? errMsg.email : ""}`}
          className="w-full mb-3"
          size="small"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleOnChangeForm}
        />
        <span className="flex flex-row w-full relative">
          <TextField
            error={errMsg.password ? true : false}
            helperText={`${errMsg.password ? errMsg.password : ""}`}
            className="w-full mb-3"
            id="outlined-basic"
            size="small"
            label="Password"
            variant="outlined"
            name="password"
            type={showPassword.password ? "text" : "password"}
            onChange={handleOnChangeForm}
          />
          <div className="absolute right-[5px] top-[3px] w-[20px] h-[34px] flex flex-row justify-center items-center">
            {!showPassword.password ? (
              <FaEye
                onClick={() =>
                  setShowPassword({ ...showPassword, password: true })
                }
              />
            ) : (
              <FaEyeSlash
                onClick={() =>
                  setShowPassword({ ...showPassword, password: false })
                }
              />
            )}
          </div>
        </span>
        <span className="flex flex-row w-full relative">
          <TextField
            error={errMsg.confirmPassword ? true : false}
            helperText={`${
              errMsg.confirmPassword ? errMsg.confirmPassword : ""
            }`}
            className="w-full mb-3"
            id="outlined-basic"
            size="small"
            label="Confirm Password"
            variant="outlined"
            name="confirmPassword"
            type={showPassword.confirm_password ? "text" : "password"}
            onChange={handleOnChangeForm}
          />
          <div className="absolute right-[5px] top-[3px] w-[20px] h-[34px] flex flex-row justify-center items-center">
            {!showPassword.confirm_password ? (
              <FaEye
                onClick={() =>
                  setShowPassword({ ...showPassword, confirm_password: true })
                }
              />
            ) : (
              <FaEyeSlash
                onClick={() =>
                  setShowPassword({ ...showPassword, confirn_password: false })
                }
              />
            )}
          </div>
        </span>
        <DefaultButton
          content="Sign up"
          textColor="white"
          textColorOnHover="#ff6d00"
          primaryColor="#ff6d00"
          secondaryColor="#fff"
          styles={{
            border: "solid 1px #ff6d00",
            textTransform: "none",
          }}
          handleClick={handleSignUp}
        ></DefaultButton>
        <div className="w-[80%] mt-2 text-center">
          <NavLink
            className="navlink-hover m-0 italic text-[16px]"
            to="/login"
            style={{ "--line-hover": "var(--line-hover-primary)" }}
          >
            Have an account ?
          </NavLink>
        </div>
      </div>
    </div>
  );
}
