import React from 'react'

function Content() {
  return (
     <div className="bg-white py-12 px-6 md:px-24 text-gray-800">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8 tracking-wide">
        RESEARCH PROPOSAL WRITING
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Text Content */}
        <div className="text-sm md:text-base leading-relaxed text-justify">
          <p className="mb-4">
            Are you in search of top-tier research proposal writing services? Look no further. HIGS, your trusted partner, with a team of seasoned research
            proposal writers dedicated to your success. Our commitment to excellence is matched by our affordable pricing, ensuring accessible support for all.
          </p>
          <p className="mb-4">
            So, you can purchase a research proposal at an affordable price with more offers & Discounts. At HIGS, you can expect tailor-made, original,
            innovative, and meticulously referenced PhD research proposals.
          </p>
          <p className="mb-4">
            Our services extend beyond writing, offering top-notch proofreading and editing support. HIGS provides the best customised and effective research
            proposal writing service. With a dedicated team of seasoned scholars, writers, and researchers, HIGS is committed to delivering top-tier research
            proposals that not only meet but exceed your expectations.
          </p>
        </div>

        {/* Image Content */}
        <div className="flex justify-center">
          <img
            src="https://higssoftware.com/images/research-proposal-writing.jpg" // Use your hosted version or download and use locally
            alt="Research Proposal Writing Service"
            className="w-full  h-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Content