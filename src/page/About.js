import React, { useState } from "react";
import clz from "../image/Building-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBuilding,
  faCalendar,
  faCoffee,
  faComputer,
  faFootball,
  faLocation,
  faParking,
  faPhone,
  faProjectDiagram,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function About() {
  {
    /* techers  */
  }
  const [review] = useState([
    {
      image:
        "https://scontent.fkep2-1.fna.fbcdn.net/v/t1.6435-9/186549713_2251007765030690_2729263545162385657_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=be3454&_nc_ohc=nefoxDMd3zAAX_v08MI&_nc_ht=scontent.fkep2-1.fna&oh=00_AfDX2j_ItqpE1fViRhY7JEXdnXLOgrWQdiQbSMau4ZU9AA&oe=65D57E79",
      name: "Bamdev subedi",
      position: "Principle",
      text: `yes how can i help`,
      number: "98000000000",
      facebook:
        "https://scontent.fkep2-1.fna.fbcdn.net/v/t1.6435-9/186549713_2251007765030690_2729263545162385657_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=be3454&_nc_ohc=nefoxDMd3zAAX_v08MI&_nc_ht=scontent.fkep2-1.fna&oh=00_AfDX2j_ItqpE1fViRhY7JEXdnXLOgrWQdiQbSMau4ZU9AA&oe=65D57E79",
    },
    {
      image:
        "https://scontent.fkep2-1.fna.fbcdn.net/v/t39.30808-6/269822221_2998790687052619_7029138499684564807_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=AAEp4DAbBYsAX-2a3f4&_nc_ht=scontent.fkep2-1.fna&oh=00_AfCumnydQoCDah2KYtOyujKqLC9VdvYZ6-0fwgbImofh9Q&oe=65B23B79",
      name: "Purna bahadur shahi",
      position: "Vice-principle",
      text: `something something`,
      number: "98000000000",
      facebook: "https://www.facebook.com/100007651519105/",
    },
    {
      image:
        "https://scontent.fkep2-1.fna.fbcdn.net/v/t39.30808-6/248302375_10159349361419663_8426482057173474106_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=783fdb&_nc_ohc=yk0OO--fJbsAX_Ft0Eq&_nc_ht=scontent.fkep2-1.fna&oh=00_AfAwWMZtzAC2W0NWI5JaSX1ZEO6PsX_tD5zU6O-B5k6vtw&oe=65B3398D",
      name: "Pradeep shree",
      position: "Techinical codinator",
      text: `something something`,
      number: "98000000000",
      facebook: "https://www.facebook.com/717014662/",
    },
    {
      image:
        "https://scontent.fkep2-1.fna.fbcdn.net/v/t39.30808-6/299228608_5730858463633174_38792657178956928_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=0uwuw8S8eNYAX92lqfD&_nc_ht=scontent.fkep2-1.fna&oh=00_AfBZ1VtPBbuz5C877Nn-Jq6sB2DIZIq1LPaqwQoWQMxAkg&oe=65B2C48D",
      name: "Suhil thapa",
      position: "Techinical teacher",
      text: `something something`,
      number: "98000000000",
      facebook: "",
    },
    {
      image:
        "https://scontent.fkep2-1.fna.fbcdn.net/v/t39.30808-6/358135247_3217443321882500_2371272295679870206_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=iJoEAcFDZcIAX_h3Hse&_nc_ht=scontent.fkep2-1.fna&oh=00_AfAFR1ZvHOBhqh8oxa6-ONbkNoyFYFpdTzh1wYR6iQLlOg&oe=65B3DAD2",
      name: "मदन उपाध्याय",
      position: "High-school techer",
      text: `something something`,
      number: "98000000000",
      facebook: "https://www.facebook.com/100008505900245/",
    },
    {
      image:
        "https://scontent.fkep2-1.fna.fbcdn.net/v/t1.6435-9/150679472_10222022487665397_3804665112696577799_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=NioJLDn7zvsAX8S23yq&_nc_ht=scontent.fkep2-1.fna&oh=00_AfBa7epkLErCSsTzl6nmHgL8p3P59U7jNHmLcdmhRSIhlw&oe=65D567D3",
      name: "Jyoti upadhyaya",
      position: "Techinical teacher",
      text: `something something`,
      number: "98000000000",
      facebook: "https://www.facebook.com/jyoti.b.upadhyaya",
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
  return (
    <>
      <div className="flex lg:h-screen flex-col-reverse items-center lg:flex-row ">
        <div className="p-5 lg:basis-1/2 mt-16 lg:mt-0 lg:pt-20">
          <p className=" text-6xl font-bold lg:text-5xl text-center py-5">
            Dhambojhi Secondary School
          </p>
          <ul className="flex p-3 flex-wrap justify-center gap-x-8 gap-y-3">
            <li>
              <p className="text-4xl lg:text-xl font-bold">
                <FontAwesomeIcon icon={faLocation} /> Nepalgunj,Banke
              </p>
            </li>
            <li>
              <p className="text-4xl font-bold lg:text-xl">
                <FontAwesomeIcon icon={faCalendar} /> Estd.1957
              </p>
            </li>
            <li>
              <p className="text-4xl font-bold lg:text-xl">
                <FontAwesomeIcon icon={faBuilding} /> Community
              </p>
            </li>
            <li>
              <p className="text-4xl font-bold lg:text-xl">
                <FontAwesomeIcon icon={faPhone} /> +977-081-525491
              </p>
            </li>
          </ul>
          <div>
            <p className="text-3xl p-4 lg:text-xl text-balance font-semibold">
              Established in 1957 AD (2014 B.S), Dhambojhi Secondary School is a
              community-based academic institute located in Nepalgunj-1,
              Dhambojhi, Waterpark, Nepalgunj, Banke district of Nepal. The
              school was initiated by well-known academic personalities and is
              affiliated to the National Examinations Board (NEB) while being
              approved by the Ministry of Education. With a strong emphasis on
              excellent education, Dhambojhi Secondary School offers Ten Plus
              Two (10+2) programs in Science, Management, Education, and
              Computer Engineering streams.
            </p>
          </div>
        </div>
        <div
          className="w-full h-4/5 lg:h-[590px] flex items-center lg:basis-1/2 rounded-xl  overflow-hidden mt-11 bg-no-repeat"
          style={{ backgroundImage: `url(${clz})` }}
        ></div>
      </div>
      {/**------Teachers\-------------------- */}
      <div>
        <p className="text-center pt-5 text-6xl">TEACHERS</p>
        <div className="grid grid-cols-1 gap-6 px-20 py-5 lg:p-5 h-auto lg:gap-8 lg:grid-cols-3">
          {review.map((review, i) => (
            <div
              key={i}
              class="overflow-visible relative bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6"
            >
              <img
                class="absolute -left-6  w-36 h-36 rounded-full shadow-lg lg:left-0 lg:rounded-xl lg:h-full"
                src={review.image}
              />
              <div class="flex flex-col py-5 pl-40">
                <strong class="text-slate-900 text-3xl font-medium">
                  {review.name}
                </strong>
                <span class="text-slate-500 text-2xl font-medium">
                  {review.position}
                </span>
                <span>{review.text}</span>
                <span className="text-base ">{review.number}</span>
              </div>
              <div className=" absolute w-36 flex items-center justify-center right-7 lg:right-0 lg:-bottom-12  h-full">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-7xl lg:text-3xl"
                />
                <a href={review.facebook}>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className=" text-7xl lg:text-3xl ml-6"
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex justify-center p-3 ">
          <button className=" bg-primary text-white px-5 py-2 text-xl rounded-md hover:translate-y-[-5px] transition hover:shadow-whitebutton shadow ">
            <Link to="/teachers">SEE MORE</Link>
          </button>
        </div>
      </div>
      {/*------------------facilities------------------*/}
      <div>
        <p className="text-center pt-5 text-6xl">FACILITIES</p>
        <div class="w-full px-4 md:px-6 pt-8">
          <div class="text-center">
            <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul
                x-ref="logos"
                class="flex items-center justify-center text-5xl md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              >
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faCoffee} />
                  <span className=" font-serif text-4xl font-bold">
                    CAFETERIA
                  </span>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faBook} />{" "}
                  <span className=" font-serif text-4xl font-bold">
                    LIBRARY
                  </span>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faFootball} />{" "}
                  <span className=" font-serif text-4xl font-bold">SPORTS</span>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faWifi} />
                  <span className=" font-serif text-4xl font-bold">WIFI</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faParking} />
                  <span className=" font-serif text-4xl font-bold">
                    PARKING
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faProjectDiagram} />
                  <span className=" font-serif text-4xl font-bold">
                    MULTIMEDIA
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faComputer} />
                  <span className=" font-serif text-4xl font-bold">LAB</span>
                </li>
              </ul>
              <ul
                x-ref="logos"
                class="flex items-center justify-center text-5xl md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden="true"
              >
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faCoffee} />
                  <span className=" font-serif text-4xl font-bold">
                    {" "}
                    CAFETERIA
                  </span>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faBook} />{" "}
                  <span className=" font-serif text-4xl font-bold">
                    LIBRARY
                  </span>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faFootball} />{" "}
                  <span className=" font-serif text-4xl font-bold">SPORTS</span>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faWifi} />
                  <span className=" font-serif text-4xl font-bold">WIFI</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faParking} />
                  <span className=" font-serif text-4xl font-bold">
                    PARKING
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faProjectDiagram} />
                  <span className=" font-serif text-4xl font-bold">
                    MULTIMEDIA
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faComputer} />
                  <span className=" font-serif text-4xl font-bold">LAB</span>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        <div class="w-full  px-4 md:px-6 pt-8 pb-8">
          <div class="text-center">
            <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul
                x-ref="logos"
                class="flex items-center justify-center text-5xl md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-rev-scroll"
              >
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faCoffee} />
                  <span className=" font-serif text-4xl font-bold">
                    CAFETERIA
                  </span>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faBook} />{" "}
                  <span className=" font-serif text-4xl font-bold">
                    LIBRARY
                  </span>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faFootball} />{" "}
                  <span className=" font-serif text-4xl font-bold">SPORTS</span>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faWifi} />
                  <span className=" font-serif text-4xl font-bold">WIFI</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faParking} />
                  <span className=" font-serif text-4xl font-bold">
                    PARKING
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faProjectDiagram} />
                  <span className=" font-serif text-4xl font-bold">
                    MULTIMEDIA
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faComputer} />
                  <span className=" font-serif text-4xl font-bold">LAB</span>
                </li>
              </ul>
              <ul
                x-ref="logos"
                class="flex items-center justify-center text-5xl md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-rev-scroll"
                aria-hidden="true"
              >
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faCoffee} />
                  <span className=" font-serif text-4xl font-bold">
                    {" "}
                    CAFETERIA
                  </span>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faBook} />{" "}
                  <span className=" font-serif text-4xl font-bold">
                    LIBRARY
                  </span>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faFootball} />{" "}
                  <span className=" font-serif text-4xl font-bold">SPORTS</span>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faWifi} />
                  <span className=" font-serif text-4xl font-bold">WIFI</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faParking} />
                  <span className=" font-serif text-4xl font-bold">
                    PARKING
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faProjectDiagram} />
                  <span className=" font-serif text-4xl font-bold">
                    MULTIMEDIA
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faComputer} />
                  <span className=" font-serif text-4xl font-bold">LAB</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*-----------------courses-----------------------------------*/}
      <div className=" h-auto w-[100%]  py-6 overflow-hidden ">
        <p className="text-[50px] font-extrabold text-center opacity-100 text-black translate-x-[10px]">
          COURSES
        </p>
        <div className=" grid justify-items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
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
    </>
  );
}

export default About;
