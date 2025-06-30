


import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import img from "../assets/Global.webp"
import img15 from "../assets/Men.webp"

import { FaProjectDiagram, FaLifeRing, FaShoppingCart } from 'react-icons/fa';
// import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

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
    // <div className="w-full  bg-[#F6FAFE]  md:px-10 xl:px-32 xl:py-16">
    //   <div className="container mx-auto">
    //     <div className="flex flex-col xl:flex-row items-center">
    //       {/* Text Section */}
    //       <div className=" md:w-[100%] xl:w-1/2 md:px-5 xl:px-10 text-center md:text-left mt-[40px]">
    //         {/* <h6 className="text-lg uppercase tracking-widest">Figure plans out</h6> */}
    //         <h3 id="line" ref={textRef} className="text-2xl leading-none h-[20vh] mb-5 md:font-semibold md:text-4xl md:leading-relaxed md:w-[100%] font-semibold mt-4">
    //           <span className="text-3xl md:text-4xl md:tracking-wide" id="weight">DSTArena</span>{" "}
    //           <span className="text-3xl  tracking-wide">Provides Research Assistance </span>{" "}
    //           {/* <span className="text-3xl  text-[#007bff] tracking-wide">Assistance</span> &{" "} */}
    //           <span className="text-3xl  text-[#007bff] tracking-wide">Software</span>{" "}
    //           <span className="text-3xl  tracking-wide">Training and</span>{" "}
    //           <span className="text-3xl  text-[#007bff] tracking-wide">Web Development</span>{" "}
    //           <span className="text-3xl  tracking-wide">Services</span>
    //         </h3>

    //         <Link className="mt-20 lg:mt-10 lg:mx-32 font-medium bg-[#2563EB] text-white py-2 px-6 rounded-full text-lg font-medium inline-block hover:bg-[#003EA6] transition-all duration-300">
    //           Contact Us
    //         </Link>
    //       </div>
           
    //      <div className="fixed top-[50%] right-0 z-50 flex flex-col items-center space-y-6 bg-white p-2 rounded-l-xl shadow-md">
    //        <FaWhatsapp className="text-green-500 text-2xl cursor-pointer hover:text-green-700" />
    //          <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800" />
    // </div>  
       
    //       {/* Image Section */}
    //       <div className=" md:h-[80vh] md:w-[80%] xl:h-[70vh] xl:w-1/2  md:mt-0 flex justify-center">
    //         <div className="w-[60%] md:w-[70%] xl:bg-transparent relative xl:w-[74%]">
    //           <img
    //             ref={imgRef}
    //             className="w-[80%] h-full object-cover  opacity-500 absolute"
    //             src={img}
    //             alt="Global security"
    //           />
    //           <img className="w-full h-full bg-transparent  object-cover" src={img15} alt="Cybersecurity"/>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // </div>
    
    <div className="relative w-full   bg-[#F6FAFE]   md:px-10 xl:px-32 xl:py-16">
      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-300/50 rounded-full animate-float"
            style={{
              width: `${Math.random() * 8 + 10}px`,
              height: `${Math.random() * 8 + 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center">
          {/* Text Section */}
          {/* <div className=" md:w-[100%] xl:w-1/2 md:px-5 xl:px-10 text-center md:text-left mt-[40px]">
            <h6 className="text-lg uppercase tracking-widest">Figure plans out</h6>
            <h3 id="line" ref={textRef} className="text-2xl leading-none h-[20vh] mb-5 md:font-semibold md:text-4xl md:leading-relaxed md:w-[100%] font-semibold mt-4">
              <span className="text-3xl md:text-4xl md:tracking-wide" id="weight">DSTArena</span>{" "}
              <span className="text-3xl  tracking-wide">Provides Research Assistance </span>{" "}
              <span className="text-3xl  text-[#007bff] tracking-wide">Assistance</span> &{" "}
              <span className="text-3xl  text-[#007bff] tracking-wide">Software</span>{" "}
              <span className="text-3xl  tracking-wide">Training & <br /></span>{" "}
              <span className="text-3xl  text-[#007bff] tracking-wide">Web Development</span>{" "}
              <span className="text-3xl  tracking-wide">Services</span>
            </h3>
          

          <div className="flex flex-col lg:flex-row items-center gap-2  mx-auto mt-10">
  
  WhatsApp Chat Section
  <div className="flex items-center space-x-4 cursor-pointer  transition-transform duration-300">
    Icon with glow effect
  
  Contact Us Button
  <Link
    to="/cont"
    className="bg-[#2563EB] text-white py-2 px-8 rounded-full text-lg font-medium hover:bg-[#003EA6] transition-all duration-300 shadow-md"
  >
    Contact Us
  </Link>

    <div className="relative rounded-full bg-white p-3 shadow-md">
      <div className="absolute inset-0 rounded-full blur-xl bg-green-300 opacity-50 animate-ping z-[-1]"></div>
      <FaWhatsapp className="text-green-600 text-2xl" />
    </div>
    <span className="font-semibold text-gray-800 text-xl">Chat with us</span>
  </div>


</div>

          </div> */}
          {/* Text Section */}
<div className="md:w-full xl:w-[60%] md:px-5 xl:px-10 text-center md:text-left xl:mt-[-40px] mx-10 space-y-6">
  {/* <div className="inline-block bg-white shadow px-4 py-1 rounded-full text-sm font-medium text-gray-600">
    <span className="flex items-center gap-2 justify-center md:justify-start">
      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
      PEOPLE TRUST US
    </span>
  </div> */}
  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium">
  <i className="ri-user-smile-line text-xl"></i> People Trust Us
</div>


  {/* <h3 className="text-3xl md:text-6xl font-bold text-gray-900 leading-snug">
    We Provide the <span className="text-indigo-600">Best Services</span> for Your Business
  </h3> */}
    <h3
    id="line"
    ref={textRef}
    className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug"
  >
    <span className="text-[#000]">DSTArena </span>
    <span className="text-[#007bff]">Provides</span>{" "}
    <span className="text-[#000]">Research Assistance,</span>{" "}
    <span className="text-[#007bff]">Software Training</span>{" "}
    <span className="text-[#000]">and</span>{" "}
    <span className="text-[#007bff]">Web Development Services</span>
  </h3>

 <p id="pa" className="text-gray-700 text-[16px] ">
  DSTArena delivers top-notch Research Assistance, Software Training, and Web Development services tailored for your business success.
</p>



  
  {/* <Link
    to="/cont"
    className="inline-block bg-[#2563EB] hover:bg-[#003EA6] text-white py-2 px-6 rounded-full text-lg font-medium transition-all duration-300"
  >
    Contact Us
  </Link> */}
  <div className="flex items-center space-x-4 cursor-pointer  transition-transform duration-300">
    {/* Icon with glow effect */}
  
  {/* Contact Us Button */}
  <Link
    to="/contact-us"
    className="bg-[#2563EB] text-white py-1 px-4 xl:py-2 xl:px-8 rounded-full text-lg font-medium hover:bg-[#003EA6] transition-all duration-300 shadow-md"
  >
    Contact Us
  </Link>

<a
  href="https://api.whatsapp.com/send?phone=919993897203&text=Hello!%20I%20am%20interested%20in%20knowing%20more%20about%20DSTarena."
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-2"
>
  <div className="relative rounded-full bg-white p-3 shadow-md">
    <div className="absolute inset-0 rounded-full blur-xl bg-green-300 opacity-50 animate-ping z-[-1]"></div>
    <FaWhatsapp className="text-green-600 xl:text-2xl" />
  </div>
  <span className="font-semibold text-gray-800 xl:text-xl">Chat with us</span>
</a>

  </div>
  
</div>

           
         {/* <div className="fixed top-[50%] right-0 z-50 flex flex-col items-center space-y-6 bg-white p-2 rounded-l-xl shadow-md">
            <FaWhatsapp className="text-green-500 text-2xl cursor-pointer hover:text-green-700" />
            <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800" />
         </div>   */}

      

{/* <div className="fixed top-[50%] right-0 z-50 flex flex-col items-center space-y-6 px-2 py-4">
  
  <a  href="https://api.whatsapp.com/send?phone=919993897203&text=Hello!%20I%20am%20interested%20in%20knowing%20more%20about%20DSTarena."
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-2">
  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg relative">
    <div className="absolute inset-0 rounded-full blur-xl bg-red-300 opacity-40"></div>
    
    <FaWhatsapp className="text-green-600 text-xl z-10" />
  </div>
  </a>

 
  <a href="tel:9993897203">
  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg relative">
    <div className="absolute inset-0 rounded-full blur-xl bg-red-300 opacity-40"></div>
    <FaPhone className="text-green-600 text-xl z-10" />
  </div>
  </a>
</div> */}


         

       
          {/* Image Section */}
          <div className=" md:h-[80vh] md:w-[80%] xl:h-[70vh] xl:w-1/2  md:mt-0 flex justify-center">
            <div className="w-[60%] md:w-[70%] xl:bg-transparent relative xl:w-[74%]">
              <img
                ref={imgRef}
                className="w-[80%] h-full object-cover  opacity-500 absolute"
                src={img}
                alt="Global security"
              />
              <img className="w-full shadow-pop h-full bg-blue-400 bg-transparent  object-cover" src={img15} alt="Cybersecurity"/>
            </div>

            <div className="hidden md:block absolute top-[20%] right-[31%] bg-white shadow-md px-3 py-1 rounded-lg text-sm">
  <p className="text-yellow-500 font-bold">⭐ 5.0</p>
  <p className="text-gray-600">Google Reviews</p>
            </div>
             <div className="hidden md:block absolute top-[70%] right-[5%] bg-white shadow-md px-4 py-2 rounded-xl text-sm flex items-center gap-2">
  <span className="text-green-600 text-lg font-bold">🏆</span>
  <div>
    <p className="text-gray-800 font-semibold">13+ Years</p>
    <p className="text-gray-500 text-xs">of Excellence</p>
  </div>
</div>


          </div>

        </div>
      </div>
    </div>
  );
  
}

export default Hero2


// import React, { useRef } from 'react';
// import { FaProjectDiagram, FaLifeRing, FaShoppingCart } from 'react-icons/fa';
// import { FaFacebook, FaWhatsapp } from "react-icons/fa";


// const Hero2 = () => {
//   const textRef = useRef(null);

//   return (
//     <div className="w-full bg-[#F6FAFE] md:px-10 xl:px-32 xl:py-16">
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row items-center justify-between">
//           {/* Left Text Section */}
//           <div className="md:w-[100%] xl:w-[55%] md:px-5 xl:px-10 text-center md:text-left mt-[40px]">
//             <h3
//               id="line"
//               ref={textRef}
//               className="text-2xl leading-none h-[20vh] mb-5 md:font-semibold md:text-4xl md:leading-relaxed md:w-[100%] font-semibold mt-4"
//             >
//               <span className="text-3xl md:text-4xl md:tracking-wide" id="weight">DSTArena</span>{" "}
//               <span className="text-3xl tracking-wide">Provides Research Assistance </span>
//               <span className="text-3xl text-[#007bff] tracking-wide">Software </span>
//               <span className="text-3xl tracking-wide">Training  &  <br /> </span>
//               <span className="text-3xl text-[#007bff] tracking-wide"> Web Development </span>
//               <span className="text-3xl tracking-wide">Services</span>
//             </h3>

//             <a
//               href="#contact"
//               className="mt-20 lg:mt-10 lg:mx-32 font-medium bg-[#2563EB] text-white py-2 px-6 rounded-full text-lg inline-block hover:bg-[#003EA6] transition-all duration-300"
//             >
//               Contact Us
//             </a>
//           </div>

//           {/* Right Form Section */}
//           <div className="w-full xl:w-[70%] flex justify-center mt-10 xl:mt-0">
//             <div className="bg-white w-[90%] md:w-[80%] xl:w-[70%] p-8 rounded-xl shadow-lg">
//               <h2 className="text-2xl font-bold text-center mb-2">Book appointment</h2>
//               <p className="text-center text-gray-500 mb-6">It's our pleasure to have a chance to cooperate.</p>

//               <form className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Name *"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email *"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input type="text" placeholder='Paper title' className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                 <input type="text" placeholder='Paper description' className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                 {/* <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
//                   <option>Select Department to email</option>
//                   <option>Research</option>
//                   <option>Development</option>
//                   <option>Support</option>
//                 </select> */}
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Right Sidebar Icons */}
//       <div className="fixed top-[50%] right-0 z-50 flex flex-col items-center space-y-6 bg-white p-2 rounded-l-xl shadow-md">
//   <FaWhatsapp className="text-green-500 text-2xl cursor-pointer hover:text-green-700" />
//   <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800" />
// </div>

//     </div>
//   );
// };

// export default Hero2;

