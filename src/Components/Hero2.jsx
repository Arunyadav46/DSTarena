// import React, { useEffect, useRef, useState } from 'react'
// import img from "../assets/Global.webp"
// import img15 from "../assets/Men.webp"




// import { Link } from 'react-router-dom'

// function Hero2() {

 

//   return (
//     <div className="w-full   md:h-[150vh]  xl:h-[90vh] md:px-10  xl:px-32 xl:py-16">
    
//     <div className="container mx-auto">
   
//       <div className="flex flex-col xl:flex-row items-center">
//         {/* Text Section */}
//         <div className="md:w-[100%]  xl:w-1/2 md:px-5 xl:px-10 text-center md:text-left mt-[40px]">
//           <h6 className="text-lg uppercase tracking-widest">Figure plans out</h6> 
//           <h3 id="line" className="text-2xl leading-none h-[20vh]  mb-5  md:font-semibold md:text-4xl md:leading-relaxed  md:w-[100%] font-semibold mt-4"> 
//             <span className='md:text-4xl md:tracking-wide' id="weight">DSTArena</span>   <span className='tracking-wide'>provides research </span>  <span id="change" className="text-[#007bff] tracking-wid">assistance</span> & <span id="change" className="text-[#007bff] tracking-wide">software</span>  <span className='tracking-wide'>training and</span> <span id="change" className='text-[#007bff] tracking-wide'>Web Development</span> <span className='tracking-wide'>services</span> 
//           </h3>
//           <div className="md:mt-20"> 
//            <Link className='mt-10  font-medium bg-[#2563EB] text-white py-2 px-6 rounded-full text-lg font-medium inline-block' to="/cont">Contact Us</Link>
//           </div>
         

//         </div>
//         {/* Image Section */}
//         <div className="h-[44vh] md:h-[80vh] md:w-[80%]   xl:h-[70vh]  xl:w-1/2 mt-10 md:mt-0 flex  justify-center ">
//           <div className="w-[60%]  md:w-[70%] xl:bg-transparent relative xl:w-[74%]">
//             <img
//               className="w-full h-full object-cover  opacity-500  absolute animate-spin-slow"
//               src={img}
//               alt="Global security"
//             />
//             <img
//               className="w-full h-full bg-transparent object-cover"
//               // src={img8}
//               // src={img7}
//               // src={img9}
//               // src={img10}
//               // src={img11}
//               // src={img12}
//               // src={img13}
//               //  src={img14}
//               //  src={img15}
//               src={img15}
//               alt="Cybersecurity"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
    
//   </div>
//   )
// }

// export default Hero2


import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import img from "../assets/Global.webp"
import img15 from "../assets/Men.webp"

gsap.registerPlugin(ScrollTrigger)

function Hero2() {
  const textRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    // Text Animation
    gsap.fromTo(
      textRef.current,
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", stagger: 0.8 }
    )

    // Image Rotation
    gsap.to(imgRef.current, {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: "linear",
    })
  }, [])

  return (
    <div className="w-full  bg-[#F6FAFE]  md:px-10 xl:px-32 xl:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center">
          {/* Text Section */}
          <div className=" md:w-[100%] xl:w-1/2 md:px-5 xl:px-10 text-center md:text-left mt-[40px]">
            <h6 className="text-lg uppercase tracking-widest">Figure plans out</h6>
            <h3 id="line" ref={textRef} className="text-2xl leading-none h-[20vh] mb-5 md:font-semibold md:text-4xl md:leading-relaxed md:w-[100%] font-semibold mt-4">
              <span className="text-3xl md:text-4xl md:tracking-wide" id="weight">DSTArena</span>{" "}
              <span className="text-3xl  tracking-wide">provides research</span>{" "}
              <span className="text-3xl  text-[#007bff] tracking-wide">assistance</span> &{" "}
              <span className="text-3xl  text-[#007bff] tracking-wide">software</span>{" "}
              <span className="text-3xl  tracking-wide">training and</span>{" "}
              <span className="text-3xl  text-[#007bff] tracking-wide">Web Development</span>{" "}
              <span className="text-3xl  tracking-wide">services</span>
            </h3>

            <Link className="mt-20 lg:mt-10 font-medium bg-[#2563EB] text-white py-2 px-6 rounded-full text-lg font-medium inline-block hover:bg-[#003EA6] transition-all duration-300">
              Contact Us
            </Link>
          </div>

          {/* Image Section */}
          <div className=" md:h-[80vh] md:w-[80%] xl:h-[70vh] xl:w-1/2  md:mt-0 flex justify-center">
            <div className="w-[60%] md:w-[70%] xl:bg-transparent relative xl:w-[74%]">
              <img
                ref={imgRef}
                className="w-[80%] h-full object-cover  opacity-500 absolute"
                src={img}
                alt="Global security"
              />
              <img className="w-full h-full bg-transparent  object-cover" src={img15} alt="Cybersecurity"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero2
