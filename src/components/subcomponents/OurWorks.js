import React from "react";
import WorkGallery from "./WorkGallery";

const OurWorks = () => {
  return (
    <section className="w-full h-full font-regular">
      <div className="text-center text-5xl p-16 font-bold text-blue-900">Our works</div>
      <div className="flex justify-center p-10">
        <WorkGallery />
      </div>
      <div className=" flex justify-center p-10">
        <button className=" bg-blue-700 rounded-full p-3 text-white">
          View more
        </button>
      </div>
    </section>
  );
};

export default OurWorks;
