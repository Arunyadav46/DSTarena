import React from 'react'

function Content() {
  return (
      <div className="px-4 md:px-40 py-12 bg-white text-gray-800">
      {/* Main Heading */}
      <h1 className="text-2xl md:text-4xl font-bold text-center  mb-6">
        Writing, Editing, And Proofreading Under <span className="text-indigo-600">ONE ROOF!</span>
      </h1>

      <p className="text-center text-justify  text-gray-600 mb-10">
        In addition to thesis writing, we offer a broad spectrum of academic services, including dissertation writing, research paper assistance, and editing services.
        We cater to various academic levels and disciplines, providing comprehensive support for all your academic needs. We guarantee plagiarism-free and grammatically
        accurate theses. Our thesis writing assistance online ensures that your work is original and adheres to the highest academic standards. We also offer PhD thesis
        rewriting and proofreading solutions to refine your existing work. Our thesis writing services price is competitive, and we provide cheap thesis writing help
        without compromising on quality.
      </p>

      {/* Icon-based Features */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-blue-900 font-semibold flex items-center gap-2">
              <span className="text-2xl">🧑‍🎓</span> Expert Writers Across Diverse Disciplines
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Our writers are experts in their respective fields and are adept at creating custom theses that meet the highest academic standards. 
              We focus on delivering well-structured, compelling, and original content that aligns with your research objectives and academic requirements.
            </p>
          </div>

          <div>
            <h3 className="text-blue-900 font-semibold flex items-center gap-2">
              <span className="text-2xl">⏱️</span> Efficient and Timely Delivery
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              We respect your deadlines and understand the importance of timely submissions. Our team works diligently to ensure that your thesis is completed 
              within the agreed timeframe, giving you ample time for review and approval.
            </p>
          </div>
        </div>

        {/* Center image */}
        <div className="flex justify-center items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3064/3064515.png" // Placeholder image – use your own
            alt="Writing Illustration"
            className="w-64 h-auto object-contain"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-blue-900 font-semibold flex items-center gap-2">
              <span className="text-2xl">✅</span> Guaranteed Quality Assurance
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              We prioritize quality and originality in every project. We adhere to strict guidelines to ensure that your thesis is free from plagiarism and 
              meets the highest academic standards. Our rigorous quality control process ensures that you receive a polished, submission-ready masterpiece.
            </p>
          </div>

          <div>
            <h3 className="text-blue-900 font-semibold flex items-center gap-2">
              <span className="text-2xl">🏛️</span> Adheres To University Norms
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              At HIGS, we excel in crafting theses that adhere meticulously to your university's guidelines and standards. Our dedicated team of experts specializes 
              in delivering custom thesis writing services tailored to meet the specific requirements of each client.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Sections */}
      <div className="mb-10">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
          LEADING DISSERTATION & THESIS HELP ONLINE
        </h2>
        <p className="text-gray-600 text-sm">
          Looking to write a thesis online or need online thesis writing assistance? HIGS provides thesis writing services online, allowing you to access our
          services from anywhere. We also offer online PhD dissertation methodology help & online thesis writing services for your convenience. Whether you need
          help writing a thesis paper, help writing the thesis, or are wondering if can someone write my thesis for me, HIGS is here to offer holistic support
          for all your academic writing needs.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
          Searching For PhD Thesis Help Services Or Master Thesis Writing Services?
        </h2>
        <p className="text-gray-600 text-sm">
          Our thesis services are trusted by students across India and beyond. We offer dissertation writing help and phd thesis writer support to ensure your
          academic work is top-notch. Concerned about the dissertation writing services cost in India? We offer competitive and transparent thesis writing charges,
          ensuring you get high-quality service at a budget-friendly price. Our cheap dissertation writing services provide excellent value without compromising on quality.
          You can check your offers & discounts. You can contact our team by dialing 
          {/* <a href="tel:+918861018401" className="text-blue-700 font-semibold"> +91 8861018401</a> and you can mail us at 
          <a href="mailto:researchguidance@higssoftware.com" className="text-blue-700 font-semibold"> researchguidance@higssoftware.com</a>. */}
        </p>
      </div>

      {/* Button */}
      <div className="text-center">
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded">
          DOWNLOAD PRICE QUOTES
        </button>
      </div>
    </div>
  )
}

export default Content