// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { motion } from "framer-motion";


// function OurCompany() {
//   const words = [
//     "Research", 
//     "Training", 
//     "Development", 
//     "Projects", 
//     "Thesis",
//     "Assistance", 
//     "Placements", 
//     "Innovation"
//   ];

//     const [index, setIndex] = useState(0);
  
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setIndex((prev) => (prev + 1) % words.length);
//       }, 2000); // Change every second
  
//       return () => clearInterval(interval); // Cleanup
//     }, []);

  
//   return (
//     <div className="container pt-16 mx-auto  md:px-10 lg:px-72 lg:pt-20 bg-[#F8F8F8]">
//     {/* Section Title */}
//     <div className="lg:mb-16 w-2/3 lg:mx-32">
//       <h6 className="p-5 text-center md:text-lg md:text-center md:text-[20px] text-[#444] md:tracking-normal lg:mb-4">Our company</h6>
//       <h1 className="text-5xl font-bold text-gray-800">
//   We are a creative studio focused on{" "}
//   <motion.span
//     key={words[index]}
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.5 }}
//     className="text-blue-500"
//   >
//     {words[index]}
//   </motion.span>
//   .
// </h1>
//       {/* <h1 className="text-5xl font-bold text-gray-800">
//       We are a creative studio focused on{" "}
//       <span className="text-blue-500 ">{words[index]}</span>.
//     </h1> */}
//       {/* <h3 className="text-center text-[20px] md:text-[26px] md:text-center lg:text-[35px]   font-semibold">
//       Research, Training, Development, Projects,Thesis  <br />  Assistance, Placements,  <span className="text-[#0056B3]"> Innovation.</span>
//       </h3> */}
//     </div>

//     {/* About Section */}
//     <div className="flex  flex-col md:text-start lg:flex-row items-center justify-between pb-24">
//       {/* Experience Box */}
//       <div className=" lg:w-2/5 md:text-start   lg:text-left  lg:mb-0">
//         <h2 className="font-bold flex items-center md:flex md:gap-1 md:mt-5 md:text-start md:items-end">
//           <span className=" mx-10 md:mx-0 text-[#4A90E2] md:[#007BFF] md:drop-shadow-sm text-[30vw] leading-relaxed md:text-9xl">13</span>
//           <span className='text-[15px]'> <span className='text-gray-800 font-medium text-sm'>Years’  <br /> Experience <br /> in Training</span></span>
//         </h2>
//         {/* <h6 className="text-lg md:mt-6">Learn more about our Success Stories</h6> */}
//       </div>

//       {/* Description Box */}
//       <div className="p-4 md:w-[100%] lg:w-[60%]">
//       <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-blue-500 shadow-md">
//       <p className="text-gray-700 text-base leading-relaxed text-[16px] mx-5 mb-5 text-justify  md:mb-6">
//         DSTArena, founded in 2011, offers web development, software solutions, and research assistance in Bhopal. It has trained 10,000+ students and completed 2,000+ dissertations. The company specializes in thesis writing, plagiarism checks, and technical training. <br /> <br />
//         <Link to="Aboutus" className="text-blue-600 font-semibold text-lg hover:text-blue-800 hover:underline transition">Discover now
//           <span className="ml-2">
//             <i className="fas fa-arrow-right"></i>
//           </span>
//         </Link>
//         </p>
//       </div>
        
        
//       </div>
      
//     </div>
//   </div>
//   )
// }

// export default OurCompany


//  import React, { useEffect, useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { motion } from "framer-motion";


// function OurCompany() {
//   const words = [
//     "Research", 
//     "Training", 
//     "Development", 
//     "Projects", 
//     "Thesis",
//     "Assistance", 
//     "Placements", 
//     "Innovation"
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % words.length);
//     }, 2000); // Change every second

//     return () => clearInterval(interval); // Cleanup
//   }, []);

//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;

//     if (!canvas) return; // 🛑 Fix: Prevent null error

//     const ctx = canvas.getContext("2d");
//     const stars = [];
//     const numStars = 100;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     const createStars = () => {
//       for (let i = 0; i < numStars; i++) {
//         stars.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           radius: Math.random() * 2,
//           dx: Math.random() - 0.5,
//           dy: Math.random() - 0.5,
//         });
//       }
//     };

//     const drawStars = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       stars.forEach((star) => {
//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
//         ctx.fillStyle = "#ffffff";
//         ctx.fill();
//       });
//     };

//     const updateStars = () => {
//       stars.forEach((star) => {
//         star.x += star.dx;
//         star.y += star.dy;

//         if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
//         if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
//       });
//     };

//     const connectStars = () => {
//       for (let i = 0; i < stars.length; i++) {
//         for (let j = i + 1; j < stars.length; j++) {
//           const distance = Math.hypot(stars[i].x - stars[j].x, stars[i].y - stars[j].y);
//           if (distance < 100) {
//             ctx.strokeStyle = "rgba(255, 255, 255, 5)";
//             ctx.lineWidth = 0.5;
//             ctx.beginPath();
//             ctx.moveTo(stars[i].x, stars[i].y);
//             ctx.lineTo(stars[j].x, stars[j].y);
//             ctx.stroke();
//           }
//         }
//       }
//     };

//     const animate = () => {
//       drawStars();
//       updateStars();
//       connectStars();
//       requestAnimationFrame(animate);
//     };

//     resizeCanvas();
//     createStars();
//     animate();

//     window.addEventListener("resize", resizeCanvas);

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//     };
//   }, [canvasRef]);

//   return (
//     <div className="relative bg-blue-100 bg-[#F8F8F8] pt-16 mx-auto md:px-10 lg:px-40 lg:pt-20">
//       {/* Wave SVG */}
//       <canvas ref={canvasRef} className="absolute top-0 left-0 right-0 w-full h-full"></canvas>
//       {/* Section Title */}
//       <div className="mx-20 lg:mb-16 w-2/3 lg:mx-52">
//         <h6 className="p-5 text-center md:text-lg md:text-center md:text-[20px] text-[#444] md:tracking-normal lg:mb-4">
//           <div className='flex items-center justify-center gap-5'>
//           <img src="https://manfood.in/images/line2.png" alt="" /> 
//          <span className='text-blue-800 font-bold text-[22px]'>Our company</span>
//          <img src="https://manfood.in/images/line1.png" alt="" /> 
//           </div>
       
//         </h6>
//         <h1 className="text-center text-xl  lg:text-3xl lg:w-3/4 lg:mx-20 font-bold text-gray-800">
//           We are a creative studio focused on {" "}
//           <motion.span
//             key={words[index]}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className="text-blue-500"
//           >
//             {words[index]}
//           </motion.span>
//           .
//         </h1>
//       </div>

//       {/* About Section */}
//       <div className="flex flex-col md:text-start lg:gap-10 lg:flex-row items-center justify-between pb-24">
//         {/* Experience Box */}
        
//         {/* <div className='w-[50%] flex items-center justify-center h-[50vh] rounded-full bg-red-200'>

        
//         <div className="lg:w-2/5  md:text-start lg:text-left lg:mt-[-60px]">
//           <div className='lg:flex lg:items-center lg:mx-[-20px] gap-2'>
//           <span className="mx-10 md:mx-0 text-[#4A90E2] md:[#007BFF] md:drop-shadow-sm text-[30vw] leading-relaxed md:text-[13vw]">13</span>
//           <span className='text-[15px]'> <span className=' font-medium text-sm'>Years’  <br /> Experience <br /> in Training</span></span>
//           </div>
//           <h2 className='mt-[-60px] text-xl text-center'>Trusted Experience in the Industry</h2>
        
          
//              <span className="mx-10 md:mx-0 text-[#4A90E2] md:[#007BFF] md:drop-shadow-sm text-[30vw] leading-relaxed md:text-9xl">
//               13
//             </span>
           
//               <span className="text-gray-800 font-medium text-sm">
//                 Years’ <br /> Experience <br /> in Training
//               </span> 
            
//          </div>

//          </div> */}

// <div className='w-[50%] flex items-center justify-center h-[50vh] rounded-full bg-gradient-to-r from-red-200 to-pink-300 shadow-xl hover:scale-105 transition-transform duration-500'>
//         <div className="lg:w-2/5 md:text-start lg:text-left lg:mt-[-60px]">
//           <div className='lg:flex lg:items-center lg:mx-[-20px] gap-2'>
//             <span className="mx-10 md:mx-0 text-[#4A90E2] md:drop-shadow-sm text-[30vw] leading-relaxed md:text-[13vw] font-bold">13</span>
//             <span className='text-[15px] font-medium text-gray-800'> 
//               Years’  <br /> Experience <br /> in Training
//             </span>
//           </div>
//           <h2 className='mt-[-60px] text-xl text-center font-semibold text-gray-700'>
//             Trusted Experience in the Industry
//           </h2>
//         </div>
//       </div>


      

     

//         {/* Description Box */}
//         {/* <div className="p-1 md:w-[100%] lg:w-[60%]">
//           <div className="bg-[#FFFFFF] p-6 rounded-lg border-l-4 border-blue-500 shadow-md">
//             <p id="change6" className="text-black text-base leading-relaxed text-[16px] mx-1 mb-5 text-justify md:mb-1">
//               DSTArena, founded in 2011, offers web development, software solutions, and research assistance in Bhopal. It has trained 10,000+ students and completed 2,000+ dissertations. The company specializes in thesis writing, plagiarism checks, and technical training The company specializes in thesis writing, plagiarism checks, and technical training It has trained 10,000+ students and completed 2,000+ dissertations. <br /> <br />
//               <Link to="Aboutus" className="text-blue-600 font-semibold text-lg hover:text-blue-800 hover:underline transition">
//                 Discover now
//                 <span className="ml-2">
//                   <i className="fas fa-arrow-right"></i>
//                 </span>
//               </Link>
//             </p>
//           </div>
//         </div> */}

//         <div className="p-1 md:w-[100%] lg:w-[60%]">
//     <div className="bg-gradient-to-r from-[#F8F8F8] to-[#E8F0FF] p-6 rounded-lg border-l-4 border-purple-500 shadow-lg hover:shadow-xl transition-shadow">
//     <p id="change6" className="text-gray-800 text-base leading-relaxed text-[16px] mx-1 mb-5 text-justify md:mb-1">
//       DSTArena, founded in 2011, offers web development, software solutions, and research assistance in Bhopal. It has trained 10,000+ students and completed 2,000+ dissertations. The company specializes in thesis writing, plagiarism checks, and technical training. The company specializes in thesis writing, plagiarism checks, and technical training. It has trained 10,000+ students and completed 2,000+ dissertations.
//       <br /> <br />
//       <Link to="Aboutus" className="text-purple-600 font-semibold text-lg hover:text-purple-800 hover:underline transition">
//         Discover now
//         <span className="ml-2">
//           <i className="fas fa-arrow-right"></i>
//         </span>
//       </Link>
//     </p>
//   </div>
//        </div>
//       </div>

      
//     </div>
//   );  
// }

// export default OurCompany;


// import React from 'react';
// import { motion } from 'framer-motion';

// const AboutOurCompany = () => {
//   return (
//     <div className="bg-gradient-to-r from-[#F8F8F8] to-[#E8F0FF] py-10">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h6 className="text-lg text-gray-500 uppercase">Discover Our Journey</h6>
//           <h1 className="text-4xl font-bold text-gray-800">Who We Are & What We Do</h1>
//           <p className="text-gray-600 mt-4">Empowering innovation with a blend of research, development, and exceptional training programs.</p>
//         </div>

//         {/* Content Section */}
//         <div className="grid md:grid-cols-2 gap-10">
//           {/* Left Section */}
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }} 
//             animate={{ opacity: 1, x: 0 }} 
//             transition={{ duration: 0.5 }}
//           >
//             <img src="https://img.freepik.com/free-photo/middle-aged-hispanic-business-people_23-2151099197.jpg" alt="About Us" className="w-full rounded-lg shadow-lg" />
//           </motion.div>

//           {/* Right Section */}
//           <motion.div 
//             initial={{ opacity: 0, x: 50 }} 
//             animate={{ opacity: 1, x: 0 }} 
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-3xl font-semibold text-gray-800 mb-4">Building a Brighter Future</h2>
//             <p className="text-gray-600 mb-6">
//               At DSTArena, we specialize in providing world-class research opportunities, practical training programs, and academic project support. Our commitment is to nurture talent and drive technological advancements.
//             </p>
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800">📊 Research</h3>
//                 <p className="text-gray-600">Innovative projects and hands-on research experience.</p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800">🧑‍💻 Training</h3>
//                 <p className="text-gray-600">Practical training programs for career excellence.</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutOurCompany;


// import React from 'react';
// import { motion } from 'framer-motion';
// import React, { useEffect, useRef } from 'react'

// const AboutOurCompany = () => {
  
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;

//     if (!canvas) return; // Prevent null error

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return; // Ensure context is valid

//     const stars = [];
//     const numStars = 100;

//     // Adjust canvas size
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     // Create random stars
//     const createStars = () => {
//       for (let i = 0; i < numStars; i++) {
//         stars.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           radius: Math.random() * 2,
//           dx: Math.random() - 0.5,
//           dy: Math.random() - 0.5,
//         });
//       }
//     };

//     // Draw stars on canvas
//     const drawStars = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       stars.forEach((star) => {
//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
//         ctx.fillStyle = '#ffffff';
//         ctx.fill();
//       });
//     };

//     // Update star positions
//     const updateStars = () => {
//       stars.forEach((star) => {
//         star.x += star.dx;
//         star.y += star.dy;

//         // Reflect stars off edges
//         if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
//         if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
//       });
//     };

//     // Connect stars with lines
//     const connectStars = () => {
//       for (let i = 0; i < stars.length; i++) {
//         for (let j = i + 1; j < stars.length; j++) {
//           const distance = Math.hypot(stars[i].x - stars[j].x, stars[i].y - stars[j].y);
//           if (distance < 100) {
//             ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)'; // Fixed alpha value
//             ctx.lineWidth = 0.5;
//             ctx.beginPath();
//             ctx.moveTo(stars[i].x, stars[i].y);
//             ctx.lineTo(stars[j].x, stars[j].y);
//             ctx.stroke();
//           }
//         }
//       }
//     };

//     // Animate stars
//     const animate = () => {
//       drawStars();
//       updateStars();
//       connectStars();
//       requestAnimationFrame(animate);
//     };

//     resizeCanvas();
//     createStars();
//     animate();

//     // Resize on window size change
//     window.addEventListener('resize', resizeCanvas);

//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//     };
//   }, []);

//   return (
//     <div className="relative bg-gradient-to-r from-[#E7F0FF] to-[#CFE2FF] py-20">
           
//       <div className="max-w-6xl mx-auto px-6">
//       <canvas ref={canvasRef} className="absolute top-0 left-0 right-0 w-full h-full"></canvas>
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <div className='flex items-center justify-center gap-5 mb-5'>
//             <img src="https://manfood.in/images/line2.png" alt="line" /> 
//             <h6 className="text-[15px] font-semibold uppercase text-gray-700">Discover Our Journey</h6>
//             <img src="https://manfood.in/images/line1.png" alt="line" /> 
//           </div>
//           <h1 className="text-4xl font-bold text-gray-900 leading-tight">Who We Are & What We Do</h1>
//           <p className="text-gray-700 mt-6 text-lg leading-relaxed">
//             Empowering innovation with a blend of research, development, and exceptional training programs.
//           </p>
//         </div>

//         {/* Content Section */}
//         <div className="grid md:grid-cols-2 gap-20 items-center">
//           {/* Left Section */}
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }} 
//             animate={{ opacity: 1, x: 0 }} 
//             transition={{ duration: 0.5 }}
//           >
//             <img 
//               src="https://img.freepik.com/free-photo/middle-aged-hispanic-business-people_23-2151099197.jpg" 
//               alt="About Us" 
//               className="w-full h-[450px] object-cover rounded-lg shadow-xl" 
//             />
//           </motion.div>

//           {/* Right Section */}
//           <motion.div 
//             initial={{ opacity: 0, x: 50 }} 
//             animate={{ opacity: 1, x: 0 }} 
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-4xl font-semibold text-gray-900 mb-6">Building a Brighter Future</h2>
//             <p className="text-gray-700 mb-8 text-justify leading-relaxed">
//               At DSTArena, we specialize in providing world-class research opportunities, practical training programs,
//               and academic project support. Our commitment is to nurture talent and drive technological advancements.
//               Through hands-on learning, industry mentorship, and comprehensive workshops, we empower individuals to
//               excel in their respective fields.
//             </p>

//             <div className="grid grid-cols-2 gap-8">
//               <div>
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-2">📊 Research</h3>
//                 <p className="text-gray-700">Engage in innovative projects and gain hands-on research experience under expert guidance.</p>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-2">🧑‍💻 Training</h3>
//                 <p className="text-gray-700">Enhance your career with our practical training programs designed for professional excellence.</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutOurCompany;


// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const AboutUs = () => {
//   const words = ["Research", "Training", "Development", "Projects", "Thesis", "Assistance", "Placements", "Innovation"];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-[#F8F8F8] py-20 px-6 md:px-52">
//       {/* Header Section */}
//       <div className="mx-auto max-w-3xl text-center ">
//         <div className='flex items-center justify-center gap-5 mb-5'>
//           <img src="https://manfood.in/images/line2.png" alt="line" /> 
//           <span className="text-lg font-semibold">Our Company</span>
//           <img src="https://manfood.in/images/line1.png" alt="line" /> 
//         </div>
//         <h1 className="text-4xl font-bold text-gray-800 leading-tight">
//           We are a creative studio focused on{' '}
//           <motion.span
//             key={words[index]}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className="text-blue-500"
//           >
//             {words[index]}
//           </motion.span>
//           .
//         </h1>
//       </div>

//       {/* Main Content Section */}
//       <div className="grid md:grid-cols-2 gap-20 items-center">
//         {/* Left Section */}
//         <div className="relative w-full">
//           <div className="border-2 border-orange-500 p-8 h-[80vh] rounded-lg">
//             <img 
//               src="https://img.freepik.com/free-photo/middle-aged-hispanic-business-people_23-2151099197.jpg" 
//               alt="Anant Power Construction" 
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>
//           <div className='absolute left-[-25%] bottom-[-20%] w-[42%] h-[33vh] rounded-md bg-blue-400'>
//              <div className='text-center flex flex-col justify-center p-10'>
//               <h1 className='mb-2 text-4xl'>13</h1>
//               <h2 className='mb-2 text-xl'>Years</h2>
//               <h2 className='mb-2 text-xl'>Experience of</h2>
//               <h2 className='mb-2 text-xl'>This Field</h2>
//              </div>
//              <img className='absolute top-[5%] left-[15%]' src="https://apcgroups.com/assets/images/icons/icon-2.png" alt="" />

//           </div>
//         </div>

//         {/* Right Section */}
//         <div className='pt-10'>
//           {/* <h5 className="text-orange-500 uppercase font-bold">About Us</h5> */}
//           <h2 className="text-4xl font-bold my-4  ">Empowering Research & Innovation</h2>
//           <p className="text-gray-700 mb-6 text-justify">
//             Established in 2017, Anant Power Construction is a technology-driven organization and is registered as a Class A Electrical Contractor. We specialize in electrical contracts, turn-key projects, and installations across industries, commercial complexes, banks, IT parks, shopping malls, and government organizations.
//           </p>
//           <p className="text-gray-700 mb-6 text-justify">
//             Our expert team provides comprehensive solutions, including supply and installation of cables, DG sets, transformers, and other electrical equipment. We ensure on-time delivery and prioritize safety in all our services.
//             keeping in mind the specific requirements of the clients, and providing an array of Cable Trays , Electrical Panels. We have immense domain experience and are engaged in providing all types of Cables, DG Sets, Transformers, Earthing Materials, Fire Fighting Equipment’s and many more electrical items.
//           </p>

//           {/* Key Points */}
//           <div className="grid grid-cols-2 gap-4">
//             <div className="flex items-center space-x-4">
//               <span className="bg-blue-500 text-white p-4 rounded-full">⚡</span>
//               <p className="font-bold">On Time Solution</p>
//             </div>
//             <div className="flex items-center space-x-4">
//               <span className="bg-blue-500 text-white p-4 rounded-full">🔒</span>
//               <p className="font-bold">Focused On Safety</p>
//             </div>
//           </div>

//           {/* Highlights */}
//           <ul className="list-disc list-inside mt-6 space-y-2 text-gray-700">
//             <li>Don't Lose Contact. Call Us Today!</li>
//             <li>Quality services with a technical staff</li>
//             <li>Full-service electrical layout and design</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const AboutUs = () => {
//   const words = ["Research", "Training", "Development", "Projects", "Thesis", "Assistance", "Placements", "Innovation"];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-[#F8F8F8] py-24 px-8 md:px-52">
//       {/* Header Section */}
//       <div className="mx-auto max-w-3xl text-center">
//         <div className='flex items-center justify-center gap-5 mb-5'>
//           <img src="https://manfood.in/images/line2.png" alt="line" />
//           <span className="text-lg font-semibold text-gray-700">Our Company</span>
//           <img src="https://manfood.in/images/line1.png" alt="line" />
//         </div>
//         <h1 className="text-4xl font-bold text-gray-900 leading-relaxed">
//           We are a creative studio focused on{' '}
//           <motion.span
//             key={words[index]}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.7 }}
//             className="text-blue-600"
//           >
//             {words[index]}
//           </motion.span>
//           .
//         </h1>
//       </div>

//       {/* Main Content Section */}
//       <div className="grid md:grid-cols-2 gap-20 items-center mt-16">
//         {/* Left Section */}
//         <div className="relative w-full">
//           <div className="border-2 border-orange-500 p-8 h-[80vh] rounded-lg shadow-md">
//             <img 
//               src="https://img.freepik.com/free-photo/middle-aged-hispanic-business-people_23-2151099197.jpg" 
//               alt="Anant Power Construction" 
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>
//           <div className='absolute left-[-20%] bottom-[-20%] w-[42%] h-[33vh] rounded-md bg-orange-400 shadow-lg'>
//              <div className='text-center flex flex-col justify-center p-10'>
//               <h1 className='mb-2 text-5xl font-bold text-white'>13</h1>
//               <h2 className='mb-2 text-2xl text-white'>Years</h2>
//               <h2 className='mb-2 text-xl text-white'>Experience in This Field</h2>
//              </div>
//              <img className='absolute top-[5%] left-[15%]' src="https://apcgroups.com/assets/images/icons/icon-2.png" alt="Icon" />
//           </div>
//         </div>

//         {/* Right Section */}
//         <div>
//           <h2 className="text-4xl font-bold my-4 text-gray-900">Empowering Research & Innovation</h2>
//           <p className="text-gray-700 mb-6 leading-relaxed text-justify">
//             Established in 2017, Anant Power Construction is a technology-driven organization specializing in electrical contracts, turn-key projects, and installations across industries, commercial complexes, banks, IT parks, shopping malls, and government organizations.
//           </p>
//           <p className="text-gray-700 mb-6 leading-relaxed text-justify">
//             Our expert team provides comprehensive solutions, including supply and installation of cables, DG sets, transformers, and other electrical equipment. We ensure on-time delivery and prioritize safety in all our services.
         
//             We are one of the recognized names in the industry for designing, keeping in mind the specific requirements of the clients, and providing an array of Cable Trays , . </p>

//           {/* Key Points */}
//           <div className="grid grid-cols-2 gap-4">
//             <div className="flex items-center space-x-4">
//               <span className="bg-blue-600 text-white p-4 rounded-full">⚡</span>
//               <p className="font-bold text-gray-900">On Time Solution</p>
//             </div>
//             <div className="flex items-center space-x-4">
//               <span className="bg-blue-600 text-white p-4 rounded-full">🔒</span>
//               <p className="font-bold text-gray-900">Focused On Safety</p>
//             </div>
//           </div>

//           {/* Highlights */}
//           <ul className="list-disc list-inside mt-6 space-y-2 text-gray-700">
//             <li>Don't Lose Contact. Call Us Today!</li>
//             <li>Quality services with a technical staff</li>
//             <li>Full-service electrical layout and design</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;


// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-[#F8F8F8] px-32 relative overflow-hidden">
//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center px-8 py-16 md:py-24">
//         {/* Left Section */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h2 className="text-5xl font-bold text-gray-800 mb-6">Ignite Your Learning Adventure:</h2>
//           <p className="text-5xl font-bold text-orange-500 mb-8">Start Today, Enrich Tomorrow's Dreams</p>
//           <p className="text-gray-600 max-w-lg mb-8">
//             Elevate Learning with More Than Just Lectures: Real-life Experiments, Interactive Workshops, and Joyful Experiences Await Our Students!
//           </p>
//           <div className="flex justify-center md:justify-start gap-6">
//             <button className="bg-orange-500 text-white px-6 py-3 rounded-full">Get Started</button>
//             <button className="border-2 border-gray-400 text-gray-600 px-6 py-3 rounded-full">Watching Video</button>
//           </div>
//         </div>

//         {/* Right Section with Images */}
//         <div className="md:w-1/2 flex relative justify-center mt-12 md:mt-0">
//           {/* <div className="absolute bg-[#E8F0FF] w-56 h-96 rounded-3xl -left-10 top-0"></div> */}
//           <img 
//             src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8fDA%3D" 
//             alt="Julia" 
//             className="w-[40vh] h-[60vh] rounded-3xl object-cover relative z-10" 
//           />
//           <div className="absolute w-32 z-50 flex items-center justify-center text-center h-32 bottom-[-2%] left-[-10%] text-white bg-orange-500 px-4 py-2 rounded-full">500+ Available Courses</div>
          
//           {/* <div className="absolute bg-[#FFD54F] w-56 h-96 rounded-3xl right-0 top-20"></div> */}
//           <img 
//             src="https://plus.unsplash.com/premium_photo-1670884443288-978549b4f2a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//             alt="Lenka" 
//             className="w-72 h-92 rounded-3xl object-cover relative z-10 ml-[-1px] mt-20" 
//           />
//           {/* <div className="absolute bottom-10 right-0 text-white bg-orange-500 px-4 py-2 rounded-full">500+ Available Courses</div> */}
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="flex justify-center space-x-12 py-12">
//         <div className="text-center">
//           <p className="text-4xl font-bold text-gray-800">150+</p>
//           <p className="text-gray-600">Professional Mentors</p>
//         </div>
//         <div className="text-center">
//           <p className="text-4xl font-bold text-gray-800">100,000</p>
//           <p className="text-gray-600">Active Users</p>
//         </div>
//         <div className="text-center">
//           <p className="text-4xl font-bold text-gray-800">999K</p>
//           <p className="text-gray-600">Downloads Materials Course</p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;



// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-[#F8F8F8] px-8 md:px-40 relative overflow-hidden">
//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center py-16 md:py-24">
//         {/* Left Section */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h2 className="text-6xl font-extrabold text-gray-900 leading-tight mb-6">Ignite Your Learning Adventure:</h2>
//           <p className="text-5xl font-extrabold text-[#007BFF] mb-8">Start Today, Enrich Tomorrow's Dreams</p>
//           <p className="text-gray-600 max-w-lg mb-8 leading-relaxed">
//             Elevate Learning with More Than Just Lectures: Real-life Experiments, Interactive Workshops, and Joyful Experiences Await Our Students!
//           </p>
//           <div className="flex justify-center md:justify-start gap-6">
//             <button className="bg-[#007BFF] text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-blue-800">Get Started</button>
//             <button className="border-2 border-gray-400 text-gray-600 font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:border-gray-500">Watch Video</button>
//           </div>
//         </div>

//         {/* Right Section with Images */}
//         <div className="md:w-1/2 flex relative justify-center mt-12 md:mt-0">
//           <div className="absolute bg-[#E8F0FF] w-56 h-96 rounded-3xl -left-5 top-0"></div>
//           <img 
//             src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&auto=format&fit=crop&q=60" 
//             alt="Julia" 
//             className="w-[40vh] h-[60vh] rounded-3xl object-cover relative z-10" 
//           />
//           <div className="absolute w-32 z-50 flex items-center justify-center text-center h-32 bottom-[-2%] left-[-10%] text-white bg-[#007BFF] px-4 py-2 rounded-full font-bold shadow-xl">500+ Available Courses</div>
          
//           <div className="absolute bg-[#FFD54F] w-56 h-96 rounded-3xl right-0 top-20"></div>
//           <img 
//             src="https://plus.unsplash.com/premium_photo-1670884443288-978549b4f2a0?q=80&w=1974&auto=format&fit=crop" 
//             alt="Lenka" 
//             className="w-72 h-92 rounded-3xl object-cover relative z-10 ml-3 mt-20" 
//           />
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="flex justify-center space-x-12  mb-10">
//         {[
//           { number: '150+', label: 'Professional Mentors' },
//           { number: '100,000', label: 'Active Users' },
//           { number: '999K', label: 'Downloads Materials Course' }
//         ].map((item, index) => (
//           <div key={index} className="text-center">
//             <p className="text-5xl font-extrabold text-gray-900">{item.number}</p>
//             <p className="text-gray-600 text-lg">{item.label}</p>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default HomePage;


// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-[#F8F8F8] px-8 md:px-32 relative overflow-hidden">
//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center py-16 md:py-24">
//         {/* Left Section */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h2 className="text-6xl font-extrabold text-gray-900 leading-tight mb-6">DSTArena provides research</h2>
//           <p className="text-5xl font-extrabold text-orange-500 mb-8">Assistance & Software Training</p>
//           <p className="text-gray-600 max-w-lg mb-8 leading-relaxed">
//             Get hands-on experience with practical knowledge in research and development. Our expert mentors guide you to excel in various fields with professional-level training.
//           </p>
//           <div className="flex justify-center md:justify-start gap-6">
//             <button className="bg-orange-500 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-orange-600">Join Now</button>
//             <button className="border-2 border-gray-400 text-gray-600 font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:border-gray-500">Learn More</button>
//           </div>
//         </div>

//         {/* Right Section with Images */}
//         <div className="md:w-1/2 flex relative justify-center mt-12 md:mt-0">
//           <div className="absolute bg-[#E8F0FF] w-56 h-96 rounded-3xl -left-10 top-0"></div>
//           <img 
//             src="https://dstarena.com/assets/images/mentors.jpg" 
//             alt="Mentorship" 
//             className="w-[40vh] h-[60vh] rounded-3xl object-cover relative z-10" 
//           />
//           <div className="absolute w-32 flex items-center justify-center text-center h-32 bottom-[-2%] left-[-10%] text-white bg-orange-500 px-4 py-2 rounded-full font-bold shadow-xl">500+ Projects Completed</div>
          
//           <div className="absolute bg-[#FFD54F] w-56 h-96 rounded-3xl right-0 top-20"></div>
//           <img 
//             src="https://dstarena.com/assets/images/training.jpg" 
//             alt="Training" 
//             className="w-72 h-92 rounded-3xl object-cover relative z-10 ml-10 mt-20" 
//           />
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="flex justify-center space-x-12 py-12">
//         {[ 
//           { number: '250+', label: 'Professional Trainers' },
//           { number: '50,000+', label: 'Successful Students' },
//           { number: '1M+', label: 'Learning Resources' }
//         ].map((item, index) => (
//           <div key={index} className="text-center">
//             <p className="text-5xl font-extrabold text-gray-900">{item.number}</p>
//             <p className="text-gray-600 text-lg">{item.label}</p>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default HomePage;


// import React from 'react';

// const OurCompany = () => {
//   return (
//     <div className="min-h-screen bg-[#F8F8F8] px-8 md:px-40 relative overflow-hidden">
//       {/* Company Section */}
//       <section className="flex flex-col md:flex-row items-center py-16 md:py-24">
//         {/* Left Section */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h2 className="text-6xl font-extrabold text-gray-900 leading-tight mb-6">We are a creative studio focused on</h2>
//           <p className="text-5xl font-extrabold text-[#007BFF] mb-8">Projects, Innovation & Research</p>
//           <p className="text-gray-600 max-w-lg mb-8 leading-relaxed">
//             At DSTArena, we offer comprehensive research, training, and development services. Our expert mentors provide assistance in project management, technical training, and software development.
//           </p>
//           <div className="flex justify-center md:justify-start gap-6">
//             <button className="bg-[#007BFF] text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-orange-600">Learn More</button>
//             <button className="border-2 border-gray-400 text-gray-600 font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:border-gray-500">Contact Us</button>
//           </div>
//         </div>

//         {/* Right Section with Images */}
//         <div className="md:w-1/2 flex relative justify-center mt-12 md:mt-0">
//           <div className="absolute bg-[#E8F0FF] w-56 h-96 rounded-3xl -left-10 top-0"></div>
//           <img 
//             src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&auto=format&fit=crop&q=60" 
//             alt="Mentorship" 
//             className="w-[40vh] h-[60vh] rounded-3xl object-cover relative z-10" 
//           />
//           <div className="absolute w-32 z-50 flex items-center justify-center text-center h-32 bottom-[-2%] left-[-10%] text-white bg-[#007BFF] px-4 py-2 rounded-full font-bold shadow-xl">13+ Years of Experience</div>
          
//           <div className="absolute bg-[#FFD54F] w-56 h-96 rounded-3xl right-0 top-20"></div>
//           <img 
//             src="https://plus.unsplash.com/premium_photo-1670884443288-978549b4f2a0?q=80&w=1974&auto=format&fit=crop" 
//             alt="Training" 
//             className="w-72 h-92 rounded-3xl object-cover relative z-10 ml-3 mt-20" 
//           />
//         </div>
//       </section>

//       {/* Highlights Section */}
//       <section className="flex justify-center space-x-12 py-12">
//         {[ 
//           { number: '250+', label: 'Expert Mentors' },
//           { number: '10,000+', label: 'Completed Projects' },
//           { number: '50+', label: 'Training Programs' }
//         ].map((item, index) => (
//           <div key={index} className="text-center">
//             <p className="text-5xl font-extrabold text-gray-900">{item.number}</p>
//             <p className="text-gray-600 text-lg">{item.label}</p>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default OurCompany;


import React from 'react';

const OurCompany = () => {
  return (
    <div className="min-h-screen bg-[#F8F8F8] px-8 md:px-40 relative overflow-hidden">
       
      {/* Company Section */}
      <section className="flex flex-col md:flex-row items-center py-16 md:py-24">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl xl:text-6xl font-extrabold text-gray-900 leading-tight mb-6">We are a creative studio focused on</h2>
          <p className="text-3xl xl:text-5xl font-extrabold text-[#007BFF] mb-8">Projects, Innovation & Research</p>
          <p className="text-[13px] xl:text-[20px] text-gray-600 max-w-lg mb-8 leading-relaxed ">
            At DSTArena, we offer comprehensive research, training, and development services. Our expert mentors provide assistance in project management, technical training, and software development.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 md:gap-6">
          <button className="bg-[#007BFF] text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-[#0056b3] transition-all duration-300">
          Learn More
         </button>
          <button className="border-2 border-gray-400 text-gray-600 font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:border-gray-500 transition-all duration-300">
          Contact Us
          </button>
           </div>

        </div>

        {/* Right Section with Images */}
        <div className="md:w-1/2 flex relative justify-center px-16 mt-12 md:mt-0">
          <div className="absolute bg-[#E8F0FF] w-56 h-96 rounded-3xl -left-10 top-0"></div>
          <img 
            src="https://plus.unsplash.com/premium_photo-1661963936485-aa1830b655a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8" 
            alt="Mentorship" 
            className="w-[40vh] h-[60vh] rounded-3xl object-cover relative z-10" 
          />
          <div className="absolute w-36 z-50 flex items-center justify-center text-center h-36 bottom-[-12%] xl:bottom-[-2%] xl:left-[-10%] text-white bg-gradient-to-r from-[#007BFF] to-[#0056b3] px-4 py-2 rounded-full font-bold shadow-xl animate-bounce">13+ Years of Experience</div>
          
          <div className="absolute bg-[#FFD54F] w-56 h-96 rounded-3xl right-0 top-20"></div>
          <img 
            src="https://plus.unsplash.com/premium_photo-1670884443288-978549b4f2a0?q=80&w=1974&auto=format&fit=crop" 
            alt="Training" 
            className="w-72 h-92 rounded-3xl object-cover relative z-10 ml-3 mt-20" 
          />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8  mb-12">
        {[ 
          { number: '250+', label: 'Expert Mentors' },
          { number: '1000+', label: 'Completed Projects'},
          { number: '50+', label: 'Training Programs'}
        ].map((item, index) => (
          <div key={index} className="text-center bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform">
            <p className="text-6xl font-extrabold text-[#007BFF]">{item.number}</p>
            <p className="text-gray-600 text-lg mt-2">{item.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OurCompany;


















// import React from 'react';

// const StrategicResults = () => {
//   return (
//     <div className="p-8 font-sans px-52">
//       {/* Header Section */}
//       <div className="text-center mb-8">
//         <button className=" border border-gray-300 px-4 py-2  mr-2">ABOUT US</button>
//         <h1 className="text-4xl font-bold my-4">Driving strategic results</h1>
//         <p className="text-gray-600">Driving strategic results requires a well-defined vision, clear objectives, and disciplined execution.</p>
//       </div>

//       {/* Main Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Image Section */}
//         <div>
//           <img src="https://coreit.themepanthers.com/demo/wp-content/uploads/2024/12/about-home-2.jpg" alt="Team" className="rounded-xl" />
//         </div>

//         {/* Content Section */}
//         <div className="bg-white p-6 rounded-xl shadow-md">
//           <h2 className="text-xl font-bold mb-4">Align Strategy with Execution</h2>
//           <p className="text-gray-700 mb-4">Successful execution involves bridging the gap between strategy and implementation, ensuring that resources, processes, and people are aligned to deliver results. Regular performance tracking, feedback, and adaptability are essential maintaining momentum.</p>
//         </div>

//         {/* Award Section */}
//         <div className="bg-gray-50 p-6 rounded-xl shadow-md relative">
//           <span className="absolute top-0 right-0 bg-green-500 text-white text-sm px-3 py-1 rounded-bl-xl">AWARDS</span>
//           <h3 className="text-lg font-bold">TOP 100 CONSULTANCY LEADERS</h3>
//           <p className="text-gray-600 mt-2">by global business awards</p>
//           <p className="text-gray-600 mt-2">2024</p>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//         <div className="bg-green-900 text-white p-6 rounded-xl shadow-md">
//           <h4 className="text-lg font-bold">U.S.-Based, Globally Focused.</h4>
//           <p className="mt-2">Since <span className="font-bold">2016</span> Building trust</p>
//           <button className="mt-4 bg-white text-green-900 px-4 py-2 rounded-full">Explore History</button>
//         </div>

//         <div>
//           <img src="https://coreit.themepanthers.com/demo/wp-content/uploads/2024/12/about-home-1.jpg" alt="Discussion" className="rounded-xl" />
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-md flex items-center">
//           <div>
//             <p className="italic">“Expert advice to elevate your business potential.”</p>
//             <p className="font-bold mt-4">CEO OF SUPERPRO</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StrategicResults;

// import React, { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';


// function OurCompany() {
//   const words = [
//     'Research',
//     'Training',
//     'Development',
//     'Projects',
//     'Thesis',
//     'Assistance',
//     'Placements',
//     'Innovation'
//   ];

//   const [index, setIndex] = useState(0);

//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;

//     if (!canvas) return; // 🛑 Fix: Prevent null error

//     const ctx = canvas.getContext("2d");
//     const stars = [];
//     const numStars = 100;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     const createStars = () => {
//       for (let i = 0; i < numStars; i++) {
//         stars.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           radius: Math.random() * 2,
//           dx: Math.random() - 0.5,
//           dy: Math.random() - 0.5,
//         });
//       }
//     };

//     const drawStars = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       stars.forEach((star) => {
//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
//         ctx.fillStyle = "#ffffff";
//         ctx.fill();
//       });
//     };

//     const updateStars = () => {
//       stars.forEach((star) => {
//         star.x += star.dx;
//         star.y += star.dy;

//         if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
//         if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
//       });
//     };

//     const connectStars = () => {
//       for (let i = 0; i < stars.length; i++) {
//         for (let j = i + 1; j < stars.length; j++) {
//           const distance = Math.hypot(stars[i].x - stars[j].x, stars[i].y - stars[j].y);
//           if (distance < 100) {
//             ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
//             ctx.lineWidth = 0.5;
//             ctx.beginPath();
//             ctx.moveTo(stars[i].x, stars[i].y);
//             ctx.lineTo(stars[j].x, stars[j].y);
//             ctx.stroke();
//           }
//         }
//       }
//     };

//     const animate = () => {
//       drawStars();
//       updateStars();
//       connectStars();
//       requestAnimationFrame(animate);
//     };

//     resizeCanvas();
//     createStars();
//     animate();

//     window.addEventListener("resize", resizeCanvas);

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//     };
//   }, [canvasRef]);

//   return (
//     <div className="relative bg-blue-100 bg-[#F8F8F8] pt-16 mx-auto md:px-10 lg:px-72 lg:pt-20">
//       <canvas ref={canvasRef} className="absolute top-0 left-0 right-0 w-full h-full"></canvas>

      // <div className="mx-20 lg:mb-16 w-2/3 lg:mx-32">
      //   <h6 className="p-5 text-center text-lg text-gray-600">
      //     <div className='flex items-center justify-center gap-5'>
      //       <img src="https://manfood.in/images/line2.png" alt="" /> 
      //       <span>Our company</span>
      //       <img src="https://manfood.in/images/line1.png" alt="" /> 
      //     </div>
      //   </h6>
      //   <h1 className="text-center text-2xl lg:text-4xl font-bold text-gray-800 leading-tight">
      //     We are a creative studio focused on{' '}
      //     <motion.span
      //       key={words[index]}
      //       initial={{ opacity: 0, y: 20 }}
      //       animate={{ opacity: 1, y: 0 }}
      //       exit={{ opacity: 0, y: -20 }}
      //       transition={{ duration: 0.5 }}
      //       className="text-blue-500"
      //     >
      //       {words[index]}
      //     </motion.span>
      //     .
      //   </h1>
      // </div>

//       <div className="flex flex-col md:text-start lg:gap-10 lg:flex-row items-center justify-between pb-24">
//         <div className="lg:w-2/5 text-start">
//           <h2 className="font-bold flex items-center md:gap-1 md:mt-5 text-gray-800">
//             <span className="text-blue-500 text-7xl md:text-9xl">13</span>
//             <span className="text-sm md:text-lg font-medium">Years’ Experience in Training</span>
//           </h2>
//         </div>

//         <div className="p-8 w-full lg:w-[55%]">
//           <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
//             <p className="text-gray-700 text-[16px] leading-relaxed mb-5">
//               DSTArena, founded in 2011, offers web development, software solutions, and research assistance in Bhopal. It has trained 10,000+ students and completed 2,000+ dissertations. The company specializes in thesis writing, plagiarism checks, and technical training.
//             </p>
//             <Link to="/Aboutus" className="text-blue-600 font-semibold text-lg hover:text-blue-800 hover:underline transition">
//               Discover now →
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OurCompany;









// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// function OurCompany() {
//   const words = [
//     'Research',
//     'Training',
//     'Development',
//     'Projects',
//     'Thesis',
//     'Assistance',
//     'Placements',
//     'Innovation'
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % words.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative bg-[#F8F8F8] pt-16 mx-auto md:px-10 lg:px-72 lg:pt-20">
//       <div className="mx-20 lg:mb-16 w-2/3 lg:mx-32">
//         <h6 className="p-5 text-center text-lg text-gray-600">
//           <div className='flex items-center justify-center gap-5'>
//             <img src="https://manfood.in/images/line2.png" alt="" /> 
//             <span>Our company</span>
//             <img src="https://manfood.in/images/line1.png" alt="" /> 
//           </div>
//         </h6>
//         <h1 className="text-center text-2xl lg:text-4xl font-bold text-gray-800 leading-tight">
//           We are a creative studio focused on{' '}
//           <motion.span
//             key={words[index]}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className="text-blue-500"
//           >
//             {words[index]}
//           </motion.span>
//           .
//         </h1>
//       </div>

//       <div className="flex flex-col md:text-start lg:gap-10 lg:flex-row items-center justify-between pb-24">
//         <div className="lg:w-2/5 text-start">
//           <h2 className="font-bold flex items-center md:gap-1 md:mt-5 text-gray-800">
//             <span className="text-blue-500 text-7xl md:text-9xl">13</span>
//             <span className="text-sm md:text-lg font-medium">Years’ Experience in Training</span>
//           </h2>
//         </div>

//         <div className="p-8 w-full lg:w-[55%]">
//           <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
//             <p className="text-gray-700 text-[16px] leading-relaxed mb-5">
//               DSTArena, founded in 2011, offers web development, software solutions, and research assistance in Bhopal. It has trained 10,000+ students and completed 2,000+ dissertations. The company specializes in thesis writing, plagiarism checks, and technical training.
//             </p>
//             <Link to="/Aboutus" className="text-blue-600 font-semibold text-lg hover:text-blue-800 hover:underline transition">
//               Discover now →
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OurCompany;


// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const OurCompany = () => {
//   const words = [
//     "Research",
//     "Training",
//     "Development",
//     "Projects",
//     "Thesis",
//     "Assistance",
//     "Placements",
//     "Innovation"
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % words.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="py-20 lg:px-32 bg-gradient-to-r from-[#F8F8F8] to-[#E8F0FF]">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Section Heading */}
//         <div className='flex items-center mb-10 justify-center gap-5'>
//           <img src="https://manfood.in/images/line2.png" alt="" />   
//           <span className='text-xl text-gray-600 font-medium'>Our Company</span>
//           <img src="https://manfood.in/images/line1.png" alt="" /> 
//         </div>

//         {/* Animated Text */}
//         <h1 className="text-3xl lg:w-1/2 lg:mx-72 font-bold text-center text-gray-800 mb-10">
//           We are a creative studio focused on{' '}
//           <motion.span
//             key={words[index]}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className="text-blue-600"
//           >
//             {words[index]}
//           </motion.span>
//         </h1>

//         {/* Main Content */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//           {/* Left Side - Experience */}
//           <div className="text-center md:text-left">
//             <div className="flex items-end gap-3">
//               <h2 className="text-8xl font-extrabold text-[#4A90E2]">13</h2>
//               <p className="text-gray-600 text-lg leading-6">
//                 Years of <br /> Experience <br /> in Training
//               </p>
//             </div>
//           </div>

//           {/* Right Side - About Section */}
//           <div className="p-8 bg-white shadow-lg rounded-3xl border-l-4 border-gradient-to-r from-[#4A90E2] to-[#8BBFF7] hover:scale-105 hover:shadow-2xl transition-all duration-300">
//             <p className="text-gray-700 text-[17px] leading-7 text-justify mb-6">
//               DSTArena, founded in 2011, offers web development, software solutions, and research assistance in Bhopal. It has trained 10,000+ students and completed 2,000+ dissertations. The company specializes in thesis writing, plagiarism checks, and technical training.
//               DSTArena, founded in 2011, offers web development, software solutions, and research assistance in Bhopal. It has trained 10,000+ students and completed 2,000+ dissertations.
//             </p>
//             <Link to="/aboutus" className="text-blue-600 font-semibold hover:underline">
//               Discover now →
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurCompany








