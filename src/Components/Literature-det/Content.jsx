import React from 'react'

function Content() {
  return (
     <div className="px-4 md:px-40 py-12 bg-white text-gray-800">
      {/* Heading */}
      <h1 className="text-center text-2xl md:text-4xl font-semibold mb-3">
        Customized Literature <span className="text-orange-500 font-bold">Review Writing</span>
      </h1>

      <p className="text-center text-gray-600 mb-8 max-w-4xl mx-auto">
        A literature review with specific research requires a critical discussion and evaluation of up-to-date research details.
        So, HIGS will fulfill all these research needs by meeting your highest level of satisfaction.
      </p>

      {/* What Our Team Can Promise You */}
      <h2 className="text-center text-xl md:text-2xl font-bold mb-2">
        What Our Team Can Promise You?
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
        Our team of well-experienced and skilled literature review writers will clearly analyze the research background and expose
        the research gaps and limitations of your research.
      </p>

      {/* What Gives A First-Class Literature Review */}
      <h3 className="text-lg md:text-xl font-bold mb-2">
        What Gives A First-Class Literature Review?
      </h3>
      <p className="text-gray-700 mb-3">
        In our experience, we have handled thousands of literature review writing processes under various research domains.
        So, we can guide you in an excellent way of doing your PhD research. We work on providing clear structure and focus to your research work.
      </p>
      <p className="text-gray-700 mb-10">
        A strong literature review of a research paper must have a clear explanation about your research work,
        so HIGS will work on that way to provide original and most innovative research work.
      </p>

      {/* 3 Column Section */}
      <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1 */}
        <div>
          <h4 className="text-orange-500 font-bold text-lg mb-2">What we will follow</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Our team is the best literature review writing service in India, we will follow strict guidelines of your University,
            we overview the entire article, clearly identify the research gaps, we analyze the literature, we also help you to decide the research topic,
            we group the articles into categories, and more.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-orange-500 font-bold text-lg mb-2">Decide a research topic</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Our team will be with you from the beginning to the end of your PhD research. You can pick out the scholarly PhD research topic under any research domain.
          </p>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-orange-500 font-bold text-lg mb-2">Promises of HIGS</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Each and every research article must be categorized properly. We strictly maintain on-time work delivery,
            high-quality filled research work, client support, unique working strategy for your research work, affordable price with so many discounts and offers, and more.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Content