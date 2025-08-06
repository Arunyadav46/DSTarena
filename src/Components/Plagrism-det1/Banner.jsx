import React from 'react'
import img from "../assest2/Banner.webp"

function Banner() {
  return (
   <div style={{
           background:`url(${img})`
       }} className='w-full h-[20vh] md:h-[30vh] flex items-center justify-center'>
           <div>
           <h2 className='md:text-5xl text-[#002FA6] font-semibold'>Topic Finalization</h2>
           <h4 className='text-center mt-5'>Home/Topic Finalization</h4>
         </div>
       </div>
  )
}

export default Banner