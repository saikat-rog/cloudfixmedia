import React from "react";

const WhyUs = () => {
  return (
    <div className=" p-6 md:p-28">
      <div className=" w-full min-h-screen flex flex-col justify-center font-regular md:pr-52">
        <span className=" text-5xl md:text-7xl font-semibold text-blue-900">
          Why CloudFixMedia?
        </span>
        <p className=" text-slate-500 text-xl md:text-2xl">
          <div className=" pt-5">
            With over 2-3 years of industry expertise, we possess a deep
            understanding of algorithmic principles and their application.
          </div>
          <br />
          <div>
            Our track record includes collaborations with numerous esteemed
            brands, and our ongoing partnerships continue to yield impressive
            results. Our team comprises dedicated professionals who bring
            extensive experience and unwavering commitment to every client
            project. At our core, we prioritize client satisfaction and
            flexibility. Should any challenges arise, our responsive support
            team is available around the clock to swiftly address and resolve
            issues.
          </div>
        </p>
        <div className=" flex flex-col items-start pt-5 ">
          <button className=" rounded-full bg-blue-700 text-xl text-white p-5 ">Start your journey with us</button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
