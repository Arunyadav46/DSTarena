import React from 'react'

function Content() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] px-4 py-10 md:px-40 md:py-16">
      <h1 className="text-4xl md:text-4xl font-semibold text-center text-black mb-8">
        Research Paper Writing Services
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <div className="space-y-5 text-justify text-[#222]">
          <p>
            HIGS is one of the top 10 research paper writing services in India. Our team consists of top-rated research paper writers who provide the best research paper writing service in India. We at HIGS, provide reliable and efficient <span className="text-green-700 font-semibold">Research Paper Help and Writing Services For PhD Dissertations</span>.
          </p>
          <p>
            HIGS is one of the premier online research paper writing services in India, offering research paper assistance, journal paper writing services, and all other research writing services at affordable rates.
          </p>
          <p>
            Our team of <span className="text-green-700 font-semibold">experienced research paper writers</span> has a proven track record of providing quality research and writing services. We guarantee to deliver the best research paper help and writing services that meet all your expectations. We guarantee to provide 100% customer satisfaction. We also guarantee timely delivery, plagiarism-free papers, and confidentiality.
          </p>

          <h2 className="text-xl font-bold text-black mt-6">INDIA'S NO:1 WRITING SERVICE "HIGS"</h2>

          <p>
            We specialize in providing top-tier academic writing services tailored to assist scholars in publishing their papers in esteemed and highly ranked journals. Our comprehensive journal writing services encompass:
          </p>

          <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-2 font-medium text-blue-800">
            <li>SCI Paper Writing</li>
            <li>IEEE Paper Writing</li>
            <li>SCOPUS Paper Writing</li>
            <li>UGC Paper Writing</li>
            <li>SCIE Paper Writing</li>
            <li>ANNEXURE Paper Writing</li>
            <li>Web Of Science Paper Writing</li>
            <li>Q1, Q2, Q3, Q4 Paper Writing</li>
          </ul>

          <div className="mt-4 text-sm font-medium text-[#333] bg-gray-100 p-3 rounded shadow">
            We assure the novelty of your paper. We provide 10% Discounts for referring friends or colleagues.
          </div>
        </div>

        {/* Right Section (Image with Text Overlay) */}
        <div className="relative w-full h-96 md:h-full">
          <img
            src="https://higssoftware.com/images/research-paper-writing-services.jpg"
            alt="Research Paper Writing"
            className="w-full h-full object-cover rounded shadow"
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center space-y-2 text-center px-4">
            <h2 className="text-green-300 text-2xl md:text-3xl font-semibold">
              Research
            </h2>
            <h2 className="text-green-300 text-2xl md:text-3xl font-semibold">
              Paper Writing
            </h2>
            <h2 className="text-green-300 text-2xl md:text-3xl font-semibold">
              Assistance
            </h2>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Content