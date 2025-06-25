import React from 'react'
import { Link } from 'react-router-dom'


function Content2() {

    const data = [
        {img:"http://dstarena.com/wp-content/uploads/2015/06/image123.jpg",head:"PROJECTS",para:"We offer academic projects for ME/M.Tech, BE/B.Tech, BCA/MCA/MBA, and schools, covering major and minor projects for hands-on learning.",id:1},
        {img:"http://dstarena.com/wp-content/uploads/2015/05/image71.png",head:"Training & Learning",para:"We offer training in VLSI/VHDL, MATLAB, PHP/MySQL, Ethical Hacking, and SEO, providing hands-on learning for industry-ready skills.",id:2},
        {img:"http://dstarena.com/wp-content/uploads/2015/06/DSTvhdl1.png",head:"Corporate Services",para:"We provide Website Design & Development, Software Design, Data Migration, Article Writing, and Mail & SMS Services, ensuring seamless digital solutions for businesses.",id:3},
    ]
  return (
    <div className='w-full xl:px-10 pb-10 xl:pb-10  bg-[#F2F5FE]'>
          <div className='w-full px-5   md:pt-10 md:px-8 md:px-32'>
               <div className='flex items-center b-5 justify-center gap-5'>
                      <img src="https://manfood.in/images/line2.png" alt="" /> 
                      <h2 className='text-[#0E53BE] text-center font-semibold' >OUR CORE SERVICES</h2>
                     <img src="https://manfood.in/images/line1.png" alt="" /> 
                      </div>
        {/* <h2 className='text-[#0E53BE] text-center font-semibold mb-4' >OUR CORE SERVICES</h2> */}
        <h4 className='text-center text-3xl tracking-tight text-[#142149] mb-10 font-bold'>Our Project Development, Training, Learning, and Services.</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            
            className="w-full  bg-white shadow-lg rounded-2xl p-6 transition-transform hover:scale-102 border border-gray-200 overflow-hidden"
          >
            {/* Image Section */}
            <div className="w-full   border-2  rounded-md overflow-hidden">
              <img className="w-full h-[40vh]" src='http://dstarena.com/wp-content/uploads/2015/06/image123.jpg' alt=""/>
            </div>

            {/* Text Content */}
            <h1 className="text-2xl mb-5 text-[#142149] text-center mt-4 font-bold">
              Projects
            </h1>
            <p className="text-[14px] text-[#5E7290] text-center">We offer academic projects for ME/M.Tech, BE/B.Tech, BCA/MCA/MBA, and schools, covering major and minor projects for hands-on learning</p>

            {/* Button */}
            <div className="px-2 py-5 bg-[#0E53BE] relative rounded-full mt-4">
              <Link
                className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                 to="/"
              >
                Learn About
              </Link>
            </div>
          </div>
          <div
            
            className="w-full  bg-white shadow-lg rounded-2xl p-6 transition-transform hover:scale-102 border border-gray-200 overflow-hidden"
          >
            {/* Image Section */}
            <div className="w-full   border-2  rounded-md overflow-hidden">
              <img className="w-full h-[40vh]" src='http://dstarena.com/wp-content/uploads/2015/05/image71.png' alt=""/>
            </div>

            {/* Text Content */}
            <h1 className="text-2xl mb-5 text-[#142149] text-center mt-4 font-bold">
              Training & Learning
            </h1>
            <p className="text-[14px] text-[#5E7290] text-center">Training & Learning",para:"We offer training in VLSI/VHDL, MATLAB, PHP/MySQL, Ethical Hacking, and SEO, providing hands-on learning for industry-ready skills.</p>

            {/* Button */}
            <div className="px-2 py-5 bg-[#0E53BE] relative rounded-full mt-4">
              <Link
                className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                 to="/training"
              >
                Learn About
              </Link>
            </div>
          </div>
          <div
           
            className="w-full  bg-white shadow-lg rounded-2xl p-6 transition-transform hover:scale-102 border border-gray-200 overflow-hidden"
          >
            {/* Image Section */}
            <div className="w-full   border-2  rounded-md overflow-hidden">
              <img className="w-full h-[40vh]" src='http://dstarena.com/wp-content/uploads/2015/06/DSTvhdl1.png' alt=""/>
            </div>

            {/* Text Content */}
            <h1 className="text-2xl mb-5 text-[#142149] text-center mt-4 font-bold">
              Services
            </h1>
            <p className="text-[14px] text-[#5E7290] text-center">We provide Website Design & Development, Software Design, Data Migration, Article Writing, and Mail & SMS Services, ensuring seamless digital solutions for businesses.</p>

            {/* Button */}
            <div className="px-2 py-5 bg-[#0E53BE] relative rounded-full mt-4">
              <Link
                className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                 to="/service/1"
              >
                Learn About
              </Link>
            </div>
          </div>
        {/* {data.map((elem, index) => (
          <div
            key={index}
            className="w-full  bg-white shadow-lg rounded-2xl p-6 transition-transform hover:scale-102 border border-gray-200 overflow-hidden"
          >
            Image Section
            <div className="w-full   border-2  rounded-md overflow-hidden">
              <img className="w-full h-[40vh]" src={elem.img} alt=""/>
            </div>

            Text Content
            <h1 className="text-2xl mb-5 text-[#142149] text-center mt-4 font-bold">
              {elem.head}
            </h1>
            <p className="text-[14px] text-[#5E7290] text-center">{elem.para}</p>

            Button
            <div className="px-2 py-5 bg-[#0E53BE] relative rounded-full mt-4">
              <Link
                className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                 to="/training"
              >
                Learn About
              </Link>
            </div>
          </div>
        ))} */}
      </div>
            

            
        </div>
    </div>
  )
}

export default Content2




