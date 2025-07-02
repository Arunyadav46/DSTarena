import React, { useEffect, useState } from 'react'
import Sidebar from '../Dashboard1/Sidebar'
import axios from '../Axios/Axios';
import { Link } from 'react-router-dom';
import img from "../assest2/payment.webp"



function Content() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

const [referralData1, setReferralData1] = useState([]);
const userId = localStorage.getItem("userId")
const showrefferal = ()=>{
  axios.get(`/API/dashboard/referral_amt_request_api.php?id=${userId}`)
  .then((raw)=>{
    // console.log(raw.data)
     setReferralData1(raw.data);
  }).catch((err)=>{
    console.log(err)
  })
}


useEffect(()=>{
  showrefferal();
},[])
  return (
    <div className=' min-h-screen overflow-x-auto relative  bg-[#F8F8F8] flex '>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      {/* <Sidebar/> */}

       
 <div className="p-5 w-full">
   <div className='w-[8%] p-1 flex items-center gap-5'>
    <img className='hidden md:block' src={img} alt="" />
    <h2 className='text-3xl ml-[70px] mt-3 md:ml-0 md:text-3xl'>Withdrawal </h2>
  </div>  
  <button onClick={() => setSidebarOpen(true)} className='md:hidden text-2xl'>
            <i className='px-3 py-3 bg-blue-200 rounded-md ml-[-10px]  absolute top-[3%] left-[10%] mr-5 ri-menu-fill'></i>
       </button>

       <div className="mt-5  mx-1 bg-gray-100 p-3 rounded-lg shadow-sm text-sm flex items-center gap-2">
  <Link to="/dashboard/home" className="flex items-center gap-1 text-blue-600 font-medium hover:underline">
    <i className="ri-home-4-line"></i> Home
  </Link>
  <i className="ri-arrow-right-s-line text-gray-500 text-lg"></i>
  <span className="text-gray-800 font-semibold">Referral withdrawal</span>
</div>
  <h2 className="text-2xl font-bold mb-10 mt-4 xl:text-center  text-gray-800">
    Referral Withdrawal History
  </h2>

  <div className="w-full">
    <table className="w-full bg-white border border-gray-300 rounded-md shadow-md">
      <thead className="bg-gray-100 ">
        <tr className="text-sm font-semibold  text-gray-700 text-left">
          <th className="p-3 border">#</th>
          <th className="p-3 border">Holder Name</th>
          <th className="p-3 border">Bank</th>
          <th className="p-3 border">Branch</th>
          <th className="p-3 border">IFSC</th>
          <th className="p-3 border">Account No</th>
          <th className="p-3 border">Amount</th>
          <th className="p-3 border">Status</th>
          <th className="p-3 border">Date</th>
        </tr>
      </thead>

      <tbody>
        {referralData1 && referralData1.length > 0 ? (
          referralData1.map((item, index) => (
            <tr
              key={item.id}
              className="text-sm  text-gray-800 hover:bg-gray-50"
            >
              <td className="p-3 border">{index + 1}</td>
              <td className="p-3 border">{item.bank_holder_name || "N/A"}</td>
              <td className="p-3 border">{item.bankname || "N/A"}</td>
              <td className="p-3 border">{item.branch || "N/A"}</td>
              <td className="p-3 border">{item.ifsc || "N/A"}</td>
              <td className="p-3 border">{item.Account_no || "N/A"}</td>
              <td className="p-3 border">
                {item.Amount && item.Amount !== "undefined"
                  ? item.Amount
                  : "N/A"}
              </td>
              <td className="p-3 border">
                <span
                  className={`px-3 py-1 rounded-full text-white text-xs font-medium ${
                    item.remark === "Approved"
                      ? "bg-green-500"
                      : item.remark === "Rejected"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {item.remark || "Under-Review"}
                </span>
              </td>
              <td className="p-3 border">{item.date || "N/A"}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="9" className="p-4 w text-center text-gray-500 border">
              No withdrawal records found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>

    </div>
  )
}

export default Content