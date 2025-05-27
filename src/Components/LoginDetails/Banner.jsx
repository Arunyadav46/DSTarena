import React from 'react'
import img from "../assest2/Banner.webp"

function Banner() {
  return (
     <div style={{ background:`url(${img})`}} 
     className='w-full  h-[20vh] md:h-[35vh] flex items-center justify-center'>
                      <div>
                             <h2 className='text-3xl md:text-5xl text-[#002FA6] font-semibold'>Login</h2>
                             <h4 className='text-center mt-5'>Home/Login</h4>
                             </div>
                      </div>
  )
}

export default Banner