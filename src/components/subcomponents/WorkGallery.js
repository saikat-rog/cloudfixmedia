import React from 'react';
import demoVid from "../../assets/demo.mp4";

const WorkGallery = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-8 justify-center">
        <video src={demoVid} autoPlay muted loop className=' h-80 rounded-xl'/>
        <video src={demoVid} autoPlay muted loop className=' h-80 rounded-xl'/>
        <video src={demoVid} autoPlay muted loop className=' h-80 rounded-xl'/>
        <video src={demoVid} autoPlay muted loop className=' h-80 rounded-xl'/>
        <video src={demoVid} autoPlay muted loop className=' h-80 rounded-xl'/>
        <video src={demoVid} autoPlay muted loop className=' h-80 rounded-xl'/>
      </div>
    </div>
  );
};

export default WorkGallery;
