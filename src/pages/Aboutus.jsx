import React from "react";
import ps from "../assets/cl1.webp";
import img from "../assets/camman2.webp";
import { faStarOfLife, faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useViewportScroll, useTransform, motion } from "framer-motion";

const Aboutus = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.8]);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4 py-12 text-white"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center p-6 md:p-12 rounded-xl">
        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-10">

          {/* Left: Text + Mobile Image */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full md:w-1/2">
            <div className="text-left">
              {["The", "Scrap &", "Store's", "Services"].map((line, index) => (
                <motion.h1
                  key={line}
                  initial={{ opacity: 0, x: -150 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: index * 0.15, duration: 0.6 },
                  }}
                  viewport={{ once: true }}
                  className="text-4xl sm:text-5xl md:text-8xl font-extrabold leading-tight"
                >
                  {line}
                </motion.h1>
              ))}
            </div>

            {/* Mobile Image */}
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
              viewport={{ once: true }}
              src={ps}
              alt="Mobile Visual"
              className="md:hidden w-48 h-48 object-cover rounded-full shadow-xl"
            />
          </div>

          {/* Right: Features */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-8">
            {/* Desktop Image */}
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.8 } }}
              viewport={{ once: true }}
              src={ps}
              alt="Desktop Visual"
              className="hidden md:block w-56 h-56 lg:w-72 lg:h-72 object-cover rounded-full shadow-xl"
            />

            {/* Feature Cards */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-6 text-sm sm:text-base lg:text-lg">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <FontAwesomeIcon icon={faStarOfLife} className="text-orange-400 text-lg" />
                <p className="max-w-xs">
                  Bulk purchase discounts for industries, builders, and recyclers.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <FontAwesomeIcon icon={faStarOfLife} className="text-orange-400 text-lg" />
                <p className="max-w-xs">
                  Variety: metal, plastic, e-waste, paper, and more.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }}
                viewport={{ once: true }}
                className="flex justify-center mt-6"
              >
                <FontAwesomeIcon
                  icon={faArrowDownLong}
                  className="text-orange-500 text-3xl animate-bounce"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
