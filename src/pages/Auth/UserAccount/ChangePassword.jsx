import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// UI
import { TextField } from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// components
import DefaultButton from "../../../components/Button/DefaultButton";
export default function ChangePassword() {
  // const [showPassword, setShowPassword] = useState(false);
  const [showPassword, setShowPassword] = useState({
    current_password: false,
    new_password: false,
    confirm_password: false,
  });
  return (
    <div className="border border-gray-300 rounded-md p-[14px] w-full">
      <div>
        <h3 className="font-section-sub-heading">Change Password</h3>
      </div>
      <hr></hr>
      <div className="lg:flex lg:flex-col lg:items-center lg:py-6">
        <div className="lg:w-[50%]">
          <div className="mb-4 ">
            <span className="flex flex-row w-full relative">
              <TextField
                sx={{ margin: "0px!important" }}
                className="w-full mb-3"
                id="outlined-basic"
                size="small"
                label="Current password"
                name="currentPassword"
                variant="outlined"
                type={showPassword.current_password ? "text" : "password"}
              />
              <div className="absolute right-[5px] top-[3px] w-[20px] h-[34px] flex flex-row justify-center items-center">
                {!showPassword.current_password ? (
                  <FaEye
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        current_password: true,
                      })
                    }
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        current_password: false,
                      })
                    }
                  />
                )}
              </div>
            </span>
            <div className="w-[100%] italic font-text-secondary mt-1 pr-1">
              <span className="flex flex-col items-end w-full">
                <NavLink
                  className="navlink-hover m-0"
                  to="/forgot"
                  style={{ "--line-hover": "var(--line-hover-primary)" }}
                >
                  Forgot your password?
                </NavLink>
              </span>
            </div>
          </div>
          <div id="change-password-form">
            <span className="flex flex-row w-full relative">
              <TextField
                className="w-full mb-3"
                id="outlined-basic"
                size="small"
                label="New password"
                name="newPassword"
                variant="outlined"
                type={showPassword.new_password ? "text" : "password"}
              />
              <div className="absolute right-[5px] top-[3px] w-[20px] h-[34px] flex flex-row justify-center items-center">
                {!showPassword.new_password ? (
                  <FaEye
                    onClick={() =>
                      setShowPassword({ ...showPassword, new_password: true })
                    }
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() =>
                      setShowPassword({ ...showPassword, new_password: false })
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
                label="Confirm password"
                name="confirmPassword"
                variant="outlined"
                type={showPassword.confirm_password ? "text" : "password"}
              />
              <div className="absolute right-[5px] top-[3px] w-[20px] h-[34px] flex flex-row justify-center items-center">
                {!showPassword.confirm_password ? (
                  <FaEye
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        confirm_password: true,
                      })
                    }
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        confirm_password: false,
                      })
                    }
                  />
                )}
              </div>
            </span>
          </div>
          <div className="flex flex-row gap-2 full">
            <DefaultButton
              content="Change password"
              styles={{ textTransform: "none", fontSize: "16px" }}
              textColor="#fff"
            ></DefaultButton>
            <DefaultButton
              content="Cancel"
              primaryColor="#fff"
              secondaryColor="#ff6d00"
              styles={{
                textTransform: "none",
                border: "1px solid #ff6d00",
                fontSize: "16px",
              }}
              textColor="#ff6d00"
            ></DefaultButton>
          </div>
        </div>
      </div>
    </div>
  );
}
