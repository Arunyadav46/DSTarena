import React from 'react'

function Form() {
  return (
    // <div className="min-h-screen  lg:p-24 xl:p-32  bg-white flex flex-col md:flex-row p-4 md:p-16 gap-8">
    //   {/* Left Section */}
    //   <div className="md:w-1/2 space-y-4">
    //     <h3 className="text-orange-500 font-semibold text-sm">
    //       GET YOUR PLAGIARISM REPORT IN JUST 30 TO 40 MINUTES!
    //     </h3>
    //     <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
    //       24*7 Plagiarism Report
    //     </h1>
    //     <p className="text-gray-600">
    //       Onprice Infotech Pvt. Ltd provides authentic and original plagiarism reports for all
    //       types of documents, theses, papers, dissertations, etc.
    //     </p>
    //     <p className="text-gray-800 font-medium">
    //       The service is available 24*7 and you can submit documents anytime of the day.
    //     </p>
    //     <ul className="list-disc pl-5 space-y-1 text-gray-700">
    //       <li>✅ 100% Complete confidentiality guaranteed.</li>
    //       <li>✅ Fastest delivery within 30-40 minutes.</li>
    //       <li>✅ No data is stored in the repository.</li>
    //       <li>✅ Guaranteed lowest price.</li>
    //       <li>✅ Highlighted plagiarized content provided.</li>
    //     </ul>
    //   </div>

    //   {/* Right Section - Form */}
    //   <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-6 space-y-4">
    //     <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //       <input
    //         type="text"
    //         placeholder="Your name"
    //         className="border p-2 rounded text-sm w-full"
    //         required
    //       />
    //       <input
    //         type="email"
    //         placeholder="Your email address"
    //         className="border p-2 rounded text-sm w-full"
    //         required
    //       />
    //       <input
    //         type="text"
    //         placeholder="+91 Your phone number"
    //         className="border p-2 rounded text-sm w-full"
    //         required
    //       />
    //       <select className="border p-2 rounded text-sm w-full" required>
    //         <option disabled selected>
    //           Choose Language
    //         </option>
    //         <option>English</option>
    //         <option>Hindi</option>
    //       </select>
    //       <select className="border p-2 rounded text-sm w-full" required>
    //         <option disabled selected>
    //           Documents Type
    //         </option>
    //         <option>Thesis</option>
    //         <option>Research Paper</option>
    //       </select>
    //       <select className="border p-2 rounded text-sm w-full" required>
    //         <option disabled selected>
    //           Tool
    //         </option>
    //         <option>Turnitin</option>
    //         <option>iThenticate</option>
    //       </select>
    //       <select className="border p-2 rounded text-sm w-full" required>
    //         <option selected>Plagiarism Check</option>
    //       </select>
    //       <input
    //         type="file"
    //         className="border p-2 rounded text-sm w-full"
    //         required
    //       />
    //     </form>

    //     <div className="flex items-center gap-2 text-sm">
    //       <input type="checkbox" className="border" required />
    //       <label>I have read the Privacy Policy and agree to the terms.</label>
    //     </div>

    //     <button
    //       type="submit"
    //       className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded w-fit"
    //     >
    //       Submit
    //     </button>
    //   </div>
    // </div>

      <div className="min-h-screen lg:p-24 xl:p-32 bg-white flex flex-col md:flex-row p-4 md:p-16 gap-8">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-orange-500 font-semibold text-sm">
          GET YOUR PLAGIARISM REPORT IN JUST 30 TO 40 MINUTES!
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          24*7 Plagiarism Report
        </h1>
        <p className="text-gray-600">
          Onprice Infotech Pvt. Ltd provides authentic and original plagiarism reports for all
          types of documents, theses, papers, dissertations, etc.
        </p>
        <p className="text-gray-800 font-medium">
          The service is available 24*7 and you can submit documents anytime of the day.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>✅ 100% Complete confidentiality guaranteed.</li>
          <li>✅ Fastest delivery within 30-40 minutes.</li>
          <li>✅ No data is stored in the repository.</li>
          <li>✅ Guaranteed lowest price.</li>
          <li>✅ Highlighted plagiarized content provided.</li>
        </ul>
      </div>

      {/* Right Section - Form */}
      <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-6">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Full Name <span className="text-red-500">*</span></label>
            <input type="text" placeholder="Your name" className="border p-2 rounded" required />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Email Id <span className="text-red-500">*</span></label>
            <input type="email" placeholder="Your email address" className="border p-2 rounded" required />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Contact No. <span className="text-red-500">*</span></label>
            <input type="text" placeholder="+91 Your phone number" className="border p-2 rounded" required />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Document Language <span className="text-red-500">*</span></label>
            <select className="border p-2 rounded" required>
              <option disabled selected>Choose Language</option>
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Documents Type <span className="text-red-500">*</span></label>
            <select className="border p-2 rounded" required>
              <option disabled selected>Select</option>
              <option>Paper</option>
              <option>Thesis</option>
              <option>General Report</option>
              <option>PPT</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Choose Service. <span className="text-red-500">*</span></label>
            <select className="border p-2 rounded" required>
              <option selected>Plagiarism Check</option>
              <option selected>AI Report</option>
              <option selected>Plagiarism Report</option>
              <option selected>Plagiarism Removal</option>
              <option selected>AI Reduction</option>
              <option selected>Document Formating</option>
              <option selected>Proofreading</option>
              <option selected>Grammar Correction</option>
              <option selected>Presentation Making</option>
              <option selected>Citation Formating</option>

              <option selected></option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Tool <span className="text-red-500">*</span></label>
            <select className="border p-2 rounded" required>
              <option disabled selected>Select</option>
              <option>Plagiarism Detector</option>
              <option>Plagiarism X-Checker</option>
              <option>Drillbit Report</option>
              <option>Turnitin</option>
              <option>Wiper</option>
              <option>Grammarly</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Choose File <span className="text-red-500">*</span></label>
            <input type="file" className="border p-2 rounded" required />
          </div>
        </form>

        <div className="flex items-start gap-2 text-sm mt-4">
          <input type="checkbox" className="mt-1" required />
          <label>I have read the <span className="text-blue-600 underline">Privacy Policy</span> and agree to the terms.</label>
        </div>

        <button type="submit" className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded">
          ✓ Submit
        </button>
      </div>
    </div>
  )
}

export default Form