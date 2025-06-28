import React from 'react'
import img from "../assest2/Banner.webp"
import { useParams } from 'react-router-dom'

function Banner() {
  const{category} = useParams()
  return (
     <div style={{
               background:`url(${img})`
           }} className='w-full h-[35vh] flex items-center justify-center'>
               <div>
               <h2 className='text-5xl text-[#002FA6] font-semibold'>{category} Projects</h2>
               <h4 className='text-center mt-5'>Home/{category} Projects</h4>
               </div>
           </div>
  )
}

export default Banner