import React from "react";
import { Link } from "react-router-dom";

function Nopage() {
  return (
    <>
      <div className="lg:h-[350px] flex flex-col items-center justify-center bg-slate-50 md:h-screen">
        <div className="text-center align-middle pt-10 font-bold text-6xl">
          Error 404!!!
        </div>
        <p className=" text-2xl">page not found</p>
        <p className="  bg-primary text-white px-5 py-2 text-xl rounded-md hover:translate-y-[-5px] transition hover:shadow-whitebutton shadow mt-7">
          <Link to="/"> Goback</Link>
        </p>
      </div>
    </>
  );
}

export default Nopage;
