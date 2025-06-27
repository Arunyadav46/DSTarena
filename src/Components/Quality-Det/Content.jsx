import React from 'react'

function Content() {
  return (
      <div id="text9" className="w-full xl:px-32 bg-white mt-10">
      <div className="bg-[#F9FAFB] text-gray-700 p-10 rounded-xl shadow-md text-justify space-y-6">
        
        <h2 className="text-3xl font-bold text-center text-[#1F2937]">Quality Policy</h2>

        {/* Mission Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Mission</h3>
          <p className='text-gray-900'>
            Our aim is to effectively and efficiently provide quality training workshops, M.Tech thesis work, and research that satisfy the specified requirements of students and comply with all statutory regulations.
          </p>
        </div>

        {/* ISO Certified Statement */}
        <p className='text-gray-900'>
          DSTARENA has been established in compliance with the International Standard <strong>ISO 9001:2008</strong>. This promotes a culture of quality assurance throughout all company systems and procedures, under the leadership of the senior management team and with the active support of all employees.
        </p>

        {/* Commitment to Improvement */}
        <p className='text-gray-900'>
          The company is committed to continually improving student satisfaction through initiatives, controls, resource allocation, staff training, and involvement at all levels. Our goal is to understand student requirements through efficient and accurate communication, and to minimize defects in all services and deliverables. We actively engage with students at every step for a smoother and more effective learning experience.
        </p>

        {/* Objectives Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Our Quality Objectives
          </h3>
          <ul className="list-disc list-inside text-gray-900 space-y-1">
            <li>Focusing on student needs and satisfaction</li>
            <li>Adopting new technologies, techniques, and innovations</li>
            <li>Effective process management</li>
            <li>Motivating and raising awareness in our workforce</li>
            <li>Preventative management and continual improvement</li>
            <li>Delivering M.Tech research work before deadlines</li>
          </ul>
        </div>

        {/* Management Commitment */}
        <p className='text-gray-900'>
          The Directors commit to providing the necessary resources to implement and communicate this quality policy to all employees. Every team member exercises the highest level of skill and care to perform their duties and deliver exceptional service to our students. The company’s systems are regularly audited and reviewed to ensure peak performance and customer satisfaction.
        </p>

        {/* Signature Section */}
        <div className="mt-6 text-right">
          <p className="text-lg font-semibold text-gray-700">Ramnath Narhete</p>
          <p className="text-gray-700 italic">Managing Director</p>
          <p className="text-gray-500">June 2016</p>
        </div>
      </div>
    </div>
  )
}

export default Content