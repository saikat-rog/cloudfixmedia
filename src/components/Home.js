import React from "react";
import Welcome from "./subcomponents/Welcome";
import Clients from "./subcomponents/Clients";
import WhyUs from "./subcomponents/WhyUs";
import Vision from "./subcomponents/Vision";
import OurWorks from "./subcomponents/OurWorks";
import Testimonials from "./subcomponents/Testimonials";

const Home = () => {
  return (
    <div>
      <Welcome />
      <Clients />
      <WhyUs />
      <Vision />
      <OurWorks />
      <Testimonials />
    </div>
  );
};

export default Home;
