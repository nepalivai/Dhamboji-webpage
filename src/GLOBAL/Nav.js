import React, { useState } from "react";
import logo from ".././image/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const Button = (props) => {
    return <button>{props.children}</button>;
  };
  let [open, setOpen] = useState(false);
  return (
    <div className=" flex justify-center">
      <nav className=" w-full bg-opacity-20 lg:w-auto bg-black fixed z-10 backdrop-blur-[15px] shadow-xl pl-10 pr-10 flex gap-10 items-center rounded-2xl">
        <a href="/" className="flex">
          <img
            className=" w-[60px] px-[5px] py-[5px] z-10 bottom-0 rounded-lg"
            src={logo}
          ></img>
          <span class="self-center text-base font-semibold whitespace-nowrap dark:text-white text-white hover:text-cyan-300 bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            {" "}
            Dhamboji secondary school
          </span>
        </a>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-3 lg:hidden cursor-pointer "
        >
          <FontAwesomeIcon icon={open ? faClose : faBars} />
        </div>
        <ul
          className={` bg-opacity-20 lg:w-auto backdrop:blur-xl bg-black z-10 lg:bg-transparent lg:bg-opacity-0 shadow-xl lg:contents lg:items-center pt-5 pb-5 absolute lg:static text-4xl lg:text-[25px] w-auto right-5 text-center px-5 lg:pl-0 transition-all duration-500 ease-linear ${
            open ? "top-16 " : "top-[-350px]"
          }`}
        >
          <a href="/">
            <li className=" text-white hover:text-5xl lg:hover:text-[30px] hover:text-cyan-300 ">
              <span className=" bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                {" "}
                Home
              </span>
            </li>
          </a>
          <li className=" text-white hover:text-5xl lg:hover:text-[30px] hover:text-cyan-300 ">
            <span className="bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              <Link to="/about">About us</Link>
            </span>
          </li>
          <li className="text-white hover:text-5xl lg:hover:text-[30px] hover:text-cyan-300 ">
            <span className="bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              <Link to="/contact">Contact</Link>
            </span>
          </li>
          <li>
            <span className="text-white hover:text-5xl lg:hover:text-[30px] hover:text-cyan-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              <Link to="/news">News</Link>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
