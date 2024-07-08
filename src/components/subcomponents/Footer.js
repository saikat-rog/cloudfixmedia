import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-blue-950 text-white p-4 md:p-12">
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {/* Grid1: Brand Statement */}
        <div className="">
          <div className=" flex flex-col gap-5">
            <p>
              <span className=" text-3xl font-bold">Enhancing</span>
              <br />
              online presence by enhancing video editing scripting and graphics.
            </p>
            <div>&copy; 2024. All rights reserved.</div>
          </div>
        </div>
        {/* Grid2: Services*/}
        <div className=" flex flex-col gap-5">
          <h3 className=" text-xl font-bold">Services we offer</h3>
          <div className=" flex flex-col gap-2">
            <div>Organic Content</div>
            <div> Leads-generation</div>
            <div> Social-media Management</div>
            <div> Brand Identity </div>
          </div>
        </div>
        {/* Grid3: Contact */}
        <div className=" flex flex-col gap-5">
          <h3 className=" text-xl font-bold">Contact us</h3>
          <div className=" flex flex-col gap-2">
            <div>Phone: 8100110638</div>
            <div>Email: cloudfixmedia@gmail.com</div>
            <div className=" flex flex-col justify-start gap-2">
              <h3 className=" text-xl font-semibold">Let us contact you</h3>
              <input
                className=" rounded-md p-3 max-w-80"
                placeholder="Drop your email here"
              ></input>
              <button className=" bg-blue-700 rounded-md p-2 w-20">Submit</button>
            </div>
          </div>
        </div>
        {/* Grid4: Appointment schedule */}
        <div className="flex bg-gray-100">
          <div className="max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Calendar Header */}
            <div className="bg-gray-200 px-6 py-4">
              <h2 className="text-xl font-bold text-gray-800">July 2024</h2>
            </div>

            {/* Calendar Body */}
            <div className="grid grid-cols-7 gap-1 px-4 py-3">
              {/* Days of the week */}
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-sm text-gray-500 font-semibold text-center"
                >
                  {day}
                </div>
              ))}

              {/* Days grid */}
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <div
                  key={day}
                  className="text-sm text-gray-800 font-medium text-center py-2 border border-gray-200"
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
