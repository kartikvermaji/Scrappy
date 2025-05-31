import React from 'react'
import pg1 from "../assets/cl.webp"
import pg2 from "../assets/cl1.webp"
import ps from "../assets/hero cam6.jpg"
import ppg from "../assets/cl3.jpg"
import ps2 from "../assets/ps2.jpg"
import { motion, useTransform, useViewportScroll } from "framer-motion";


const Services = () => {
  return (
    <div className='text-slate-50 lg:h-[100vh] md:h-[80vh] h-[150vh] md:mt-24 lg:mt-auto 	bg-black' id='services'>
      <div className=' flex flex-col justify-center items-center space-y-10 lg:space-y-28'>
        <motion.h1
        initial={{ opacity: 0, scale:1,y:100 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y:0,
          transition: { delay: 0, duration:.5 },
        }}
        viewport={{ once:true, amount: 0.5 }}
         className='lg:text-4xl md:mt-24 mt-16 md:text-4xl text-3xl font-semibold'>OUR SERVICES</motion.h1>
        <div className='flex flex-col  md:flex-row justify-around lg:w-[80vw] md:space-x-5  space-y-5 md:space-y-0'>

          <motion.div
          initial={{ opacity: 0, scale:1,y:100 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y:0,
            transition: { delay: 0, duration:.5 },
          }}
          viewport={{ once:true, amount: 0.5 }}
           className='flex flex-col justify-center items-center '>
                        <p className='lg:text-lg text-sm w-[60vw] border-2 md:w-[26vw]  lg:w-[21vw] py-2 rounded-full hover:bg-slate-50 hover:text-black duration-200 hover:shadow-lg hover:shadow-slate-600  items-center text-center absolute mt-36   lg:mt-52'>FABRIC</p>
            <img src={pg1} alt="" className='lg:h-[46vh] lg:w-[25vw] h-[36vh] rounded-[8vh]  hover:shadow-2xl hover:shadow-slate-700' />

          </motion.div>

          <motion.div
          initial={{ opacity: 0, scale:1,y:100 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y:0,
            transition: { delay:.25, duration:.5 },
          }}
          viewport={{ once:true, amount: 0.5 }}
           className='flex flex-col justify-center items-center '>
                        <p className='lg:text-lg text-sm w-[60vw] border-2 md:w-[26vw]  lg:w-[21vw] py-2 rounded-full hover:bg-slate-50 hover:text-black duration-200 hover:shadow-lg hover:shadow-slate-600  items-center text-center absolute mt-36   lg:mt-52'>LEATHER</p>
            <img src={pg2} alt="" className='lg:h-[46vh] lg:w-[25vw] h-[36vh] rounded-[8vh]  hover:shadow-2xl hover:shadow-slate-700' />

          </motion.div>
          <motion.div
          initial={{ opacity: 0, scale:1,y:100 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y:0,
            transition: { delay:.1, duration:.5 },
          }}
          viewport={{ once:true, amount: 0.5 }}
           className='flex flex-col justify-center items-center '>
                        <p className='lg:text-lg text-sm w-[60vw] border-2 md:w-[26vw]  lg:w-[21vw] py-2 rounded-full hover:bg-slate-50 hover:text-black duration-200 hover:shadow-lg hover:shadow-slate-600  items-center text-center absolute mt-36   lg:mt-52'>METAL SCRAP</p>
            <img src={ppg} alt="" className='lg:h-[46vh] h-[36vh] lg:w-[25vw] rounded-[8vh]  hover:shadow-2xl hover:shadow-slate-700' />

          </motion.div>

         
        </div>
      </div>
    </div>
  )
}

export default Services
