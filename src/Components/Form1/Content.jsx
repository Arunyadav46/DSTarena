import React from 'react'

function Content() {
  return (
   <div className="w-[80%] mx-auto px-4 md:px-10 py-10 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Full Name */}
    <div>
      <label className="font-semibold text-gray-700">Full Name <span className="text-red-600">*</span></label>
      <input
        type="text"
        placeholder="Your name"
        className="w-full mt-2 p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>

    {/* Email ID */}
    <div>
      <label className="font-semibold text-gray-700">Email Id <span className="text-red-600">*</span></label>
      <input
        type="email"
        placeholder="Your email address"
        className="w-full mt-2 p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>

    {/* Contact No */}
    <div>
      <label className="font-semibold text-gray-700">Contact No. <span className="text-red-600">*</span></label>
      <input
        type="text"
        placeholder="+91 Your phone number"
        className="w-full mt-2 p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>

    {/* Courses */}
    {/* <div>
      <label className="font-semibold text-gray-700">Courses <span className="text-red-600">*</span></label>
      <select className="w-full mt-2 p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
        <option>-Select-</option>
        <option>Python</option>
        <option>NodeJS</option>
        <option>ReactJS</option>
      </select>
    </div> */}

    {/* Training Mode */}
    <div>
      <label className="font-semibold text-gray-700">Training/Internship Mode <span className="text-red-600">*</span></label>
      <select className="w-full mt-2 p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
        <option>-Select-</option>
        <option>Online</option>
        <option>Offline</option>
      </select>
    </div>

    {/* Training Type */}
    <div>
      <label className="font-semibold text-gray-700">Training/Internship Type <span className="text-red-600">*</span></label>
      <select className="w-full mt-2 p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
        <option>-Select-</option>
        <option>Training</option>
        <option>Internship</option>
      </select>
    </div>

    {/* Register Button */}
    <div className="col-span-1 md:col-span-2 flex justify-center mt-6">
      <button className="bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition-all duration-300">
        ✔ Register Here
      </button>
    </div>
  </form>
</div>

  )
}

export default Content