import React from 'react'
import { Link } from 'react-router-dom';

function Content() {
  const jobs = [
    {
      id: 1,
     
      title: "Designing of a polyherbal formulation for metabolic disorder",
      price: "ICICI BANK",
      duration: "1-5 Days",
      level: "Expensive",
      type: "Fixed"
    },
    {
      id: 2,
     
      title: "Swift / SwiftUI Developer for B2B iOS apps",
      price: "HDFC",
      duration: "",
      level: "",
      type: ""
    },
    {
      id: 3,
      featured: false,
      title: "Re-Design of HTML Email Template",
      price: "KESHORAM",
      duration: "Month",
      level: "Basic Level",
      type: "Hourly"
    },
    {
      id: 4,
      featured: false,
      title: "Looking for team members for web agency",
      price: "BHEL",
      duration: "Short term",
      level: "Expensive",
      type: "Fixed"
    },
    {
      id: 5,
      featured: false,
      title: "Graphic Designer for ongoing job",
      price: "BHEL",
      duration: "1-5 Days",
      level: "Expensive",
      type: "Fixed"
    },
    {
      id: 6,
      featured: false,
      title: "Virtual Event Planner. PR. Virtual Assistant.",
      price: "ULTRATECH",
      duration: "Year",
      level: "Moderate Level",
      type: "Fixed"
    },
    {
      id: 7,
      featured: false,
      title: "Email Marketing Campaigns Creation",
      price: "$350.00",
      duration: "1-3 Weeks",
      level: "Moderate Level",
      type: "Fixed"
    },
    {
      id: 8,
      featured: false,
      title: "Video animator to bring some illustrations to life",
      price: "$2,000.00",
      duration: "Month",
      level: "Moderate Level",
      type: "Fixed"
    },
    {
      id: 9,
      featured: false,
      title: "Full-stack Developer to help us to build our Onl..",
      price: "$1,200.00",
      duration: "Long term",
      level: "Expensive",
      type: "Fixed"
    }
  ];
  return (
    <div className="w-full  bg-[#FFFFFF] p-5 md:p-10 lg:p-16   xl:px-32">
          <h2 className='text-xl mt-10 mb-10 md:text-2xl lg:text-3xl md:mt-10  xl:text-4xl text-center xl:mt-20 xl:mb-20 font-semibold'>Our MPharm  <span className='text-[#002FA6]'>Projects</span></h2>
        {jobs.map((job) => (
          <div key={job.id} className="bg-white  p-2 bg-white rounded-[10px] shadow-lg  border-2 hover:border-[#6787FE]  bg-blue-100 rounded-lg md:px-5 md:py-5 lg:px-8 lg:py-8  xl:px-10 xl:py-10 mb-10 flex justify-between items-center" >
            <div className='xl:w-[45%]'>
              <h2 className="font-semibold text-[10px] md:text-[14px] lg:text-[18px] xl:text-[22px] mt-2">{job.title}</h2>
            </div>
              <p className="mt-2 text-[10px] md:text-[15px] lg:text-[18px] font-bold xl:text-2xl">{job.price}</p>
            
            
            <Link to="/MBA/req" className="text-[8px] md:text-[15px] lg:text-[18px]  ml-4 bg-[#F0F3FF] xl:text-xl hover:bg-[#6787FE] hover:text-white text-[#6787FE] px-4 py-2 xl:px-10 xl:py-4 rounded-full">Request</Link>
    
          </div>
        ))}
      </div>
  )
}

export default Content