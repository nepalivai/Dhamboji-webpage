import React from "react";
import clz from "../image/Building-2.jpg";
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

function About() {
  return (
    <>
      <div className="flex flex-col-reverse items-center lg:flex-row ">
        <div className="p-5">
          <p className=" text-6xl font-bold text-center py-5">
            Dhambojhi Secondary School
          </p>
          <ul className="flex p-3 flex-wrap justify-center gap-x-8 gap-y-3">
            <li>
              <p className="text-4xl font-bold">
                <FontAwesomeIcon icon={faLocation} /> Nepalgunj,Banke
              </p>
            </li>
            <li>
              <p className="text-4xl font-bold">
                <FontAwesomeIcon icon={faCalendar} /> Estd.1957
              </p>
            </li>
            <li>
              <p className="text-4xl font-bold">
                <FontAwesomeIcon icon={faBuilding} /> Community
              </p>
            </li>
            <li>
              <p className="text-4xl font-bold">
                <FontAwesomeIcon icon={faPhone} /> +977-081-525491
              </p>
            </li>
          </ul>
          <div>
            <p className="text-3xl p-4 text-balance font-semibold">
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
        <div className="w-full overflow-hidden mt-11">
          <img src={clz} className=" bg-cover"></img>
        </div>
      </div>
      <div>
        <p className="text-center pt-5 text-6xl">TEACHERS</p>
        too much work will add later
      </div>
      <div>
        <p className="text-center pt-5 text-6xl">FACILITIES</p>
      </div>
      <div class="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
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
                <span className=" font-serif text-4xl font-bold">LIBRARY</span>
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
                <span className=" font-serif text-4xl font-bold">PARKING</span>
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
                <span className=" font-serif text-4xl font-bold">LIBRARY</span>
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
                <span className=" font-serif text-4xl font-bold">PARKING</span>
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
      <div class="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
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
                <span className=" font-serif text-4xl font-bold">LIBRARY</span>
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
                <span className=" font-serif text-4xl font-bold">PARKING</span>
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
                <span className=" font-serif text-4xl font-bold">LIBRARY</span>
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
                <span className=" font-serif text-4xl font-bold">PARKING</span>
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
    </>
  );
}

export default About;
