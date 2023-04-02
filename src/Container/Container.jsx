import React from 'react'
import HeroImage from '../Container/HeroImage'
import Content from '../Container/Content'


function Container() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 py-8 mt-20 md:mt-28 w-[80%] mx-auto">
        <div className="hero-image">
            <HeroImage/>
        </div>
        <div className="content bg-[#fff] w-full md:w-[20rem]">
            <Content></Content>
        </div>
    </div>
  )
}

export default Container