import React, { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { motion, useScroll, useTransform, useViewportScroll } from "framer-motion";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import ScrollTrigger from "react-scroll-trigger";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Services = () => {
  const [counterOn, setCounterOn] = useState(false);

  // const HorizontalScrollCarousel = () => {
  //   const targetRef = useRef(null);
  //   const { scrollYProgress } = useScroll({
  //     target: targetRef,
  //   });

  //   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  //   return (
  //     <section ref={targetRef} className="relative h-[300vh] ">
  //       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
  //         <motion.div style={{ x }} className="flex gap-4 justify-center" >
  //         <p className="text-4xl font-semibold ">Get your LOOKS&nbsp;</p>
  //         <p className="text-4xl font-semibold ">Set YOUR fashion&nbsp; </p>
  //         <p className="text-4xl font-semibold ">LEAVE IT TO US &nbsp;</p>
  //         </motion.div>
  //       </div>
  //     </section>
  //   );
  // };
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.2, 1.2]);

  return (
    <div className="md:h-[70vh] h-[50vh] bg-slate-50 z-5 md:w-[42rem] lg:w-[100vw] items-center justify-center">
      <div className="flex flex-col justify-center text-center mt-10 md:ml-[10vw] lg:ml-0">
        <motion.h1 
         initial={{ opacity: 0, scale: 0.8,y:100 }}
         whileInView={{
           opacity: 1,
           scale: 1,
           y:0,
           transition: { delay: 0, duration: 1 },
         }}
         viewport={{ once:true, amount: 0.5 }}
        className="md:text-4xl text-xl font-semibold sans p-6">
          Join Our Happy Community <br />
          of Customers
        </motion.h1>
        <div>
          <motion.button 
           initial={{ opacity: 0, scale: 0.8,y:100 }}
           whileInView={{
             opacity: 1,
             scale: 1,
             y:0,
             transition: { delay:0.25, duration: 1 },
           }}
           viewport={{ once:true, amount: 0.5 }}
          className="bg-slate-900 mt-[-2vh] md:mt-0 text-slate-50 px-3 py-1 md:px-6 md:py-2 md:text-xl font-semibold rounded-full hover:text-slate-900 hover:bg-slate-400 hover:shadow-2xl hover:shadow-slate-800 duration-200">
            Book Online
          </motion.button>
        </div>

        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8,y:100 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y:0,
              transition: { delay: 0, duration: 1 },
            }}
            viewport={{ once:true, amount: 0.5 }}
           className="flex justify-center  flex-row text-5xl md:text-9xl text-orange-400 font-extrabold tracking-wide  p-8">
            {counterOn && <Number n={100000} />}
          </motion.h1>
        </ScrollTrigger>
        <div>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0, duration: 1 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            src={p1}
            alt=""
            className="md:h-28  md:w-28 h-12 w-12 rounded-full absolute ml-[17vw] mt-[-19vh] md:ml-[15vw] md:mt-[-40vh] lg:ml-[25vw] lg:mt-[-30vh] hover:shadow-2xl hover:shadow-slate-500 duration-200 "
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { delay: 1, duration: 1 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            src={p2}
            alt=""
            className="md:h-20 md:w-20 h-10 w-10 rounded-full absolute md:ml-[60vw] ml-[69vw] mt-[-19vh] md:mt-[-35vh] lg:mt-[-30vh] hover:shadow-2xl hover:shadow-slate-500 duration-200"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.7, duration: 1 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            src={p3}
            alt=""
            className="md:h-24 h-12 w-12 md:w-24 rounded-full absolute ml-[35vw] md:ml-[40vw] mt-[-6vh] hover:shadow-2xl hover:shadow-slate-500 duration-200"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { delay: 1.5, duration: 1 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            src={p4}
            alt=""
            className="md:h-16 md:w-16 h-10 w-10 rounded-full absolute ml-[75vw] md:ml-[70vw] lg:ml-[65vw] mt-[-5vh] hover:shadow-2xl hover:shadow-slate-500 duration-200"
          />
        </div>

{/* <marquee behavior="" scrolldelay="100" direction="" ><div className="flex mt-28">
          <p className="text-5xl text-sky-500 font-semibold ">Capture your unique   VISION &nbsp;</p>
          <p className="text-4xl font-semibold text-yellow-400 ">See the world through your lens&nbsp; </p>
          <p className="text-4xl font-semibold text-purple-500 ">Tell your story, frame by frame &nbsp;</p>
          <p className="text-4xl font-semibold text-orange-400 ">LEAVE IT TO US &nbsp;</p>
          
        </div> </marquee>
        <marquee behavior="" scrolldelay="100" direction="right" ><div className="flex mt-28">
          <p className="text-4xl font-semibold ">Get your LOOKS&nbsp;</p>
          <p className="text-4xl font-semibold ">Set YOUR fashion&nbsp; </p>
          <p className="text-4xl font-semibold ">LEAVE IT TO US &nbsp;</p>
          <p className="text-4xl font-semibold ">LEAVE IT TO US &nbsp;</p>
          <p className="text-4xl font-semibold ">LEAVE IT TO US &nbsp;</p>
          <p className="text-4xl font-semibold ">LEAVE IT TO US &nbsp;</p>
          <p className="text-4xl font-semibold ">LEAVE IT TO US &nbsp;</p>
        </div> </marquee> */}
       
        
       
      </div>
    </div>
  );
};

export default Services;
