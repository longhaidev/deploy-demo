import React, { useEffect, useRef } from "react";
import DefaultButton from "../Button/DefaultButton";
import CustomButton from "components/Button/CustomButton";

export default function UserAddressCard(props) {
  const { isDefault } = props;
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className="flex flex-row justify-between items-center gap-2 w-full p-1 mt-2">
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
              <CustomButton
                content={"Edit"}
                type={"secondary"}
                sx={{
                  "&:hover": {
                    backgroundColor: "#cae1fd",
                    color: "#006fee",
                    border: "none",
                  },
                  color: "#006fee",
                  border: "none",
                }}
              ></CustomButton>
            </span>
            <span
              className={` ${
                isDefault ? " pointer-events-none opacity-45" : ""
              }`}
              onClick={handleClick}
            >
              <CustomButton
                content={"Delete"}
                type={"secondary"}
                sx={{
                  "&:hover": {
                    backgroundColor: "#f3126033",
                    color: "#b91c1c",
                    border: "none",
                  },
                  color: "#b91c1c",
                  border: "none",
                }}
              ></CustomButton>
            </span>
          </div>
          <div
            className={`w-full ${
              isDefault ? "pointer-events-none opacity-45" : ""
            }`}
          >
            <CustomButton
              type={"secondary"}
              content={"Set as default"}
              sx={{ width: "100%" }}
            ></CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
