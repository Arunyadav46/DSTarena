import React from 'react'
import { FaInfinity, FaStar, FaFileAlt, FaListAlt, FaFileSignature, FaFont } from 'react-icons/fa';

function Plagrism() {
 const features = [
  {
    icon: <FaFileAlt size={28} className="text-orange-500" />,
    title: "Plagiarism Check",
    tag: "Ensures 100% originality"
  },
  {
    icon: <FaFont size={28} className="text-orange-500" />,
    title: "Formatting",
    tag: "Proper structure & citation"
  },
  {
    icon: <FaStar size={28} className="text-orange-500" />,
    title: "Premium Writer",
    tag: "Top-rated expert assigned"
  },
  {
    icon: <FaListAlt size={28} className="text-orange-500" />,
    title: "Unlimited Sources",
    tag: "Includes all references needed"
  },
  {
    icon: <FaFileSignature size={28} className="text-orange-500" />,
    title: "Title Page",
    tag: "Custom title as per format"
  },
  {
    icon: <FaInfinity size={28} className="text-orange-500" />,
    title: "Unlimited Revisions",
    tag: "Refine your paper endlessly"
  }
];

  return (
     <section className="bg-[#F6FAFE] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Get more from our paper writing service
        </h2>
        
        <p className="text-gray-600 mb-10">
          Take a look at everything that comes with our affordable paper writing when you place an order.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold font-bold text-blue-900">{feature.title}</h3>
              <p className="text-gray-900 font-bold mt-2 text-lg">{feature.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plagrism