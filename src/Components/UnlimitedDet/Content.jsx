import React from 'react'

function Content() {
  return (
    //   <div className="min-h-screen bg-white text-gray-800 px-6 py-10 md:px-20">
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
    //             d="M12 20h9m-9 0H3m9 0v-8m0 0H3m9 0h9M3 4h18"
    //           />
    //         </svg>
    //       </div>
    //       <h1 className="text-2xl font-bold text-blue-800">Unlimited Resources</h1>
    //     </div>

    //     {/* Sub-heading */}
    //     <h2 className="text-xl font-semibold mb-4">Access to Journals & References</h2>

    //     {/* Content */}
    //     <p className="mb-4 text-gray-700 leading-relaxed">
    //       Gain full access to a wide range of academic resources including research journals, scholarly articles,
    //       case studies, and verified references. Whether you're drafting a thesis or conducting deep research,
    //       our digital library ensures you never run out of reliable information.
    //     </p>

    //     <ul className="list-disc ml-5 text-gray-700 space-y-2">
    //       <li>Access to thousands of national and international journals.</li>
    //       <li>Updated databases with recent publications and peer-reviewed papers.</li>
    //       <li>Support in finding references relevant to your research topic.</li>
    //       <li>Guidance on proper citation and avoiding plagiarism.</li>
    //     </ul>

    //     {/* Call to Action or Navigation */}
    //     <div className="mt-6">
    //       <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition duration-200">
    //         Back to Resource Services
    //       </button>
    //     </div>
    //   </div>
    // </div>
       <section className="bg-white px-6 py-10 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Intro Text */}
        <p className="text-lg text-justify">
          When working on a PhD or dissertation, access to high-quality resources
          can make or break the quality of your research. At MYTHESIS, we empower
          scholars with premium academic content — from top-tier journals to
          scholarly databases and reference libraries. With our unlimited access,
          you're no longer limited by paywalls or availability.
        </p>

        {/* Image + Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Image */}
          <img
            src="https://mythesis.co.in/wp-content/uploads/2017/11/thesis-writing-services-chennai-600x400.jpg" // replace with your actual path
            alt="Academic Resources"
            className="rounded-xl shadow-lg object-cover w-full h-full"
          />

          {/* Right Content */}
          <div className="space-y-6 text-justify">
            <p>
              Having access to scholarly databases is crucial for in-depth literature
              reviews and validating your hypotheses. We help you explore a wide range
              of credible and peer-reviewed material from:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>IEEE, Elsevier, Springer, Wiley, JSTOR & more</li>
              <li>Recent conference papers, journals, and white papers</li>
              <li>Field-specific data banks and statistical reports</li>
              <li>Premium academic PDFs, books, and scanned articles</li>
            </ul>

            <p>
              Our expert research team curates and compiles the most relevant materials
              based on your topic, saving you countless hours of searching.
            </p>
          </div>
        </div>

        {/* Special Features */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Special features of MYTHESIS resource access include
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Unlimited resource requests for subscribed users</li>
            <li>Support for citation formats (APA, MLA, Chicago, IEEE)</li>
            <li>100% plagiarism-free reference suggestions</li>
            <li>Expert guidance on using sources effectively</li>
            <li>Support in identifying most cited papers in your field</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Content