import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-blue-950 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i> Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i> Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i> LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
          &copy; 2024 CloudFixMedia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
