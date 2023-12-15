import "./index.css";
import logo from "./image/logo.png";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App ">
      <div className="header h-screen bg-[#b7b7b7]">
        {/*nav bar*/}
        <div className="  flex justify-center sticky top-0">
          <nav className=" bg-opacity-20 justify-between bg-black w-[100%] backdrop-blur-[10px] pl-10 pr-10 flex space-x-50 items-center   ">
            <a href="/" className="flex">
              <img
                className=" w-[60px] px-[5px] py-[5px] z-10 bottom-0 rounded-lg"
                src={logo}
              ></img>
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Dhamboji secondary school
              </span>
            </a>
            <ul className="flex z-10 items-center text-lg gap-[20px]  ">
              <a href="/">
                <li className=" text-white hover:text-[20px] hover:text-cyan-300 ">
                  Home
                </li>
              </a>
              <li className=" text-white hover:text-[20px] hover:text-cyan-300">
                About us
              </li>
              <li className="text-white hover:text-[20px] hover:text-cyan-300 ">
                Contact
              </li>
              <li className="text-white hover:text-[20px] hover:text-cyan-300 ">
                Blog
              </li>
              <li className="text-white hover:text-[20px] hover:text-cyan-300 ">
                News
              </li>
            </ul>
          </nav>
        </div>
        {/*Banner section plan-add a scrooling platter showcasing collage pic and few details*/}
      </div>
    </div>
  );
}

export default App;
