import { TextField } from "@mui/material";
import DefaultButton from "components/Button/DefaultButton";
import React from "react";
import { NavLink } from "react-router-dom";

export default function ForgotPassword() {
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
        />
        <DefaultButton
          content="Submit"
          textColor="white"
          textColorOnHover="#ff6d00"
          primaryColor="#ff6d00"
          secondaryColor="#fff"
          styles={{
            border: "solid 1px #ff6d00",
            textTransform: "none",
          }}
        ></DefaultButton>
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
