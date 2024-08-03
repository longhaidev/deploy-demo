import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// styles
import "./UserMenu.scss";
// UI
import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  Tooltip,
  Typography,
  MenuItem,
  Menu,
  Settings,
  PersonAdd,
  Divider,
} from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { CiMenuBurger } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { PiBreadLight } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineManageAccounts } from "react-icons/md";

export default function UserMenu(props) {
  const accountOptions = [
    {
      id: 1,
      name: "Profile",
      link: "/user/account/profile",
    },
    {
      id: 2,
      name: "Favorite",
      link: "/user/account/favorite",
    },
    {
      id: 3,
      name: "Address",
      link: "/user/account/address",
    },
    {
      id: 4,
      name: "Change password",
      link: "/user/account/change-password",
    },
  ];
  const ordersOptions = [
    {
      id: 1,
      name: "All",
      link: "/user/order/all",
    },
    {
      id: 2,
      name: "Pending",
      link: "/user/order/pending",
    },
    {
      id: 3,
      name: "Delivering",
      link: "/user/order/delivering",
    },
    {
      id: 4,
      name: "Delivered",
      link: "/user/order/delivered",
    },
    {
      id: 5,
      name: "Completed",
      link: "/user/order/completed",
    },
    {
      id: 6,
      name: "Canceled",
      link: "/user/order/canceled",
    },
  ];
  const muiArrcordionSummaryStyles = {
    minHeight: "0px !important",

    ".css-eqpfi5-MuiAccordionSummary-content.Mui-expanded": {
      marginTop: "0px !important",
    },
    ".css-ovizn-MuiPaper-root-MuiAccordion-root.Mui-expanded": {
      margin: "0px !important",
    },
    ".MuiAccordionSummary-content": {
      marginTop: "0px !important",
    },
    ".Mui-expanded": {
      marginTop: "0px !important",
    },
  };
  const muiArrcordionStyles = {
    marginBottom: "0px !important",
    boxShadow: "none",
    border: "0.5px gray",
    "&::before": {
      height: "0px",
    },
  };
  const muiArrcordionDetailStyles = {
    maxWidth: "120px !important",
    marginLeft: "auto !important",
    marginTop: "10px",
    padding: "0px",
  };
  // props
  const { currentPage } = props;
  // state
  const [anchorEl, setAnchorEl] = useState(null);
  const [pageSelected, setPageSelected] = useState("");
  const open = Boolean(anchorEl);
  // didMount
  useEffect(() => {
    getPageSelected();
  }, [currentPage]);
  // handle event
  const getPageSelected = () => {
    let tmp = currentPage;
    tmp = tmp?.charAt(0).toUpperCase() + currentPage.slice(1);
    if (tmp === "Change-password") {
      setPageSelected("Change password");
    } else {
      setPageSelected(tmp);
    }
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    window.scroll(0, 0);
    setAnchorEl(null);
  };
  return (
    <>
      <div className="md:hidden">
        <div className="toggle-user-menu !text-[16px]">
          <Avatar
            sx={{
              borderRadius: "none",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            <CiMenuBurger onClick={handleClick}></CiMenuBurger>
          </Avatar>
        </div>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Accordion sx={muiArrcordionStyles} defaultExpanded>
            <AccordionSummary>
              <MenuItem className="w-full flex flex-row gap-2 justify-center items-center">
                <FaRegUserCircle></FaRegUserCircle>
                <p className="m-0 font-text-primary">Account</p>
              </MenuItem>
            </AccordionSummary>
            <AccordionDetails>
              {accountOptions &&
                accountOptions.map((option) => {
                  return (
                    <NavLink
                      key={option.id}
                      to={option.link}
                      onClick={handleClose}
                    >
                      <p
                        className={`font-text-primary pl-[25px] pr-[14px] pb-[5px] m-0 hover:!text-[#ff6d00] ${
                          option.name == pageSelected
                            ? "text-color-hover"
                            : "text-color-primary"
                        }`}
                      >
                        {option.name}
                      </p>
                    </NavLink>
                  );
                })}
            </AccordionDetails>
          </Accordion>
          <Accordion sx={muiArrcordionStyles}>
            <AccordionSummary>
              <MenuItem className="w-full flex flex-row gap-2 justify-center items-center">
                <PiBreadLight></PiBreadLight>
                <p className="m-0 font-text-primary">My Orders</p>
              </MenuItem>
            </AccordionSummary>
            <AccordionDetails>
              {ordersOptions &&
                ordersOptions.map((option) => {
                  return (
                    <NavLink
                      key={option.id}
                      to={option.link}
                      onClick={handleClose}
                    >
                      <p
                        className={`font-text-primary pl-[25px] pr-[14px] pb-[5px] m-0 hover:!text-[#ff6d00] ${
                          option.name == pageSelected
                            ? "text-color-hover"
                            : "text-color-primary"
                        }`}
                      >
                        {option.name}
                      </p>
                    </NavLink>
                  );
                })}
            </AccordionDetails>
          </Accordion>
        </Menu>
      </div>
      {/* Tablet & PC */}
      <div className="hidden md:flex md:flex-col md:items-start md:gap-5 md:sticky top-[73px]">
        <h2 className=" w-[90%] md:w-[95%] font-section-sub-heading font-semibold text-left md:mb-4">
          User Account
        </h2>
        <Accordion sx={muiArrcordionStyles} defaultExpanded>
          <AccordionSummary
            id="summary"
            sx={muiArrcordionSummaryStyles}
            expandIcon={<RiArrowDropDownLine size={25}></RiArrowDropDownLine>}
          >
            <span className="w-full flex flex-row gap-2 justify-end items-center">
              <MdOutlineManageAccounts></MdOutlineManageAccounts>
              <p className="m-0 font-small-heading">My Profile</p>
            </span>
          </AccordionSummary>
          <AccordionDetails id="detail" sx={muiArrcordionDetailStyles}>
            {accountOptions &&
              accountOptions.map((option) => {
                return (
                  <NavLink
                    key={option.id}
                    to={option.link}
                    onClick={handleClose}
                  >
                    <p
                      className={`font-text-primary pr-[14px] pb-[5px] m-0 hover:!text-[#ff6d00] ${
                        option.name == pageSelected
                          ? "text-color-hover"
                          : "text-color-primary"
                      }`}
                    >
                      {option.name}
                    </p>
                  </NavLink>
                );
              })}
          </AccordionDetails>
        </Accordion>
        <Accordion sx={muiArrcordionStyles}>
          <AccordionSummary
            expandIcon={<RiArrowDropDownLine size={25}></RiArrowDropDownLine>}
            sx={muiArrcordionSummaryStyles}
          >
            <span className="w-full flex flex-row gap-2 justify-end items-center">
              <PiBreadLight></PiBreadLight>
              <p className="m-0 font-small-heading">My Orders</p>
            </span>
          </AccordionSummary>
          <AccordionDetails sx={muiArrcordionDetailStyles}>
            {ordersOptions &&
              ordersOptions.map((option) => {
                return (
                  <NavLink
                    key={option.id}
                    to={option.link}
                    onClick={handleClose}
                  >
                    <p
                      className={`m-0 font-text-primary mb-1 hover:!text-[#ff6d00] ${
                        option.name == pageSelected
                          ? "text-color-hover"
                          : "text-color-primary"
                      }`}
                    >
                      {option.name}
                    </p>
                  </NavLink>
                );
              })}
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
