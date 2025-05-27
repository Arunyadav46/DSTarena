// import React, { useState } from 'react'
// import Sidebar from '../Dashboard1/Sidebar'


// function Content() {
//   const [activeTab, setActiveTab] = useState('Details');
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className='w-full min-h-screen flex xl:px-40'>
//        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
//        <div className=" w-[70%] mx-auto mt-10 p-8 bg-white shadow-md overflow-y-auto rounded-lg">
//        <button onClick={() => setSidebarOpen(true)} className='md:hidden text-2xl'>
//             <i className='px-3 py-3 bg-blue-200 rounded-md ml-[-10px] mr-5 ri-menu-fill'></i>
//           </button>
//       <div className="flex items-center mb-6">
//         <img src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fHww" alt="Profile" className="w-24 h-24 rounded-full mr-4" />
//         <div>
//           <h1 className="text-3xl font-semibold">X_AE_A_15</h1>
//           <p className="text-gray-600">elementary221b@gmail.com</p>
//         </div>

//       </div>

//       {/* Tabs */}
//       <div className="flex border-b mb-6">
//         <button
//           onClick={() => setActiveTab('Details')}
//           className={`py-2 px-4 ${activeTab === 'Details' ? 'text-white bg-blue-600' : 'text-gray-600'}`}>Details</button>
//         <button
//           onClick={() => setActiveTab('Security')}
//           className={`py-2 px-4 ${activeTab === 'Security' ? 'text-white bg-blue-600' : 'text-gray-600'}`}>Security</button>
//       </div>

//       {/* Personal Details */}
//       {activeTab === 'Details' && (
//         <div>
//           <div className="bg-gray-500 text-white py-3 px-5 mb-5 rounded-lg">Personal Details</div>
//           {['First Name', 'Last Name', 'Mobile Number', 'Address', 'City', 'Country'].map((field, index) => (
//             <div key={index} className="mb-4">
//               <label className="block font-semibold mb-2">{field}</label>
//               <input
//                 type="text"
//                 placeholder={`Enter ${field.toLowerCase()}`}
//                 className="w-full p-3 border rounded-lg"
//               />
//             </div>
//           ))}
//           <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg">Save Details</button>
//         </div>
//       )}

//       {/* Security Section Placeholder */}
//       {activeTab === 'Security' && (
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
//           <p>Manage your security options here.</p>
//         </div>
//       )}
//     </div>
//       </div>
//   )
// }

// export default Content



// import React, { useState } from 'react';
// import Sidebar from '../Dashboard1/Sidebar';

// function Content() {
//   const [activeTab, setActiveTab] = useState('Details');
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className='w-full min-h-screen bg-[#F8F8F8] flex xl:px-40'>
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
//       <div className="w-full max-w-4xl mx-auto mt-10 p-8 bg-white shadow-md overflow-y-auto rounded-lg">
//         {/* Mobile Menu Button */}
//         <button onClick={() => setSidebarOpen(true)} className='md:hidden text-2xl mb-4'>
//           <i className='px-3 py-3 bg-blue-200 rounded-md ri-menu-fill'></i>
//         </button>

//         {/* Profile Section */}
//         <div className="flex flex-col md:flex-row items-center mb-6 gap-4">
//           <img src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fHww" alt="Profile" className="w-24 h-24 rounded-full" />
//           <div>
//             <h1 className="text-3xl font-semibold">X_AE_A_15</h1>
//             <p className="text-gray-600">elementary221b@gmail.com</p>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="flex border-b mb-6">
//           <button
//             onClick={() => setActiveTab('Details')}
//             className={`py-2 px-4 ${activeTab === 'Details' ? 'text-white bg-blue-600' : 'text-gray-600'}`}>Details</button>
//           <button
//             onClick={() => setActiveTab('Security')}
//             className={`py-2 px-4 ${activeTab === 'Security' ? 'text-white bg-blue-600' : 'text-gray-600'}`}>Security</button>
//         </div>

//         {/* Personal Details Section */}
//         {activeTab === 'Details' && (
//           <div>
//             <div className="bg-gray-500 text-white py-3 px-5 mb-5 rounded-lg">Personal Details</div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {['First Name', 'Last Name', 'Mobile Number', 'Address', 'City', 'Country'].map((field, index) => (
//                 <div key={index}>
//                   <label className="block font-semibold mb-2">{field}</label>
//                   <input
//                     type="text"
//                     placeholder={`Enter ${field.toLowerCase()}`}
//                     className="w-full p-3 border rounded-lg"
//                   />
//                 </div>
//               ))}
//             </div>
//             <button className="mt-6 w-full md:w-auto bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg">Save Details</button>
//           </div>
//         )}

//         {/* Security Section Placeholder */}
//         {activeTab === 'Security' && (
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
//             <p>Manage your security options here.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Content;


  


import Sidebar from '../Dashboard1/Sidebar'
import React, { useEffect, useState } from 'react';
import axios from '../Axios/Axios';

function Content() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const userId = localStorage.getItem('userId');

  // Fetch user data using API
  useEffect(() => {
    if (!userId) {
      console.error('User ID not found in LocalStorage');
      return;
    }
    
    axios.get(`/API/dashboard/profile_update_api.php?id=${userId}`)
      .then((response) => {
        // console.log(response)
        setFormData(response.data[0]); // Assuming response is an array with data[0]
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [userId]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
   
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  
    const data = new FormData();
    // formData.append("email", formData.email || '');
    // formData.append("fname", formData.fname || '');
    // formData.append("lname", formData.lname || '');
    // formData.append("dob", formData.dob || '');
    // formData.append("gen", formData.gender || '');
    // formData.append("clg", formData.clg || '');
    // formData.append("branch", formData.branch || '');
    // formData.append("Course", formData.course || '');
    // formData.append("number", formData.number || '');
    // formData.append("adrs", formData.adrs || '');
    // formData.append("pass", formData.pass || '');
    // formData.append("bankholder", formData.bankholder || '');
    // formData.append("ifsc", formData.ifsc || '');
    // formData.append("accountNumber", formData.accountNumber || '');
    // formData.append("branchName", formData.branchName || '');
    // formData.append("user_id", localStorage.getItem('user_id'));
    // const data = new FormData();

data.append("email", formData?.email || '');
data.append("fname", formData?.fname || '');
data.append("lname", formData?.lname || '');
data.append("dob", formData?.dob || '');
data.append("gen", formData?.gender || '');
data.append("clg", formData?.clg || '');
data.append("branch", formData?.branch || '');
data.append("Course", formData?.course || '');
data.append("number", formData?.number || '');
data.append("adrs", formData?.adrs || '');
data.append("pass", formData?.pass || '');
data.append("bankholder", formData?.bankholder || '');
data.append("ifsc", formData?.ifsc || '');
data.append("accountNumber", formData?.accountNumber || '');
data.append("branchName", formData?.branchName || '');
data.append("user_id", userId);

    // console.log("Form Data:", Object.fromEntries(formData));

    // console.log("Form Data:", Object.fromEntries(data.entries()));

  
    axios.post("/API/dashboard/profile_update_api.php", data,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        // console.log("API Response:", response.data);
        // const data = response.data;
  
        if (response.data[0].success === "1") {
          alert("Profile updated successfully!");
        } else {
          alert(response.data[0].msg);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  


  return (  

<div className='flex w-full bg-[#F8F8F8]  min-h-screen'>
{/* Sidebar */}
<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

<div className='lg:w-[77%] p-8 overflow-y-auto shadow-lg'>
  {/* Mobile Menu Button */}
  <button onClick={() => setSidebarOpen(true)} className='md:hidden text-2xl mb-4'>
    <i className='px-3 py-3 bg-blue-200 rounded-md ri-menu-fill'></i>
  </button>

  <h1 className='text-3xl font-semibold mb-6'>Update Profile</h1>

  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
    {[
      { label: 'First Name', name: 'fname' },
      { label: 'Last Name', name: 'lname' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'Mobile Number', name: 'number'},
      { label: 'Branch', name: 'branch' },
      { label: 'Course', name: 'course' },
      { label: 'Address', name: 'adrs' },
      { label: 'University / College', name: 'clg' },
    ].map((field, index) => (
      <div key={index}>
        <label className='block text-gray-600 mb-2'>{field.label}</label>
        <input
          type={field.type || 'text'}
          name={field.name}
          value={formData[field.name] || ''}
          onChange={handleChange}
          className='w-full text-gray-700 p-3 border rounded-lg'
        />
      </div>
    ))}

    {/* Gender Select */}
    <div>
      <label className='block text-gray-600 mb-2'>Gender</label>
      <select 
        name='gender' 
        value={formData.gender || ''} 
        onChange={handleChange} 
        className='w-full p-3 text-gray-700 border rounded-lg'
      >
        <option value=''>Select Gender</option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
      </select>
    </div>
  </div>

  {/* Bank Details Section */}
  <h2 className='col-span-2 text-2xl font-semibold mt-6'>Bank Detail</h2>

  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
    {[
      { label: 'Bank Holder Name', name: 'bankholder' },
      { label: 'IFSC Code', name: 'ifsc' },
      { label: 'Account Number', name: 'accountNumber' },
      { label: 'Branch Name', name: 'branchName' },
    ].map((field, index) => (
      <div key={index}>
        <label className='block text-gray-600 mb-2'>{field.label}</label>
        <input
          type='text'
          name={field.name}
          value={formData[field.name] || ''}
          onChange={handleChange}
          className='w-full text-gray-700 p-3 border rounded-lg'
        />
      </div>
    ))}
  </div>

  {/* Submit Button */}
  <button onClick={handleSubmit} className='mt-6 w-full md:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg'>
    Update
  </button>
</div>
</div>
  );
}

export default Content;




//     <div className='flex w-full lg:px-40 min-h-screen'>
//     {/* Sidebar */}
//     <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    
//     <div className='lg:w-[77%] p-8 overflow-y-auto'>
//       {/* Mobile Menu Button */}
//       <button onClick={() => setSidebarOpen(true)} className='md:hidden text-2xl mb-4'>
//         <i className='px-3 py-3 bg-blue-200 rounded-md ri-menu-fill'></i>
//       </button>

//       <h1 className='text-3xl font-semibold mb-6'>Update Profile</h1>

//       <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//         {/* Name */}
//         <div>
//           <label className='block font-semibold mb-2'>First Name</label>
//           <input type='text' name='fname' value={formData.fname || ''} onChange={handleChange} className='w-full p-3 border rounded-lg' />
//         </div>

//         <div>
//           <label className='block font-semibold mb-2'>Last Name</label>
//           <input type='text' name='lname' value={formData.lname || ''} onChange={handleChange} className='w-full p-3 border rounded-lg' />
//         </div>

//         {/* Email and Mobile */}
//         <div>
//           <label className='block font-semibold mb-2'>Email</label>
//           <input type='email' name='email' value={formData.email || ''} onChange={handleChange} className='w-full p-3 border rounded-lg' />
//         </div>

//         <div>
//           <label className='block font-semibold mb-2'>Mobile Number</label>
//           <input type='text' name='number' value={formData.number || ''} onChange={handleChange} className='w-full p-3 border rounded-lg' />
//         </div>
//         <div>
//   <label className='block font-semibold mb-2'>Branch</label>
//   <input
//     type='text'
//     name='branch'
//     value={formData.branch || ''}
//     onChange={handleChange}
//     placeholder='Enter Your Branch'
//     className='w-full p-3 border rounded-lg'
//   />
// </div>
// <div>
//   <label className='block font-semibold mb-2'>Course</label>
//   <input
//     type='text'
//     name='course'
//     value={formData.course || ''}
//     onChange={handleChange}
//     placeholder='Enter Your Course'
//     className='w-full p-3 border rounded-lg'
//   />
// </div>


//         {/* Address and University */}
//         <div>
//           <label className='block font-semibold mb-2'>Address</label>
//           <input type='text' name='adrs' value={formData.adrs || ''} onChange={handleChange} className='w-full p-3 border rounded-lg' />
//         </div>

//         <div>
//   <label className='block font-semibold mb-2'>Gender</label>
//   <select 
//     name='gender' 
//     value={formData.gender || ''} 
//     onChange={handleChange} 
//     className='w-full p-3 border rounded-lg'
//   >
//     <option value=''>Select Gender</option>
//     <option value='Male'>Male</option>
//     <option value='Female'>Female</option>
//   </select>
// </div>

//         <div>
//           <label className='block font-semibold mb-2'>University / College</label>
//           <input type='text' name='clg' value={formData.clg || ''} onChange={handleChange} className='w-full p-3 border rounded-lg' />
//         </div>
        

//         {/* Bank Details Section */}
//         <h2 className='col-span-2 text-2xl font-semibold mt-6'>Bank Detail</h2>

//         <div>
//           <label className='block font-semibold mb-2'>Bank Holder Name</label>
//           <input type='text' name='bankholder' value={formData.bankholder || ''} onChange={handleChange} className='w-full p-3 border rounded-lg' />
//         </div>

//         <div>
//           <label className='block font-semibold mb-2'>IFSC Code</label>
//           <input type='text' name='ifsc' value={formData.ifsc || ''} onChange={handleChange} className='w-full p-3 border rounded-lg' />
//         </div>

//         <div>
//           <label className='block font-semibold mb-2'>Account Number</label>
//           <input type='text' name='accountNumber' value={formData.accountNumber || ''} onChange={handleChange} className='w-full p-3 border rounded-lg' />
//         </div>

//         <div>
//           <label className='block font-semibold mb-2'>Branch Name</label>
//           <input type='text' name='branchName' value={formData.branchName || ''} onChange={handleChange} className='w-full p-3 border rounded-lg' />
//         </div>
//       </div>

//       {/* Submit Button */}
//       <button onClick={handleSubmit} className='mt-6 w-full md:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg'>Update</button>
//     </div>
//   </div>
