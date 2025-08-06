import React from 'react'


function Content() {
    const steps = [
  {
    step: "STEP 1",
    content: "Choose a focused topic for the review paper.",
  },
  {
    step: "STEP 2",
    content: "Collect credible sources for the review paper writing process.",
  },
  {
    step: "STEP 3",
    content: "We undergo research & collect information for the review paper writing.",
  },
  {
    step: "STEP 4",
    content: "We organize the collected information and move to the main work.",
  },
  {
    step: "STEP 5",
    content: "Write the introduction, body & conclusion.",
  },
  {
    step: "STEP 6",
    content: "Add sufficient & reliable references regarding the content.",
  },
  {
    step: "STEP 7",
    content: "We undergo a plagiarism checking process, proofreading, and formatting process.",
  },
];
  return (
     <div className="px-4 md:px-40 py-10 bg-white text-gray-800">
      <h1 className="text-4xl md:text-4xl font-semibold text-center text-black mb-8">
        Review Paper Writing Service
      </h1>

      <p className="text-center text-justify text-[15x] text-[#222] mb-10">
        HIGS is the leading review paper writing services in India, providing custom-made, error-free review papers. Unlock your successful review paper writing with our expert guidance & top-notch writing services. We are dedicated to offering the best research or article review paper writing with high quality and plagiarism-free within a given deadline. HIGS, as the best review paper writing service, will clearly guide you on how to write a review paper and show you an example of the review paper. HIGS will be with you from the beginning to the end of your research work. Our team provides a better understanding of your research work and we deliver the best. Get step-by-step PhD review paper writing help from our team of experts. We are ready to help you in writing your complete review paper, review paper rewriting service, and we are also ready to offer chapter-wise assistance.
      </p>

      <h2 className="italic font-semibold text-xl text-gray-800 text-center mb-6">
        Our review paper writing comprises the following qualities,
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-10 px-6 md:px-20">
        <div className="flex items-start space-x-2">
          <span className="text-orange-500 mt-1">✔</span>
          <p>It Integrates Findings, Identifies Patterns, And Synthesizes Information.</p>
        </div>
        <div className="flex items-start space-x-2">
          <span className="text-orange-500 mt-1">✔</span>
          <p>It Evaluates The Strengths & Weaknesses Of Existing Research.</p>
        </div>
        <div className="flex items-start space-x-2">
          <span className="text-orange-500 mt-1">✔</span>
          <p>Your Review Paper's Introduction Defines Your Topic.</p>
        </div>
        <div className="flex items-start space-x-2">
          <span className="text-orange-500 mt-1">✔</span>
          <p>It Highlights The Possible Bias & Limitations.</p>
        </div>
      </div>

      <p className="text-center text-lg text-gray-700">
        Our team HIGS, is not just a review paper writing company, we will be your all-around supporters from the beginning of the research to the end. We do flawless review paper writing service for your research under any research domain such as in Engineering, arts, science, management, marketing, and more.
      </p>
      <div className="px-4 md:px-20 py-10 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">
        “7” Steps Of Writing A Review Paper
      </h2>
      <p className="mb-10 text-[#222] max-w-3xl">
        At HIGS, we follow the 7 most crucial steps to write a review paper.
        At every step, we give priority to quality. Here, you have a detailed
        overview of the steps we follow.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-5 shadow-md rounded-md border border-gray-200 relative"
          >
            <div className="absolute -top-4 left-4 bg-blue-700 text-white px-4 py-1 rounded-md text-sm font-bold">
              {item.step}
            </div>
            <p className="mt-6 text-gray-700">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Content