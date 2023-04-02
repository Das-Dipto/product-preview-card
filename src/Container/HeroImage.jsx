import React from 'react'
import heroImage from '../../src/assets/desktop-image.jpg'

function HeroImage() {
  return (
    <div className='flex justify-end'>
    <img className='w-2/4' src={heroImage} alt="heroImage" />
    </div>
  )
}

export default HeroImage