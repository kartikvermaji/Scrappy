import React from 'react'
import pg1 from "../assets/pg1.jpg"
import pg2 from "../assets/pg2.jpg"
import ps from "../assets/hero cam6.jpg"
import ppg from "../assets/ppg.jpg"
import ps2 from "../assets/ps2.jpg"
import { motion, useTransform, useViewportScroll } from "framer-motion";


const Services = () => {
  return (
    <div className='bg-slate-950 text-slate-50 h-[110vh] ' id='services'>
      <h1 className='md:text-6xl text-4xl font-thin text-center'>Our Services</h1>
      <div className='flex flex-col justify-around space-y-5 md:space-y-5 pt-10 items-center'>
        <div className='flex md:space-x-4 space-x-3'>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { delay:0, duration: 1},
            }}
            viewport={{ once:true, amount: 0.5 }}>
                <img src={pg1} alt="" className='h-[35vh] md:h-[35vh] w-[40vw] md:w-[25vw] lg:w-[20vw] object-cover rounded-[8vh] md:rounded-[8vh] relative hover:shadow-xl hover:shadow-slate-500 duration-200' />
                <p className='absolute mt-[-12vh] lg:w-[18vw] text-center lg:mt-[-10vh] md:mt-[-8vh] ml-0 md:w-[24vw] w-[40vw] md:ml-1 lg:ml-4 bg-transparent border-2 text-slate-50 lg:px-8 px-3 py-1 lg:py-2 text-sm lg:text-xl  rounded-full font-semibold  hover:bg-orange-500 hover:border-2 hover:text-slate-950 duration-200  '>Instant Photographer</p>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { delay:0.5, duration: 1 },
            }}  
            viewport={{ once:true, amount: 0.5 }}
            > 
                 <img src={pg2} alt="" className='h-[35vh] md:w-[10vw] lg:w-[8vw] hidden md:block  object-cover rounded-full hover:shadow-xl hover:shadow-slate-500 duration-200' /></motion.div>
            
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { delay:1, duration: 1 },
            }}
            viewport={{ once:true, amount: 0.5 }}
             className='h-[35vh] md:h-[35vh] w-[40vw] md:w-[20vw] object-cover rounded-[8vh] md:rounded-[8vh]  bg-orange-500 md:p-6 flex flex-col justify-center hover:shadow-2xl hover:shadow-slate-500 duration-200'> 
            <h1 className='lg:pl-5 md:pl-0 pl-3 md:text-4xl lg:text-4xl text-xl font-semibold'>Best Choice</h1>
            <p className='lg:p-2 md:p-0 text-sm hidden md:w-[18vw]  lg:block w-[30vw]'>Not all insurance are the same.That's why agency knows that your insurance should be customized to fit your situation </p>
            <button className='bg-slate-50 text-sm  lg:text-xl text-slate-950 px-3 py-1  lg:px-8 md:py-2 lg:w-[15vw] md:w-[18vw] lg:mt-10 w-[30vw] mt-16 ml-4 md:ml-[-2vw] lg:ml-5 md:mt-14 rounded-full hover:bg-slate-800 hover:border-2 hover:text-slate-50 duration-200 '>View All Services</button>
                 </motion.div>
        </div>
        

        <div className='flex md:space-x-4 space-x-4'>

        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { delay:0, duration: .4 },
        }}
        viewport={{ once:true, amount: 0.5 }}
        > 
             <img src={ps} alt=""  className='h-[35vh] md:h-[35vh] w-[40vw] md:w-[25vw] lg:w-[20vw] object-cover rounded-[8vh] md:rounded-[8vh] relative hover:shadow-xl hover:shadow-slate-500 duration-200' />
             <p  className='absolute mt-[-12vh] lg:w-[19vw] text-center lg:mt-[-10vh] md:mt-[-8vh] ml-0 md:w-[24vw] w-[40vw] md:ml-1 lg:ml-2 bg-transparent border-2 text-slate-50 lg:px-8 px-3 py-1 lg:py-2 text-sm lg:text-xl  rounded-full font-semibold  hover:bg-orange-500 hover:border-2 hover:text-slate-950 duration-200  '>Schedule  Photographer</p>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { delay:0.6, duration: 0.7 },
        }}
        viewport={{ once:true, amount: 0.5 }}
        > 
             <img src={ppg} alt=""  className='h-[35vh] md:h-[35vh] w-[40vw] md:w-[25vw] lg:w-[20vw] object-cover rounded-[8vh] md:rounded-[8vh] relative hover:shadow-xl hover:shadow-slate-500 duration-200' />
             <p  className='absolute mt-[-12vh] lg:w-[18vw] text-center lg:mt-[-10vh] md:mt-[-8vh] ml-0 md:w-[24vw] w-[40vw] md:ml-1 lg:ml-4 bg-transparent border-2 text-slate-50 lg:px-8 px-3 py-1 lg:py-2 text-sm lg:text-xl  rounded-full font-semibold  hover:bg-orange-500 hover:border-2 hover:text-slate-950 duration-200  '>Printing Services</p></motion.div>
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { delay:0, duration: 1 },
        }}
        viewport={{ once:true, amount: 0.5 }}
        > 
             <img src={ps2} alt="" className='md:h-[35vh] lg:h-[35vh] hidden md:block w-[10vw] lg:w-[8vw] object-cover rounded-[10vh] hover:shadow-2xl hover:shadow-slate-500 duration-200' />
            
             </motion.div>

        </div>



      </div>
    </div>
  )
}

export default Services
