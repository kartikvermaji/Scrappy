import React from "react";
import { faArrowRight,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import logo from "../assets/Lensroom-1.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="lg:h-[59vh] md:h-auto  bg-black text-slate-50 flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row justify-around md:space-x-40 pt-10 border-b-2 pb-10 md:pb-20 w-[90vw] border-slate-50 bg-black text-slate-50 ">
        <div>
          <h1 className="lg:text-7xl md:text-6xl text-3xl text-orange-500 font-extrabold">Join Our <br /> Community</h1>
        </div>
        <div  className="flex flex-col  items-end" >
          <p className="md:text-base text-sm font-thin md:w-[32vw] text-justify ">
            Want to know more about the latest info from our 
            product? Want to get special discount from us? Or  want to
           explore this industry more?Join our Community{" "}
          </p>
          <a href="Homepage.jsx#contact">
          <button   className="border-2 lg:mt-6 mt-5 hover:shadow-2xl hover:shadow-slate-500 md:py-2 lg:py-0 hover:bg-slate-50 duration-200 hover:text-slate-950  rounded-full lg:text-base flex lg:space-x-32 lg:px-1 mr-5">
            <p className="pt-2 p-2 lg:px-6 "> Write Your email here...</p>
            <FontAwesomeIcon icon={faArrowRight}  className="md:text-xl px-4 text-slate-50 bg-orange-500 py-3 rounded-full"/>
          </button>
          </a>
        </div>
      </div>

      <div className="flex flex-col text-center  space-y-2  md:flex-row md:justify-around w-[100vw] pt-5 md:pt-4">
        <div className="flex items-center justify-center">
          <p className="text-4xl"> Scrap & Store</p>
            {/* <h1 className="lg:text-4xl text-2xl text-orange-500 font-semibold">Lensroom</h1> */}
        </div>
        <div className="flex md:justify-around justify-center space-x-10   md:space-x-5 lg:space-x-12 text-xl lg:text-2xl">
            <a href="https://www.instagram.com/_lensroom?igsh=MTlhOXQwNXhtZ2piMQ=="><FontAwesomeIcon icon={faInstagram} /></a>
            
            <a href="https://www.linkedin.com/company/the-photo-booth/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="mailto:ritiktripathidtu@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
            <h1 className="lg:text-lg text-[10px] "> &copy; 2025 Scrap & Store.All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
