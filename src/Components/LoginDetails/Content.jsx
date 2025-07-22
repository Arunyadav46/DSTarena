import axios from '../Axios/Axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Content() {

 const navigate =  useNavigate();

      const [error, setError] = useState("");
      const [success, setSuccess] = useState("");
      const [showPassword, setShowPassword] = useState(false);


     const[email,setEmail]  =  useState("");
     const[password,setPassword]  =  useState("");

    const submitHandler = (e) => {
      e.preventDefault();
      setError("");
      setSuccess("");
      setEmail("")
      setPassword("")
    
      const formData = new URLSearchParams();
      formData.append("username", email);
      formData.append("password", password);
    
      console.log("Sending Request:", formData.toString());

      axios.post("/API/Login_Auth_api.php", formData,)
      .then((response) => {
        // console.log("API Response:", response.data);
        if (response.data[0].success === "1") {
          localStorage.setItem("userId", response.data[0].id); 
        //  localStorage.setItem("referral_code", response.data[0].Referral_code);
          setSuccess(response.data[0].msg);
          setTimeout(() => {
            navigate("/dashboard/home");
          }, 1000);
        } else {
          setError(response.data[0].msg);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        // setError("Something went wrong! Please try again.");
      });
    };
    
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-2xl h-auto border-2 bg-white shadow-lg rounded-lg p-6">
      {error && <p className="text-red-500 text-xl text-center mb-5  mb-2">{error}</p>}
      {success && <p className="text-green-500 text-xl text-center  mb-5">{success}</p>}
        <h2 className="text-2xl font-semibold  text-center">Welcome User!</h2>
        <h5 className="mb-6 text-center">Please log in</h5>

        <form className="space-y-4" onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email Address
            </label>
            <input value={email} onChange={(e)=>{
              return setEmail(e.target.value)
            }} className="w-full p-3 border  bg-[#F3F4F6] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1" type="email" id="email" placeholder="Enter email"  required />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium"> Password </label>
            <input value={password} onChange={(e)=>{
              return setPassword(e.target.value);
            }} type={showPassword ? "text" : "password"} id="password" placeholder="Enter password" className="w-full p-3 border bg-[#F3F4F6] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1"required />
          </div>

          <div className="flex items-center space-x-2 pb-6">
        <input type="checkbox" id="showPassword" className="cursor-pointer" onChange={() => setShowPassword(!showPassword)}/>
            <label htmlFor="showPassword" className="text-gray-600 cursor-pointer">
              Show Password
            </label>
          </div>
          <div className='flex justify-center mb-4'>
          <button type="submit" className="w-full text-center bg-blue-600 text-white p-3 rounded-md text-lg hover:bg-blue-700 transition"> SIGN IN </button>
          </div>

          <div className="text-center text-[18px] text-gray-600 mt-4">
            <p>
              
              <a href="#" className="text-blue-600">
              <Link to="/forgotPassword">Forgot Password?</Link>
                 
              </a>
            </p>
            <p>
              Don't have an account?{" "}
              <Link to='/signup'>
                Sign up
                </Link>
             
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Content




















// import React, { useState } from "react";
// import axios from "../Axios/Axios";

// function Content() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
  
//     const formData = new URLSearchParams();
//     formData.append("username", email);
//     formData.append("password", password);
  
//     console.log("Sending Request:", formData.toString());
  
//     try {
//       const response = await axios.post(
//         "/dashboard/API/Login_Auth_api.php",
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//           },
//         }
//       );
  
//       console.log("API Response:", response.data);
  
//       if (response.data[0]?.success === "1") {
//         setSuccess(response.data[0].msg || "Login Successful! Redirecting...");
//         // setTimeout(() => {
//         //   window.location.href = "/"; // Redirect to dashboard
//         // }, 2000);
//       } else {
//         setError(response.data[0]?.msg || "Login Failed! Invalid credentials.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError("Something went wrong! Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white p-4">
//       <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-2xl h-auto border-2 bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-2xl font-semibold text-center">Welcome User!</h2>
//         <h5 className="mb-6 text-center">Please log in</h5>

//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block text-gray-700 font-medium">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter email"
//               className="w-full p-3 border bg-[#F3F4F6] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-gray-700 font-medium">
//               Password
//             </label>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter password"
//               className="w-full p-3 border bg-[#F3F4F6] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1"
//               required
//             />
//           </div>

//           <div className="flex items-center space-x-2 pb-6">
//             <input
//               type="checkbox"
//               id="showPassword"
//               className="cursor-pointer"
//               onChange={() => setShowPassword(!showPassword)}
//             />
//             <label htmlFor="showPassword" className="text-gray-600 cursor-pointer">
//               Show Password
//             </label>
//           </div>

//           {error && <p className="text-red-600 text-center">{error}</p>}
//           {success && <p className="text-green-600 text-center">{success}</p>}

//           <div className="flex justify-center mb-4">
//             <button
//               type="submit"
//               className="w-full text-center bg-blue-600 text-white p-3 rounded-md text-lg hover:bg-blue-700 transition"
//             >
//               SIGN IN
//             </button>
//           </div>

//           <div className="text-center text-sm text-gray-600 mt-4">
//             <p>
//               Forgot{" "}
//               <a href="#" className="text-blue-600">
//                 Username / Password?
//               </a>
//             </p>
//             <p>
//               Don't have an account?{" "}
//               <a href="#" className="text-blue-600">
//                 Sign up
//               </a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Content;


