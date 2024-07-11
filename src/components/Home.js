import React from "react";
import Welcome from "./subcomponents/Welcome";
import Clients from "./subcomponents/Clients";
import WhyUs from "./subcomponents/WhyUs";
import Vision from "./subcomponents/Vision";
import OurWorks from "./subcomponents/OurWorks";
import Testimonials from "./subcomponents/Testimonials";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet><title>CloudFixMedia</title></Helmet>
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
