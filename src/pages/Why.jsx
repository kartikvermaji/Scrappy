import React from 'react'
import im1 from "../assets/mixelect.jpg"
import im2 from "../assets/cotton.jpg"
import { motion } from 'framer-motion'
import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Why = () => {
  return (
    <div className='h-[110vh] md:h-auto lg:h-[100vh] pt-16 bg-black'>
      <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-center px-5 md:mt-20'>

        <div>
        <motion.img
        initial={{ opacity: 0, scale:1,y:100 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y:0,
          transition: { delay: 0, duration:.5 },
        }}
        viewport={{ once:true, amount: 0.5 }}
         src={im2} alt="" className='h-[60vh] lg:h-[85vh] lg:w-[40vw]  absolute blur-sm mt-5 lg:mt-[-15vh]' />
        <motion.div
        initial={{ opacity: 0, scale:1,y:100 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y:0,
          transition: { delay:0.15, duration:.5 },
        }}
        viewport={{ once:true, amount: 0.5 }}
         className='bg-slate-50 relative lg:w-[45vw] md:w-[50vw] md:h-[50vh] w-[90vw] h-[55vh]  lg:h-[55vh] text-black lg:mt-12  lg:p-5 md:px-5 lg:px-14 mt-10 md:mt-10'>
            <h1 className='font-[Poppins] lg:text-6xl text-3xl font-semibold w-[30vw] pt-6 pl-6 lg:pt-0 md:pl-0 md:mt-4'>WHY Scrap & Stitch</h1>
            <p className='pl-6   lg:pt-0 md:pl-0 mt-2 lg:mt-4 w-[80vw] md:w-[40vw]  lg:w-[30vw]'>We have the right photographer for your next photoshoot.
Choose from our widespread network of photographers
that match your requirements perfectly.</p>
<button className="md:text-xl ml-[15vw] md:ml-[0vw]  mt-5 lg:mt-5 md:mt-2 border-2  px-7 py-1 lg:px-8 lg:py-2 rounded-full font-extralight hover:bg-slate-50 hover:shadow-xl hover:shadow-slate-400 hover:border-slate-50 hover:text-slate-950 duration-200">Get Started <FontAwesomeIcon icon={faArrowRight} className="bg-orange-500 rounded-full px-2 mt-[-0.3rem] rotate-[-20deg]  ml-[1rem] text-xl py-2 absolute hover:shadow-xl hover:shadow-slate-400" /></button>
        </motion.div>
      

        </div>

        <div>
<motion.img
initial={{ opacity: 0, scale:1,y:100 }}
whileInView={{
  opacity: 1,
  scale: 1,
  y:0,
  transition: { delay: 0, duration:.5 },
}}
viewport={{ once:true, amount: 0.5 }}
 src={im1} alt="" className=' h-[40vh] lg:w-[40vw] object-contain  lg:h-[75vh]' />
        </div>



      </div>
    </div>
  )
}

export default Why
