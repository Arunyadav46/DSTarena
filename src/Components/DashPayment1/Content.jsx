


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
//     <div className='w-full min-h-screen bg-[#F8F8F8] flex overflow-hidden'>
//       <Sidebar  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

    
//       <div id="scroll" className='w-full md:w-[73%] mx-5 overflow-y-auto h-screen'>
        
//          <button onClick={() => setSidebarOpen(true)} className='md:hidden text-2xl mb-4'>
//           <i className='px-3 py-3 bg-blue-200 rounded-md ri-menu-fill'></i>
//         </button>
       

    

// <div className="container mx-auto  bg-gray-50 pt-10 min-h-screen">
//     <div className='flex items-center mb-10 gap-5'>
//                   <img className='w-[8%]' src={img2}/>
//                   <h2 className='text-4xl'>Projects</h2>
//      </div>
//       <div className="flex justify-between items-center mb-8">
//         <h2 className="text-3xl font-bold text-gray-800">Projects List</h2>
//         <div className="text-lg text-gray-600">Total Projects: <span className="font-semibold">{BuyData.length}</span></div>
//       </div>

//       {BuyData.length === 0 ? (
//         <p className="text-gray-500 text-center text-xl">No data available.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="w-full  table-auto border-collapse border border-gray-300 shadow-lg">
//             <thead>
//               <tr className="bg-gray-100 text-gray-700">
//                 <th className="p-4 border">Image</th>
//                 <th className="p-4 border">Project Name</th>
//                 <th className="p-4 border">Technology</th>
//                 <th className="p-4 border">Amount</th>
//                 <th className="p-4 border">Date</th>
//                 <th className="p-4 border">Download</th>
//               </tr>
//             </thead>
//             <tbody>
//               {BuyData.map((item, index) => (
//                 <tr key={index} className="border even:bg-gray-50 hover:bg-gray-100">
//                   <td className="p-1 flex justify-center items-center">
//                     <img src={item.Image} alt={item.pro_name} className="w-16   h-16 object-cover rounded-lg" />
//                   </td>
//                   <td className="p-4 text-gray-800 font-medium">{item.pro_name}</td>
//                   <td className="p-4 text-gray-600">{item.language}</td>
//                   <td className="p-4 text-green-600 font-semibold">₹{item.project_amount}</td>
//                   <td className="p-4 text-[14px]  text-gray-600">{(() => {
//   const [year, month, day] = item.date.split("-");
//   return `${day}-${month}-${year}`;
// })()}</td>
//                   <td className="p-4">
//                   <div className="relative group inline-block">
//               {item.souce_code && (
//              <a href={item.souce_code}  className="bg-blue-500 mr-3 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600 transition-all" ><i className="ri-download-line"></i>
//     </a>
//   )}

//   {/* Tooltip / Popup */}
//   <div className="fixed w-[6%] z-50 left-[85%] -translate-x-1/2 mt-2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
//     SRS Code
//   </div>
// </div>
//                  {item.srs_report && (
//   <div className="relative group inline-block mr-3">
//     <a
//       href={item.srs_report}
//       className="bg-gray-500 text-white px-4 py-2 rounded-lg text-center hover:bg-gray-600 transition-all"
//     >
//       <i className="ri-download-line"></i>
//     </a>
//     <div className="fixed left-[50%] left-[90%] -translate-x-1/2 mt-2 bg-black text-white text-xs px-4 py-3 rounded opacity-0 group-hover:opacity-100 transition-all duration-300">
//       SRS Report
//     </div>
//   </div>
// )}
//                      <Link to="/dashboard/payment/det"><i className="ri-eye-line text-xl"></i></Link> 
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>



//       </div>


      
//     </div>


<div className='flex w-full bg-[#F8F8F8] min-h-screen'>
  <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

  <div className='w-[100%] lg:w-[77%] p-4 xl:p-8 overflow-y-auto shadow-lg'>

    <button onClick={() => setSidebarOpen(true)} className='md:hidden text-2xl mb-4'>
      <i className='px-3 py-3 bg-blue-200 rounded-md ri-menu-fill'></i>
    </button>

    <div className='flex items-center mb-10 gap-5'>
      <img className='hidden md:block w-[5%]' src={img2} />
      <h2 className='text-3xl ml-20 mt-[-60px] xl:mt-0 xl:ml-0 xl:text-3xl'>Projects</h2>
    </div>

    <div className="mb-10 bg-gray-100 p-3 rounded-lg shadow-sm text-sm flex items-center gap-2 ">
      <Link to="/dashboard/home" className="flex items-center gap-1 text-blue-600 font-medium">
        <i className="ri-home-4-line"></i> Home
      </Link>
      <i className="ri-arrow-right-s-line text-gray-500 text-lg"></i>
      <span className="text-gray-800 font-semibold">Projects</span>
    </div>

    <div className="flex justify-between items-center mb-8 p-4 bg-white rounded-xl shadow-md border border-gray-200">
      <div className="flex items-center gap-3">
        <i className="ri-folder-3-line text-3xl text-blue-500"></i>
        <h2 className="text-2xl font-semibold text-gray-800">Projects List</h2>
      </div>

      <div className="flex items-center gap-2 text-gray-700 text-lg">
        <span className="bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold">
          Total: {BuyData.length}
        </span>
      </div>
    </div>

    {/* ✅ Card wrapper added for both cases */}
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      {BuyData.length === 0 ? (
        <p className="text-gray-500 text-center text-xl">No data available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300 shadow-lg">
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
                    <img src={item.Image} alt={item.pro_name} className="w-16 h-16 object-cover rounded-lg" />
                  </td>
                  <td className="p-4 text-gray-800 font-medium">{item.pro_name}</td>
                  <td className="p-4 text-gray-600">{item.language}</td>
                  <td className="p-4 text-green-600 font-semibold">₹{item.project_amount}</td>
                  <td className="p-4 text-[14px] text-gray-600">
                    {(() => {
                      const [year, month, day] = item.date.split("-");
                      return `${day}-${month}-${year}`;
                    })()}
                  </td>
                 <td className="p-4 flex gap-3 items-center">
  {/* Source Code Download */}
  {item.souce_code && (
    <div className="relative group">
      <a
        href={item.souce_code}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="ri-download-line"></i>
      </a>
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-800 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-all z-50 whitespace-nowrap">
        SRS Code
      </div>
    </div>
  )}

  {/* SRS Report Download */}
  {item.srs_report && (
    <div className="relative group">
      <a
        href={item.srs_report}
        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="ri-download-line"></i>
      </a>
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-all z-50 whitespace-nowrap">
        SRS Report
      </div>
    </div>
  )}

  {/* View Icon */}
  <Link to="/dashboard/payment/det" className="text-gray-700 hover:text-black ml-2">
    <i className="ri-eye-line text-xl"></i>
  </Link>
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
