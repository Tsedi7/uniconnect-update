// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#5e208f] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">
        {/* Logo and Description */}
        <div className="mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold">UniConnect</h2>
          <p className="mt-2">Empowering academic collaboration and innovation.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col mb-6 lg:mb-0">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <a href="/" className="hover:underline mb-1">Home</a>
          <a href="#how-it-works" className="hover:underline mb-1">How It Works</a>
          <a href="#key-features" className="hover:underline mb-1">Key Features</a>
          <a href="#contact-us" className="hover:underline">Contact Us</a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4">
          <a href="#" aria-label="Facebook">
            <FaFacebookF className="text-white hover:text-gray-200 transition duration-300" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter className="text-white hover:text-gray-200 transition duration-300" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn className="text-white hover:text-gray-200 transition duration-300" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram className="text-white hover:text-gray-200 transition duration-300" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} UniConnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
