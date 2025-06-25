import React, { useState } from 'react'
import img from "../Components/assest2/icons8-matlab.webp"
import img2 from "../assets/graphic-design.webp"
import img3 from "../assets/robotic.webp"
import img4 from "./assest2/application.webp"
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
       {/* <div className='flex items-center justify-center gap-5'>
          <img src="https://manfood.in/images/line2.png" alt="" /> 
          <h2 className='text-blue-600 font-medium text-lg tracking-wide text-center'>What We Provide</h2>
         <img src="https://manfood.in/images/line1.png" alt="" /> 
          </div> */}
       <h4 className='text-center text-[20px] leading-relaxed   md:text-3xl mt-4 font-bold md:leading-normal'> <span>We provide excellence in training,</span> <br />  learning, and <span id="font" className='text-[#002FF5] text-blue-600'>Research.</span></h4>
         <div className='w-full  px-10 md:px-10  lg:px-40'>
            <div className='w-full   lg:flex'>
                <div className='left   w-[100%] xl:w-[50%] md:w-[100%]  mt-10 md:p-5 md:py-5 lg:py-20 flex flex-col gap-10  items-center   md:flex md:flex-col md:gap-16 md:items-center md:justify-center'>
 
                    <Link id="mainicon" to="/training/matlab" className='card w-[130%] p-2 lg:px-1 lg:w-[120%] md:h-[25vh] xl:h-[22vh] border-2 flex items-center justify-center gap-4 bg-[#FEFEFE] shadow-lg  hover:shadow-xl transition duration-300 transform hover:scale transition transform hover:-translate-y-1'>
                        <img id="icon" className='icon w-[30%] h-[50%] md:h-[80%] xl:w-[50%] transition-transform duration-500 ease-in-out group-hover:scale-80 xl:h-[50%]' src={img} alt="" />
                          {/* <div className="icon-box w-[30%] p-1" title="Training">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <rect x="8" y="10" width="48" height="30" fill="#007BFF" stroke="#000" strokeWidth="1" />
        <rect x="16" y="30" width="4" height="6" fill="#ffffff" />
        <rect x="24" y="26" width="4" height="10" fill="#ffffff" />
        <rect x="32" y="22" width="4" height="14" fill="#ffffff" />
        <rect x="40" y="18" width="4" height="18" fill="#ffffff" />
        <line x1="16" y1="40" x2="8" y2="56" stroke="#000" strokeWidth="2" />
        <line x1="48" y1="40" x2="56" y2="56" stroke="#000" strokeWidth="2" />
      </svg>
    
                         </div> */}
                         
                        <div>
                            <h2 className='font-semibold text-xl mb-2'>Matlab Training</h2>
                            <p className='text-gray-700 text-sm'>MATLAB training covers coding, simulations, data analysis, and modeling.</p>
                        </div>
                    </Link>

                    

                    <Link to="/training/design" className='card w-[130%] lg:w-[120%] p-2 lg:px-5  md:h-[25vh] lg:h-[22vh] border-2 md:p-2 lg:ml-[-80px]  flex items-center justify-center gap-4 bg-[#FEFEFE] shadow-lg hover:shadow-xl transition duration-300 transform hover:scale transition transform hover:-translate-y-1'>
                        <img className='icon w-[30%] h-[50%] md:w-[20%] lg:w-[40%]  md:h-[70%]  lg:h-[50%]' src={img2} alt="" />
                           {/* <div className="icon-box w-[30%]" title="Website Design">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <rect x="8" y="12" width="48" height="40" rx="4" ry="4" fill="#FF5722" stroke="#000" strokeWidth="1" />
        <rect x="8" y="12" width="48" height="8" fill="#FF7043" />
        <circle cx="14" cy="16" r="2" fill="#ffffff" />
        <circle cx="20" cy="16" r="2" fill="#ffffff" />
        <circle cx="26" cy="16" r="2" fill="#ffffff" />
        <rect x="12" y="24" width="16" height="4" fill="#ffffff" />
        <rect x="12" y="30" width="40" height="4" fill="#ffffff" />
        <rect x="12" y="36" width="28" height="4" fill="#ffffff" />
        <rect x="12" y="42" width="20" height="4" fill="#ffffff" />
      </svg>
     
                           </div> */}
                        <div>
                            <h2 className='font-semibold text-xl mb-2'>Website design</h2>
                            <p className='text-gray-700 text-sm'>Website design focuses on layout, aesthetics, and user experience.</p>
                        </div>
                    </Link>
                    <Link to="/training/robotics" className='card w-[130%]  md:h-[25vh] lg:px-5 lg:w-[120%] p-2 lg:h-[22vh] border-2 p-2 flex items-center justify-center gap-4 bg-[#FEFEFE] shadow-lg hover:shadow-xl transition duration-300 transform hover:scale transition transform hover:-translate-y-1'>
                        <img className='icon w-[30%] h-[50%] md:w-[20%] lg:w-[35%] md:h-[80%]  lg:h-[60%]' src={img3} alt="" />
                         {/* <div className="icon-box w-[40%]" title="Robotics">
      <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <circle cx="32" cy="8" r="3" fill="#9C27B0" />
        <line x1="32" y1="8" x2="32" y2="16" stroke="#9C27B0" strokeWidth="2" />
        <rect x="16" y="16" width="32" height="32" rx="6" ry="6" fill="#9C27B0" />
        <circle cx="24" cy="28" r="3" fill="#ffffff" />
        <circle cx="40" cy="28" r="3" fill="#ffffff" />
        <rect x="24" y="36" width="16" height="4" rx="2" ry="2" fill="#ffffff" />
      </svg>
      <span>Robotics</span>
                         </div> */}
                        <div>
                            <h2 className='font-semibold text-xl mb-2'>Robotics</h2>
                            <p className='text-gray-700 text-sm'>Robotics combines engin-eering, AI, and automation for smart machines.</p>
                        </div>
                    </Link>
                    
                </div>
                <div className='center w-[100%] mt-10 lg:flex lg:justify-center lg:items-center  md:w-[50%] md:flex md:items-center md:justify-center lg:w-[61%] lg:h-[55vh] lg:ml-[-5px] lg:mt-[20%]  md:mt-10 md:ml-20 rounded-full relative '>

                    <img  className='w-full h-full  object-cover w-92 h-[30vh] rounded-full shadow-xl ring-1 ring-red-500/80'  src={center} alt="" />
                   
                </div>
                <div className='left w-[110%] xl:w-[50%] md:w-[100%] p-2 mt-10 md:p-5 md:py-20 flex flex-col gap-10  items-center   md:flex md:flex-col md:gap-16 md:items-center md:justify-center'>

                 

                    <Link to="/training/android" className='card w-[130%]  lg:px-2 md:h-[25vh] lg:mt-[-10px] lg:w-[120%] lg:h-[22vh] border-2 flex md:p-1 p-2 items-center justify-center gap-4 bg-[#FEFEFE]  shadow-lg hover:shadow-xl transition duration-300 transform hover:scale transition transform hover:-translate-y-1'>
                        <img className='icon w-[30%] h-[50%]  md:h-[50%] md:w-[20%] lg:w-[30%]' src={img4} alt="" />
                          {/* <div className="icon-box w-[30%]" title="Android">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <rect x="20" y="10" width="24" height="12" rx="4" ry="4" fill="#3DDC84" />
        <line x1="22" y1="10" x2="18" y2="2" stroke="#3DDC84" strokeWidth="2" />
        <line x1="42" y1="10" x2="46" y2="2" stroke="#3DDC84" strokeWidth="2" />
        <circle cx="26" cy="16" r="2" fill="#ffffff" />
        <circle cx="38" cy="16" r="2" fill="#ffffff" />
        <rect x="18" y="22" width="28" height="28" rx="4" ry="4" fill="#3DDC84" />
        <rect x="10" y="24" width="6" height="20" rx="2" ry="2" fill="#3DDC84" />
        <rect x="48" y="24" width="6" height="20" rx="2" ry="2" fill="#3DDC84" />
        <rect x="22" y="50" width="6" height="10" rx="2" ry="2" fill="#3DDC84" />
        <rect x="36" y="50" width="6" height="10" rx="2" ry="2" fill="#3DDC84" />
      </svg>
      
                         </div> */}
                        <div>
                            <h2 className='font-semibold text-xl mb-2'>Android</h2>
                            <p className='text-gray-700 text-sm'>Android is a mobile OS for apps, games, and development.</p>
                        </div>
                    </Link>

                   

      <Link to="/training/seo" className='card w-[130%] p-2  lg:px-4 md:h-[25vh] lg:w-[120%] lg:h-[22vh] border-2 p-2 flex items-center justify-center gap-4 bg-[#FEFEFE] lg:mr-[-80px] shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-1'>
  <img className='icon w-[30%] h-[50%] md:w-[19%] md:h-[58%] lg:h-[50%]' src={img5} alt="" />
     {/* <div className="icon-box w-[30%]" title="SEO">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <circle cx="28" cy="28" r="10" fill="#009688" />
        <path 
          d="M28 16v-4M28 44v4M16 28h-4M44 28h4M20.2 20.2l-2.8-2.8M39.8 39.8l2.8 2.8M20.2 35.8l-2.8 2.8M39.8 16.2l2.8-2.8" 
          stroke="#004D40" 
          strokeWidth="2" 
        />
        <line 
          x1="38" 
          y1="38" 
          x2="52" 
          y2="52" 
          stroke="#004D40" 
          strokeWidth="4" 
          strokeLinecap="round" 
        />
        <circle 
          cx="34" 
          cy="34" 
          r="8" 
          stroke="#004D40" 
          strokeWidth="2" 
          fill="none" 
        />
      </svg>
     
    </div> */}
  <div>
    <h2 className='font-semibold text-xl  mb-2'>SEO</h2>
    <p className='text-gray-700 text-sm'>SEO improves website ranking on search engines.</p>
  </div>
</Link>

<Link to="/training/java" className='card w-[130%] lg:px-1 p-2  md:h-[25vh] lg:w-[120%] lg:h-[22vh] border-2 flex items-center justify-center gap-4 bg-[#FEFEFE] shadow-lg hover:shadow-xl transition duration-300'>
  <img className='icon w-[30%] h-[50%] md:w-[15%] lg:w-[30%] md:h-[40%] lg:h-[50%]' src={img6} alt="" />
     {/* <div className="icon-box w-[30%]" title="Java">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <path 
          d="M32 8c4 4-4 8 0 12s4 4 0 8" 
          stroke="#f89820" 
          strokeWidth="2" 
          fill="none" 
        />
        <path 
          d="M40 12c4 4-4 8 0 12s4 4 0 8" 
          stroke="#f89820" 
          strokeWidth="2" 
          fill="none" 
        />
        <path 
          d="M16 40c0 8 8 12 16 12s16-4 16-12H16z" 
          fill="#f89820" 
          stroke="#b45309" 
          strokeWidth="2" 
        />
        <path 
          d="M48 40c4 0 6 2 6 4s-2 4-6 4" 
          stroke="#b45309" 
          strokeWidth="2" 
          fill="none" 
        />
      </svg>
      
    </div> */}
  <div>
    <h2 className='font-semibold text-xl mb-2'>JAVA</h2>
    <p className='text-gray-700 text-sm'>Java is a versatile, object-oriented programming language.</p>
  </div>
</Link>

            
                </div>
            </div>
         </div>

         <Link to="/training" className=' flex items-center justify-center xl:mt-[-20px]'>
        <h2 className='px-7 py-3 rounded-md  bg-[#1E3A8A] text-white'>Explore more</h2>
       </Link>
       </div>
       

    </div>
  )
}

export default Content







