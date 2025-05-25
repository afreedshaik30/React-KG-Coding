import React from "react";
import { FiHeart, FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-yellow-50 text-yellow-700 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Beauty Nation</h3>
          <p className="text-sm">
            Discover your natural glow with our premium beauty treatments and expert care.
          </p>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Opening Hours</h4>
          <ul className="text-sm space-y-1">
            <li>Monday-Friday: 9AM - 9PM</li>
            <li>Saturday-Sunday: 10AM -11PM</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Explore</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#home" className="hover:text-yellow-600 transition">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-600 transition">About</a></li>
            <li><a href="#services" className="hover:text-yellow-600 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-yellow-600 transition">Book Appointment</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Connect With Us</h4>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.instagram.com/" className="hover:text-yellow-600"><FiInstagram /></a>
            <a href="https://www.facebook.com/" className="hover:text-yellow-600"><FiFacebook /></a>
            <a href="https://x.com/" className="hover:text-yellow-600"><FiTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-yellow-100 pt-4 text-center text-sm text-yellow-500">
        <p> &copy; {new Date().getFullYear()} Beauty Nation. All Rights Reserved.</p>
        <p className="flex items-center justify-center gap-1 mt-1">
          Designed with <FiHeart className="text-red-400" />  by Afreed Shaik
        </p>
      </div>
    </footer>
  );
};

export default Footer;
