import "./index.css";
import logo from "./image/logo.png";
import clz from "./image/clz.jpg";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App ">
      {/*----------------------------------nav bar----------------------*/}
      <nav className=" bg-opacity-20 w-screen justify-between bg-black fixed z-10 backdrop-blur-[15px] pl-10 pr-10 flex space-x-50 items-center   ">
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
      {/*-------------------------Banner section ----------------------*/}
      <div className="h-screen z-5">
        <div
          className="hero h-[100%] shadow-inner  bg-cover grid grid-cols-2 gap-4 bg-no-repeat bg-center"
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
            <div className="intro rounded-3xl backdrop-blur-[8px] shadow-2xl w-[80%] h-[75%] flex bg-white/10 flex-col justify-center items-center gap-2 ">
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
              </div>{" "}
              <a href="/about">
                <button className=" bg-secondary px-2 items-center text-base rounded-xl animate-bounce hover:shadow-black hover:shadow-2xl hover:text-lg">
                  SEE MORE
                </button>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*-------------NEWS-------------------*/}
      <div className="news flex h-screen w-[100%] items-start bg-transparent">
        <div className="oval h-[450px] w-[450px] bg-red-500 opacity-90 absolute rounded-full z-[-5] -translate-y-[150px] translate-x-[-110px] flex justify-end items-center"></div>
        <div className="container h-[600px] w-[100%] justify-center flex w-[100%] ">
          <div className="title flex justify-between">
            <div>
              {" "}
              <p className=" text-[50px] font-extrabold opacity-100 text-black translate-x-[-10px]">
                {" "}
                Latest News{" "}
              </p>
            </div>
            <div>
              <p className=" text-[50px] font-extrabold opacity-100 text-black translate-x-[-10px]">
                {" "}
                SEE ALL{" "}
              </p>
            </div>
          </div>
          <div className="event_list "></div>
          {/* <div className="flex">
            <div className="latest h-screen w-[80%] absolute translate-x-12">
              <div>dfgsdfgj</div>
            </div>
            <div className="upcomeing  h-screen w-[20%] absolute"></div> 

          </div>*/}
        </div>
      </div>
      {/*--------------courses------------------*/}
      <div className=" h-screen ">
        <div>
          <div></div>
        </div>
      </div>
      <div></div>
      {/*--------------------------------*/}
    </div>
  );
}

export default App;
