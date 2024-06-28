import React from "react";
import logo from "../../assets/logo.png";

const Welcome = () => {
  return (
    <div>
      <section className="w-full h-screen text-blue-900 flex items-center justify-center font-regular">
        <div className=" p-10 md:p-28 grid grid-cols-1 md:grid-cols-2 w-full">
          {/* welcome quote */}
          <div>
            <p>
              <span className="font-bold text-5xl md:text-7xl">
                Enhance Your
                <br />
                Online Presence
                <br />
                With Us
                <br />
              </span>
              <span className=" text-slate-500 text-2xl">
                We care about our work and We care about our clients.
              </span>
            </p>
          </div>
          {/* welcome image */}
          <div className=" hidden md:flex md:items-center md:justify-center">
            <img
              src={logo}
              alt="cloudfixmedia"
              className="mr-2 -mt-20 -mb-20 items-center"
            />
          </div>
          {/* user email field */}
          <div className=" mt-10 mb-10 md:mb-0 md:mt-0 flex flex-row">
            <input
              type="email"
              placeholder="Enter your Email"
              class="block px-4 py-3 text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:border-blue-700 mr-3 bg-slate-100 w-auto md:w-72"
            />
            <button className=" bg-blue-700 rounded-full h-30 w-28 md:w-32 text-white">
              Lets Talk
            </button>
          </div>
          <div className=" md:hidden text-center p-4 text-white rounded-full bg-blue-700 text-3xl">
            Book a Call
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
