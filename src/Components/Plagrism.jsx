import React from 'react'
import { FaInfinity,FaBook, FaStar, FaUserGraduate, FaFileAlt, FaListAlt, FaFileSignature,FaLightbulb, FaFont } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Plagrism() {
//  const features = [
//   {
//     icon: <FaFileAlt size={28} className="text-orange-500" />,
//     title: "Plagiarism Check",
//     tag: "Ensures 100% originality"
//   },
//   {
//     icon: <FaFont size={28} className="text-orange-500" />,
//     title: "Formatting",
//     tag: "Proper structure & citation"
//   },
//   {
//     icon: <FaStar size={28} className="text-orange-500" />,
//     title: "Premium Writer",
//     tag: "Top-rated expert assigned"
//   },
//   {
//     icon: <FaListAlt size={28} className="text-orange-500" />,
//     title: "Unlimited Sources",
//     tag: "Includes all references needed"
//   },
//   {
//     icon: <FaFileSignature size={28} className="text-orange-500" />,
//     title: "Title Page",
//     tag: "Custom title as per format"
//   },
//   {
//     icon: <FaInfinity size={28} className="text-orange-500" />,
//     title: "Unlimited Revisions",
//     tag: "Refine your paper endlessly"
//   }
// ];
 
const features = [
  {
    icon: <FaLightbulb size={28} className="text-orange-500" />,
    title: "Research Topic Selection and Validation",
    tag: "Unique & research-worthy titles"
  },
  {
    icon: <FaFileAlt size={28} className="text-orange-500" />,
    title: "Proposal Formatting",
    tag: "Proper structure & citation"
  },
  {
    icon: <FaUserGraduate size={28} className="text-orange-500" />,
    title: "Expert Thesis Mentor",
    tag: "Top academic expert assigned"
  },
  {
    icon: <FaBook size={28} className="text-orange-500" />,
    title: "Unlimited Resources",
    tag: "Access to journals & references"
  },
  {
    icon: <FaFileSignature size={28} className="text-orange-500" />,
    title: "Customized Title Page",
    tag: "University format guaranteed"
  },
  {
    icon: <FaInfinity size={28} className="text-orange-500" />,
    title: "Unlimited Revisions",
    tag: "Refine your thesis endlessly"
  }
];

  return (
    //  <section className="bg-[#F6FAFE] py-16 px-6 md:px-12">
    //   <div className="max-w-7xl mx-auto text-center">
    //     <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
    //       Get more from our paper writing service
    //     </h2>
        
    //     <p className="text-gray-600 mb-10">
    //       Take a look at everything that comes with our affordable paper writing when you place an order.
    //     </p>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {features.map((feature, idx) => (
    //         <Link to="/plagrism" key={idx} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
    //           <div className="mb-4">{feature.icon}</div>
    //           <h3 className="text-lg font-semibold font-bold text-blue-900">{feature.title}</h3>
    //           <p className="text-gray-900 font-bold mt-2 text-lg">{feature.tag}</p>
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="bg-[#F6FAFE] py-16 px-6 md:px-12">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
      Get More from Our Thesis Support Services
    </h2>

    <p className="text-gray-600 mb-10">
      Take a look at everything included in our professional thesis and dissertation guidance.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
     
        <div>
        <Link
          to="/plagrism"
          
          className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
        >
          <div className="mb-4"><FaBook size={28} className="text-orange-500" /></div>
          <h3 className="text-lg font-semibold font-bold text-blue-900">Topic Finalization</h3>
          <p className="text-gray-900 font-bold mt-2 text-lg">Unique & research-worthy titles</p>
        </Link>
        </div>
         <div>
        <Link
          to="/proposel"
          
          className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
        >
          <div className="mb-4"><FaFileAlt size={28} className="text-orange-500" /></div>
          <h3 className="text-lg font-semibold font-bold text-blue-900">Proposal Formatting</h3>
          <p className="text-gray-900 font-bold mt-2 text-lg">Proper structure & citation</p>
        </Link>
        </div>
         <div>
        <Link
          to="/expert"
          
          className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
        >
          <div className="mb-4"><FaUserGraduate size={28} className="text-orange-500" /></div>
          <h3 className="text-lg font-semibold font-bold text-blue-900">Expert Thesis Mentor</h3>
          <p className="text-gray-900 font-bold mt-2 text-lg">Top academic expert assigned</p>
        </Link>
        </div>
         <div>
        <Link
          to="/unlimited"
          
          className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
        >
          <div className="mb-4"><FaBook size={28} className="text-orange-500" /></div>
          <h3 className="text-lg font-semibold font-bold text-blue-900">Unlimited Resources</h3>
          <p className="text-gray-900 font-bold mt-2 text-lg">Access to journals & references</p>
        </Link>
        </div>
         <div>
        <Link
          to="/customize"
          
          className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
        >
          <div className="mb-4"><FaFileSignature size={28} className="text-orange-500" /></div>
          <h3 className="text-lg font-semibold font-bold text-blue-900">Customized Title Page</h3>
          <p className="text-gray-900 font-bold mt-2 text-lg">University format guaranteed</p>
        </Link>
        </div>
         <div>
        <Link
          to="/revision"
          
          className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
        >
          <div className="mb-4"><FaInfinity size={28} className="text-orange-500" /></div>
          <h3 className="text-lg font-semibold font-bold text-blue-900">Unlimited Revisions</h3>
          <p className="text-gray-900 font-bold mt-2 text-lg">Refine your thesis endlessly</p>
        </Link>
        </div>
     
    </div>
  </div>
</section>

  )
}

export default Plagrism