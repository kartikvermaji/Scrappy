
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import {
    faArrowRight,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Moto = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [.5, 1]);
  return (
    <div className='flex justify-center items-center  bg-slate-50 h-[50vh] pb-[10vh]  md:h-[60vh] lg:h-[70vh] text-black'>
       <motion.div 
      initial={{ opacity: 0, y:100 ,scale:1}}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay:0, duration: 1,scale:1. },
      }}
      viewport={{ once: true, amount: 0}}
      className="flex justify-center lg:ml-24 items-center flex-col md:flex-row mt-[-4vh] md:space-x-20 lg:space-x-44  lg:mt-10 md:mt-0 w-[80vw]  ">
        <h1 className="lg:text-7xl md:text-5xl md:ml-5 lg:ml-2 text-3xl mt-16 md:mt-20 lg:mt-0 lg:w-[40vw] text-center  md:text-left font-lightbold ">Finding quality scrap just got easier!</h1>
        <div className="md:w-[50vw] justify-center items-center">
        <p className="font-semibold lg:text-lg lg:font-extralight  md:text-sm text-sm text-center md:ml-[-4vw] md:w-[90vw] md:text-left  md:w-[44vw] lg:w-[34vw] mt-5 md:mt-10 lg:mt-0">
Choose from a wide range of scrap materials, sorted by type, price, and location. Whether you’re buying or selling, we make it fast, simple, and reliable.</p>
          <button className="md:text-xl ml-[15vw] md:ml-[0vw]  mt-5 lg:mt-5 md:mt-5 border-2 border-black px-8 py-2 rounded-full font-extralight hover:bg-slate-50 hover:shadow-xl hover:shadow-slate-400 hover:border-slate-50 hover:text-slate-950 duration-200">Get Started <FontAwesomeIcon icon={faArrowRight} className="bg-orange-500 rounded-full px-2 mt-[-0.3rem] rotate-[-20deg]  ml-[1rem] text-xl py-2 absolute hover:shadow-xl hover:shadow-slate-400" /></button>
        </div>
        
      </motion.div>
    </div>
  )
}

export default Moto
