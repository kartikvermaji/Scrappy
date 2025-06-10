import React from "react";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-black text-slate-50 px-6 md:px-16 pt-10  pb-10 w-full">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-slate-600 pb-10 md:px-10">
        {/* Text */}
        <div className="mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-extrabold text-orange-500 leading-tight">
            Join Our <br /> Community
          </h1>
        </div>

        {/* CTA Button */}
        <div className="w-full md:w-auto text-center md:text-right">
          <p className="md:text-base text-sm font-light max-w-md mb-4 md:mb-6">
            Want to get updates, exclusive discounts, or just explore the space with us? Sign up and be part of our creative world!
          </p>
          <a href="#contact">
            <button className="flex items-center justify-between bg-white/10 border border-slate-300/30 text-slate-200 hover:text-black hover:bg-white hover:shadow-xl transition rounded-full px-5 py-3 w-full md:w-[30vw] max-w-[400px]">
              <span className="text-sm md:text-base font-light">Write your email here...</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-lg bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full ml-3 transition" />
            </button>
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 space-y-6 md:space-y-0">
        {/* Brand */}
        <div className="text-xl md:text-2xl font-semibold tracking-wider">
          Scrap & Store
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="hover:text-orange-500 transition" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="hover:text-orange-500 transition" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faEnvelope} className="hover:text-orange-500 transition" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-slate-400">&copy; 2025 Scrap & Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
