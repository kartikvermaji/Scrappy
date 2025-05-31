import React from 'react';
import mix from "../assets/mixelect.jpg";
import heavy from "../assets/heavey.avif";
import comp from "../assets/computer.webp";
import { motion } from "framer-motion";

const Electric = () => {
  return (
    <div className="bg-black text-slate-50 flex flex-col lg:flex-row w-full px-6 sm:px-10 lg:px-20 py-10 justify-between items-center gap-8">

      {/* Title Section */}
      <div className="order-1 w-full lg:w-[25%] flex justify-center lg:justify-start">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-center lg:text-left">
          Electric :
        </h1>
      </div>

      {/* Cards Section */}
      <div className="order-2 w-full lg:w-[70%]">
        <div className="flex flex-col lg:flex-row gap-6 justify-center lg:justify-end">

          {/* Left Column: Machinery and Computer Scrap */}
          <div className="flex flex-col gap-2 lg:w-[40%]">

            {/* Machinery Scrap */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0, duration: 0.25 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative group h-[35vh] sm:h-[40vh] w-full overflow-hidden rounded-2xl transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-slate-700"
            >
              <img
                src={heavy}
                alt="Machinery Scrap"
                className="h-full w-full object-cover rounded-2xl transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex items-center justify-center rounded-2xl">
                <span className="text-white text-xl font-semibold">Machinery Scrap</span>
              </div>
            </motion.div>

            {/* Computer Scrap */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0, duration: 0.25 },
              }}
              viewport={{ once: true, amount: 0.25 }}
              className="relative group h-[40vh] w-full overflow-hidden rounded-2xl transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-slate-700"
            >
              <img
                src={comp}
                alt="Computer Scrap"
                className="h-full w-full object-cover rounded-2xl transition duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex items-center justify-center rounded-2xl">
                <span className="text-white text-lg font-semibold">Computer Scrap</span>
              </div>
            </motion.div>
          </div>

          {/* Right Large Card: Electric Scrap */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0, duration: 0.5 },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative group h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full lg:w-[55%] overflow-hidden rounded-2xl transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-slate-700"
          >
            <img
              src={mix}
              alt="Electric Scrap"
              className="h-full w-full object-cover transition duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex items-center justify-center rounded-2xl">
              <span className="text-white text-3xl font-bold">Electric Scrap</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Electric;
