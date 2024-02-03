import React, { useState } from "react";

const Contact = () => {
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
    <div className="h-auto my-auto mb-36">
      <div className="">
        <div className="flex flex-col mt-20 items-center gap-3">
          <p className="text-8xl font-bold">CONTACT US</p>
          <div className="text-4xl w-2/4">
            <form onSubmit={handleSubmit}>
              <label>
                Enter your name:<br></br>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  className="text-black w-full text-2xl shadow-lg my-2 border p-4 rounded-md"
                />
              </label>
              <br></br>
              <label>
                Email:<br></br>
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  className="text-black w-full text-2xl shadow-lg my-2 border p-4 rounded-md"
                />
              </label>
              <br></br>
              <label>
                Message:<br></br>
                <input
                  type="text"
                  name="message"
                  onChange={handleChange}
                  className="text-black w-full text-2xl shadow-lg my-2 border p-4 rounded-md"
                />
              </label>
              <br></br>
              <input
                type="submit"
                className=" bg-eblack active:bg-jet text-white px-5 py-2 text-3xl rounded-md hover:translate-y-[-5px] transition hover:shadow-button mt-3 "
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
