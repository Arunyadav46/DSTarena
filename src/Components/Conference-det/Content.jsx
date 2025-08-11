import React from 'react'

function Content() {
  return (
     <div className="px-4 md:px-40 py-10 bg-white text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#222] mb-8">
        Conference Paper Writing Service
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column - Text */}
        <div className="flex-1">
          <p className="text-justify  leading-relaxed mb-4">
            Writing a conference paper and presenting a paper at an academic conference increases the credibility of your research work and enhances your visibility within your academic community. HIGS offers expert assistance in crafting high-quality conference research papers tailored to the rigorous standards of academic conferences. Our comprehensive conference paper writing service provides personalized support at every stage of the writing process, from conceptualisation to final submission, we help to articulate your research with precision and clarity. Our professional writers and editors specialise in various academic fields, ensuring that your paper meets the highest standards of scholarly excellence. At HIGS, We provide meticulous editing and proofreading services to ensure that your conference articles are free of errors and polished to perfection. We provide an abstract of paper presentation, refine your arguments, enhance the clarity of your writing, and ensure that your paper adheres to the specific guidelines of your target conference. We align your paper with the latest developments in your field and ensure that your work is both relevant and impactful. We also provide publication assistance to help you publish your conference papers in reputable journals and conference proceedings such as IEEE, SCI, Scopus, Elsevier, ACM and more.
          </p>
        </div>

        {/* Right Column - Card */}
        {/* <div className=" bg-red-100 w-[40%] h-[60vh] text-center">
            <img
            src="https://higssoftware.com/images/conference-paper-writing-service.png" // You can change this image
            alt="writing"
            className="w-full h-[100%] object-cover mb-6"
          />
        </div> */}
        <div className="w-full lg:w-[40%]">
  <div className="bg-red-10 flex justify-center items-center rounded-lg overflow-hidden  h-[60vh]">
    <img
      src="https://higssoftware.com/images/conference-paper-writing-service.png"
      alt="writing"
      className="w-full object-cover"
    />
  </div>
</div>

      </div>

      {/* What is a Conference paper? */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-yellow-600 mb-2">
          What is a Conference paper?
        </h3>
        <p className="text-base text-justify leading-relaxed">
          A conference paper is a type of research paper that is specifically written to be presented at an academic conference. It presents research findings, analyses, or ideas on a specific topic within an academic discipline. A conference for research papers provides a platform for scholars and researchers to share and disseminate their knowledge, findings, and ideas.
        </p>
      </div>
    </div>
  )
}

export default Content