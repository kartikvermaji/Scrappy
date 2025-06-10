import React from 'react'
import Nav2 from '../components/Nav2'
import Footer from '../components/Footer'
import c1 from "../assets/cl.webp"
import c2 from "../assets/camman.jpg"
import c3 from "../assets/c3.png"
import { motion } from 'framer-motion'

const Community = () => {
  return (
    <div className='font-[Poppins] bg-black text-white'>

        <div className='flex flex-col md:flex-row mt-12 justify-around items-center h-[80vh] md:h-[110vh]  md:h-[65vh] lg:h-[80vh]'>
            <div className='md:w-[40vw] p-4 md:p-0 text-center md:text-left'>
                <motion.h1
                initial={{ opacity: 0,y:100 }}
                whileInView={{ opacity: 1, y:0, transition: { delay: 0, duration:.5 } }}
                viewport={{ once:true, amount: 0.5 }}
                 className='lg:text-7xl text-4xl font-semibold lg:mt-10'>Join the Scrap Community</motion.h1>
                <motion.p
                initial={{ opacity: 0,y:100 }}
                whileInView={{ opacity: 1, y:0, transition: { delay: 0.15, duration:.5 } }}
                viewport={{ once:true, amount: 0.5 }}
                 className='lg:text-xl mt-4 lg:mt-8'>Are you passionate about sustainability? Become part of a growing movement where scrap meets creativity and purpose.</motion.p>
                <motion.p
                initial={{ opacity: 0,y:100 }}
                whileInView={{ opacity: 1, y:0, transition: { delay:0.25, duration:.5 } }}
                viewport={{ once:true, amount: 0.5 }}
                 className='lg:text-xl mt-4 lg:mt-8'>Whether you upcycle, collect, or repurpose materials, connect with others who believe in turning waste into value.</motion.p>
                <motion.button 
                initial={{ opacity: 0,y:100 }}
                whileInView={{ opacity: 1, y:0, transition: { delay:.25, duration:.5 } }}
                viewport={{ once:true, amount: 0.5 }}
                className='border-2 border-white text-xl lg:text-2xl px-3 py-1 lg:px-6 lg:py-2 rounded-full mt-5 hover:bg-white hover:text-black hover:shadow-xl hover:shadow-white duration-300'>JOIN NOW</motion.button>
            </div>
            <motion.img 
            initial={{ opacity: 0,y:100 }}
            whileInView={{ opacity: 1, y:0, transition: { delay: 0, duration:.5 } }}
            viewport={{ once:true, amount: 0.5 }}
            src={c1} alt="scrap visual" className='lg:h-[85vh] md:h-[65vh] h-[45vh] w-[80vw] md:w-[40vw] md:mt-24 object-cover ' />
        </div>

        <div className='flex flex-col md:flex-row mt-24 justify-around h-[60vh] md:h-[140vh] bg-slate-50 text-black  md:h-[75vh] lg:h-[90vh]'>
        <img src={c2} alt="scrap club" className='hidden md:block lg:h-[75vh] md:h-[65vh] h-[45vh] w-[80vw] md:w-[40vw] md:mt-10 ' />
            <div className='md:w-[48vw] p-4 md:p-0 text-center md:text-right'>
                <motion.h1
                initial={{ opacity: 0,y:100 }}
                whileInView={{ opacity: 1, y:0, transition: { delay: 0, duration:.5 } }}
                viewport={{ once:true, amount: 0.5 }}
                 className='lg:text-6xl md:text-3xl md:mt-10 text-4xl font-semibold lg:mt-24'>Build a Sustainable Network</motion.h1>
                <motion.p
                initial={{ opacity: 0,y:100 }}
                whileInView={{ opacity: 1, y:0, transition: { delay: 0.15, duration:.5 } }}
                viewport={{ once:true, amount: 0.5 }}
                 className='lg:text-xl md:text-sm mt-4 lg:mt-8'>Join clubs and collectives committed to reducing waste and promoting reuse. Let your community grow globally and do good together.</motion.p>
                <motion.p 
                initial={{ opacity: 0,y:100 }}
                whileInView={{ opacity: 1, y:0, transition: { delay: 0.25, duration:.5 } }}
                viewport={{ once:true, amount: 0.5 }}
                className='lg:text-xl md:text-sm mt-4 lg:mt-8'>Gain exposure, inspire change, and build lasting partnerships within a network driven by conscious innovation.</motion.p>
                <motion.button
                initial={{ opacity: 0,y:100 }}
                whileInView={{ opacity: 1, y:0, transition: { delay: 0.3, duration:.5 } }}
                viewport={{ once:true, amount: 0.5 }}
                 className='border-2  border-black text-xl lg:text-2xl px-3 py-1 lg:px-6 lg:py-2 rounded-full mt-5 hover:bg-white hover:text-black hover:shadow-xl hover:shadow-white duration-300'>JOIN NOW</motion.button>
            </div>

        </div>

       {/* <div>
        <div className='flex flex-col md:flex-row justify-around items-center lg:mt-20 md:mt-0 mt-32 space-y-5 md:space-y-0'>
            <div className='flex flex-col justify-center items-center'>
                <motion.h1
                initial={{ opacity: 0,y:100 }}
                whileInView={{ opacity: 1, y:0, transition: { delay: 0, duration:.5 } }}
                viewport={{ once:true, amount: 0.5 }}
                 className='lg:text-[11rem] md:text-8xl text-9xl font-semibold'>150+</motion.h1>
                <motion.h1
                initial={{ opacity: 0,y:100 }}
                whileInView={{ opacity: 1, y:0, transition: { delay:.2, duration:.5 } }}
                viewport={{ once:true, amount: 0.5 }}
                 className='lg:text-5xl text-3xl md:text-2xl font-semibold'>Scrap Artists</motion.h1>
            </div>

            <div className='flex flex-col justify-center items-center mt-[-15vh]'>
                <motion.h1
                initial={{ opacity: 0,y:100 }}
                whileInView={{ opacity: 1, y:0, transition: { delay: .1, duration:.5 } }}
                viewport={{ once:true, amount: 0.5 }}
                 className='lg:text-[11rem] md:text-8xl text-9xl font-semibold'>20+</motion.h1>
                <motion.h1
                initial={{ opacity: 0,y:100 }}
                whileInView={{ opacity: 1, y:0, transition: { delay: 0.25, duration:.5 } }}
                viewport={{ once:true, amount: 0.5 }}
                 className='lg:text-5xl text-3xl md:text-2xl font-semibold'>Eco Clubs</motion.h1>
            </div>

            <div>
              <motion.img
              initial={{ opacity: 0,y:100 }}
              whileInView={{ opacity: 1, y:0, transition: { delay: .15, duration:.5 } }}
              viewport={{ once:true, amount: 0.5 }}
              src={c3} alt="scrap visual" className='h-[50vh] md:h-[40vh] lg:h-[60vh] grayscale' />
            </div>
        </div>
        </div> */}

        <Footer/>
        <Nav2/>
    </div>
  )
}

export default Community
