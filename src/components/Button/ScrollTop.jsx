import React, { useEffect, useState } from "react";
import { MdArrowCircleUp } from "react-icons/md";
import "./ScrollTop.scss";
export default function ScrollTop() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 750) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  });
  const handleScrollTop = () => {
    window.scroll(0, 0);
  };
  return (
    <div
      className={` ${
        active ? "" : "inactive"
      } cursor-pointer w-[50px] h-[50px] border-0 button-bg-color-primary fixed bottom-[20%] right-[2%] flex flex-col items-center justify-center rounded-lg transition ease-[cubic-bezier(0.47, 0, 0.745, 0.715)] duration-[.3s]   before:absolute before:top-0 before:left-0 before:content-[''] before:bg-[#ff6d00] before:blur-[33px] before:w-full before:h-full before:z-[-1]`}
    >
      <MdArrowCircleUp
        size={35}
        color="white"
        onClick={() => handleScrollTop()}
      />
    </div>
  );
}
