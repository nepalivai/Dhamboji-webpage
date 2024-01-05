import React from "react";
import logo from "../image/logo.png";

function Nav() {
  return (
    <div className=" flex justify-center">
      <nav className=" bg-opacity-20 w-auto  bg-black fixed z-10 backdrop-blur-[15px] shadow-xl pl-10 pr-10 flex gap-10 items-center rounded-2xl">
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
        <ul className="flex z-10 items-center text-lg gap-[20px]  ">
          <a href="/">
            <li className=" text-white hover:text-[20px] hover:text-cyan-300 ">
              <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                {" "}
                Home
              </span>
            </li>
          </a>
          <li className=" text-white hover:text-[20px] hover:text-cyan-300 ">
            <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              {" "}
              About us
            </span>
          </li>
          <li className="text-white hover:text-[20px] hover:text-cyan-300 ">
            <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              {" "}
              Contact
            </span>
          </li>
          <li className="text-white hover:text-[20px] hover:text-cyan-300 ">
            <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              {" "}
              Blog
            </span>
          </li>
          <li>
            <span className="text-white hover:text-[20px] hover:text-cyan-300 bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              {" "}
              News
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
