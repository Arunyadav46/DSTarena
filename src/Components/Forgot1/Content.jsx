import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from '../Axios/Axios';
import toast, { Toaster } from 'react-hot-toast';



function Content() {

    const [email, setEmail] = useState('');
    const [showOtp, setShowOtp] = useState(false);
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email_id', email);

    axios.post('/API/dashboard/password-reset.php', formData)
      .then((response) => {
        console.log(response.data)
        if (response.data[0].success === '1') {
          // alert('OTP sent successfully to your email!');
          toast.success("OTP sent successfully to your email!")
          setShowOtp(true)
        } else {
          // alert(response.data?.message || 'Something went wrong. Please try again.');
          toast.error("Something went wrong. Please try again.")
        }
      })
      .catch((error) => {
        console.error('API Error:', error);
        // setMessage('Error sending OTP. Please check your connection or email.');
      });
  };

 const handleOtpSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('otp', otp);

    axios.post('/API/dashboard/otp-verify.php', formData)
      .then((response) => {
        console.log(response)
        if (response.data[0].success === '1') {
          toast.success("OTP verified successfully!")
          // alert('OTP verified successfully!');

          // Aage password reset page pe redirect karna ho to yahan karo

            setTimeout(() => {
            navigate("/resetpassword");
          }, 1000);

        } else {
          // alert(response.data?.message || 'Invalid OTP. Please try again.');
          toast.error("Invalid OTP. Please try again.")
        }
      })
      .catch((error) => {
        console.error('API Error:', error);
        // setMessage('Failed to verify OTP. Please check your connection.');
      });
  };


  return (
       <div className="h-[60vh] flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 px-4">
        <Toaster/>
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Forgot your password?</h2>
        <p className="text-sm text-gray-600 mb-6">No worries, we'll send you reset instructions.</p>

        {!showOtp ? (
               <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter Your Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
        >
          Send
        </button>
      </form>
        ) : (
            <form onSubmit={handleOtpSubmit}>
        <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
          Enter OTP
        </label>
        <input
          type="text"
          id="otp"
          placeholder="Enter OTP"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
        >
          Verify OTP
        </button>
      </form>
        )}

        <p className="mt-4 text-sm text-gray-600">
          Go back to the{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>{' '}
          page.
        </p>
      </div>
    </div>
  )
}

export default Content