import React, { useState } from 'react'


function Content() {
     const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      alert('Password reset successful!');
      // send API request here
    } else {
      alert('Passwords do not match.');
    }
  };
  return (
     <div className=" h-[80vh] flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 px-4 py-8">
  <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 md:p-10 transition-all duration-300 ease-in-out">
    
    {/* Image */}
    {/* <div className="flex justify-center mb-6">
      <img
        src="https://www.svgrepo.com/show/473749/mailbox-open.svg"
        alt="mailbox"
        className="w-28 h-28 drop-shadow-md"
      />
    </div> */}

    {/* Title */}
    <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-6">
      Reset Password
    </h2>

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          New Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          placeholder="Enter new password"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Re-enter Password
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          placeholder="Confirm your password"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold rounded-xl transition duration-300 shadow-md hover:shadow-lg"
      >
        Update
      </button>
    </form>
  </div>
</div>

  )
}

export default Content