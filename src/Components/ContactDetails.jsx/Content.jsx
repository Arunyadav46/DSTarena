import React, { useState } from 'react'
import axios from '../Axios/Axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function Content() {
 
  const navigate = useNavigate()

  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = localStorage.getItem("userId");
    console.log(user)
     if (!user) {
     toast.error("Please login to submit the form");
     navigate("/login");
     return;
    }

    const formData = new FormData();
    formData.append("fname", fname);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("subject", subject);
    formData.append("message", message);

    axios.post("/API/contact_us_api.php", formData)
      .then((res) => {
        console.log("Response:", res.data);
         toast.success(res.data[0].msg);
       
        setFname("");
        setEmail("");
        setMobile("");
        setSubject("");
        setMessage("");
      })
      .catch((err) => {
        console.log("Error:", err);
        toast.error("Something went wrong!")
        // alert("Something went wrong!");
      });
  };

  return (
    <div className="xl:py-16 xl:px-48 bg-[#FFFFFF]">
     
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className='border-l-4 pl-10 border-l-[#D2A98E]'>
            
            <h3 className="text-3xl font-bold mb-4">

              To make requests for <br /> further information, <br />
              <span className="text-blue-500">contact us</span> via our social channels.
            </h3>
            <p className="text-lg text-gray-700">
              We just need a couple of hours! <br /> No more than 2 working days since receiving your issue ticket.
            </p>
          </div>
           <Toaster/>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <input
                  name="fname"
                  type="text"
                  placeholder="Name *"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  name="mobile"
                  type="text"
                  placeholder="Mobile *"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject *"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="message"
                  placeholder="Please describe what you need."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content