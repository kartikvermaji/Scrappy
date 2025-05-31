import React, { useState } from "react";
import { faImage, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/lensroom logo black.png";
import { Link, useLocation } from "react-router-dom";

const Nav2 = () => {
  const location = useLocation();
  return (
    <div>
      <div className="flex justify-between lg:py-1 px-2 md:px-16 items-center fixed top-0 bg-slate-50 w-[100vw]">
        <div>
          <a href="/">
            {" "}
            <img src={logo} alt="" className="h-14  md:h-12" />
          </a>
        </div>
        <div className="lg:text-lg md:text-xl text-sm space-x-2 md:space-x-10 lg:space-x-24 items-center justify-center text-gray-900">
          <a
            href="/about"
            className={`hover:text-gray-400 duration-200 ${
              location.pathname === "/about"
                ? "border-b-2 pb-2 border-black"
                : ""
            }`}
          >
            ABOUT
          </a>
          <a
            href="/services"
            className={`hover:text-gray-400 duration-200 ${
              location.pathname === "/services"
                ? "border-b-2 pb-2 border-black"
                : ""
            }`}
          >
            SERVICES
          </a>
          <a
            href="/community"
            className={`hover:text-gray-400 duration-200 ${
              location.pathname === "/community"
                ? "border-b-2 pb-2 border-black"
                : ""
            }`}
          >
            COMMUNITY
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav2;
