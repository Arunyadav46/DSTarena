import React from 'react'
import img from "../assest2/Banner.webp"

function Banner() {
  return (
    <div style={{
                background:`url(${img})`
            }} className='w-full h-[30vh] md:h-[35vh] flex items-center justify-center'>
                <div>
                <h2 className='text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-[#002FA6] font-semibold'>Services</h2>
                <h4 className='text-center mt-5'>Home/Services</h4>
                </div>
            </div>
  )
}

export default Banner