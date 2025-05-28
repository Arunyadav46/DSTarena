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