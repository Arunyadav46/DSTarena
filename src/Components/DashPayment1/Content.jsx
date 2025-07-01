


import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard1/Sidebar';
import axios from '../Axios/Axios';
import { Link } from 'react-router-dom';
import img2  from "../assest2/project.webp"


function Content() {
  const transactions = [
    { name: 'William Mardoch', date: '21 March 2021', id: 'OP01214784', amount: '$250 USD', status: 'Receive', color: 'text-green-500' },
    { name: 'William Mardoch', date: '21 March 2021', id: 'OP01214784', amount: '$250 USD', status: 'Deposit', color: 'text-red-500' },
    { name: 'William Mardoch', date: '21 March 2021', id: 'OP01214784', amount: '$250 USD', status: 'Pending', color: 'text-yellow-500' },
  ];
   const [sidebarOpen, setSidebarOpen] = useState(false);

   
   
   //if user Login so see Dashboard uske liye
  const userId = localStorage.getItem('userId');
  // console.log(userId)


  
  const[BuyData, SetBuyData]  = useState([]);

  const getProjectBuyData = ()=>{
    axios.get(`/API/dashboard/buy_project_list_api.php?id=${userId}`)
    .then((data)=>{
      // console.log(data)
      SetBuyData(data.data || [])
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getProjectBuyData()
  },[userId])

  // console.log(BuyData)
  

  return (
    <div className='w-full min-h-screen bg-[#F8F8F8] flex overflow-hidden'>
      <Sidebar  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

      {/* Main Content */}
      <div id="scroll" className='w-full md:w-[73%] mx-5 overflow-y-auto h-screen'>
         {/* Mobile Menu Button */}
         <button onClick={() => setSidebarOpen(true)} className='md:hidden text-2xl mb-4'>
          <i className='px-3 py-3 bg-blue-200 rounded-md ri-menu-fill'></i>
        </button>
        {/* <h1 className='text-4xl md:text-5xl mt-5 mb-10'>Welcome to Dashboard</h1> */}

    

<div className="container mx-auto  bg-gray-50 pt-10 min-h-screen">
    <div className='flex items-center mb-10 gap-5'>
                  <img className='w-[8%]' src={img2}/>
                  <h2 className='text-4xl'>Projects</h2>
     </div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Projects List</h2>
        <div className="text-lg text-gray-600">Total Projects: <span className="font-semibold">{BuyData.length}</span></div>
      </div>

      {BuyData.length === 0 ? (
        <p className="text-gray-500 text-center text-xl">No data available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full  table-auto border-collapse border border-gray-300 shadow-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-4 border">Image</th>
                <th className="p-4 border">Project Name</th>
                <th className="p-4 border">Technology</th>
                <th className="p-4 border">Amount</th>
                <th className="p-4 border">Date</th>
                <th className="p-4 border">Download</th>
              </tr>
            </thead>
            <tbody>
              {BuyData.map((item, index) => (
                <tr key={index} className="border even:bg-gray-50 hover:bg-gray-100">
                  <td className="p-1 flex justify-center items-center">
                    <img src={item.Image} alt={item.pro_name} className="w-16   h-16 object-cover rounded-lg" />
                  </td>
                  <td className="p-4 text-gray-800 font-medium">{item.pro_name}</td>
                  <td className="p-4 text-gray-600">{item.language}</td>
                  <td className="p-4 text-green-600 font-semibold">₹{item.project_amount}</td>
                  <td className="p-4 text-[14px]  text-gray-600">{(() => {
  const [year, month, day] = item.date.split("-");
  return `${day}-${month}-${year}`;
})()}</td>
                  <td className="p-4">
                  <div className="relative group inline-block">
              {item.souce_code && (
             <a href={item.souce_code}  className="bg-blue-500 mr-3 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600 transition-all" ><i className="ri-download-line"></i>
    </a>
  )}

  {/* Tooltip / Popup */}
  <div className="fixed w-[6%] z-50 left-[85%] -translate-x-1/2 mt-2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
    SRS Code
  </div>
</div>
                 {item.srs_report && (
  <div className="relative group inline-block mr-3">
    <a
      href={item.srs_report}
      className="bg-gray-500 text-white px-4 py-2 rounded-lg text-center hover:bg-gray-600 transition-all"
    >
      <i className="ri-download-line"></i>
    </a>
    <div className="fixed left-[50%] left-[90%] -translate-x-1/2 mt-2 bg-black text-white text-xs px-4 py-3 rounded opacity-0 group-hover:opacity-100 transition-all duration-300">
      SRS Report
    </div>
  </div>
)}
                     <Link to="/dashboard/payment/det"><i className="ri-eye-line text-xl"></i></Link> 
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>



      </div>


      
    </div>
  );
}

export default Content;
