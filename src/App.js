import "./index.css";
import logo from "./image/logo.png";
import clz from "./image/clz.jpg";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App ">
      <div className="header h-screen bg-jet">
        {/*----------------------------------nav bar----------------------*/}
        <div className="  flex justify-center sticky top-0">
          <nav className=" bg-opacity-20 justify-between bg-black w-[100%] backdrop-blur-[15px] pl-10 pr-10 flex space-x-50 items-center   ">
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
        {/*-------------------------Banner section ----------------------*/}
        <div
          className="hero h-[90%] shadow-inner w-full bg-cover grid grid-cols-2 gap-4 bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${clz})` }}
        >
          <div className="flex justify-center">
            <div className="flex flex-col justify-end bottom-[15%] absolute align-middle">
              <p className=" text-center text-[45px] top-0 font-bold text-white ">
                Don't stop until,
              </p>
              <p className=" text-center text-[50px] top-0 font-bold text-white ">
                you're proud.
              </p>
            </div>
          </div>
          <div className="flex justify-center text-white items-center">
            <div className="intro backdrop-blur-[8px] shadow-2xl w-[80%] h-[75%] flex bg-white/10 flex-col justify-center items-center ">
              <div className=" text-lg top-0 right-0 font-medium text-jet text-right">
                <p> ----WELCOME</p>
              </div>
              <div className=" font-extrabold text-right text-[55px] ">
                <p> Dhamboji </p>
                <p>high school </p>
              </div>
              <div>
                <p className=" text-center text-xs">
                  Established in 1957 AD (2014 B.S), Dhambojhi Secondary School
                  is a community-based academic institute located in
                  Nepalgunj-1, Dhambojhi, Waterpark, Nepalgunj, Banke district
                  of Nepal. The school was initiated by well-known academic
                  personalities and is affiliated to the National Examinations
                  Board (NEB) while being approved by the Ministry of Education.{" "}
                </p>
              </div>
              <button className=" bg-secondary px-2 py-1 rounded-xl hover:bg-cyan-200">
                See more
              </button>
            </div>
          </div>
        </div>
        {/*--------------courses------------------*/}
        <div></div>
        <div></div>
        {/*--------------------------------*/}
        {/*--------------------------------*/}
      </div>
    </div>
  );
}

export default App;
