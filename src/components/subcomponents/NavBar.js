import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", to: "/" },
    { id: 2, text: "About", to: "/about" },
    { id: 3, text: "Services", to: "/service" },
    { id: 4, text: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed w-full flex justify-between items-center bg-white p-3 md:px-28 py-3">
      <div className="text-xl font-bold">CloudFixMedia</div>
      <button onClick={handleNav} className="md:hidden">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>

      {/* Mobile menu */}
      <div
        className={`${
          nav ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-white shadow-md md:hidden`}
      >
        <ul className="flex flex-col items-center space-y-4 p-4">
          {navItems.map((item) => (
            <li key={item.id} className="text-lg" onClick={handleNav}>
              <Link to={item.to}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <li key={item.id} className="text-lg">
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
      {/* Desktop Book a call button */}
      <button className=" hidden md:block md:bg-blue-700 rounded-full h-10 w-28 text-white">
        Book a Call
      </button>
    </nav>
  );
};

export default NavBar;
