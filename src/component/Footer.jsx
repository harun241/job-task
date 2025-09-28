// Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-black py-10 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Left Column - Logo & Social */}
        <div className="space-y-4 order-1 justify-items-center">
          <h1 className="text-2xl font-bold">Business Logo</h1>
          <div className="flex space-x-3 mt-2">
            <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-400"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Center Column 1 - Our Services */}
        <div className="space-y-4 order-3 md:order-2">
          <h2 className="text-xl font-semibold">Our Services</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Plumbing</a></li>
            <li><a href="#" className="hover:text-gray-400">Drainage</a></li>
            <li><a href="#" className="hover:text-gray-400">Bathrooms</a></li>
            <li><a href="#" className="hover:text-gray-400">Commercial</a></li>
          </ul>
        </div>

        {/* Center Column 2 - Useful Links */}
        <div className="space-y-4 order-4 md:order-3">
          <h2 className="text-xl font-semibold">Useful Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right Column - Contact Info */}
        <div className="space-y-4 order-2 md:order-4">
          <h2 className="text-xl font-semibold">Contact Info</h2>
          <p>123 Street Name, City, Country</p>
          <p>Email: info@company.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © 2025 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
