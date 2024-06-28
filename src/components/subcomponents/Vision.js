import React from "react";
import video from "../../assets/video.svg";
import team from "../../assets/team.svg";
import doosan from "../../assets/doosan.svg";

const Vision = () => {
  const VisionParagraph = "Our Vision is to focus on the long-term goals and to create an impact in social media through great Content We will help you to make your brand standout without any advertisement, by growing your brand organically which will enhance your engagement.";

  const VisionTitle = "Our Vision";
  
  const VisionDetails = [
    { id: 1, text: "150+ videos created", icon: video },
    { id: 2, text: "9+ brands worked with", icon: team },
    { id: 3, text: "15+ team members", icon: doosan },
  ];

  return (
    <div>
      <section className=" w-full min-h-screen text-black flex items-center justify-center font-regular bg-slate-100">
        <div className=" mt-20 p-10 flex flex-wrap w-full">
          {/* Vision details */}
          <div className="flex md:flex-1 flex-wrap gap-8 justify-center">
            {VisionDetails.map((item) => (
              <div className="flex flex-col items-center">
                <img src={item.icon} alt="video" width="110" height="110" />
                <div className="p-5 text-3xl">{item.text}</div>
              </div>
            ))}
          </div>
          {/* Vision text */}
          <div className=" mt-10 flex md:flex-1 flex-col">
            <div className=" text-5xl font-semibold text-blue-900">{VisionTitle}</div>
            <p className=" mt-8 text-xl">
              {VisionParagraph}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
