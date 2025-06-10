import React from 'react';
import cotton from "../assets/cotton.jpg";
import leelan from "../assets/leelan.jpg";
import hojri from "../assets/hojri.avif";
import mix from "../assets/mix.jpg";
import { motion } from "framer-motion";

const Fabric = () => {
  return (
    <div className="bg-black text-slate-50 px-6 py-10 lg:px-20 flex flex-col lg:flex-row lg:justify-between lg:items-center">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-8 lg:mb-0">
        Fabric :
      </h1>

      <div className="w-full lg:w-auto">
        <div className="flex flex-col lg:flex-row  lg:gap-4">
          {/* Cotton */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0, duration: 0.5 },
            }}
            viewport={{ once: true, amount: 0.25 }}
            className="relative group w-full lg:w-[30vw] h-[20vh] md:h-[60vh] lg:h-[80vh] overflow-hidden rounded-2xl mb-2 md:mb-4 lg:mb-0 hover:shadow-xl hover:shadow-slate-700"
          >
            <img
              src={cotton}
              alt="Cotton"
              className="h-full w-full object-cover transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center">
              <span className="text-white text-2xl md:text-3xl font-bold">Cotton</span>
            </div>
          </motion.div>

          <div className="flex flex-col w-full lg:w-[41vw] gap-2">
            {/* Leelan */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative group h-[15vh] md:h-[30vh] lg:h-[38vh] w-full overflow-hidden rounded-2xl hover:shadow-xl hover:shadow-slate-700"
            >
              <img
                src={leelan}
                alt="Leelan"
                className="h-full w-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center rounded-2xl">
                <span className="text-white text-lg md:text-xl font-semibold">Leelan</span>
              </div>
            </motion.div>

            {/* Hojri + Mix */}
            <div className="flex flex-col md:flex-row gap-2 md:mt-2">
              {/* Hojri */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0, duration: 0.25 },
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="relative group h-[15vh] md:h-[30vh] lg:h-[40vh] w-full md:w-1/2 overflow-hidden rounded-2xl hover:shadow-xl hover:shadow-slate-700"
              >
                <img
                  src={hojri}
                  alt="Hojri"
                  className="h-full w-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center rounded-2xl">
                  <span className="text-white text-sm md:text-lg font-semibold">Hojri</span>
                </div>
              </motion.div>

              {/* Mix */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0, duration: 0.25 },
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="relative group h-[15vh] md:h-[30vh] lg:h-[40vh] w-full md:w-1/2 overflow-hidden rounded-2xl hover:shadow-xl hover:shadow-slate-700"
              >
                <img
                  src={mix}
                  alt="Mix"
                  className="h-full w-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center rounded-2xl">
                  <span className="text-white text-sm md:text-lg font-semibold">Mix</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fabric;
