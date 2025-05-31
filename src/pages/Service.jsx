import React from 'react'
import Nav2 from '../components/Nav2'
import Footer from '../components/Footer'
import Services from './Services'
import Fabric from './Fabric'
import Leather from './Leather'
import Electric from './Electric'

const Service = () => {
  return (
    <div className='pt-20 bg-black'>
        <Fabric/>
        <Leather/>
        <Electric/>
        <Footer/> 
        <Nav2/>
    </div>
  )
}

export default Service
