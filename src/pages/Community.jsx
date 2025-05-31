import React from 'react'
import Nav2 from '../components/Nav2'
import Footer from '../components/Footer'
import c1 from "../assets/c1.png"
import c2 from "../assets/c2.png"
import c3 from "../assets/c3.png"
import { motion } from 'framer-motion'

const Community = () => {
  return (
    <div className='font-[Poppins]'>

        <div className='flex flex-col md:flex-row mt-24 justify-around h-[110vh]  md:h-[65vh] lg:h-[80vh]'>
            <div className='text-black md:w-[40vw] p-4 md:p-0 text-center md:text-left'>
                <motion.h1
                initial={{ opacity: 0,y:100 }}
                whileInView={{
                  opacity: 1,
                  y:0,
                  transition: { delay: 0, duration:.5 },
                }}
                viewport={{ once:true, amount: 0.5 }}
                 className='lg:text-7xl text-4xl font-semibold lg:mt-10'>Are you a photographer?</motion.h1>
                <motion.p
                initial={{ opacity: 0,y:100 }}
                whileInView={{
                  opacity: 1,
                  y:0,
                  transition: { delay: 0.15, duration:.5 },
                }}
                viewport={{ once:true, amount: 0.5 }}
                 className='lg:text-xl mt-4 lg:mt-8'>Join our widespread community of photographers just like
                    you and find opportunities to learn, connect and meet from
                    the industry experts. </motion.p>
                    <motion.p
                    initial={{ opacity: 0,y:100 }}
                    whileInView={{
                      opacity: 1,
                      y:0,
                      transition: { delay:0.25, duration:.5 },
                    }}
                    viewport={{ once:true, amount: 0.5 }}
                     className='lg:text-xl mt-4 lg:mt-8'>
                    Become a part of Lensroom Photographer network
                    exclusively made for photographers to get recognized,
                    earn an income and make the best out of your talent.</motion.p>
                <motion.button 
                initial={{ opacity: 0,y:100 }}
                whileInView={{
                  opacity: 1,
                  y:0,
                  transition: { delay:.25, duration:.5 },
                }}
                viewport={{ once:true, amount: 0.5 }}
                className='border-2 border-black text-xl lg:text-2xl px-3 py-1 lg:px-6 lg:py-2 rounded-full mt-5 hover:bg-black hover:text-slate-50 hover:shadow-xl hover:shadow-slate-700 duration-300'>JOIN NOW</motion.button>
            </div>
            <motion.img 
            initial={{ opacity: 0,y:100 }}
            whileInView={{
              opacity: 1,
              y:0,
              transition: { delay: 0, duration:.5 },
            }}
            viewport={{ once:true, amount: 0.5 }}
            src={c1} alt="" className='lg:h-[85vh] md:h-[65vh] h-[55vh] object-cover ' />
        </div>




        <div className='flex flex-col md:flex-row mt-24 justify-around h-[140vh]  md:h-[75vh] lg:h-[90vh]'>
        <img src={c2} alt="" className='hidden md:block lg:h-[95vh] md:h-[65vh] h-[55vh] object-cover ' />
            <div className='text-black md:w-[48vw]  p-4 md:p-0 text-center md:text-right'>
                <motion.h1
                initial={{ opacity: 0,y:100 }}
                whileInView={{
                  opacity: 1,
                  y:0,
                  transition: { delay: 0, duration:.5 },
                }}
                viewport={{ once:true, amount: 0.5 }}
                 className='lg:text-6xl md:text-3xl md:mt-10 text-4xl font-semibold lg:mt-24'>Make your photography club global</motion.h1>
                <motion.p
                initial={{ opacity: 0,y:100 }}
                whileInView={{
                  opacity: 1,
                  y:0,
                  transition: { delay: 0.15, duration:.5 },
                }}
                viewport={{ once:true, amount: 0.5 }} className='lg:text-xl md:text-sm mt-4 lg:mt-8'>If you're a group of photography enthusiast or a photography
                    club, join our community and connect with photographers from
                    across the globe and promote your club worldwide.</motion.p>
                    <motion.p 
                    initial={{ opacity: 0,y:100 }}
                    whileInView={{
                      opacity: 1,
                      y:0,
                      transition: { delay: 0.25, duration:.5 },
                    }}
                    viewport={{ once:true, amount: 0.5 }}
                    className='lg:text-xl md:text-sm mt-4 lg:mt-8'>
                    We help photographers get recognition for their exceptional
talent and grow professionally in their domain.
                </motion.p>
                <motion.button
                initial={{ opacity: 0,y:100 }}
                whileInView={{
                  opacity: 1,
                  y:0,
                  transition: { delay: 0.3, duration:.5 },
                }}
                viewport={{ once:true, amount: 0.5 }}
                 className='border-2 border-black text-xl lg:text-2xl px-3 py-1 lg:px-6 lg:py-2 rounded-full mt-5 hover:bg-black hover:text-slate-50 hover:shadow-xl hover:shadow-slate-700 duration-300'>JOIN NOW</motion.button>
            </div>
            <motion.img initial={{ opacity: 0,y:100 }}
                whileInView={{
                  opacity: 1,
                  y:0,
                  transition: { delay: 0, duration:.5 },
                }}
                viewport={{ once:true, amount: 0.5 }} src={c2} alt="" className='md:hidden lg:h-[95vh] md:h-[65vh] h-[55vh] object-cover ' />
            
        </div>





       <div >
        <div className='flex flex-col md:flex-row justify-around items-center lg:mt-20 md:mt-0 mt-32 space-y-5 md:space-y-0  '>
            <div className='flex flex-col justify-center items-center '>
                <motion.h1
                initial={{ opacity: 0,y:100 }}
                whileInView={{
                  opacity: 1,
                  y:0,
                  transition: { delay: 0, duration:.5 },
                }}
                viewport={{ once:true, amount: 0.5 }}
                 className='lg:text-[11rem] md:text-8xl text-9xl font-semibold'>50+</motion.h1>
            <motion.h1
            initial={{ opacity: 0,y:100 }}
            whileInView={{
              opacity: 1,
              y:0,
              transition: { delay:.2, duration:.5 },
            }}
            viewport={{ once:true, amount: 0.5 }}
             className='lg:text-5xl text-3xl md:text-2xl  font-semibold lg:mt-[-0vh] '>Photographers</motion.h1></div>
           
            <div className='flex flex-col justify-center items-center  mt-[-15vh]'>
                <motion.h1
                initial={{ opacity: 0,y:100 }}
                whileInView={{
                  opacity: 1,
                  y:0,
                  transition: { delay: .1, duration:.5 },
                }}
                viewport={{ once:true, amount: 0.5 }}
                 className='lg:text-[11rem] md:text-8xl text-9xl font-semibold'>10+</motion.h1>
            <motion.h1
            initial={{ opacity: 0,y:100 }}
            whileInView={{
              opacity: 1,
              y:0,
              transition: { delay: 0.25, duration:.5 },
            }}
            viewport={{ once:true, amount: 0.5 }}
             className='lg:text-5xl text-3xl md:text-2xl font-semibold lg:mt-[0vh] '>Clubs</motion.h1></div>

            <div><motion.img
            initial={{ opacity: 0,y:100 }}
            whileInView={{
              opacity: 1,
              y:0,
              transition: { delay: .15, duration:.5 },
            }}
            viewport={{ once:true, amount: 0.5 }}
             src={c3} alt="" className='h-[50vh] md:h-[40vh] lg:h-[60vh] ' /></div>
        </div>
        </div>
        <Footer/>
      <Nav2/>
    </div>
  )
}

export default Community
