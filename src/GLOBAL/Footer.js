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
import { Link } from "react-router-dom";

function Footer() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
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
    <div className=" flex flex-col h-auto justify-center bg-jet items-center text-white  ">
      <div className=" grid h-[auto] lg:grid-flow-col w-[100%] pt-3 pb-2 md:grid md:grid-flow-row ">
        <div className=" items-center pt-5 lg:pt-0 flex justify-center flex-col ">
          <img src={logo} className="h-60 lg:h-40 rounded-lg"></img>
          <p className="p-5 text-4xl lg:text-lg opacity-70">
            Waterpark, Nepalgunj, Banke
          </p>
          <ul className="lg:flex hidden items-center justify-center hi  flex-row ">
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
        <div className="grid pt-4 lg:pt-0 grid-flow-col">
          <div className="  flex flex-col lg:justify-start lg:items-start justify-center items-center ">
            <p className=" text-5xl lg:text-xl font-bold ">QUICK LINKS</p>
            <div className=" grid-flow-row grid gap-4 p-5 text-4xl lg:text-lg">
              <p>
                <Link to="/">Home</Link>
              </p>
              <p>
                <Link to="/about">About us</Link>
              </p>
              <p>
                <Link to="/contact"> Contact</Link>
              </p>
              <p>
                <Link to="/news">News</Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 lg:justify-start lg:items-start">
            <p className="text-5xl lg:text-xl font-bold">CONTACT US</p>
            <div className="text-2xl lg:text-xl">
              <form onSubmit={handleSubmit}>
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
                  className=" bg-eblack active:bg-jet text-white px-5 py-2 text-xl rounded-md hover:translate-y-[-5px] transition hover:shadow-button mt-3"
                />
              </form>
            </div>
          </div>
        </div>
        <ul className="flex lg:hidden items-center justify-center pt-6 text-5xl flex-row ">
          <li className="px-3">
            <a href="https://www.facebook.com/profile.php?id=100094606746363">
              <FontAwesomeIcon icon={faFacebook} className=" pr-3" />
            </a>
          </li>
          <li className="px-3">
            <FontAwesomeIcon icon={faInstagram} className=" pr-3" />
          </li>
          <li className="px-3">
            <FontAwesomeIcon icon={faWhatsapp} className=" pr-3" />
          </li>
        </ul>
      </div>
      <div className=" flex flex-col lg:flex-row justify-between font-sans text-xs bg-eblack w-full p-1 text-center">
        <div className=" text-4xl lg:text-xl">
          <FontAwesomeIcon icon={faCopyright} className=" pr-3 " />
          2024 Dhambojhi high school. All Rights Reserved.
        </div>{" "}
        <a href="https://github.com/nepalivai">
          <p className=" text-center text-3xl mt-4 lg:mt-0 lg:text-right lg:text-xl">
            Designed by Rishav karmacharya
          </p>
        </a>
      </div>
    </div>
  );
}

export default Footer;
