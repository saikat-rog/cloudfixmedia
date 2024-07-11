import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faBullhorn,
  faShareAlt,
  faIdBadge,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Organic Content Generation",
      description:
        "We can enhance your online presence with our video editing, scripting and graphics designing services.",
      logo: faLeaf,
    },

    {
      id: 2,
      title: "Leads-Generation",
      description:
        "Let us help you generating more leads for your business through social media.",
      logo: faBullhorn,
    },

    {
      id: 3,
      title: "Social Media Management",
      description:
        "We help you to manage your Social Media handles by posting interactive content, which helps to make a deeper connection with your audience.",
      logo: faShareAlt,
    },

    {
      id: 4,
      title: "Brand Identity Development",
      description:
        "We focus on creating a strong brand identity to help your business grow with consistent visual elements.",
      logo: faIdBadge,
    },

    {
      id: 5,
      title: "Strategy",
      description:
        "We develop Creative Strategy to stand out from other brands to generate more engagement.",
      logo: faLightbulb,
    },
  ];

  return (
    <div className="min-h-screen w-full p-20 md:p-28">
      <Helmet><title>Services</title></Helmet>
      {/* Our Services */}
      <div>
        {/* Our services title */}
        <div className="flex flex-col items-center text-4xl md:text-8xl text-textColorLarge font-semibold">
          Our Services
        </div>
        {/* Our services description */}
        <div className="flex flex-wrap justify-center gap-8 pt-16">
          {services.map((item) => (
            <div
              key={item.id}
              className="group max-w-sm rounded shadow-lg bg-white p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-buttonPrimaryColor hover:text-white"
            >
              <FontAwesomeIcon icon={item.logo} size="2x" className="mb-4" />
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base group-hover:text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Our triangle rule */}
      
    </div>
  );
};

export default Services;
