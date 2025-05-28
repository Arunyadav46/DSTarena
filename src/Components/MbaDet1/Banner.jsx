import React from 'react'
import img from "../assest2/Banner.webp"
import { useParams } from 'react-router-dom'

function Banner() {
  const{name} = useParams()
  return (
    <div style={{
        background:`url(${img})`
    }} className='w-full h-[20vh] md:h-[25vh] xl:h-[35vh] flex items-center justify-center'>
        <div>
        <h2 className='text-2xl text-center md:text-3xl lg:text-4xl xl:text-5xl text-[#002FA6] font-semibold'>Inquiry Form</h2>
        <h4 className='text-center mt-5'>Home/Mpharm/{name}</h4>
        </div>
    
    
    </div>
  )
}

export default Banner