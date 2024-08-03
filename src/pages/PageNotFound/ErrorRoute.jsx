import React from "react";
import Header from "components/Header/Header";
import NewsLetter from "components/NewsLetter/NewsLetter";
import Footer from "shared/Footer/Footer";
import { NavLink } from "react-router-dom";

export default function ErrorRoute() {
  return (
    <>
      <Header></Header>
      <div className="pt-[70px] flex flex-row justify-center w-full h-[70vh]">
        <div className="flex flex-col items-center justify-center w-[70%] text-center uppercase text-black">
          <h2 className="text-4xl mb-3 lg:text-5xl">Oops, Page Not Found !!</h2>
          <span className=" text-black text-xl lg:text-2xl lg:mb-4">
            The page you are looking for doesn't exist or have been moved
          </span>
          <NavLink
            to="/"
            className="p-[15px] rounded-xl mt-3 text-black  no-underline text-1xl lg:text-2xl"
            style={{ backgroundColor: "rgb(241, 218, 178)" }}
          >
            Go to home
          </NavLink>
        </div>
      </div>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
}
