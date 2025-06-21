import React from 'react';
import herocam from "../assets/hero.jpg";
import Navbar from "../components/Navbar";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const Hero = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [1, 0], [0, 1]);

  return (
    <div>
      <div className='bg-black h-[100vh] md:h-[100vh]' id='home'>
        <motion.img
          style={{ scale }}
          src={herocam}
          alt=""
          className='h-[100vh] md:h-[100vh] w-[100vw] object-cover absolute'
        />

        <div className='text-slate-50 flex flex-col relative text-center items-center pt-40 md:pt-40 lg:pt-[30vh]'>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.15, duration: 1 },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className='md:text-6xl text-4xl p-2 mt-5 font-bold tracking-wide font-[Poppins]'
          >
            Scrap Store
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.15, duration: 1 },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className='md:text-4xl text-lg p-2 mt-5 font-extralight tracking-wide font-[Poppins]'
          >
            WHERE WASTE BECOMES WORTH
          </motion.p>
          <a href="#contact">
            <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.25, duration: 0.75 },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className='md:text-xl font-semibold bg-slate-100 mt-5 md:mt-10 hover:bg-[#543A14] hover:text-slate-50 duration-300 text-slate-800 md:px-5 px-3 py-1 md:py-2 rounded-full hover:shadow-2xl hover:shadow-[#F0BB78]'
          >
            Contact Us
          </motion.button>
          </a>
        </div>

        {/* Responsive Contact and Address Section */}
        <div className='w-full relative flex flex-col md:flex-row justify-between items-start mt-8 md:mt-16 px-6 md:px-16 gap-6'>
          {/* Contact Info */}
          <div className='text-white text-base text-sm md:text-lg'>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.15, duration: 1 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className=' md:text-xl font-bold tracking-wide font-[Poppins]'
            >
              Sanjeev Kumar
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.35, duration: 1 },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div>+91 9810658083</div>
              <div>Scraptraders07@gmail.com</div>
            </motion.div>
          </div>

          {/* GST and Address */}
          <div className='text-white text-base text-sm md:text-lg'>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.15, duration: 1 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className='mb-2'
            >
              GST No: 07AHKPK4983H1Zx
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.35, duration: 1 },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              A -7 (Majdoor Kalyan Camp)<br />
              Okhla Industrial Area Phase 1,<br />
              New Delhi 110020
            </motion.p>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Hero;
