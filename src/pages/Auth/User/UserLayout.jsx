import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import UserMenu from "components/UserMenu/UserMenu";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function UserLayout() {
  const location = useLocation();
  const seperateUrl = location.pathname.split("/");
  const userPage = seperateUrl[seperateUrl.length - 1];
  return (
    <div className="px-[14px] py-10 flex flex-col items-center justify-center">
      <h2 className=" w-[90%] md:w-[95%]  text-[30px] font-semibold text-left md:mb-4 md:hidden">
        User Account
      </h2>
      <div className="md:flex md:flex-row  w-[90%] md:w-[95%] lg:w-[92%] md:relative">
        <div
          className="w-full flex flex-row justify-end mb-[10px] sticky sticky-element-from-header z-[1] backdrop-blur-[5px]
        md:w-[35%] lg:w-[20%] md:block"
        >
          <UserMenu currentPage={userPage}></UserMenu>
        </div>
        <div
          id="user_outlet"
          className="w-full flex flex-col items-center justify-center md:justify-start"
        >
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
