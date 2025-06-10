import React from 'react';
import im1 from "../assets/mixelect.jpg";
import im2 from "../assets/cotton.jpg";
import { motion } from 'framer-motion';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Why = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16 md:mt-10 pb-20">
      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-10">

        {/* Left Section: Image with Card */}
        <div className="relative w-full md:w-1/2 flex flex-col justify-start items-center">
          {/* Blurred background image */}
          <motion.img
            initial={{ opacity: 0, scale: 1, y: 100 }}
            whileInView={{ opacity: 0.5, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true, amount: 0.5 }}
            src={im2}
            alt="Blurred bg"
            className="absolute top-0 left-0 h-[60vh] lg:h-[80vh] w-full object-cover blur-sm rounded-xl"
          />

          {/* Foreground card */}
          <motion.div
            initial={{ opacity: 0, scale: 1, y: 100 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15 } }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative bg-white text-black shadow-xl rounded-xl p-6 md:p-8 w-full md:w-[90%] lg:w-[80%] z-10 mt-32"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">WHY Scrap & Stitch</h2>
            <p className="text-base lg:text-lg font-light">
              Discover how Scrap & Stitch simplifies your recycling needs.
              Our seamless platform connects you to trusted vendors and sustainable practices effortlessly.
            </p>

            <button className="mt-6 flex items-center group border border-black px-6 py-2 rounded-full text-sm lg:text-base font-light hover:bg-black hover:text-white transition-all duration-200">
              Get Started
              <span className="ml-3 relative">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="bg-orange-500 text-white p-2 rounded-full ml-2 rotate-[-20deg] transition group-hover:shadow-xl"
                />
              </span>
            </button>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full md:w-1/2 flex justify-center self-start"
        >
          <img
            src={im1}
            alt="Right image"
            className="h-[40vh] lg:h-[75vh] object-contain rounded-xl hidden md:block"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Why;
