import React from 'react'
import BG from "../assets/category page bg.png"
import im2 from "../assets/2.png"
import im3 from "../assets/3.png"
import im4 from "../assets/4.png"
import im5 from "../assets/5.png"
import { motion } from 'framer-motion'

const Categories = () => {
  return (
    <div>
        <img src={BG} alt="" className='md:h-[100vh] h-[120vh] w-[100vw] object-cover absolute' id='category' />
      <div className='relative text-slate-50 flex flex-col justify-center items-center mb-36'>
        <motion.h1
        initial={{ opacity: 0, scale:1,y:100 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y:0,
          transition: { delay: 0, duration:.5 },
        }}
        viewport={{ once:true, amount: 0.5 }} className='md:text-6xl text-3xl text-center font-semibold mt-28'>CHOOSE BY CATEGORY</motion.h1>


        <div className='flex justify-around  mt-5'>
            <div className='h-[70vh] md:h-[50vh] lg:h-[70vh]  w-[99vw] bg-slate-50 absolute opacity-80 '></div>
            <div className='flex flex-col md:flex-row justify-center  md:space-x-14 mt-12 flex-nowrap  w-[90vw]'>
              <div className='flex flex-row justify-center space-x-6 md:space-x-14'>

              <motion.div
              initial={{ opacity: 0, scale:1,y:100 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y:0,
                transition: { delay: 0, duration:.5 },
              }}
              viewport={{ once:true, amount: 0.5 }} className='relative text-slate-950 flex flex-col justify-center items-center space-y-1 md:space-y-4'>
                <img src={im2} alt="" className='lg:h-[40vh] h-[20vh]  object-cover rounded-full' />
                <p className='lg:text-lg md:text-xl text-center w-[30vw] md:w-[15vw]'>PRODUCT PHOTOGRAPHY</p>
            </motion.div>


            <motion.div 
            initial={{ opacity: 0, scale:1,y:100 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y:0,
              transition: { delay: 0.15, duration:.5 },
            }}
            viewport={{ once:true, amount: 0.5 }}className='relative text-slate-950 flex flex-col justify-center items-center space-y-1 md:space-y-4'>
                <img src={im3} alt="" className='lg:h-[40vh] h-[20vh]  object-cover rounded-full' />
                <p className='lg:text-lg md:text-xl text-center w-[30vw] md:w-[10vw]'>FOOD PHOTOGRAPHY</p>
            </motion.div>

              </div>

              <div  className='flex flex-row justify-center space-x-6 md:space-x-14'> 
              <motion.div
              initial={{ opacity: 0, scale:1,y:100 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y:0,
                transition: { delay:.25, duration:.5 },
              }}
              viewport={{ once:true, amount: 0.5 }} className='relative text-slate-950 flex flex-col justify-center items-center space-y-1 md:space-y-4'>
                <img src={im4} alt="" className='lg:h-[40vh] h-[20vh]  object-cover rounded-full' />
                <p className='lg:text-lg md:text-xl text-center w-[30vw] md:w-[10vw]'>EVENT PHOTOGRAPHY</p>
            </motion.div>

             <motion.div
             initial={{ opacity: 0, scale:1,y:100 }}
             whileInView={{
               opacity: 1,
               scale: 1,
               y:0,
               transition: { delay: 0.12  , duration:.5 },
             }}
             viewport={{ once:true, amount: 0.5 }} className='relative text-slate-950 flex flex-col justify-center items-center space-y-1 md:space-y-4'>
                <img src={im5} alt="" className='lg:h-[40vh] h-[20vh]  object-cover rounded-full' />
                <p className='lg:text-lg   md:text-xl text-center w-[30vw] md:w-[15vw]'>REAL ESTATE PHOTOGRAPHY</p>
            </motion.div>

              </div>
           
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
