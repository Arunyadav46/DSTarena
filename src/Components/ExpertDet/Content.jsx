import React from 'react'

function Content() {
  return (
    //  <div className="min-h-screen bg-white text-gray-800 px-6 py-10 md:px-20">
    //   <div className="max-w-6xl mx-auto shadow-lg rounded-2xl p-8 bg-gray-50">
    //     {/* Icon and Title */}
    //     <div className="flex items-center space-x-4 mb-6">
    //       <div className="bg-orange-500 text-white p-3 rounded-md">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-6 w-6"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6L3 9m9 5l9-5"
    //           />
    //         </svg>
    //       </div>
    //       <h1 className="text-2xl font-bold text-blue-800">Expert Thesis Mentor</h1>
    //     </div>

    //     {/* Sub-heading */}
    //     <h2 className="text-xl font-semibold mb-4">Top Academic Expert Assigned</h2>

    //     {/* Content */}
    //     <p className="mb-4 text-gray-700 leading-relaxed">
    //       Every student is assigned a top-tier academic mentor who specializes in their research area.
    //       Our mentors guide you through each stage of your thesis – from topic selection to final submission –
    //       ensuring your work meets the highest academic standards.
    //     </p>

    //     <ul className="list-disc ml-5 text-gray-700 space-y-2">
    //       <li>One-on-one guidance from subject matter experts.</li>
    //       <li>Help with literature review, research methodology, and structuring.</li>
    //       <li>Assistance with citations, formatting, and avoiding plagiarism.</li>
    //       <li>Regular review meetings to track progress and provide feedback.</li>
    //     </ul>

    //     {/* Call to Action or Navigation */}
    //     <div className="mt-6">
    //       <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition duration-200">
    //         Back to All Services
    //       </button>
    //     </div>
    //   </div>
    // </div>
      <div className="bg-white px-6 py-12 md:px-40 text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-center">Expert Thesis Mentorship</h1>
      <p className="text-center text-lg text-gray-600  mx-auto">
        As an academician, having an expert mentor by your side throughout your thesis journey can significantly enhance the quality, efficiency, and impact of your research. With expert mentorship, you gain clarity, support, and direction at every step.
      </p>

      <div className="mt-10 flex flex-col md:flex-row gap-10 items-center">
        <img
          src="https://mythesis.co.in/wp-content/uploads/2017/11/proofreading-1-600x400.jpg"
          alt="Mentor guiding researcher"
          className="w-full md:w-1/2 rounded shadow"
        />

        <div className="w-full md:w-1/2 text-justify">
          <p className="mb-4">
            Despite your best efforts, navigating through complex research requirements, formatting rules, and chapter organization can be challenging. This is where our expert mentors come into the picture.
          </p>

          <p className="mb-4">
            At <span className="font-semibold">THESISGLOBAL</span>, our expert mentors offer personalized one-on-one support to help scholars develop a high-impact dissertation. These mentors are experienced academicians who understand what makes a dissertation stand out.
          </p>

          <p className="mb-4">
            Whether it's structuring your chapters, refining arguments, formatting references, or providing conceptual clarity, our mentors work closely with you to ensure top-tier academic standards are met.
          </p>

          <p>
            With our mentorship, you'll approach your thesis confidently, knowing that you're guided by someone who has successfully walked the same path.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-700">
        <p>
          Need a professional mentor to make your PhD dissertation shine? Let our experts help you reach academic excellence.
        </p>
      </div>
    </div>
  )
}

export default Content