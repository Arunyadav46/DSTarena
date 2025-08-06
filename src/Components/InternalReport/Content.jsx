import React from 'react'
import { FaChartLine, FaUsers, FaBullhorn, FaRegFileAlt, FaClipboardList, FaMoneyCheckAlt } from 'react-icons/fa';

function Content() {
  return (
        <div className="bg-white px-6 md:px-40 py-12 text-gray-800">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-10">Internal Report Writing</h2>

      {/* Top Section (Image + Description) */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        {/* Left Image */}
        <img
          src="https://higssoftware.com/images/internal-report-writing.jpg" // Replace with your local or hosted image
          alt="Internal Report Writing"
          className="w-full max-w-md mx-auto"
        />

        {/* Right Text */}
        <div className="text-sm md:text-base leading-relaxed">
          <p className="mb-4">
            Internal report writing refers to the practice of creating a document that conveys information within an organization.
            It can be used by various organizations and departments. This is mainly involved in internal reporting to make various
            management decisions. It is mainly used between team members and departments to keep effective communication regarding goals
            and business objectives. Good internal reports should be readable, accurate, and timely.
          </p>
          <button className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded font-semibold shadow">
            DOWNLOAD PRICE QUOTES
          </button>
        </div>
      </div>

      {/* Examples Section */}
      <h3 className="text-2xl font-bold text-center mb-10">What Are All The Examples Of Internal Reports?</h3>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h4 className="flex items-center gap-2 font-semibold text-blue-800 border-b border-dotted pb-1">
              <FaMoneyCheckAlt className="text-lg" /> Financial Reports
            </h4>
            <p className="text-sm mt-1">
              Our team of experts has more than 10 years of experience in various educational backgrounds. Each one of our team holds
              a master’s degree and many of them are doctorate degree holders.
            </p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-semibold text-blue-800 border-b border-dotted pb-1">
              <FaUsers className="text-lg" /> Human Resources Reports
            </h4>
            <p className="text-sm mt-1">
              It is a collection of HR data that are combined to form a single report to support insights into an organization's workforce.
            </p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-semibold text-blue-800 border-b border-dotted pb-1">
              <FaBullhorn className="text-lg" /> Marketing Reports
            </h4>
            <p className="text-sm mt-1">
              It is a document that evaluates the performance of a marketing plan or campaign. It helps you to realize what is working and what is not.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div>
            <h4 className="flex items-center gap-2 font-semibold text-blue-800 border-b border-dotted pb-1">
              <FaChartLine className="text-lg" /> Strategic & Planning Reports
            </h4>
            <p className="text-sm mt-1">
              Strategic reporting & organization is the process that will help organizations understand their performance and make plans for the future.
            </p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-semibold text-blue-800 border-b border-dotted pb-1">
              <FaRegFileAlt className="text-lg" /> Sales Reports
            </h4>
            <p className="text-sm mt-1">
              It is a collection of information that communicates a company’s sales performance over a certain period of time.
            </p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-semibold text-blue-800 border-b border-dotted pb-1">
              <FaClipboardList className="text-lg" /> Operational Reports
            </h4>
            <p className="text-sm mt-1">
              Operational reports are regular reports that provide a detailed picture of a company’s day-to-day operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content