import React, { useState } from 'react'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function Content() {

 const navigate = useNavigate()
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [TraningType, setTraningType] = useState("");
  const [Traningmode, setTraningmode] = useState("");
  const [CourceName, setCourceName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

     // 3️⃣ Check if user is logged in (assuming login sets a token or user object)
    const user = localStorage.getItem("userId"); // you can also check for "token" etc.
    console.log(user)
    if (!user) {
      toast.error("Please login to submit the form");
      navigate("/login");
      return;
    }

    const formData = new FormData();
    formData.append("fname", fname);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("TraningType", TraningType);
    formData.append("Traningmode", Traningmode);
    formData.append("CourceName", CourceName);

    axios.post("https://onpriceinfo.com/Admin/API/training_request_api.php", formData)
      .then((res) => {
        console.log("Response:", res.data);
        toast.success(res.data[0].msg)
        // alert("Registered successfully!");
        // Reset form fields
        setFname("");
        setEmail("");
        setContact("");
        setTraningType("");
        setTraningmode("");
        setCourceName("");
      })
      .catch((err) => {
        console.error("Error:", err);
        toast.error("Something went wrong.")
        alert("Something went wrong.");
      });
  };
 

  return (
    <div className="w-[80%] mx-auto px-4 md:px-10 py-10 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Toaster/>
        {/* Full Name */}
        <div>
          <label className="font-semibold text-gray-700">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="Your name"
            className="w-full mt-2 p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        {/* Email ID */}
        <div>
          <label className="font-semibold text-gray-700">
            Email Id <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full mt-2 p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        {/* Contact No */}
        <div>
          <label className="font-semibold text-gray-700">
            Contact No. <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="+91 Your phone number"
            className="w-full mt-2 p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        {/* Training Mode */}
        <div>
          <label className="font-semibold text-gray-700">
            Training/Internship Mode <span className="text-red-600">*</span>
          </label>
          <select
            value={Traningmode}
            onChange={(e) => setTraningmode(e.target.value)}
            className="w-full mt-2 p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          >
            <option value="">-Select-</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>

        {/* Training Type */}
        <div>
          <label className="font-semibold text-gray-700">
            Training/Internship Type <span className="text-red-600">*</span>
          </label>
          <select
            value={TraningType}
            onChange={(e) => setTraningType(e.target.value)}
            className="w-full mt-2 p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          >
            <option value="">-Select-</option>
            <option value="Training">Training</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* Course Name */}
        <div>
          <label className="font-semibold text-gray-700">
            Course Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={CourceName}
            onChange={(e) => setCourceName(e.target.value)}
            placeholder="Your course name"
            className="w-full mt-2 p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            className="bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition-all duration-300"
          >
            ✔ Register Here
          </button>
        </div>
      </form>
    </div>

  )
}

export default Content