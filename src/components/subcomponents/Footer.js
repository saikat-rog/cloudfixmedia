import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {

  const facebookUrl = "https://www.facebook.com/profile.php?id=61561001504713";
  const instagramUrl = "https://www.instagram.com/cloudfix.media";
  const xUrl = "https://x.com/CloudfixM91497";
  const linkedinUrl = "https://www.linkedin.com/in/cloudfix-media-63a865312/";

  return (
    <footer className=" bg-blue-950 text-white p-4 md:p-12">
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {/* Grid1: Brand Statement */}
        <div className="">
          <div className=" flex flex-col gap-5">
            <p>
              <span className=" text-3xl font-bold">Enhancing</span>
              <br />
              online presence by enhancing video editing scripting and graphics.
            </p>
            {/* social icons */}
            <div className=" flex flex-row gap-5 text-3xl">
              <a href={facebookUrl} target="blank"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
              <a href={instagramUrl} target="blank"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
              <a href={xUrl} target="blank"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
              <a href={linkedinUrl} target="blank"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
            </div>
            <div>&copy; 2024. All rights reserved.</div>
          </div>
        </div>
        {/* Grid2: Services*/}
        <div className=" flex flex-col gap-5">
          <h3 className=" text-xl font-bold">Services we offer</h3>
          <div className=" flex flex-col gap-2">
            <div>Organic Content</div>
            <div> Leads-generation</div>
            <div> Social-media Management</div>
            <div> Brand Identity </div>
          </div>
        </div>
        {/* Grid3: Contact */}
        <div className=" flex flex-col gap-5">
          <h3 className=" text-xl font-bold">Contact us</h3>
          <div className=" flex flex-col gap-2">
            <div>Phone: 8100110638</div>
            <div>Email: cloudfixmedia@gmail.com</div>
            <div className=" flex flex-col justify-start gap-2">
              <h3 className=" text-xl font-semibold">Let us contact you</h3>
              <input
                className=" rounded-md p-3 max-w-80"
                placeholder="Drop your email here"
              ></input>
              <button className=" bg-blue-700 rounded-md p-2 w-20">Submit</button>
            </div>
          </div>
        </div>
        {/* Grid4: Appointment schedule */}
        <div className=" flex flex-col gap-5">
          <h3 className=" text-xl font-bold">Schedule your appointment</h3>
          <form className=" text-black flex flex-col gap-4 items-start">
            <input className=" p-2 rounded-lg" type="date"/>
            <button className=" text-white bg-blue-700 px-5 py-2 rounded-lg">Book</button>
          </form>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
