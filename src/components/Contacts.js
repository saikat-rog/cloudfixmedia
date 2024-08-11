import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import Axios from "axios";

const Contacts = () => {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSent, setIsSent] = useState(false);

  const handleContactFormInput = (e) => {
    const { name, value } = e.target;
    setContactFormData({
      ...contactFormData,
      [name]: value
    });
  };

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        `${process.env.REACT_APP_BASE_URL_BACKEND}/api/submitContactForm`,
        contactFormData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      setIsSent(true);
      console.log(response.data);
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <Helmet><title>Contact</title></Helmet>
      {/* Left col for the form */}
      <div className="bg-sectionBackground w-full md:w-1/3 py-28 px-16">
        <div className="flex flex-col gap-5">
          <div className="text-textColorLarge font-bold text-2xl md:text-4xl">
            Send us a message
          </div>
          {isSent && <div className=" text-black text-3xl">Your message is sent!</div>}
          <form className="flex flex-col gap-7" onSubmit={handleContactFormSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="bg-transparent border-b-2 border-slate-300 p-3 focus:outline-none"
              onChange={handleContactFormInput}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="bg-transparent border-b-2 border-slate-300 p-3 focus:outline-none"
              onChange={handleContactFormInput}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="bg-transparent border-b-2 border-slate-300 p-3 focus:outline-none"
              onChange={handleContactFormInput}
            />
            <textarea
              name="message"
              placeholder="Your message"
              className="bg-transparent border-b-2 border-slate-300 p-3 focus:outline-none"
              onChange={handleContactFormInput}
            />
            <button
              type="submit"
              className="bg-buttonPrimaryColor hover:bg-buttonSecondaryColor hover:text-black rounded-full h-10 w-28 text-white"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      {/* Right col for the contact info */}
      <div className="w-full md:w-2/3 py-28 px-10 md:px-20">
        <div className="flex flex-col gap-16">
          {/* Heading */}
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-textColorLarge">
              Contact Us
            </span>
            <span>We are here to serve you.</span>
          </div>
          {/* Details */}
          <div className="flex flex-col gap-8 items-start ml-10">
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
