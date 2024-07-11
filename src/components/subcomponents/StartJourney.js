import React from "react";

const StartJourney = () => {
  return (
    <div className=" w-2/4 rounded overflow-hidden shadow-lg bg-buttonPrimaryColor font-regular">
      <div className="px-6 py-4">
        <div className="text-2xl mb-2 text-white">Start Your Journey</div>
      </div>
      <div className="px-6 py-4">
        <button className="bg-white hover:bg-blue-800 text-buttonPrimaryColor font-bold py-2 px-4 rounded">
          Start
        </button>
      </div>
    </div>
  );
};

export default StartJourney;
