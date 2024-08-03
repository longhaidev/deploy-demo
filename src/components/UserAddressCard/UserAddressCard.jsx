import React, { useEffect, useRef } from "react";
import DefaultButton from "../Button/DefaultButton";

export default function UserAddressCard(props) {
  const { isDefault } = props;
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className="flex flex-row justify-between items-center w-full p-1 mt-2">
      <div id="content" className="w-full">
        <h3 className="text-[20px]">Jon stewart doe</h3>
        {isDefault && (
          <p className="text-[12px] bg-[#ff6d00] text-white rounded-lg w-fit pl-[5px] pr-[5px]">
            Default
          </p>
        )}
        <h2 className="text-[16px]">0123456789</h2>
        <p className="text-[14px] lg:text-[16px]">
          1600 Amphitheatre Parkway Apartment 1, 2323, 12323, Mountain View,
          United States
        </p>
      </div>
      <div className="md:mx-2">
        <div
          id="action"
          className="flex flex-col items-center justify-end w-full md:items-end"
        >
          <div id="action-group" className="flex flex-row mb-2">
            <span>
              <DefaultButton
                content="Edit"
                styles={{
                  width: "fit-content",
                  border: "none",
                  textTransform: "none",
                  padding: "5px",
                  fontSize: "16px",
                }}
                primaryColor="#fff"
                textColor="#006fee"
                textColorOnHover="#006fee"
                secondaryColor="#cae1fd"
              ></DefaultButton>
            </span>
            <span
              className={` ${
                isDefault ? " pointer-events-none opacity-45" : ""
              }`}
              onClick={handleClick}
            >
              <DefaultButton
                content="Delete"
                styles={{
                  width: "fit-content",
                  border: "none",
                  textTransform: "none",
                  padding: "5px",
                  fontSize: "16px",
                }}
                primaryColor="#fff"
                textColor="#b91c1c"
                textColorOnHover="#b91c1c"
                secondaryColor="#f3126033"
              ></DefaultButton>
            </span>
          </div>
          <div
            className={`${isDefault ? "pointer-events-none opacity-45" : ""}`}
          >
            <DefaultButton
              content="Set as default"
              primaryColor="#fff"
              secondaryColor="#ff6d00"
              styles={{
                border: "solid 1px #ff6d00",
                textTransform: "none",
                fontSize: "16px",
              }}
            ></DefaultButton>
          </div>
        </div>
      </div>
    </div>
  );
}
