import React from "react";
import WorkGallery from "./WorkGallery";

const OurWorks = () => {
  return (
    <section className="w-full h-full flex flex-col gap-1 py-14 items-center font-regular">
      <div className="text-center text-5xl font-bold text-textColorLarge">Our works</div>
      <p>Click on any video to play or pause</p>
      <div className="flex justify-center p-10">
        <WorkGallery />
      </div>
      <div className=" flex justify-center p-10">
        <button className=" bg-buttonPrimaryColor hover:bg-buttonSecondaryColor hover:text-black rounded-full p-3 text-white">
          View more
        </button>
      </div>
    </section>
  );
};

export default OurWorks;
