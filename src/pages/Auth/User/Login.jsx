import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// UI
import { Button, TextField } from "@mui/material";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
// redux
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../../../redux/userSlice";
// from & validate
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLoginSchema } from "utils/Validators/validateSchema";
// component
import DefaultButton from "components/Button/DefaultButton";
import CustomButton from "components/Button/CustomButton";
// main
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const isAuthUser = () => {
    if (isAuthenticated) {
      navigate("/");
    }
  };
  // form validate
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(userLoginSchema),
  });
  // state
  const [showPassword, setShowPassword] = useState(false);
  // handle event
  // should be async func when call api
  const handleLogin = (formLogin) => {
    console.log("run", formLogin);
    dispatch(doLogin(formLogin));
  };
  //didmount
  useEffect(() => {
    isAuthUser();
    window.scroll(0, 0);
  }, []);
  return (
    <div
      style={{ backgroundColor: "rgba(158, 81, 59, 0.05)" }}
      className="relative w-full h-[80vh] flex flex-col items-center justify-center"
    >
      <div className="absolute w-[80%] md:w-[60%] h-auto p-[20px] flex flex-col items-center gap-3 bg-white shadow-md rounded-xl lg:w-[40%]">
        <h5 className="capitalize">Login</h5>
        <form className="w-full">
          <TextField
            className="w-full mb-3"
            size="small"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
            {...register("email")}
          ></TextField>
          <span className="flex flex-row w-full relative">
            <TextField
              className="w-full mb-3"
              id="outlined-basic"
              size="small"
              label="Password"
              name="password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
              {...register("password")}
            />
            <div className="absolute right-[5px] top-[3px] w-[20px] h-[34px] flex flex-row justify-center items-center">
              {!showPassword ? (
                <FaEye onClick={() => setShowPassword(true)} />
              ) : (
                <FaEyeSlash onClick={() => setShowPassword(false)} />
              )}
            </div>
          </span>

          <CustomButton
            type={"primary"}
            content={"Login"}
            sx={{
              width: "100%",
            }}
            handleClick={handleSubmit(handleLogin)}
          ></CustomButton>
        </form>

        <div className="w-[80%] italic text-[16px] mt-2">
          <span className="flex flex-row justify-between">
            <NavLink
              className="navlink-hover m-0"
              to="/sign-up"
              style={{ "--line-hover": "var(--line-hover-primary)" }}
            >
              Create account
            </NavLink>
            <p className="m-0">&#8226;</p>
            <NavLink
              className="navlink-hover m-0"
              to="/forgot"
              style={{ "--line-hover": "var(--line-hover-primary)" }}
            >
              Forgot password
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
}
