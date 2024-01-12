import React from "react";
import logo from ".././image/logo.png";

function Nav() {
  return (
    <div className=" flex flex-col h-auto justify-center bg-jet items-center text-white">
      <div className=" grid bg-neutral-800 h-[300px] grid-flow-col grid-col-4 w-[100%] ">
        <div className="bg-jet items-center flex justify-center flex-col ">
          <img src={logo} className="h-40 rounded-lg"></img>
          <p className="p-5 text-lg opacity-70"> Waterpark, Nepalgunj, Banke</p>
          <ul className="flex flex-row ">
            <li className="px-3">fb</li>
            <li className="px-3">insta</li>
            <li className="px-3">whatsapp</li>
            <li className="px-3">somthig</li>
          </ul>
        </div>
        <div className=" border-red-500 border-dashed border flex flex-col ">
          <p className=" text-xl font-bold">QUICK LINKS</p>
          <div className=" grid-flow-col">
            <p>about</p>
            <p>about</p>
            <p>about</p>
            <p>about</p>
            <p>about</p>
            <p>about</p>
            <p>about</p>
          </div>
        </div>
        <div>
          <p>contact us</p>
        </div>
      </div>
      <div className=" font-sans text-xs">
        ©2024 Dhambojhi high school. All Rights Reserved.
      </div>
    </div>
  );
}

export default Nav;
