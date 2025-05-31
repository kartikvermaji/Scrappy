import React from "react";
import p1 from "../assets/phone.jpg";
import p2 from "../assets/phone2.jpg";
import { motion } from "framer-motion";

const Appp = () => {
  return (
    <div className="md:h-[100vh] bg-slate-950 text-slate-50">
      <div className="flex justify-center flex-col md:flex-row space-x-20 items-center">
        <div>
          <div className=" h-[55vh] w-[90vw] lg:h-[70vh] md:h-[60vh] md:w-[45vw] lg:w-[30vw] bg-slate-50 hover:bg-slate-100 hover:shadow-xl hover:shadow-slate-700 rounded-3xl ">
            <motion.img
               initial={{ opacity: 0, scale: 1,rotateZ:100,rotateX:0,translateX:50,translateY:25 }}
               whileInView={{
                 opacity: 1,
                 scale: 1,
                 rotateZ:15,
                 rotateX:0,
                 translateX:0,
                 translateY:0,
                 transition: { delay:.25, duration:1 },
               }}
              viewport={{ once:true, amount: 0.5 }}
              src={p2}
              alt=""
              className="h-[35vh] lg:h-[50vh] md:h-[40vh] rounded-xl lg:rounded-3xl md:rounded-xl absolute mt-24 lg:mt-32 ml-36 md:ml-48 lg:ml-60  "
            />
            <motion.img
             initial={{ opacity: 0, scale: 1,rotateZ:100,rotateX:0,translateX:150,translateY:50 }}
             whileInView={{
               opacity: 1,
               scale: 1,
               rotateZ:-10,
               rotateX:0,
               translateX:0,
               translateY:0,
               transition: { delay: 0, duration:1 },
             }}
             viewport={{ once:true, amount: 0.5 }}
              src={p1}
              alt=""
              className="h-[40vh] lg:h-[60vh] md:h-[50vh] rounded-xl lg:rounded-[2rem] md:rounded-xl absolute mt-16 md:mt-12 lg:mt-16 ml-14 lg:ml-20 rotate-[-10deg]"
            />
          </div>
        </div>

        <div className="lg:w-[25vw] md:w-[45vw] w-[90vw] mt-5 md:mt-0 ">
          <motion.h1
           initial={{ opacity: 0, scale:1,y:100 }}
           whileInView={{
             opacity: 1,
             scale: 1,
             y:0,
             transition: { delay: 0, duration:.75 },
           }}
           viewport={{ once:true, amount: 0.5 }}
           className=" lg:text-xl font-extrabold text-slate-600">
            ABOUT APP
          </motion.h1>
          <motion.h1
           initial={{ opacity: 0, scale:1,y:100 }}
           whileInView={{
             opacity: 1,
             scale: 1,
             y:0,
             transition: { delay:0.15, duration:.75 },
           }}
           viewport={{ once:true, amount: 0.5 }}
           className="lg:text-5xl w-[75vw] md:w-[38vw] lg:w-auto text-3xl">
            Stay organized and increase productivity
          </motion.h1>
          <motion.p
           initial={{ opacity: 0, scale:1,y:100 }}
           whileInView={{
             opacity: 1,
             scale: 1,
             y:0,
             transition: { delay:0.3, duration:.75 },
           }}
           viewport={{ once:true, amount: 0.5 }}
           className="text-slate-300 mt-8 w-[75vw] md:w-[35vw] lg:w-auto">
            Our Task manager allows you to stay on top of your deadlines,
            reducing stress and ensuring that you have an clear pictures of your
            progress.Message system and task assignment feauteres make it easy
            to collaborate with your team,ensuring that everyone is on the same
            page and working towards tha same goal
          </motion.p>
          <motion.button
           initial={{ opacity: 0, scale:1,y:100 }}
           whileInView={{
             opacity: 1,
             scale: 1,
             y:0,
             transition: { delay:.45, duration:.75 },
           }}
           viewport={{ once:true, amount: 0.5 }}
    
           className="lg:text-xl px-4 py-2 bg-slate-50 text-slate-950 rounded-2xl hover:bg-slate-600 hover:text-slate-50 duration-200 hover:shadow-lg hover:shadow-slate-600 mt-4 lg:mt-8">
            Try for Free
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Appp;
