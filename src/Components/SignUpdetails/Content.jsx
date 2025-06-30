

// import React from 'react'

// function Content() {
//   return (
//     <div className="min-h-screen flex items-center pt-20 justify-center bg-[#FFFFFF] p-4">
//       <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-white shadow-lg border-2 rounded-lg p-6">
//         <h2 className="text-2xl font-semibold mb-6 text-center pt-2 pb-2">Register</h2>

//         <form className="space-y-4">
//           {/* First Row */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Register As *</label>
//               <select className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
//                 <option>Select</option>
//                 <option>Student</option>
//                 <option>Professional</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Full Name *</label>
//               <input
//                 type="text"
//                 className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//             </div>
//           </div>

//           {/* Second Row */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Email *</label>
//               <input
//                 type="email"
//                 className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Password *</label>
//               <input
//                 type="password"
//                 className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//             </div>
//           </div>

//           {/* Third Row */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">College Name *</label>
//               <input
//                 type="text"
//                 className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Enter Branch *</label>
//               <input
//                 type="text"
//                 className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//             </div>
//           </div>

//           {/* Fourth Row */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Contact No *</label>
//               <input
//                 type="tel"
//                 className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">DOB *</label>
//               <input
//                 type="date"
//                 className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//             </div>
//           </div>

//           {/* Address */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Address</label>
//             <textarea
//               className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               rows="3"
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg transition hover:bg-blue-600"
//             >
//               Register Here
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Content


import { useState } from "react";
import axios from "../Axios/Axios";
// import { Toaster } from "react-hot-toast";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate()
  
  const [userData, setUserData] = useState({
    email: "",
    fname: "",
    lname: "",
    dob: "",
    gender: "",
    clg: "",
    branch: "",
    course: "",
    mobile_number: "",
    address: "",
    pass: "",
    joinReferralCode: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };


    const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userData.fname.trim()) newErrors.fname = "First name is required";
    if (!userData.lname.trim()) newErrors.lname = "Last name is required";
    if (!userData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(userData.email))
      newErrors.email = "Invalid email format";

    if (!userData.dob) newErrors.dob = "Date of birth is required";
    if (!userData.gender) newErrors.gender = "Gender is required";
    if (!userData.clg.trim()) newErrors.clg = "College name is required";
    if (!userData.branch.trim()) newErrors.branch = "Branch is required";
    if (!userData.course.trim()) newErrors.course = "Course is required";

    if (!userData.mobile_number.trim())
      newErrors.mobile_number = "Mobile number is required";
    else if (!/^\d{10}$/.test(userData.mobile_number))
      newErrors.mobile_number = "Mobile number must be 10 digits";

    if (!userData.address.trim()) newErrors.address = "Address is required";
    if (!userData.pass.trim()) newErrors.pass = "Password is required";
    else if (userData.pass.length < 6)
      newErrors.pass = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  if (!validate()) return;

    setUserData({
      email: "",
      fname: "",
      lname: "",
      dob: "",
      gender: "",
      clg: "",
      branch: "",
      course: "",
      mobile_number: "",
      address: "",
      pass: "",
      joinReferralCode: ""
    })

    const formData = new FormData();
    formData.append("email", userData.email);
    formData.append("fname", userData.fname);
    formData.append("lname", userData.lname);
    formData.append("dob", userData.dob);
    formData.append("gender", userData.gender);
    formData.append("clg", userData.clg);
    formData.append("branch", userData.branch);
    formData.append("course", userData.course);
    formData.append("mobile_number", userData.mobile_number);
    formData.append("address", userData.address);
    formData.append("pass", userData.pass);
    formData.append("joinreferralcode", userData.joinReferralCode);

    axios.post("/API/User_register_api.php", formData)
      .then((response) => {
        console.log("API Response:", response.data);
        const data = response.data;
        console.log(data)
        if (data.response.success === "1") {
           toast.success("Registration successful!");
          //  navigate('/')
           
          // alert("Registration successful!")
         // setResponseMessage("Registration successful!");
        } else if (data.response.msg === "User Already Exist") {
          toast.error("User already exists!")
          // alert("User already exists!")
          //setResponseMessage("User already exists!");
        } else {
          alert("Registration failed. Please try again.")
          toast.error("Registration failed. Please try again")
         // setResponseMessage("Registration failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  return (
    // <div className="min-h-screen flex items-center pt-20 justify-center bg-[#FFFFFF] p-4">
    //   <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-white shadow-lg border-2 rounded-lg p-6">
    //     <h2 className="text-2xl font-semibold mb-6 text-center pt-2 pb-2">Register</h2>

    //     <form className="space-y-4" onSubmit={handleSubmit}>
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
    //         <div>
    //           <label className="block text-gray-700 font-medium mb-1">First Name *</label>
    //           <input type="text" name="fname" value={userData.fname} onChange={handleChange} className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
    //         </div>
    //         <div>
    //           <label className="block text-gray-700 font-medium mb-1">Last Name *</label>
    //           <input type="text" name="lname" value={userData.lname} onChange={handleChange} className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    //         </div>
    //       </div>

    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //       <div>
    //           <label className="block text-gray-700 font-medium mb-1">Email *</label>
    //           <input type="email" name="email" value={userData.email} onChange={handleChange} className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
    //         </div>
    //         <div>
    //           <label className="block text-gray-700 font-medium mb-1">DOB *</label>
    //           <input type="date" name="dob" value={userData.dob} onChange={handleChange} className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
    //         </div>
    //         <div>
    //           <label className="block text-gray-700 font-medium mb-1">Password *</label>
    //           <input type="password" name="pass" value={userData.pass} onChange={handleChange} className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
    //         </div>
    //       </div>

    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //         <div>
    //           <label className="block text-gray-700 font-medium mb-1">Gender *</label>
    //           <select name="gender" value={userData.gender} onChange={handleChange} className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
    //             <option>Select</option>
    //             <option>Male</option>
    //             <option>Female</option>
    //             <option>Other</option>
    //           </select>
    //         </div>
    //         <div>
    //           <label className="block text-gray-700 font-medium mb-1">College Name *</label>
    //           <input type="text" name="clg" value={userData.clg} onChange={handleChange} className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
    //         </div>
    //       </div>

    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //         <div>
    //           <label className="block text-gray-700 font-medium mb-1">Branch *</label>
    //           <input type="text" name="branch" value={userData.branch} onChange={handleChange} className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    //         </div>
    //         <div>
    //           <label className="block text-gray-700 font-medium mb-1">Course *</label>
    //           <input type="text" name="course" value={userData.course} onChange={handleChange} className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    //         </div>
    //       </div>

    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //         <div>
    //           <label className="block text-gray-700 font-medium mb-1">Contact No *</label>
    //           <input type="tel" name="mobile_number" value={userData.number} onChange={handleChange} className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    //         </div>
    //         <div>
    //           <label className="block text-gray-700 font-medium mb-1">Referral Code</label>
    //           <input type="text" name="joinReferralCode" value={userData.joinReferralCode} onChange={handleChange} className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    //         </div>
    //       </div>

    //       <div>
    //         <label className="block text-gray-700 font-medium mb-1">Address</label>
    //         <textarea name="address" value={userData.address} onChange={handleChange} className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" rows="3" />
    //       </div>

    //       <div className="flex justify-center">
    //         <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg transition hover:bg-blue-600">Register Here</button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-gray-100 p-4 sm:p-6">
//   <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl bg-white shadow-xl rounded-xl p-6 sm:p-8 border border-gray-200 transition-transform hover:scale-[1.01]">
//     <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Register</h2>

//     <form className="space-y-6" onSubmit={handleSubmit}>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">First Name *</label>
//           <input
//             type="text"
//             name="fname"
//             value={userData.fname}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400"
//             placeholder="Enter first name"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Last Name *</label>
//           <input
//             type="text"
//             name="lname"
//             value={userData.lname}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400"
//             placeholder="Enter last name"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Email *</label>
//           <input
//             type="email"
//             name="email"
//             value={userData.email}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400"
//             placeholder="Enter email"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">DOB *</label>
//           <input
//             type="date"
//             name="dob"
//             value={userData.dob}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             required
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Password *</label>
//           <input
//             type="password"
//             name="pass"
//             value={userData.pass}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400"
//             placeholder="Create password"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Gender *</label>
//           <select
//             name="gender"
//             value={userData.gender}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//           >
//             <option value="">Select</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">College Name *</label>
//           <input
//             type="text"
//             name="clg"
//             value={userData.clg}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400"
//             placeholder="Enter college name"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Branch *</label>
//           <input
//             type="text"
//             name="branch"
//             value={userData.branch}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400"
//             placeholder="Enter branch"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Course *</label>
//           <input
//             type="text"
//             name="course"
//             value={userData.course}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400"
//             placeholder="Enter course"
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Contact No *</label>
//           <input
//             type="tel"
//             name="mobile_number"
//             value={userData.mobile_number}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400"
//             placeholder="Enter contact number"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Referral Code</label>
//           <input
//             type="text"
//             name="joinReferralCode"
//             value={userData.joinReferralCode}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400"
//             placeholder="Enter referral code"
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Address</label>
//           <textarea
//             name="address"
//             value={userData.address}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400"
//             rows="3"
//             placeholder="Enter address"
//           />
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105"
//         >
//           Register Here
//         </button>
//       </div>
//     </form>
//   </div>
// </div>
 <div className="min-h-screen flex items-center justify-center p-2" style={{ background: 'linear-gradient(to right, #e6f3ff, #f3e8ff)' }}>
    <Toaster/>
  <div className="w-full max-w-[80%] bg-white p-6 rounded-xl border-2 border-gray-200 animate-fade-in" style={{ boxShadow: '0 10px 20px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease', transform: 'scale(1)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      {/* <Toaster/> */}
     <h2 className="text-3xl font-bold mb-6 text-center text-gray-800" style={{ color: '#1a202c' }}>Register</h2>

    <form className="space-y-6" onSubmit={handleSubmit}>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div>
           <label className="block text-gray-700 font-semibold mb-2" style={{ color: '#4a5568' }}>
             First Name <span style={{ color: '#e53e3e' }}>*</span>
          </label>
           <input
            type="text"
            name="fname"
             value={userData.fname}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none invalid:animate-shake"
            style={{
               border: '1px solid #d1d5db',
               transition: 'all 0.2s ease',
               backgroundColor: '#f7fafc'
             }}
             onFocus={(e) => e.target.style.border = '2px solid #6b46c1'}
             onBlur={(e) => e.target.style.border = '1px solid #d1d5db'}
             placeholder="Enter First Name"
             required
           />
           {errors.fname && <p className="text-red-500 text-sm">{errors.fname}</p>}
         </div>
         <div>
           <label className="block text-gray-700 font-semibold mb-2" style={{ color: '#4a5568' }}>Last Name</label>
           <input
             type="text"
             name="lname"
             value={userData.lname}
             onChange={handleChange}
             className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none"
             style={{
               border: '1px solid #d1d5db',
               transition: 'all 0.2s ease',
               backgroundColor: '#f7fafc'
             }}
             onFocus={(e) => e.target.style.border = '2px solid #6b46c1'}
             onBlur={(e) => e.target.style.border = '1px solid #d1d5db'}
             placeholder="Enter Last Name"
             required
           />
           {errors.lname && <p className="text-red-500 text-sm">{errors.lname}</p>}
         </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div>
           <label className="block text-gray-700 font-semibold mb-2" style={{ color: '#4a5568' }}>
            Email <span style={{ color: '#e53e3e' }}>*</span>
          </label>
          <input
           type="email"
            name="email"
             value={userData.email}
             onChange={handleChange}
             className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none invalid:animate-shake"
             style={{
               border: '1px solid #d1d5db',
               transition: 'all 0.2s ease',
               backgroundColor: '#f7fafc'
             }}
            onFocus={(e) => e.target.style.border = '2px solid #6b46c1'}
            onBlur={(e) => e.target.style.border = '1px solid #d1d5db'}
             placeholder="Enter Email"
             required
          />
           {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
         </div>
         <div>
           <label className="block text-gray-700 font-semibold mb-2" style={{ color: '#4a5568' }}>
            DOB <span style={{ color: '#e53e3e' }}>*</span>
          </label>
           <input
             type="date"
             name="dob"
             value={userData.dob}
             onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none invalid:animate-shake"
            style={{
              border: '1px solid #d1d5db',
              transition: 'all 0.2s ease',
              backgroundColor: '#f7fafc'
            }}
            onFocus={(e) => e.target.style.border = '2px solid #6b46c1'}
            onBlur={(e) => e.target.style.border = '1px solid #d1d5db'}
            required
          />
        </div>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div>
           <label className="block text-gray-700 font-semibold mb-2" style={{ color: '#4a5568' }}>
             Password <span style={{ color: '#e53e3e' }}>*</span>
           </label>
          <input
            type="password"
            name="pass"
            value={userData.pass}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none invalid:animate-shake"
            style={{
              border: '1px solid #d1d5db',
              transition: 'all 0.2s ease',
              backgroundColor: '#f7fafc'
            }}
            onFocus={(e) => e.target.style.border = '2px solid #6b46c1'}
            onBlur={(e) => e.target.style.border = '1px solid #d1d5db'}
            placeholder="Create password"
            required
          />
          {errors.pass && <p className="text-red-500 text-sm">{errors.pass}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2" style={{ color: '#4a5568' }}>
            Gender <span style={{ color: '#e53e3e' }}>*</span>
          </label>
          <select
            name="gender"
            value={userData.gender}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none invalid:animate-shake"
            style={{
              border: '1px solid #d1d5db',
              transition: 'all 0.2s ease',
              backgroundColor: '#f7fafc'
            }}
            onFocus={(e) => e.target.style.border = '2px solid #6b46c1'}
            onBlur={(e) => e.target.style.border = '1px solid #d1d5db'}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
           {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2" style={{ color: '#4a5568' }}>
            College Name <span style={{ color: '#e53e3e' }}>*</span>
          </label>
          <input
            type="text"
            name="clg"
            value={userData.clg}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none invalid:animate-shake"
            style={{
              border: '1px solid #d1d5db',
              transition: 'all 0.2s ease',
              backgroundColor: '#f7fafc'
            }}
            onFocus={(e) => e.target.style.border = '2px solid #6b46c1'}
            onBlur={(e) => e.target.style.border = '1px solid #d1d5db'}
            placeholder="Enter college name"
            required
          />
          {errors.clg && <p className="text-red-500 text-sm">{errors.clg}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2" style={{ color: '#4a5568' }}>Branch</label>
          <input
            type="text"
            name="branch"
            value={userData.branch}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none"
            style={{
              border: '1px solid #d1d5db',
              transition: 'all 0.2s ease',
              backgroundColor: '#f7fafc'
            }}
            onFocus={(e) => e.target.style.border = '2px solid #6b46c1'}
            onBlur={(e) => e.target.style.border = '1px solid #d1d5db'}
            placeholder="Enter branch"
            required
          />
          {errors.branch && <p className="text-red-500 text-sm">{errors.branch}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2" style={{ color: '#4a5568' }}>Course</label>
          <input
            type="text"
            name="course"
            value={userData.course}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none"
            style={{
              border: '1px solid #d1d5db',
              transition: 'all 0.2s ease',
              backgroundColor: '#f7fafc'
            }}
            onFocus={(e) => e.target.style.border = '2px solid #6b46c1'}
            onBlur={(e) => e.target.style.border = '1px solid #d1d5db'}
            placeholder="Enter course"
            required
          />
          {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2" style={{ color: '#4a5568' }}>Contact No</label>
          <input
            type="tel"
            name="mobile_number"
            value={userData.mobile_number}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none"
            style={{
              border: '1px solid #d1d5db',
              transition: 'all 0.2s ease',
              backgroundColor: '#f7fafc'
            }}
            onFocus={(e) => e.target.style.border = '2px solid #6b46c1'}
            onBlur={(e) => e.target.style.border = '1px solid #d1d5db'}
            placeholder="Enter contact number"
            required
          />
           {errors.mobile_number && (
          <p className="text-red-500 text-sm">{errors.mobile_number}</p>
        )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2" style={{ color: '#4a5568' }}>Referral Code</label>
          <input
            type="text"
            name="joinReferralCode"
            value={userData.joinReferralCode}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none"
            style={{
              border: '1px solid #d1d5db',
              transition: 'all 0.2s ease',
              backgroundColor: '#f7fafc'
            }}
            onFocus={(e) => e.target.style.border = '2px solid #6b46c1'}
            onBlur={(e) => e.target.style.border = '1px solid #d1d5db'}
            placeholder="Enter referral code"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2" style={{ color: '#4a5568' }}>Address</label>
          <textarea
            name="address"
            value={userData.address}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none"
            style={{
              border: '1px solid #d1d5db',
              transition: 'all 0.2s ease',
              backgroundColor: '#f7fafc'
            }}
            onFocus={(e) => e.target.style.border = '2px solid #6b46c1'}
            onBlur={(e) => e.target.style.border = '1px solid #d1d5db'}
            rows="3"
            placeholder="Enter address"
            required
          />
             {errors.address && (
          <p className="text-red-500 text-sm">{errors.address}</p>
        )}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
           className="text-white px-6 py-3 rounded-lg text-lg font-semibold"
          style={{
            background: 'linear-gradient(to right, #4c51bf, #6b46c1)',
            transition: 'all 0.3s ease',
            transform: 'scale(1)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Register Here
        </button>
       </div>
    </form>
  </div>
</div>  
   


  );
};

export default Register;








// import { useState } from "react";
// import axios from "../Axios/Axios";

// const Register = () => {
//   const [userData, setUserData] = useState({
//     registerAs: "",
//     fullName: "",
//     email: "",
//     password: "",
//     collegeName: "",
//     branch: "",
//     contactNo: "",
//     dob: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({
//       ...userData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("register_as", userData.registerAs);
//     formData.append("name", userData.fullName);
//     formData.append("email", userData.email);
//     formData.append("password", userData.password);
//     formData.append("college_name", userData.collegeName);
//     formData.append("branch", userData.branch);
//     formData.append("contact_no", userData.contactNo);
//     formData.append("dob", userData.dob);
//     formData.append("address", userData.address);

//     axios.post("/dashboard/API/User_register_api.php", formData)
//       .then((response) => {
//         console.log("API Response:", response.data);
//         // if (response.data[0]?.success === "1") {
//         //   alert(response.data[0]?.msg || "Registration Successful!");
//         // } else {
//         //   alert(response.data[0]?.msg || "Registration Failed!");
//         // }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         // alert("Something went wrong!");
//       });
//   };

//   return (
//     <div className="min-h-screen flex items-center pt-20 justify-center bg-[#FFFFFF] p-4">
//       <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-white shadow-lg border-2 rounded-lg p-6">
//         <h2 className="text-2xl font-semibold mb-6 text-center pt-2 pb-2">Register</h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Register As *</label>
//               <select
//                 name="registerAs"
//                 value={userData.registerAs}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               >
//                 <option>Select</option>
//                 <option>Student</option>
//                 <option>Professional</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Full Name *</label>
//               <input
//                 type="text"
//                 name="fullName"
//                 value={userData.fullName}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Email *</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={userData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Password *</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={userData.password}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">College Name *</label>
//               <input
//                 type="text"
//                 name="collegeName"
//                 value={userData.collegeName}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Branch *</label>
//               <input
//                 type="text"
//                 name="branch"
//                 value={userData.branch}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Contact No *</label>
//               <input
//                 type="tel"
//                 name="contactNo"
//                 value={userData.contactNo}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">DOB *</label>
//               <input
//                 type="date"
//                 name="dob"
//                 value={userData.dob}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Address</label>
//             <textarea
//               name="address"
//               value={userData.address}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               rows="3"
//             />
//           </div>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg transition hover:bg-blue-600"
//             >
//               Register Here
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;