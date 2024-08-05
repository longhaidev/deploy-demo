import { TextField } from "@mui/material";
import CustomButton from "components/Button/CustomButton";
import DefaultButton from "components/Button/DefaultButton";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userForgotpasswordSchema } from "utils/Validators/validateSchema";
import { yupResolver } from "@hookform/resolvers/yup";
export default function ForgotPassword() {
  // const [email, setEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(userForgotpasswordSchema),
  });
  const handleForgotPassword = (formForgot) => {
    console.log(formForgot);
  };
  return (
    <div
      style={{ backgroundColor: "rgba(158, 81, 59, 0.05)" }}
      className="relative w-full h-[80vh] flex flex-col items-center justify-center"
    >
      <div className="absolute w-[80%] md:w-[60%] h-auto p-[20px] flex flex-col items-center gap-3 bg-white shadow-md rounded-xl lg:w-[40%]">
        <h5 className="normal-case">Reset your password</h5>
        <TextField
          className="w-full mb-1"
          size="small"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          error={!!errors.email}
          helperText={errors.email ? errors.email?.message : ""}
          {...register("email")}
        />
        <CustomButton
          type={"primary"}
          content={"Submit"}
          sx={{ width: "100%" }}
          handleClick={handleSubmit(handleForgotPassword)}
        ></CustomButton>
        <div className="w-[80%] italic text-[14px] mt-2 text-center">
          <NavLink
            className="navlink-hover m-0"
            to="/login"
            style={{ "--line-hover": "var(--line-hover-primary)" }}
          >
            Back to login
          </NavLink>
        </div>
      </div>
    </div>
  );
}
