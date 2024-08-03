import React, { useEffect } from "react";
// UI & image
import blankImg from "assets/Pictures/blank-img-user1.png";
import { TextField, Menu, MenuItem } from "@mui/material";
// components
import DefaultButton from "components/Button/DefaultButton";
export default function UserProfile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // fetch user profile...

  return (
    <div className="p-[14px] border border-gray-300 rounded-md">
      <div>
        <h3 className="font-section-sub-heading">My Profile</h3>
        <p className="font-text-primary">
          Manage your profile infomation to protect your account
        </p>
      </div>
      <hr></hr>
      <div className="lg:flex lg:flex-row-reverse lg:p-8">
        <div className="w-full flex flex-col justify-center items-center p-[14px] lg:justify-start">
          <div className="w-[90px] h-[90px] mb-[10px]">
            <img className="w-full h-full object-cover" src={blankImg}></img>
          </div>
          <DefaultButton
            content="Choose new avatar"
            styles={{ width: "fit-content", border: "none", fontSize: "16px" }}
            primaryColor="#3f3f4666"
            secondaryColor="#3f3f4666"
            textColor="#fff"
            textColorOnHover="#fff"
          ></DefaultButton>
        </div>
        <hr className="lg:hidden"></hr>
        <div id="form_wrap">
          <div className="p-[14px] lg:p-0">
            <TextField
              disabled
              className="w-full mb-3"
              size="small"
              id="outlined-basic"
              name="email"
              value="Current User email"
              variant="outlined"
            />
            <TextField
              className="w-full mb-3"
              size="small"
              id="outlined-basic"
              label="Name"
              name="name"
              variant="outlined"
            />

            <TextField
              className="w-full mb-3"
              size="small"
              id="outlined-basic"
              label="Phone"
              name="phone"
              variant="outlined"
            />
            <TextField
              className="w-full mb-3"
              size="small"
              id="outlined-basic"
              label="Full Address"
              name="address"
              variant="outlined"
            />
          </div>
          <div className="lg:w-full lg:items-center lg:flex lg:flex-row lg:justify-center">
            <DefaultButton
              content="Save"
              styles={{
                width: "100%",
                fontSize: "16px",
                "@media (min-width:1024px)": { width: "fit-content" },
              }}
              primaryColor="#ff6d00"
              secondaryColor="#ff6d00"
              textColor="#fff"
              textColorOnHover="#fff"
            ></DefaultButton>
          </div>
        </div>
      </div>
    </div>
  );
}
