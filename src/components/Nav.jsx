import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  function toggleMenu() {
    setIsActive((prevIsActive) => !prevIsActive);
  }

  let toggleCheck = isActive ? " open" : "";
  let maxHeightStyle = isActive ? { maxHeight: "300px" } : { maxHeight: "0" };
  let firstSpan = isActive
    ? { transform: "rotate(45deg) translate(10px, 5px)", opacity: "1" }
    : { transform: "none" };
  let secontSpan = isActive ? { opacity: "0" } : {};
  let thirdSpan = isActive
    ? { transform: "rotate(-45deg) translate(10px, -5px)" }
    : {};

  return (
    <header className="padding-x py-6 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={90} height="29px" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-[#147efb]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden relative inline-block">
          <div
            className={`flex flex-col justify-between h-6 w-[30px] cursor-pointer hamburger-icon${toggleCheck}`}
            id="hamburger-icon"
            onClick={toggleMenu}
          >
            <span className="span-style" style={firstSpan}></span>
            <span className="span-style" style={secontSpan}></span>
            <span className="span-style" style={thirdSpan}></span>
          </div>
          <div
            className={`absolute text-[1.5rem] max-sm:text-[1rem] w-fit top-full right-0 max-h-0 overflow-hidden transition-all delay-100 ease-in-out${toggleCheck}`}
            id="menu-links"
            onClick={toggleMenu}
            style={maxHeightStyle}
          >
            <ul className="flex w-40 max-sm:w-[100px] flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              {navLinks.map((item) => (
                <li key={item.label} className="">
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-slate-gray hover:text-[#147efb] block p-[5px] max-sm:p-[2px] mt-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
