import axios from '../Axios/Axios';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate, useParams } from 'react-router-dom'


function Content() {
  const{name} = useParams();
  // console.log(name)

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    mobile: '',
    query: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
   
    e.preventDefault();
    const user = localStorage.getItem("userId");
if (!user) {
  toast.error("Please login to submit the form");
  navigate("/login");
  return;
}

  
  const form = new FormData();
  form.append("fname", formData.fname);
  // console.log(formData.fname)
  form.append("email", formData.email);
  // console.log(formData.email)
  form.append("mobile", formData.mobile);
  // console.log(formData.mobile)
  form.append("query", formData.query);
  // console.log(formData.query)

  // Static values or fetched from elsewhere
  form.append("pro_title", name); // From useParams or props
  // console.log(name)
  form.append("id", '123');       // You can replace with real ID
  // form.append("data", new Date().toISOString().split('T')[0]);

  axios.post("/API/project-request.php", form)
    .then((response) => {
      // console.log("Response:", response.data);
      if(response.data[0].success==='1')
      toast.success(response.data[0].msg)
      // alert("Request sent successfully");
      setFormData({
          fname: '',
          email: '',
          mobile: '',
          query: ''
        });
    })
    .catch((error) => {
      console.error("Error:", error);
      toast.error("Failed to send request")
      // alert("Failed to send request");
    });
};

  return (
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 flex flex-col items-center justify-start px-4 py-10">
       <Toaster/>
      <div className="w-full max-w-7xl bg-white shadow-xl rounded-xl p-6 md:p-10 border border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center leading-snug">
          <span className="text-red-600">Project Title: </span>
          <span className="text-gray-700 font-medium">{name}</span>
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <p className="text-xs text-red-500 mt-1">REQUIRED</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <p className="text-xs text-red-500 mt-1">REQUIRED</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter mobile number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <p className="text-xs text-red-500 mt-1">REQUIRED</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Message/Query</label>
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="1"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              required
            ></textarea>
            <p className="text-xs text-red-500 mt-1">REQUIRED</p>
          </div>

          <div className="md:col-span-2 flex justify-center mt-2">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-medium px-8 py-3 rounded-lg shadow-md transition duration-300"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Content