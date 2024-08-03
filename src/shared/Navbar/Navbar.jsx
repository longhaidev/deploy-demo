import { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";
// UI & Icon
import { FaRegUserCircle } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { PiBreadLight } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
// style
import "./Navbar.scss";
// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { doLogOut } from "../../redux/userSlice";
// components
import Language from "./Language";

const Navbar = (props) => {
  const navItemStyle = {
    fontFamily: "Alegreya",
    fontSize: "18px",
    color: "#000",
    textTransform: "capitalize",
    marginTop: "5px",
    marginBottom: "5px",
    paddingLeft: "0px",
    display: "block",
    textAlign: "left",
    width: "100%",
    "@media (min-width:1024px)": {
      padding: "0px",
      textAlign: "center",
      marginTop: "0px",
      marginBottom: "0px",
    },
  };
  const navBarItems = [
    {
      id: 1,
      navItem: "Home",
      link: "/",
      subNav: [],
    },
    {
      id: 2,
      navItem: "Menu",
      link: "/menus/all",
      subNav: [],
    },
    {
      id: 3,
      navItem: "Bakery",
      link: "/",
      subNav: [
        {
          id: 1,
          name: "Bread",
          sublink: "menus/bread",
        },

        {
          id: 2,
          name: "pastry",
          sublink: "menus/pastry",
        },

        {
          id: 3,
          name: "cake",
          sublink: "menus/cake",
        },

        {
          id: 4,
          name: "sandwich",
          sublink: "menus/sandwich",
        },
      ],
    },
    {
      id: 4,
      navItem: "Beverages",
      link: "/",
      subNav: [
        {
          id: 1,
          name: "Tea",
          sublink: "menus/tea",
        },

        {
          id: 2,
          name: "coffee",
          sublink: "menus/coffee",
        },

        {
          id: 3,
          name: "blended",
          sublink: "menus/blended",
        },
      ],
    },
    {
      id: 5,
      navItem: "About us",
      link: "/about-us",
      subNav: [],
    },
    {
      id: 6,
      navItem: "Policy",
      link: "/policy",
      subNav: [],
    },
  ];
  const USER_PROFILE_LINK = "/user/account/profile";
  const USER_ORDER_LINK = "/user/order/all";
  // redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.account);
  // state
  const { show, setShow } = props;
  const [anchorEls, setAnchorEls] = useState({});
  // event handle
  const handleClickNavMenu = (event, id) => {
    setAnchorEls((prev) => ({ ...prev, [id]: event.currentTarget }));
  };
  const handleCloseNavMenu = (id) => {
    setAnchorEls((prev) => ({ ...prev, [id]: null }));
    setShow(false);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setShow(false);
    setAnchorEl(null);
  };
  const handleClickLogOut = () => {
    dispatch(doLogOut());
    navigate("/");
  };
  return (
    <div
      className={` flex flex-col justify-between fixed top-[3.49rem] z-0 bg-white border-0 border-none w-full h-[calc(100%-3.49rem)] p-[16px] cap ${
        show ? "active" : "unactive"
      } lg:relative lg:top-0 lg:!left-[0%]  lg:flex-row lg:mb-0 lg:justify-end lg:p-0 lg:gap-[5%]`}
    >
      <div className=" flex flex-col p-[5px] lg:flex-row lg:gap-[40px] lg:text-[16px] lg:justify-end cap">
        {navBarItems.map((item) => {
          const open = Boolean(anchorEls[item.id]);
          return (
            <div
              key={item.id}
              className="border-b border-b-gray-300 lg:border-none lg:text-center"
            >
              {item.subNav.length > 0 ? (
                <>
                  <Button
                    id={`button-${item.id}`}
                    aria-controls={open ? `menu-${item.id}` : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={(event) => handleClickNavMenu(event, item.id)}
                    sx={navItemStyle}
                    className="lg:!pl-[8px] lg:text-center"
                  >
                    <span className="flex flex-row gap-2 items-center">
                      {item.navItem}
                      <RiArrowDropDownLine></RiArrowDropDownLine>
                    </span>
                  </Button>
                  <Menu
                    id={`menu-${item.id}`}
                    anchorEl={anchorEls[item.id]}
                    open={open}
                    onClose={() => handleCloseNavMenu(item.id)}
                    MenuListProps={{
                      "aria-labelledby": `button-${item.id}`,
                    }}
                    sx={{ display: "block", paddingLeft: "0px", width: "100%" }}
                  >
                    {item.subNav.map((subItem) => (
                      <MenuItem
                        key={subItem.id}
                        onClick={() => handleCloseNavMenu(item.id)}
                        sx={{
                          fontSize: "16px!important",
                          textTransform: "capitalize",
                        }}
                      >
                        <NavLink to={subItem.sublink}>{subItem.name}</NavLink>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <Button sx={navItemStyle} onClick={() => setShow(false)}>
                  <NavLink to={item.link}>{item.navItem}</NavLink>
                </Button>
              )}
            </div>
          );
        })}
      </div>
      {/* user */}
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-4">
        <div className="mt-[20px] flex flex-row gap-2 items-center lg:mt-0 ">
          <FaRegUserCircle size={20} className="text-[18px]" />
          <span className="font-bold text-lg flex flex-row items-center lg:text-[12px]">
            {isAuthenticated ? (
              <>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClickUserMenu}
                  className="text-black !normal-case font-primary !text-[18px]"
                >
                  <span className="flex flex-row gap-2 items-center">
                    {`Hello ${user && user.username ? user.username : "User"}`}
                    <RiArrowDropDownLine></RiArrowDropDownLine>
                  </span>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleCloseUserMenu}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <NavLink
                      to={USER_PROFILE_LINK}
                      className="flex flex-row gap-2 items-center"
                    >
                      <CiSettings></CiSettings>
                      Account
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <NavLink
                      to={USER_ORDER_LINK}
                      className="flex flex-row gap-2 items-center"
                    >
                      <PiBreadLight></PiBreadLight>My order
                    </NavLink>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClickLogOut();
                    }}
                    className="flex flex-row gap-2 items-center"
                  >
                    <CiLogout></CiLogout>Logout
                  </MenuItem>
                </Menu>
                {/* <NavDropdown
                  className=" capitalize font-[Alegreya] m-0 text-sm w-fit"
                  title={`Hello ${
                    user && user.username ? user.username : "User"
                  }`}
                >
                  {userOptions &&
                    userOptions.map((option) => {
                      return (
                        <NavDropdown.Item key={option.id}>
                          <NavLink
                            to={option.link}
                            className="flex flex-row gap-2 cap-2 items-center capitalize  hover:!text-[#ff6d00]"
                            onClick={() => setShow(false)}
                          >
                            {option.icon}
                            <p className="m-0">{option.name}</p>
                          </NavLink>
                        </NavDropdown.Item>
                      );
                    })}
                  <NavDropdown.Item onClick={() => handleClickLogOut()}>
                    <NavLink
                      className="flex flex-row gap-2 cap-2 items-center capitalize hover:!text-[#ff6d00]"
                      onClick={() => setShow(false)}
                    >
                      <CiLogout></CiLogout>
                      <p className="m-0">Logout</p>
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown> */}
              </>
            ) : (
              <span className="flex flex-row text-[18px]">
                <NavLink
                  className="navlink-hover border-r border-r-gray-300 pr-1"
                  to="/login"
                  style={{ "--line-hover": "var(--line-hover-black)" }}
                  onClick={() => setShow(false)}
                >
                  Login
                </NavLink>

                <NavLink
                  className="navlink-hover pl-1"
                  to="/sign-up"
                  style={{ "--line-hover": "var(--line-hover-black)" }}
                  onClick={() => setShow(false)}
                >
                  Sign up
                </NavLink>
              </span>
            )}
          </span>
        </div>
        {/* <Language></Language> */}
      </div>
    </div>
  );
};
export default Navbar;
