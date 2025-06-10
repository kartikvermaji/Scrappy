import React, { useRef,useState } from "react";
import emailjs from '@emailjs/browser';
import ps from "../assets/mixelect.jpg";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const Page2 = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_an66ij7', 'template_lzvfnoo', form.current, '7VZ2SpQpaYjsInh9S')
      .then((result) => {
      setStatus("Message sent successfully!");
      form.current.reset(); // clear form
  }, (error) => {
      setStatus("Failed to send. Try again later.");
  });
  };

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.1]);
  return (
    <div
  id="contact"
  className="bg-black text-slate-50 pt-20 px-6 md:px-12 lg:px-24 h-auto min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10"
>
  {/* Form Section */}
  <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
  viewport={{ once: true }}
  className="w-full md:w-1/2 flex flex-col items-center space-y-6 px-2 sm:px-4 md:px-0 max-w-md mx-auto"
>
  <h1 className="text-3xl md:text-4xl font-light text-center">
    Have Questions?<br /> We're Here
  </h1>

  <form
    ref={form}
    onSubmit={sendEmail}
    className="flex flex-col gap-5 w-full backdrop-blur-sm bg-white/5 border border-white/20 p-6 rounded-3xl shadow-lg"
  >
    <input
      name="name"
      type="text"
      placeholder="Your Name"
      className="bg-transparent border border-slate-200/30 rounded-full px-5 py-3 placeholder:text-slate-300 text-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
    />
    <input
      name="email"
      type="email"
      placeholder="Your Email"
      className="bg-transparent border border-slate-200/30 rounded-full px-5 py-3 placeholder:text-slate-300 text-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
    />
    <textarea
      name="message"
      rows="4"
      placeholder="Your Thoughts"
      className="bg-transparent border border-slate-200/30 rounded-3xl px-5 py-3 placeholder:text-slate-300 text-slate-100 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
    ></textarea>
    <button
      type="submit"
      className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-2 rounded-full shadow-md transition"
    >
      Send Message
    </button>
  </form>
</motion.div>


  {/* Image Section */}
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
    viewport={{ once: true }}
    className="w-full md:w-1/2 flex justify-center"
  >
    <img
      src={ps}
      alt="Contact Visual"
      className="w-full max-w-lg rounded-3xl shadow-xl object-cover"
    />
  </motion.div>
</div>

  );
};

export default Page2;
