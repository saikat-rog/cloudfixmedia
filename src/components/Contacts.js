import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
  return (
    <div className=" flex flex-col md:flex-row w-full min-h-screen">
      {/* Left col for the form */}
      <div className=" bg-sectionBackground w-full md:w-1/3 py-28 px-16">
        <div className=" flex flex-col gap-5">
          <div className=" text-textColorLarge font-bold text-4xl">
            Send us a message
          </div>
          <form className=" flex flex-col gap-7">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border-b-2 border-slate-300 p-3 focus:outline-none"
            ></input>
            <input
              type="text"
              placeholder="Email"
              className="bg-transparent border-b-2 border-slate-300 p-3 focus:outline-none"
            ></input>
            <input
              type="text"
              placeholder="Phone"
              className="bg-transparent border-b-2 border-slate-300 p-3 focus:outline-none"
            ></input>
            <textarea
              placeholder="Your message"
              className="bg-transparent border-b-2 border-slate-300 p-3 focus:outline-none"
            ></textarea>
            <button className="bg-buttonPrimaryColor hover:bg-buttonSecondaryColor hover:text-black rounded-full h-10 w-28 text-white">
              Send
            </button>
          </form>
        </div>
      </div>
      {/* Right col for the contact info */}
      <div className=" w-full md:w-2/3  py-28 px-10 md:px-20">
        <div className="flex flex-col gap-16">
          {/* Heading */}
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-textColorLarge">
              Contact Us
            </span>
            <span>We are here to serve you.</span>
          </div>
          {/* Details */}
          <div className=" flex flex-col gap-8 items-start ml-10">
            {/* Location */}
            <div className="flex gap-5 text-xl">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Fartabad, Rajpur Sonarpur, Kolkata, West Bengal 700150</p>
            </div>
            {/* Email */}
            <div className="flex gap-5 text-xl">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>cloudfixmedia@gmail.com</p>
            </div>
            {/* Phone */}
            <div className="flex gap-5 text-xl">
              <FontAwesomeIcon icon={faPhone} />
              <p>8100110638</p>
            </div>
            {/* Time */}
            <div className="flex gap-5 text-xl">
              <FontAwesomeIcon icon={faClock} />
              <p>Monday to Sunday 10AM-9PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
