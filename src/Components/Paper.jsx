import React from 'react'
import {
  FaCertificate,
  FaHandshake,
  FaClock,
  FaHistory,
  FaMoneyBillWave,
  FaChartLine
} from "react-icons/fa";


function Paper() {
 
//     const features = [
//   {
//     icon: <FaCertificate size={30} className="text-orange-500" />,
//     title: "Original Content Commitment",
//     desc: "Each paper is crafted from scratch with a focus on uniqueness. Request a report to confirm 96%+ originality."
//   },
//   {
//     icon: <FaHandshake size={30} className="text-orange-500" />,
//     title: "Competitively Price",
//     desc: "We offer value-driven pricing tailored for students, with added perks at no extra cost."
//   },
//   {
//     icon: <FaClock size={30} className="text-orange-500" />,
//     title: "Fast-paced Delivery",
//     desc: "Receive your work in as little as 3 hours without compromising on quality and depth."
//   },
//   {
//     icon: <FaHistory size={30} className="text-orange-500" />,
//     title: "Time-tested Experts",
//     desc: "Our team brings years of academic writing experience, supporting students globally."
//   },
//   {
//     icon: <FaMoneyBillWave size={30} className="text-orange-500" />,
//     title: "100% Refund Guarantee",
//     desc: "If you're not satisfied, our fair refund policy ensures your money is safe and secure."
//   },
//   {
//     icon: <FaChartLine size={30} className="text-orange-500" />,
//     title: "Result-driven Service",
//     desc: "Track orders, chat with writers, and aim for top results with our focused approach."
//   }
// ];


const features = [
  {
    icon: <FaCertificate size={30} className="text-orange-500" />,
    title: "100% Original Research",
    desc: "Every thesis is developed from scratch with verified originality. Receive plagiarism reports upon request."
  },
  {
    icon: <FaHandshake size={30} className="text-orange-500" />,
    title: "Fair & Student-Friendly Pricing",
    desc: "Our pricing models are tailored for scholars, offering maximum value with zero hidden charges."
  },
  {
    icon: <FaClock size={30} className="text-orange-500" />,
    title: "Timely Delivery",
    desc: "We deliver each chapter or complete thesis on time, even under tight academic deadlines."
  },
  {
    icon: <FaHistory size={30} className="text-orange-500" />,
    title: "Experienced Thesis Experts",
    desc: "Our PhD-qualified writers have years of academic experience guiding thesis work across disciplines."
  },
  {
    icon: <FaMoneyBillWave size={30} className="text-orange-500" />,
    title: "Refund Guarantee",
    desc: "In rare cases of dissatisfaction, our transparent refund policy protects your investment fully."
  },
  {
    icon: <FaChartLine size={30} className="text-orange-500" />,
    title: "Research-driven Outcomes",
    desc: "We focus on delivering high-impact research, backed by accurate data analysis and strong citations."
  }
];

  return (
    //  <section className="bg-blue-10 py-16 px-6 md:px-12">
    //   <div className="max-w-7xl mx-auto text-center">
    //     <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
    //       Why choose our research paper writing service?
    //     </h2>
    //     <p className="text-gray-600 max-w-2xl mx-auto mb-12">
    //       Relaxing is all that's left after contacting our experienced writers — here's why students trust us:
    //     </p>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {features.map((item, idx) => (
    //         <div key={idx} className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition-shadow duration-300">
    //           <div className="flex items-center gap-3 mb-4">
    //             {item.icon}
    //             <h3 className="text-lg font-semibold text-blue-900">{item.title}</h3>
    //           </div>
    //           <p className="text-gray-900 text-sm leading-relaxed">{item.desc}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section className="bg-blue-10 py-16 px-6 md:px-12">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
      Why choose our thesis writing service?
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      Let us handle the complexity of your thesis—from topic selection to final proofreading. Here’s why scholars trust our end-to-end support:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((item, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            {item.icon}
            <h3 className="text-lg font-semibold text-blue-900">{item.title}</h3>
          </div>
          <p className="text-gray-900 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}

export default Paper