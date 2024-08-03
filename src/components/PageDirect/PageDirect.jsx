import React from "react";
import { NavLink } from "react-router-dom";
import backgroundImg from "../../assets/Pictures/backgroundimg2.jpg";
export default function PageDirect(props) {
  const { pageName, direction, bgImg } = props;
  return (
    <div className=" bg-black relative">
      <div className="opacity-40 w-full h-[150px] md:h-[200px] lg:h-[300px] ">
        <img
          draggable={false}
          className="h-full w-full object-cover select-none"
          src={bgImg ? bgImg : backgroundImg}
        ></img>
      </div>
      <div className="flex flex-col top-0 h-full absolute w-full items-center justify-center">
        <div className="flex flex-col items-center">
          <h3
            className="text-white text-[24px] capitalize font-semibold"
            draggable={false}
          >
            {pageName}
          </h3>

          <span className="text-white text-[22px] capitalize flex flex-row gap-2 ">
            <NavLink draggable={false} to="/" className="mb-2 text-white">
              Home
            </NavLink>
            &gt;
            <NavLink draggable={false} to={direction} className="text-white">
              {pageName}
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
}
