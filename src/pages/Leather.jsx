import React from 'react';
import leather from "../assets/leather.jpg";
import leatherbelt from "../assets/leatherbelt.avif";
import leatherthread from "../assets/leatherthread.jpg";
import { motion } from "framer-motion";

const Leather = () => {
  return (
    <div className="bg-slate-50 text-black flex flex-col lg:flex-row w-full px-6 sm:px-10 lg:px-20 py-10 justify-between items-center gap-8">

      {/* Title Section */}
      <div className="order-1 lg:order-2 w-full lg:w-[25%] flex justify-center lg:justify-end">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center lg:text-right">
          Leather
        </h1>
      </div>

      {/* Cards Section */}
      <div className="order-2 lg:order-1 w-full lg:w-[75%]">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Leather Scrap */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0, duration: 0.5 },
            }}
            viewport={{ once: true, amount: 0.25 }}
            className="relative group h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full lg:w-[30%] overflow-hidden rounded-2xl transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:shadow-black"
          >
            <img
              src={leather}
              alt="Leather Scrap"
              className="h-full w-full object-cover transition duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex items-center justify-center">
              <span className="text-white text-3xl font-bold">Leather Scrap</span>
            </div>
          </motion.div>

          {/* Leather Belts */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0, duration: 0.7 },
            }}
            viewport={{ once: true, amount: 0.25 }}
            className="relative group h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full lg:w-[30%] overflow-hidden rounded-2xl transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:shadow-black"
          >
            <img
              src={leatherbelt}
              alt="Leather Belts"
              className="h-full w-full object-cover rounded-2xl transition duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex items-center justify-center rounded-2xl">
              <span className="text-white text-xl font-semibold">Leather Belts</span>
            </div>
          </motion.div>

          {/* Leather Thread */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0, duration: 0.9 },
            }}
            viewport={{ once: true, amount: 0.25 }}
            className="relative group h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full lg:w-[30%] overflow-hidden rounded-2xl transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:shadow-black"
          >
            <img
              src={leatherthread}
              alt="Leather Thread"
              className="h-full w-full object-cover rounded-2xl transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex items-center justify-center rounded-2xl">
              <span className="text-white text-lg font-semibold">Leather Thread</span>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Leather;
