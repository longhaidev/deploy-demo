import React from "react";
import { NavLink } from "react-router-dom";
// UI & icon
import { MdOutlineHome } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import Logo from "../../assets/Pictures/Logo2.png";
import License from "../License/License";
export default function Footer() {
  const footerContent = [
    {
      id: 1,
      title: "bakery",
      items: [
        {
          id: 1,
          name: "bread",
          direction: "/",
        },
        {
          id: 2,
          name: "cake",
          direction: "/",
        },
        {
          id: 3,
          name: "pastry",
          direction: "/",
        },
      ],
    },
    {
      id: 2,
      title: "beverages",
      items: [
        {
          id: 1,
          name: "coffee",
          direction: "/",
        },
        {
          id: 2,
          name: "tea & more",
          direction: "/",
        },
      ],
    },
    {
      id: 3,
      title: "company",
      items: [
        {
          id: 1,
          name: "home",
          direction: "/",
        },
        {
          id: 2,
          name: "our story",
          direction: "/",
        },
        {
          id: 3,
          name: "contact us",
          direction: "/",
        },
        {
          id: 4,
          name: "Privacy Policy",
          direction: "/",
        },
      ],
    },
  ];
  return (
    <div className="h-full" style={{ backgroundColor: "rgb(241, 218, 178)" }}>
      <div className="top-8 left-8 flex flex-col  gap-9 pt-3 pb-3 pl-5 pr-5 lg:mx-16">
        <div className="flex flex-col items-center justify-between max-w-[350px] w-[250px] h-[150px] translate-x-[-20px] md:ml-0 md:mr-0">
          <img className="w-full h-full object-scale-down" src={Logo}></img>
          <p className="text-[18px] text-center italic ">
            Freshly baked, everyday
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between ">
          {footerContent &&
            footerContent.length > 0 &&
            footerContent.map((section) => {
              return (
                <div key={section.id} className="flex flex-col mb-3">
                  <h4 className="font-semibold capitalize mb-2 text-[20px]">
                    {section.title}
                  </h4>
                  {section.items &&
                    section.items.length > 0 &&
                    section.items.map((item) => {
                      return (
                        <NavLink
                          key={item.id}
                          to={item.direction}
                          className="text-[18px] mb-1 no-underline text-black capitalize cursor-pointer navlink-hover w-fit"
                          style={{ "--line-hover": "var(--line-hover-black)" }}
                        >
                          {item.name}
                        </NavLink>
                      );
                    })}
                </div>
              );
            })}
          <div>
            <h4 className="font-semibold capitalize text-[20px] mb-2">
              Contact
            </h4>
            <span className="flex flex-row gap-2 text-[18px] items-center mb-2">
              <MdOutlineHome size={20} />
              <p className="m-0">123, Adress ABC, HCMC</p>
            </span>
            <span className="flex flex-row gap-2 text-[18px] items-center mb-2">
              <MdOutlineEmail size={20} />
              <p className="m-0">email@gmail.com</p>
            </span>
            <span className="flex flex-row gap-2 text-[18px] items-center mb-2">
              <MdOutlinePhone size={20} />
              <p className="m-0">+84 8787878787</p>
            </span>
          </div>
        </div>
      </div>
      <License></License>
    </div>
  );
}
