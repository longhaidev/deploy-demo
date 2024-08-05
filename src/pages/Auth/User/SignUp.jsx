import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// UI & icon
import { TextField } from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// validation
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import DefaultButton from "components/Button/DefaultButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSignUpSchema } from "utils/Validators/validateSchema";
import CustomButton from "components/Button/CustomButton";
export default function SignUp() {
  const navigate = useNavigate();
  // state
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm_password: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSignUpSchema),
  });
  const handleSignUp = (signUpForm) => {
    console.log(signUpForm);
    navigate("/login");
  };
  return (
    <div
      style={{ backgroundColor: "rgba(158, 81, 59, 0.05)" }}
      className="relative w-full h-[90vh] flex flex-col items-center justify-center"
    >
      <div className="absolute w-[80%] md:w-[60%] h-auto p-[20px] flex flex-col items-center gap-3 bg-white shadow-md rounded-xl lg:w-[40%]">
        <h5 className="capitalize">Sign Up</h5>
        <TextField
          className="w-full mb-3"
          size="small"
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          name="name"
          error={!!errors.name}
          helperText={errors.name ? errors.name?.message : ""}
          {...register("name")}
        />
        <TextField
          className="w-full mb-3"
          size="small"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email ? errors.email?.message : ""}
        />
        <span className="flex flex-row w-full relative">
          <TextField
            className="w-full mb-3"
            id="outlined-basic"
            size="small"
            label="Password"
            variant="outlined"
            name="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password ? errors.password?.message : ""}
            type={showPassword.password ? "text" : "password"}
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
            className="w-full mb-3"
            id="outlined-basic"
            size="small"
            label="Confirm Password"
            variant="outlined"
            name="confirmPassword"
            error={!!errors.confirmPassword}
            helperText={
              errors.confirmPassword ? errors.confirmPassword?.message : ""
            }
            {...register("confirmPassword")}
            type={showPassword.confirm_password ? "text" : "password"}
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
        <CustomButton
          type={"primary"}
          content={"Sign up"}
          handleClick={handleSubmit(handleSignUp)}
          sx={{ width: "100%" }}
        ></CustomButton>
        {/* <DefaultButton
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
        ></DefaultButton> */}
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
