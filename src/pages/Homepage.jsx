import React from 'react'
import Hero from './hero'
import Moto from './Moto'
import Aboutus from './Aboutus'
import Services from './Services'
import Appp from './Appp'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Query from './Query'
import Testimonials from './Testimonials'
import Categories from './Categories'
import Why from './Why'
import Serv from './Serv'
import Nav2 from '../components/Nav2'
import Fabric from './Fabric'
import Leather from './Leather'
import Electric from './Electric'



const Homepage = () => {
  return (
    <div className='bg-[#4E1F00] font-[Poppins]'>
      <Hero/>
      <Moto/>
      {/* <Why/> */}
      <Fabric/>
      <Leather/>
      <Electric/>
      {/* <Services/>  */}
      <Aboutus/>
      {/* <Appp/>
      <Serv/>
      <Testimonials/>
      
      <Categories/> */}
      <Query/>
      <Footer/>
      <Nav2/>
    </div>
  )
}

export default Homepage
