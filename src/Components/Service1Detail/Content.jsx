import React from 'react'

function Content() {
    const funFacts = [
        { title: "Successfully work with", count: "1056", text: "HAPPY CLIENTS" },
        { title: "Successfully completed", count: "491", text: "Finished projects" },
        { title: "Recruit more than", count: "245", text: "SKilled Experts" },
        { title: "Blog update", count: "1090", text: "Media Posts" },
      ];
  return (
    <div>
    {/* Experience Section */}
    {/* <div className="py-24 bg-gray-100 px-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold">
                <div className='flex items-end'>
                <h2 className="text-blue-600 text-8xl">38</h2>
                <h4 className='text-[15px] leading-none'>Years’<br /> Experience <br /> in IT</h4>
                </div>
               
            </h2>
            <h3 className="text-2xl mt-6 font-semibold">
              Learn More About <br /> Our <span className="text-blue-600">Success Stories</span>
            </h3>
          </div>
          <div className="lg:w-2/3 lg:pl-12 mt-8 lg:mt-0">
            <h5 className="text-lg font-medium">
              Mitech specializes in <span className="text-blue-600">technological and IT-related services</span> such as product engineering, warranty management, building cloud, infrastructure, network, etc.
            </h5>
            <p className="mt-4 text-gray-600">
              We’re available for 8 hours a day! <br /> Contact us to require a detailed analysis and assessment of your plan.
            </p>
          </div>
        </div>
      </div>
    </div> */}
    
    {/* Fun Facts Section */}
    <div className="py-10 bg-white px-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {funFacts.map((fact, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h5 className="text-lg font-semibold">{fact.title}</h5>
              <div className="text-4xl font-bold text-blue-600 my-3">{fact.count}</div>
              <span className="text-gray-600">{fact.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Content