import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import {
  faQuoteLeft,
  faCertificate,
  faArrowRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Page1 = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  return (
    <div className="hidden  h-[80vh] bg-slate-950 text-slate-50   md:flex flex-col items-center text-center">
      <div className="lg:mt-10 mt-24 lg:w-[85vw]">
        <motion.h1
          style={{scale}}
          className="text-4xl font-semibold "
        >
          What our Clients say
        </motion.h1>

        <motion.div style={{ scale }} className="flex flex-col md:flex-row  justify-center space-x-72 lg:space-x-20 lg:mt-16 ">

          <div className="flex   md:space-x-32 lg:space-x-20">

          <motion.div
            whileHover={{
              scale: 1,
              rotate: -5,
              translateY: -20,
              translateX: -20,
              transition: { delay: 0, duration: 0.5 },
            }}
            className=""
          >
            <motion.div
              whileHover={{
                scale: 1,
                rotate: 10,
                translateY: 170,
                translateX: 30,
                transition: { delay: 0, duration: 0.5 },
              }}
              className="bg-slate-300 hover:bg-orange-500 hover:text-slate-50 hover:shadow-2xl hover:shadow-slate-500  text-slate-900 duration-200  p-6 pt-8 h-80 w-60 object-cover rounded-[6vh] absolute z-99"
            >
              <p className="text-2xl font-semibold text-left">Kartik verma</p>
              <p className="text-slate-700 text-lg font-semibold text-left">
                Student
              </p>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="pt-16 p-4 text-4xl mr-36"
              />
              <p className="">
                Such a lovely photgraphers here,they helped me to get my perfect
                shot,which i loved it
              </p>
            </motion.div>

            <motion.img
              src={p1}
              alt=""
              className="h-80 w-60 object-cover rounded-[6vh]  "
            />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1,
              rotate: -5,
              translateY: -20,
              translateX: -20,
              transition: { delay: 0, duration: 0.5 },
            }}
            className=""
          >
            <motion.div
              whileHover={{
                scale: 1,
                rotate: 10,
                translateY: 170,
                translateX: 30,
                transition: { delay: 0, duration: 0.5 },
              }}
              className="bg-slate-300 hover:bg-orange-500 hover:text-slate-50 hover:shadow-2xl hover:shadow-slate-500  text-slate-900 duration-200  p-6 pt-8 h-80 w-60 object-cover rounded-[6vh] absolute z-99"
            >
              <p className="text-2xl font-semibold text-left">Kartik verma</p>
              <p className="text-slate-700 text-lg font-semibold text-left">
                Student
              </p>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="pt-16 p-4 text-4xl mr-36"
              />
              <p className="">
                Such a lovely photgraphers here,they helped me to get my perfect
                shot,which i loved it
              </p>
            </motion.div>

            <motion.img
              src={p1}
              alt=""
              className="h-80 w-60 object-cover rounded-[6vh]  "
            />
          </motion.div>

          </div>

          <div className="lg:flex  space-x-20 hidden  ">
          <motion.div
            whileHover={{
              scale: 1,
              rotate: -5,
              translateY: -20,
              translateX: -20,
              transition: { delay: 0, duration: 0.5 },
            }}
            className=""
          >
            <motion.div
              whileHover={{
                scale: 1,
                rotate: 10,
                translateY: 170,
                translateX: 30,
                transition: { delay: 0, duration: 0.5 },
              }}
              className="bg-slate-300 hover:bg-orange-500 hover:text-slate-50 hover:shadow-2xl hover:shadow-slate-500  text-slate-900 duration-200  p-6 pt-8 h-80 w-60 object-cover rounded-[6vh] absolute z-99"
            >
              <p className="text-2xl font-semibold text-left">Kartik verma</p>
              <p className="text-slate-700 text-lg font-semibold text-left">
                Student
              </p>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="pt-16 p-4 text-4xl mr-36"
              />
              <p className="">
                Such a lovely photgraphers here,they helped me to get my perfect
                shot,which i loved it
              </p>
            </motion.div>

            <motion.img
              src={p1}
              alt=""
              className="h-80 w-60 object-cover rounded-[6vh]  "
            />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1,
              rotate: -5,
              translateY: -20,
              translateX: -20,
              transition: { delay: 0, duration: 0.5 },
            }}
            className=""
          >
            <motion.div
              whileHover={{
                scale: 1,
                rotate: 10,
                translateY: 170,
                translateX: 30,
                transition: { delay: 0, duration: 0.5 },
              }}
              className="bg-slate-300 hover:bg-orange-500 hover:text-slate-50 hover:shadow-2xl hover:shadow-slate-500  text-slate-900 duration-200  p-6 pt-8 h-80 w-60 object-cover rounded-[6vh] absolute z-99"
            >
              <p className="text-2xl font-semibold text-left">Kartik verma</p>
              <p className="text-slate-700 text-lg font-semibold text-left">
                Student
              </p>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="pt-16 p-4 text-4xl mr-36"
              />
              <p className="">
                Such a lovely photgraphers here,they helped me to get my perfect
                shot,which i loved it
              </p>
            </motion.div>

            <motion.img
              src={p1}
              alt=""
              className="h-80 w-60 object-cover rounded-[6vh]  "
            />
          </motion.div>

          </div>
          
          

          
        </motion.div>

        
      </div>

     
    </div>
  );
};

export default Page1;
