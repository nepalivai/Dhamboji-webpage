import "../index.css";
import clz from "../image/clz.jpg";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMailBulk,
  faPhone,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Home() {
  {
    /* news  */
  }
  const [cards, setCards] = useState([
    {
      title: "Dhamboji 101",
      text: `2 Dogs die in a car accident whwile an ugly man watches them without same`,
      type: "PROGRAM",
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
      image:
        "https://i.pinimg.com/236x/42/b7/e3/42b7e3e204ad93f3e39e7bd37b0bfb1f.jpg",
      title: "Management and business",
      text: `CAuse baout business`,
    },
    {
      image:
        "https://i.pinimg.com/236x/69/42/8b/69428b567c9930b5dbca40b266397112.jpg",
      title: "Science",
      text: `something something`,
    },
    {
      image:
        "https://i.pinimg.com/236x/f8/ab/5a/f8ab5a5ebfb0d25777211e71a7548efd.jpg",
      title: "Computer enginnering",
      text: `something something`,
    },
    {
      image:
        "https://i.pinimg.com/236x/c8/92/ad/c892ad63efdee5df021ab09568bf4726.jpg",
      title: "Education",
      text: `something something`,
    },
    {
      image:
        "https://i.pinimg.com/236x/08/31/3b/08313b6595a92d396480943ff1dd8fe1.jpg",
      title: "LAW",
      text: `something something`,
    },
    {
      image:
        "https://i.pinimg.com/236x/0a/d5/aa/0ad5aae27a77ee5df73f46aef18b76c4.jpg",
      title: "Huminity",
      text: `something something`,
    },
  ]);
  {
    /* course  */
  }
  const [review] = useState([
    {
      name: "dead 101",
      position: "damn",
      text: `need to fetch some review`,
      image: "",
      Link: "",
    },
    {
      name: "card-2",
      position: "damn",
      text: `something something`,
      image: "",
      Link: "",
    },
    {
      name: "card-3",
      position: "damn",
      text: `something something`,
      image: "",
      Link: "",
    },
    {
      name: "card-4",
      position: "damn",
      text: `something something`,
      image: "",
      Link: "",
    },
    {
      name: "card-5",
      position: "damn",
      text: `something something`,
      image: "",
      Link: "",
    },
    {
      name: "card-6",
      position: "damn",
      text: `something something`,
      image: "",
      Link: "",
    },
  ]);
  return (
    <div className="App selection:bg-green-600 ">
      {/*-------------------------Banner section ----------------------*/}
      <div className="z-5">
        <div
          className="hero h-[1500px] lg:h-screen shadow-inner  bg-cover bg-no-repeat bg-center p-8 flex flex-col justify-between lg:flex-row "
          style={{ backgroundImage: `url(${clz})` }}
        >
          <div className="flex justify-center text-white items-center">
            <div className="intro mt-40 h-auto w-auto  rounded-3xl backdrop-blur-[8px] lg:mt-[60px] shadow-2xl py-3 px-10 flex items-center bg-white/10 flex-col justify-center  gap-2 ">
              <div className="top-0 right-0 ">
                <p className=" text-8xl w-[100%] lg:text-6xl font-extrabold text-left text-black">
                  WELCOME
                </p>
                <div className="w-[200px] h-[3px] -translate-x-[0px] bg-black rounded-md float-left"></div>
              </div>
              <div className=" font-bold text-left text-7xl text-eblack lg:text-white lg:text-[55px] ">
                <p> DHAMBOJI </p>
                <p>HIGH SCHOOL </p>
              </div>
              <a href="/about">
                <button className=" bg-primary text-white mt-4 px-5 py-2 rounded-md hover:translate-y-[-5px] text-3xl transition hover:shadow-button">
                  LEARN MORE
                </button>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-end pb-10 align-middle">
              <p className=" text-center text-5xl lg:text-[50px] top-0 font-bold text-white ">
                The future belongs to those who,
              </p>
              <p className=" text-center text-5xl lg:text-[50px] top-0 font-bold text-white ">
                believe in the beauty of their dreams.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*-------------NEWS-------------------*/}
      <div className="news flex h-auto w-[100%] items-start bg-transparent pt-4">
        <div className="oval h-[450px] w-[450px] bg-red-500 opacity-90 absolute rounded-full z-[-5] -translate-y-[150px] translate-x-[-110px] flex justify-end items-center"></div>
        <div className="container flex-col h-auto text-center flex md:flex-col lg:flex-row items-center ">
          <div className="latest w-[80%] lg:w-[70%] lg:pr-3">
            <div className="ti flex flex-row justify-between">
              <p className=" text-7xl lg:text-[50px] font-extrabold opacity-100 text-black translate-x-[10px]">
                Latest News
              </p>
              <p className=" text-[25px] flex items-center font-extrabold opacity-60 text-blue-600  translate-x-[-10px] hover:text-[27px] ease-linear transition-all underline">
                <Link to="/News">SEE ALL</Link>
              </p>
            </div>
            <div className="event_list w-[100%] h-[400px] text-4xl font-bold flex overflow-auto">
              <div className="cards flex items-center translate-x-3 gap-4">
                {cards.map((card, i) => (
                  <div
                    key={i}
                    className="card w-[300px] h-[90%] lg:w-80 bg-opacity-20 bg-white backdrop-blur-[15px] shadow-xl flex flex-col rounded-2xl "
                  >
                    <div>
                      <div className="absolute right-0 bg-white h-auto rounded-md w-auto ">
                        <p className=" text-base p-1">{card.type}</p>
                      </div>
                      <img
                        className=" w-[100%] block object-cover rounded-t-2xl"
                        loading="lazy"
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
          <div className="upcomeing w-full lg:w-[30%] m-10 flex flex-col">
            <div className="flex content-center justify-center">
              <p className="text-7xl lg:text-[35px] font-serif font-bold opacity-100 text-black  whitespace-nowrap">
                Upcomeing Event
              </p>
            </div>
            <div className="flex flex-col  pt-5 content-center justify-center">
              <p className=" text-4xl lg:text-[25px] opacity-80 font-normal text-black flex-wrap">
                No Upcomeing
              </p>
              <p className=" text-4xl lg:text-[25px] opacity-80 font-normal text-black flex-wrap">
                Event on The Moment
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*--------------courses------------------*/}
      <div className=" h-auto w-[100%] py-8 lg:py-6 overflow-hidden ">
        <div className="oval h-[300px] w-[300px] bg-red-500 opacity-90 absolute rounded-full z-[-5] right-0 -translate-y-[150px] "></div>
        <p className=" text-7xl lg:text-[50px] font-extrabold text-center opacity-100 text-black translate-x-[10px]">
          COURSES
        </p>
        <div className=" grid justify-items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-9 p-10">
          {course.map((course, i) => (
            <div
              key={i}
              className="card h-[250px] w-auto md:w-80 bg-white shadow-2xl flex flex-col rounded-2xl "
            >
              <div className="w-full h-full bg-red-100 relative group rounded-2xl">
                <img
                  class=" h-full w-full bg-cover overflow-hidden rounded-xl"
                  src={course.image}
                />
                <div className="opacity-0 h-ful group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 text-xl bg-gray-200 text-black font-semibold">
                  <h3 className="title h-full w-[100%] text-eblack text-3xl font-bold text-left pl-3">
                    {course.title}
                  </h3>
                  <p className="text h-auto w-[100%] text-jet text-xl font-semibold text-left p-3 ">
                    {course.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*-------------Map location-------------------*/}
      <div>
        <div class="section-body h-auto ">
          <div className="oval h-[450px] w-[450px] bg-red-500 opacity-90 absolute rounded-full z-[-5] -translate-y-[150px] translate-x-[-110px] flex justify-end blur-[5px] items-center"></div>

          <p className=" text-7xl lg:text-[50px] font-extrabold text-center opacity-100 text-black">
            LOCATION
          </p>
          <div class="grid md:grid-flow-row lg:grid-cols-2  lg:text-left text-center items-center ">
            <div class="embeded_map p-3 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.2554797542!2d81.6262151743212!3d28.077748975972206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998671773c7e34f%3A0xe85908dc0d1c6717!2sDhambojhi%20Secondary%20School!5e0!3m2!1sen!2snp!4v1685325210940!5m2!1sen!2snp"
                className="w-full h-[450px] rounded-lg shadow-xl"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div class="flex flex-col p-3 w-full">
              <ul class="p-3">
                <li className="py-3 font-bold text-4xl lg:text-[25px]">
                  <FontAwesomeIcon icon={faLocationDot} className=" pr-3" />
                  Nepalgunj-1, Dhambojhi, Waterpark, Nepalgunj, Banke, Nepal
                </li>
                <li className="py-2 font-medium text-4xl lg:text-[20px]">
                  <FontAwesomeIcon icon={faSchool} className=" pr-3" />
                  Dhambojhi Secondary School
                </li>
                <li className="py-2 font-medium text-4xl lg:text-[20px]">
                  <FontAwesomeIcon icon={faPhone} className=" pr-3" />
                  +977-81-525491
                </li>
                <li className="py-2 font-medium text-4xl lg:text-[20px]">
                  <FontAwesomeIcon icon={faPhone} className=" pr-3" />
                  +977-81-402030
                </li>
                <li className="py-2 font-medium text-4xl lg:text-[20px]">
                  <FontAwesomeIcon icon={faMailBulk} className=" pr-3" />
                  Gmail
                </li>
                <a href="https://www.facebook.com/DhumbojhiHigherSecondarySchool/videos/595077712750699/">
                  <button className=" bg-primary text-white px-5 mt-4 py-2 text-4xl lg:text-xl rounded-md hover:translate-y-[-5px] transition hover:shadow-whitebutton shadow ">
                    LOCATION VIEW
                  </button>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/*------- review---------- */}
      <div className=" h-auto pt-5">
        <p className=" text-center text-7xl lg:text-3xl font-serif font-bold">
          REVIEWS
        </p>
        <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-3 max-h-[44rem] mt-5 overflow-hidden">
          {review.map((review, i) => (
            <div
              key={i}
              className="relative flex flex-col-reverse mt- bg-secondary bg-opacity-20 rounded-xl shadow-xl p-6 w-full h-auto backdrop-blur-md dark:highlight-white/5"
            >
              <figure class="relative flex flex-col-reverse bg-transparent rounded-lg dark:highlight-white/5">
                <blockquote class="mt-6 text-4xl lg:text-2xl text-slate-700">
                  <p>{review.text}</p>
                </blockquote>
                <figcaption class="flex items-center space-x-4">
                  <img
                    src={review.image}
                    alt=""
                    class="flex-none w-14 h-14 lg:w-14 lg:h-14 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  ></img>
                  <div class="flex-auto">
                    <div class="text-5xl lg:text-2xl text-slate-900 font-semibold">
                      <a href={review.Link} tabindex="0">
                        <span class="absolute inset-0"></span>
                        {review.name}
                      </a>
                    </div>
                    <div class="mt-0.5 text-black lg:text-2xl text-5xl text-opacity-70">
                      {review.position}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-t from-whitepointer-events-none bg-opacity-25 flex justify-center p-3 ">
          <button className=" bg-primary text-white px-5 py-2 text-3xl lg:text-xl rounded-md hover:translate-y-[-5px] transition hover:shadow-whitebutton shadow ">
            SEE MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
