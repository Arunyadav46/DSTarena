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
    //             d="M8 16h8M8 12h8m-8-4h8M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    //           />
    //         </svg>
    //       </div>
    //       <h1 className="text-2xl font-bold text-blue-800">Proposal Formatting</h1>
    //     </div>

    //     {/* Sub-heading */}
    //     <h2 className="text-xl font-semibold mb-4">Proper Structure & Citation</h2>

    //     {/* Content */}
    //     <p className="mb-4 text-gray-700 leading-relaxed">
    //       A well-formatted proposal not only makes a good impression but also ensures clarity and professionalism.
    //       This section guides you through the correct structure, formatting guidelines, and citation standards
    //       to follow while preparing a research or project proposal.
    //     </p>

    //     <ul className="list-disc ml-5 text-gray-700 space-y-2">
    //       <li>Follow a logical structure: Title, Introduction, Objectives, Methodology, Timeline, and Conclusion.</li>
    //       <li>Use consistent fonts and spacing for better readability.</li>
    //       <li>Include proper in-text citations and a bibliography using APA or IEEE format.</li>
    //       <li>Ensure all references are authentic and verifiable.</li>
    //     </ul>

    //     {/* Call to Action or Navigation */}
    //     <div className="mt-6">
    //       <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition duration-200">
    //         Back to All Guidelines
    //       </button>
    //     </div>
    //   </div>
    // </div>
         <section className="bg-gradient-to-b from-white to-blue-50 px-6 py-16 md:px-32 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-2 ">
          Proposal Formatting
          {/* <span className="block w-20 h-1 bg-blue-600 mx-auto mt-2 rounded"></span> */}
        </h1>

        {/* Subtitle */}
        <p className="text-center text-lg text-gray-600  mx-auto mt-4">
          Starting your dissertation or proposal begins with a strong topic and structured plan. Our experts help you shape your research idea into a format that meets academic standards.
        </p>

        {/* Content Section */}
        <div className="mt-14 flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <img
            src="https://mythesis.co.in/wp-content/uploads/2017/11/thesis_statement-600x400.jpg"
            alt="Thesis Wordcloud"
            className="w-full md:w-1/2 rounded-lg shadow-lg  transition-transform duration-300"
          />

          {/* Text */}
          <div className="w-full md:w-1/2 text-justify space-y-5 text-gray-700 leading-relaxed">
            <p>
              Dissertation topic plays a crucial role in achieving academic excellence. An effective topic should immediately grab the reader’s attention and spark interest in your research.
            </p>

            <p className="font-semibold">A topic should be chosen by considering the following:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>It should be interesting</li>
              <li>It should relate to your subject or field</li>
              <li>It should be researchable from reliable sources</li>
              <li>It should contribute to current research trends</li>
            </ul>

            <p>
              At <span className="font-semibold text-blue-700">THESISGLOBAL</span>, we offer a wide array of topics to choose from. Once you pick your area of interest, we provide a framework or brief outline to help you understand how to proceed, what to include, and how to shape your thesis.
            </p>
          </div>
        </div>

        {/* Special Features */}
        <div className="mt-14">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Special features of our Proposal Formatting services include:</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Free topic and outline with complete dissertation order</li>
            <li>100% guaranteed customer satisfaction</li>
            <li>Zero grammatical and spelling errors</li>
            <li>Expert suggestions on appropriate research topics</li>
            <li>Support for minor revisions as per guide’s feedback</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-md text-gray-600">
            Want your proposal to be flawless and well-structured? <br />
            <span className="text-blue-600 font-medium">Let our professionals format and fine-tune it to perfection.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Content