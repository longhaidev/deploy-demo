import React, { useState } from "react";
import "./ModalAddAddress.scss";
import { TextField } from "@mui/material";

import CustomButton from "components/Button/CustomButton";
export default function ModalAddAddress(props) {
  const { show, setShow } = props;
  const INITIALADDRESS = {
    name: "",
    phone: "",
    city: "",
    address: "",
  };
  const [newAddr, setNewAddr] = useState(INITIALADDRESS);
  const handleOnChangeForm = (event) => {
    setNewAddr({ ...newAddr, [event.target.name]: event.target.value });
  };
  const handleAddNewAddress = () => {
    console.log(newAddr);
    setNewAddr(INITIALADDRESS);
    setShow(false);
  };
  const handleCloseModal = () => {
    setShow(false);
  };
  return (
    <div
      className={`fixed ${
        show ? "show-overlay" : "hide-overlay"
      } top-0 left-0 h-full z-[99] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))] p-4 md:w-full`}
    >
      <div className="w-full h-full flex flex-col justify-center md:flex-row md:items-center">
        <div
          className={`${
            show ? "show-box" : "hide-box"
          } w-full bg-white rounded-lg shadow-md p-3 md:w-[70%] md:h-fit lg:w-[50%]`}
        >
          <div>
            <h3 className="text-[22px] mb-3">Create new address</h3>
            <TextField
              className="w-full mb-3"
              size="small"
              id="outlined-basic"
              label="Full Name"
              name="name"
              variant="outlined"
              onChange={handleOnChangeForm}
            />
            <span className="flex flex-row gap-2">
              <TextField
                className="w-full mb-3"
                size="small"
                id="outlined-basic"
                label="Email"
                name="email"
                variant="outlined"
                onChange={handleOnChangeForm}
              />

              <TextField
                className="w-full mb-3"
                size="small"
                id="outlined-basic"
                label="Phone number"
                name="phone"
                variant="outlined"
                onChange={handleOnChangeForm}
              />
            </span>

            <TextField
              className="w-full mb-3"
              size="small"
              id="outlined-basic"
              label="City"
              name="city"
              variant="outlined"
              onChange={handleOnChangeForm}
            />

            <TextField
              className="w-full mb-3 normal-case"
              size="small"
              id="outlined-basic"
              label="Full Address"
              name="address"
              variant="outlined"
              onChange={handleOnChangeForm}
            />
            <span className="flex flex-row gap-2 items-end">
              <CustomButton
                type={"primary"}
                content={"Save"}
                handleClick={handleAddNewAddress}
                sx={{ width: "100%" }}
              ></CustomButton>
              <CustomButton
                type={"secondary"}
                content={"Close"}
                sx={{ width: "100%" }}
              ></CustomButton>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
