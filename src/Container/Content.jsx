import React from 'react'

function Content() {
  return (
     <div className="content-container p-8">
         <h4 className='text-customDarkGrayBlue text-[1.1rem] font-semibold tracking-widest font-customMonto mb-4'>PERFUME</h4>
         <h1 className='w-4/4 md:w-3/4 text-2xl md:text-3xl font-bold font-customFraunce'>Gabrielle Essence Eau De Parfum</h1>
         <p className='my-5'>
            A floral, solar and voluptuous interpretation composed by 
            Olivier Palge, Perfumer creator for the house of CHANEL.
         </p>

         <div className="price flex items-center flex-wrap">
            <span className='font-customFraunce font-semibold text-customDarkCyan text-3xl'>$149.99</span>
            <span className='ms-8'><strike>$169.99</strike></span>
         </div>

         <button className='w-full mt-12 p-3 bg-customDarkCyan font-semibold text-[#fff]'>Add to Cart</button>

     </div>
  )
}

export default Content