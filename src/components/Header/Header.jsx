import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
// components
import Navbar from "shared/Navbar/Navbar";
// UI & icon
import Logo from "../../assets/Pictures/Logo2.png";
import { BiMenuAltLeft } from "react-icons/bi";
import { PiShoppingCart } from "react-icons/pi";
import { HiOutlineXMark } from "react-icons/hi2";
// redux
import { useSelector } from "react-redux";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const cartItem = useSelector((state) => state.cart.totalQuantity);
  useEffect(() => {
    window.scroll(0, 0);
    setShowNav(false);
  }, []);
  return (
    <>
      <div className="shadow-sm flex flex-row items-center justify-between fixed z-2 bg-[#fff] w-full px-4 py-1 border-none lg:gap-[20px]">
        <div className="menu">
          {!showNav ? (
            <BiMenuAltLeft
              className="cursor-pointer transition ease-in-out delay-150 lg:hidden "
              size={30}
              onClick={() => {
                setShowNav(true);
              }}
            />
          ) : (
            <HiOutlineXMark
              className=" cursor-pointer transition ease-in-out delay-150 lg:hidden"
              size={30}
              onClick={() => {
                setShowNav(false);
              }}
            />
          )}
        </div>
        <div className="w-[10rem] h-[3rem] lg:w-[14rem] lg:h-[54px]  ">
          <NavLink to="/">
            <img
              className="translate-y-[-6px] lg:translate-y-[-8px]"
              src={Logo}
            ></img>
          </NavLink>
        </div>
        <Navbar show={showNav} setShow={setShowNav}></Navbar>
        <div className="flex flex-row gap-[25px] justify-start items-center text-[25px]">
          <span className="relative ">
            <p
              className={`cart-number absolute text-[10px] right-[-5px] top-[-3px] rounded-[50%] bg-red-500 text-white w-[15px] flex flex-col items-center`}
            >
              {cartItem ? cartItem : ""}
            </p>
            <NavLink
              to="/cart"
              className="text-black"
              onClick={() => showNav(false)}
            >
              <PiShoppingCart />
            </NavLink>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
