import React, { useState } from 'react'
import img from "../Components/assest2/icons8-matlab.webp"
import img2 from "../assets/graphic-design.webp"
import img3 from "../assets/robotic.webp"
import img4 from "../assets/application.webp"
import img5 from "../Components/assest2/SEO.webp"
import center from "../assets/Center.webp"
import img6  from "../Components/assest2/icons8-java-50.webp"
import { Link } from 'react-router-dom'
import gsap from "gsap";
import { useEffect, useRef } from "react";


 const Content = ()=>{

  return (
    <div className='w-full  bg-[#FFFFFF]'>
       
       <div className='w-full p-10'>
       <div className='flex items-center justify-center gap-5'>
          <img src="https://manfood.in/images/line2.png" alt="" /> 
          <h2 className='text-blue-600 font-medium text-lg tracking-wide text-center'>What We Provide</h2>
         <img src="https://manfood.in/images/line1.png" alt="" /> 
          </div>
       <h4 className='text-center text-[20px] leading-relaxed   md:text-3xl mt-4 font-bold md:leading-normal'> <span>We provide excellence in training,</span> <br />  learning, and <span id="font" className='text-[#002FF5] text-blue-600'>Research.</span></h4>
         <div className='w-full  px-10 md:px-10  lg:px-40'>
            <div className='w-full   lg:flex'>
                <div className='left   w-[100%] xl:w-[50%] md:w-[100%]  mt-10 md:p-5 md:py-5 lg:py-20 flex flex-col gap-10  items-center   md:flex md:flex-col md:gap-16 md:items-center md:justify-center'>

                   


                    <Link id="mainicon" to="/training/matlab" className='card w-[130%] p-2 lg:px-1 lg:w-[120%] md:h-[25vh] xl:h-[22vh] border-2 flex items-center justify-center gap-4 bg-[#FEFEFE] shadow-lg  hover:shadow-xl transition duration-300 transform hover:scale transition transform hover:-translate-y-1'>
                        <img id="icon" className='icon w-[30%] h-[50%] md:h-[80%] xl:w-[50%] transition-transform duration-500 ease-in-out group-hover:scale-80 xl:h-[50%]' src={img} alt="" />
                        <div>
                            <h2 className='font-semibold text-xl mb-2'>Matlab Training</h2>
                            <p className='text-gray-700 text-sm'>MATLAB training covers coding, simulations, data analysis, and modeling.</p>
                        </div>
                    </Link>

                    <Link to="/training/design" className='card w-[130%] lg:w-[120%] p-2 lg:px-5  md:h-[25vh] lg:h-[22vh] border-2 md:p-2 lg:ml-[-80px]  flex items-center justify-center gap-4 bg-[#FEFEFE] shadow-lg hover:shadow-xl transition duration-300 transform hover:scale transition transform hover:-translate-y-1'>
                        <img className='icon w-[30%] h-[50%] md:w-[20%] lg:w-[40%]  md:h-[70%]  lg:h-[50%]' src={img2} alt="" />
                        <div>
                            <h2 className='font-semibold text-xl mb-2'>Website design</h2>
                            <p className='text-gray-700 text-sm'>Website design focuses on layout, aesthetics, and user experience.</p>
                        </div>
                    </Link>
                    <div className='card w-[130%]  md:h-[25vh] lg:px-5 lg:w-[120%] p-2 lg:h-[22vh] border-2 p-2 flex items-center justify-center gap-4 bg-[#FEFEFE] shadow-lg hover:shadow-xl transition duration-300 transform hover:scale transition transform hover:-translate-y-1'>
                        <img className='icon w-[30%] h-[50%] md:w-[20%] lg:w-[35%] md:h-[80%]  lg:h-[60%]' src={img3} alt="" />
                        <div>
                            <h2 className='font-semibold text-xl mb-2'>Robotics</h2>
                            <p className='text-gray-700 text-sm'>Robotics combines engin-eering, AI, and automation for smart machines.</p>
                        </div>
                    </div>
                    
                </div>
                <div className='center w-[100%] mt-10 lg:flex lg:justify-center lg:items-center  md:w-[50%] md:flex md:items-center md:justify-center lg:w-[61%] lg:h-[55vh] lg:ml-[-5px] lg:mt-[20%]  md:mt-10 md:ml-20 rounded-full relative '>

                    <img  className='w-full h-full  object-cover w-92 h-[30vh] rounded-full shadow-xl ring-1 ring-red-500/80'  src={center} alt="" />
                   
                </div>
                <div className='left w-[110%] xl:w-[50%] md:w-[100%] p-2 mt-10 md:p-5 md:py-20 flex flex-col gap-10  items-center   md:flex md:flex-col md:gap-16 md:items-center md:justify-center'>

                 

                    <Link to="/training/android" className='card w-[130%]  lg:px-2 md:h-[25vh] lg:mt-[-10px] lg:w-[120%] lg:h-[22vh] border-2 flex md:p-1 p-2 items-center justify-center gap-4 bg-[#FEFEFE]  shadow-lg hover:shadow-xl transition duration-300 transform hover:scale transition transform hover:-translate-y-1'>
                        <img className='icon w-[30%] h-[50%]  md:h-[50%] md:w-[20%] lg:w-[30%]' src={img4} alt="" />
                        <div>
                            <h2 className='font-semibold text-xl mb-2'>Android</h2>
                            <p className='text-gray-700 text-sm'>Android is a mobile OS for apps, games, and development.</p>
                        </div>
                    </Link>

                   

      <Link to="/training/seo" className='card w-[130%] p-2  lg:px-4 md:h-[25vh] lg:w-[120%] lg:h-[22vh] border-2 p-2 flex items-center justify-center gap-4 bg-[#FEFEFE] lg:mr-[-80px] shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-1'>
  <img className='icon w-[30%] h-[50%] md:w-[15%] md:h-[55%] lg:h-[50%]' src={img5} alt="" />
  <div>
    <h2 className='font-semibold text-xl  mb-2'>SEO</h2>
    <p className='text-gray-700 text-sm'>SEO improves website ranking on search engines.</p>
  </div>
</Link>

<Link to="/training/java" className='card w-[130%] lg:px-1 p-2  md:h-[25vh] lg:w-[120%] lg:h-[22vh] border-2 flex items-center justify-center gap-4 bg-[#FEFEFE] shadow-lg hover:shadow-xl transition duration-300'>
  <img className='icon w-[30%] h-[50%] md:w-[15%] lg:w-[30%] md:h-[40%] lg:h-[50%]' src={img6} alt="" />
  <div>
    <h2 className='font-semibold text-xl mb-2'>JAVA</h2>
    <p className='text-gray-700 text-sm'>Java is a versatile, object-oriented programming language.</p>
  </div>
</Link>

            
                </div>
            </div>
         </div>
     </div>
       



    </div>
  )
}

export default Content







