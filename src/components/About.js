import React from "react";

const About = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center text-center font-regular mx-10 md:mx-52">
      <div className=" text-4xl md:text-8xl font-semibold text-blue-700">About Us</div>
      <div className=" text-xl md:text-3xl">
        Cloudfix Media emerged from a fervor for creative expression and a
        vision to consolidate all media services under one roof. Our founders
        envisioned a space where Creativity meets Skyline. We thrive on pushing
        boundaries, capturing moments, and transforming ideas into captivating
        media.
      </div>
      <div className=" text-xl md:text-3xl">
        At Cloudfix, we’re more than pixels. Our mission? Elevate brands through
        compelling visuals. We specialize in crafting engaging content that
        enhances audience connections, driving leads for businesses through
        organic social media strategies. Creativity, integrity, and
        collaboration guide every project we undertake.
      </div>
      <button className=" my-10 bg-blue-700 p-5 rounded-full w-40 text-white">Learn more</button>
    </div>
  );
};

export default About;
