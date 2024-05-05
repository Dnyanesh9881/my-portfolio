import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants/index.js";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} py-5 w-full fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex  justify-between mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 "
          onClick={() => {
            setActive("");
            window.screenTop(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p>Dnyaneshwar Suryawanshi</p>
        </Link>
        <ul className="list-none hidden sm:flex gap-10">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className={`${
                active === item.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium`}
              onClick={() => setActive(nav.title)}
            >
              <NavLink href={`/${item.id}`}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
            {navLinks.map((item) => (
              <li
                key={item.id}
                className={`font-poppins text-[16px] font-medium ${
                  active === item.title ? "text-white" : "text-secondary"
                }`} 
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.title);
                }}
              >
                <NavLink href={`/${item.id}`}>{item.title}</NavLink>
              </li>
            ))}
            </ul>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
