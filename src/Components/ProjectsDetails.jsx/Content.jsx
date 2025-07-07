import React from 'react'
import { Link } from 'react-router-dom'

function Content() {
  return (
    <div className="xl:py-20  xl:px-32 bg-[#FFFFFF]">
    <div className=" px-4">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-semibold">
          Proud projects that <span className="text-blue-600">make us stand out</span>
        </h3>
      </div>

      {/* Filter Buttons */}
      <div className="grid grid-cols-3 lg:grid-cols-5  flex justify-center space-x-4  mb-10">
        {[
          { label: "All", count: "" },
          { label: "Cloud Services", count: "" },
          { label: "Cyber Security", count: "" },
          { label: "IT consultancy", count: "" },
          { label: "IT Security", count: "" },
        ].map((filter, index) => (
          <button key={index} className="px-3 border-2 py-2 mb-4  text-center rounded text-gray-700 hover:bg-blue-600 hover:text-white">
            {filter.label} <span className="ml-1 text-sm">{filter.count}</span>
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 p-5  md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
        {[
          { title: "Mitech-Smart Vision", category: "Cyber Security", image: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/app-dev-1280x720.jpg"},
          { title: "Arden-Internal Networking", category: "Cyber Security", image: "https://mitech.thememove.com/wp-content/uploads/2019/03/case-study-01-480x298.jpg" },
          { title: "A Freeserve case study", category: "Cyber Security", image: "https://mitech.thememove.com/wp-content/uploads/2019/03/case-study-01-480x298.jpg" },
          { title: "Aqua – Research and Energy", category: "Cyber Security", image: "https://mitech.thememove.com/wp-content/uploads/2019/03/case-study-01-480x298.jpg" },
          { title: "A Sixbase typical case study", category: "IT consultancy", image: "https://mitech.thememove.com/wp-content/uploads/2019/03/case-study-01-480x298.jpg" },
          { title: "Healsoul – Technology & Health", category: "IT Security", image: "https://mitech.thememove.com/wp-content/uploads/2019/03/case-study-01-480x298.jpg" },
        ].map((project, index) => (
          <div key={index} href="#" className="bg-white min-h-[50vh]   shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition">
            <img src={project.image} alt={project.title} className="w-full h-[30vh]"/>
            <div className="p-4">
              <h6 className="text-lg font-semibold">{project.title}</h6>
              <p className="text-sm text-gray-500 mb-2">{project.category}</p>
              <p className="text-sm text-gray-700 mb-4 text-justify">This case study enln focuses on core modernization and technological evolution.This case study focuses on core modernization and technological evolution</p>
              <hr className='' />
              <div className="flex items-center text-blue-600 font-semibold">
                <Link className='mt-5 text-center text-white rounded-md bg-[#086AD8] px-2 py-2 border-2 w-full' to="/project/det">View Details</Link>
                {/* View case study <i className="fas fa-arrow-right ml-1"></i> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Content