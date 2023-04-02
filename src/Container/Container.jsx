import React from 'react'
import HeroImage from '../Container/HeroImage'
import './Container.css'


function Container() {
  return (
    <div className="container grid grid-cols-2 mt-28 w-[80%] mx-auto">
        <div className="hero-image">
            <HeroImage/>
        </div>
        <div className="content bg-[#fff] w-3/5">
            
        </div>
    </div>
  )
}

export default Container