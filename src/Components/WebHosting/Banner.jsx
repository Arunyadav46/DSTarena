import React from 'react'
import img from "../assest2/Banner.webp"

function Banner() {
  return (
    <div style={{
        background:`url(${img})`
    }} className='w-full h-[50vh] flex items-center justify-center'>
        <div>
        <h2 className='text-5xl text-[#002FA6] font-semibold'>Web Hosting</h2>
        <h4 className='text-center mt-5'>Service/Web Hoisting</h4>
        </div>
  
    </div>
  )
}

export default Banner