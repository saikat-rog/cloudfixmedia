import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <section className="w-full h-screen text-textColorLarge flex items-center justify-center font-regular">
        <div className=" px-16 py-28 md:p-28 w-full min-h-screen md:grid grid-cols-2">
          {/* left col */}
          <div className=" flex flex-col gap-8 md:gap-16 justify-center">
            {/* Welcome quote */}
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
            {/* user email field */}
            <div className=" mt-10 mb-10 md:mb-0 md:mt-0 flex flex-row">
              <input
                type="email"
                placeholder="Enter your Email"
                className="block px-4 py-3 text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:border-buttonPrimaryColor mr-3 bg-slate-100 w-auto md:w-72"
              />
              <button className=" bg-buttonPrimaryColor hover:bg-buttonSecondaryColor hover:text-black rounded-full h-30 w-28 md:w-32 text-white">
                Lets Talk
              </button>
            </div>
            <div className=" md:hidden text-center p-2 text-white rounded-full bg-buttonPrimaryColor text-xl">
              Book a Call
            </div>
          </div>
          {/* right col */}
          <div className=" hidden md:flex flex-col items-center justify-center ">
            <img
              src={logo}
              alt="cloudfixmedia"
              className="items-center"
            />
            <Link to="/service">
            <div className=" w-60 text-center py-4 text-white rounded-full bg-buttonPrimaryColor text-xl">
              Check our services
            </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
