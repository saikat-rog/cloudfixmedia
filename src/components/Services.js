import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faBullhorn, faShareAlt, faIdBadge, faLightbulb } from "@fortawesome/free-solid-svg-icons";

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
      <div className="flex flex-col items-center text-4xl md:text-8xl text-blue-700 font-semibold">
        Our Services
      </div>
      <div className="flex flex-wrap justify-center gap-8 pt-16">
        {services.map((item) => (
          <div
            key={item.id}
            className="group max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 hover:text-white"
          >
            <FontAwesomeIcon icon={item.logo} size="2x" className="mb-4" />
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <p className="text-gray-700 text-base group-hover:text-white">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
