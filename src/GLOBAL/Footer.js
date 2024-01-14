import React from "react";
import logo from ".././image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Footer() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((perv) => {
      return { ...perv, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <div className=" flex flex-col h-auto justify-center bg-jet items-center text-white pt-4">
      <div className=" grid h-[300px] grid-flow-col grid-col-4 w-[100%] ">
        <div className=" items-center flex justify-center flex-col ">
          <img src={logo} className="h-40 rounded-lg"></img>
          <p className="p-5 text-lg opacity-70"> Waterpark, Nepalgunj, Banke</p>
          <ul className="flex flex-row ">
            <li className="px-3">
              <FontAwesomeIcon icon={faFacebook} className=" pr-3" />
            </li>
            <li className="px-3">
              <FontAwesomeIcon icon={faInstagram} className=" pr-3" />
            </li>
            <li className="px-3">
              <FontAwesomeIcon icon={faWhatsapp} className=" pr-3" />
            </li>
          </ul>
        </div>
        <div className="  flex flex-col ">
          <p className=" text-xl font-bold ">QUICK LINKS</p>
          <div className=" grid-flow-row grid gap-4 p-5 text-lg">
            <p>Home</p>
            <p>About us</p>
            <p>Contact</p>
            <p>News</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-xl font-bold">CONTACT US</p>
          <div>
            <form onSubmit={handleSubmit} className="gap-3">
              <label>
                Enter your name:<br></br>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  className="text-black rounded-md"
                />
              </label>
              <br></br>
              <label>
                Email:<br></br>
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  className="text-black rounded-md"
                />
              </label>
              <br></br>
              <label>
                Message:<br></br>
                <input
                  type="text"
                  name="message"
                  onChange={handleChange}
                  className="text-black rounded-md"
                />
              </label>
              <br></br>
              <input
                type="submit"
                className=" bg-jet text-white px-5 py-2 text-xl rounded-md hover:translate-y-[-5px] transition hover:shadow-button mt-3"
              />
            </form>
          </div>
        </div>
      </div>
      <div className=" flex justify-between font-sans text-xs bg-eblack w-full text-center">
        <div className="">
          <FontAwesomeIcon icon={faCopyright} className=" pr-3 " />
          2024 Dhambojhi high school. All Rights Reserved.
        </div>
        <p className="text-right">Designed by Rishav karmacharya</p>
      </div>
    </div>
  );
}

export default Footer;
