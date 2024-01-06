import "./index.css";
import clz from "./image/clz.jpg";
import Nav from "./GLOBAL/Nav/Nav.js";
import { useState } from "react";

function App() {
  {
    /* news  */
  }
  const [cards] = useState([
    {
      title: "Dhamboji 101",
      text: `2 Dogs die in a car accident whwile an ugly man watches them without same`,
    },
    {
      title: "card-2",
      text: `something something`,
    },
    {
      image: "",
      title: "card-3",
      text: `something something`,
    },
    {
      image: "",
      title: "card-4",
      text: `something something`,
    },
    {
      image: "",
      title: "card-5",
      text: `something something`,
    },
  ]);
  {
    /* course  */
  }
  const [course] = useState([
    {
      title: "Dhamboji 101",
      text: `2 Dogs die in a car accident whwile an ugly man watches them without same`,
    },
    {
      title: "card-2",
      text: `something something`,
    },
    {
      image: "",
      title: "card-3",
      text: `something something`,
    },
    {
      image: "",
      title: "card-4",
      text: `something something`,
    },
    {
      image: "",
      title: "card-5",
      text: `something something`,
    },
    {
      image: "",
      title: "card-6",
      text: `something something`,
    },
  ]);
  return (
    <div className="App ">
      <Nav />
      {/*-------------------------Banner section ----------------------*/}
      <div className="h-screen z-5">
        <div
          className="hero h-[100%] shadow-inner  bg-cover grid grid-cols-2 gap-4 bg-no-repeat bg-center max-lg:flex max-lg:flex-col"
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
              </div>
              <a href="/about">
                <button className=" bg-secondary px-2  items-center text-base rounded-xl animate-bounce hover:shadow-black hover:shadow-2xl hover:text-lg">
                  SEE MORE
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*-------------NEWS-------------------*/}
      <div className="news flex h-auto w-[100%] items-start bg-transparent pt-4">
        <div className="oval h-[450px] w-[450px] bg-red-500 opacity-90 absolute rounded-full z-[-5] -translate-y-[150px] translate-x-[-110px] flex justify-end items-center"></div>
        <div className="container h-auto w-[100%] text-center flex flex-row ">
          <div className="latest w-[70%] flex-col items-center justify-between pr-3">
            <div className="ti flex flex-row justify-between">
              <p className=" text-[50px] font-extrabold opacity-100 text-black translate-x-[10px]">
                Latest News
              </p>
              <p className=" text-[25px] flex items-center font-extrabold opacity-60 text-blue-600  translate-x-[-10px] underline">
                SEE ALL
              </p>
            </div>
            <div className="event_list bg-primary w-[100%] h-[400px] text-4xl font-bold flex overflow-auto">
              <div className="cards flex items-center translate-x-3 gap-4 scrollbar-thin scrollbar-track-primary scrollbar-corner-secondary scrollbar-thumb-slate-300  ">
                {cards.map((card, i) => (
                  <div
                    key={i}
                    className="card h-[90%] w-80 bg-opacity-20 bg-white backdrop-blur-[15px] shadow-xl flex flex-col rounded-2xl "
                  >
                    <div>
                      <img
                        className=" w-[100%] block object-cover rounded-t-2xl"
                        src={clz}
                      ></img>
                    </div>
                    <div className="pt-4">
                      <h3 className="title h-auto w-[100%] text-eblack text-3xl font-bold text-left pl-3">
                        {card.title}
                      </h3>
                      <p className="text h-auto w-[100%] text-jet text-xl font-semibold text-left pl-3 ">
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="upcomeing w-[30%] flex flex-col">
            <div className="flex content-center justify-center">
              <p className="text-[35px] font-serif font-bold opacity-100 text-black  whitespace-nowrap">
                Upcomeing Event
              </p>
            </div>
            <div className="flex flex-col  pt-5 content-center justify-center">
              <p className="text-[25px] opacity-80 font-normal text-black flex-wrap">
                No Upcomeing
              </p>
              <p className="text-[25px] opacity-80 font-normal text-black flex-wrap">
                Event on The Moment
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*--------------courses------------------*/}
      <div className=" h-auto w-[100%]  pt-6 overflow-hidden ">
        <div className="oval h-[300px] w-[300px] bg-red-500 opacity-90 absolute rounded-full z-[-5] right-0 -translate-y-[150px]  "></div>
        <p className="text-[50px] font-extrabold text-center opacity-100 text-black translate-x-[10px]">
          Courses
        </p>
        <div className=" grid grid-cols-3 grid-rows-2 gap-5 p-10">
          {course.map((course, i) => (
            <div
              key={i}
              className="card h-[auto] w-80 bg-white  shadow-xl flex flex-col rounded-2xl "
            >
              <div>
                <img
                  className=" w-[100%] block object-cover rounded-t-2xl"
                  src={clz}
                ></img>
              </div>
              <div className="pt-4">
                <h3 className="title h-auto w-[100%] text-eblack text-3xl font-bold text-left pl-3">
                  {course.title}
                </h3>
                <p className="text h-auto w-[100%] text-jet text-xl font-semibold text-left p-3 ">
                  {course.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*--------------------------------*/}
      <div>
        <div class="section-body h-auto">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <div class="embeded_map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.2554797542!2d81.6262151743212!3d28.077748975972206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998671773c7e34f%3A0xe85908dc0d1c6717!2sDhambojhi%20Secondary%20School!5e0!3m2!1sen!2snp!4v1685325210940!5m2!1sen!2snp"
                  width="600"
                  height="450"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>{" "}
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="list-unstyled contact-details">
                <li>
                  <span class="fa fa-map-marker"></span> Nepalgunj-1, Dhambojhi,
                  Waterpark, Nepalgunj, Banke, Nepal
                </li>
                <li>
                  <span class="fa fa-user"></span> Dhambojhi Secondary School
                </li>
                <li>
                  <span class="fa fa-phone"></span>{" "}
                  <a href="tel:+977-81-525491">+977-81-525491</a>
                </li>
                <li>
                  <span class="fa fa-phone"></span>{" "}
                  <a href="tel:+977-81-402030"> +977-81-402030</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
