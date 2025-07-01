import React, { useState } from 'react'
import Sidebar from '../Dashboard1/Sidebar';
import img from "../assest2/1.jpg"
import { useEffect } from 'react';
import axios from '../Axios/Axios';
import toast, { Toaster } from 'react-hot-toast';


function Content() {
    const [sidebarOpen, setSidebarOpen] = useState(false);



  const userId = localStorage.getItem("userId")

  const[user2,setuser2] = useState([]);
  const getuserData2 = ()=>{
    axios.get(`/API/dashboard/profile_update_api.php?id=${userId}`)
    .then((data)=>{
      console.log(data)
      setuser2(data.data || [])
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getuserData2();
  },[userId])


   const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = () => {
    setQuery("")
    const formData = new FormData();

    // 🔁 Hardcoded values abhi ke liye, later props se le sakte ho
    formData.append("id", BuyData1[0].id);              // Project ID
    formData.append("Name", user2[0].fname);          // User name
    formData.append("title", BuyData1[0].pro_name);  // Project title
    // console.log(BuyData1[0].pro_name)
    formData.append("vendorId", "456");          // Vendor ID
    formData.append("user_id", userId);         // User session ID
    formData.append("query", query);           // User message

    axios.post("/API/dashboard/prject-help-request.php", formData)
      .then((response) => {
        console.log("Response:", response.data);
        // alert("Help request sent successfully!");
        toast.success("Help request sent successfully!")
        setShowPopup(false);
      })
      .catch((error) => {
        console.error(" Error:", error);
        // alert("Failed to send help request.");
        toast.error("Failed to send help request.")
      });
  };


    const[BuyData1, SetBuyData1]  = useState([]);
     const [showPopup, setShowPopup] = useState(false);

    // const userId = localStorage.getItem('userId');

    const getProjectBuyData1 = ()=>{
      axios.get(`/API/dashboard/buy_project_list_api.php?id=${userId}`)
      .then((data)=>{
        // console.log(data)
        SetBuyData1(data.data || [])
      }).catch((err)=>{
        console.log(err)
      })
    }
    useEffect(()=>{
      getProjectBuyData1()  
    },[userId])
  
    console.log(BuyData1)

  return (
//     <div className='w-full min-h-screen bg-[#F8F8F8] flex'>
//       <Toaster/>
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
    

// <div id="scroll" className='w-full flex flex-col  md:flex-row gap-4 md:w-[77%] p-4 overflow-y-auto max-h-[190vh] bg-gray-50 rounded-lg shadow-md'>
//    {/* Sidebar Button for Mobile */}
//   <button onClick={() => setSidebarOpen(true)} className='md:hidden relative text-2xl'>
//     <i className='px-3 py-3 bg-blue-500 text-white rounded-full absolute top-[-10%] left-1 shadow-md ri-menu-fill'></i>
//   </button>

// {BuyData1.map((elem,index)=>{
//   return  <div className='flex'>
//   {/* Image Section */}
// <div className='w-full h-[40vh] mr-10 mt-8  md:w-1/2 md:h-[50vh] bg-gray-300 rounded-lg overflow-hidden shadow-md'>
//   <img className='w-full h-full md:h-[80%]' src={elem.Image} alt="Beauty Parlour Management System" />
//    <div className='flex w-full gap-2  md:h-[20%]'>
//        <img className='w-full h-full object-cover border-2 border-red-300'      src={elem.more_img} alt="" />
//        <img className='w-full h-full object-cover border-2 border-red-300'      src={elem.more_img} alt="" />
//        <img className='w-full h-full object-cover  border-2 border-red-300'  src={elem.Image} alt="" />
//        <img className='w-full h-full object-cover  border-2 border-red-300'  src={elem.Image} alt="" />
       
//        <img className='w-full h-full object-cover  border-2 border-red-300'  src="https://mitech.thememove.com/wp-content/uploads/2019/03/case-study-01-480x298.jpg" alt="" />
//    </div>
// </div>
// {/* Details Section*/}
// <div className='w-full md:w-1/2 p-6'>
//   <h2 className='text-3xl font-bold text-gray-800 mb-4'>{elem.pro_name}</h2>

//   {/* Pricing Section */}
//   <div className='flex items-center gap-4 mb-4'>
//     <h2 className='text-2xl font-semibold text-green-600'>₹{elem.project_amount}{elem.srs_price}</h2>
    
//   </div>

//   {/* Additional Info */}
//   <div className='space-y-4'>
//     <div className='flex items-center gap-2'>
//       <span className='text-gray-600 font-semibold'>Language/Technology:</span>
//       <span className='text-gray-900'>{elem.language}</span>
//     </div>
   
//     <h2>Date: <span>{(() => {
//   const [year, month, day] = elem.date.split("-");
//   return `${day}-${month}-${year}`;
// })()}</span></h2>
//   </div>

//   {/* Buttons Section */}
//   <div className='mt-8 flex flex-wrap gap-4'>
//     <a href={elem.souce_code} className='bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all'>
//       Source Code
//       <span><i className="ml-2 ri-download-line"></i></span>
//     </a>
    
//     <a href={elem.srs_report} className='bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition-all'>
//      SRS Report
//       <span><i className="ml-2 ri-download-line"></i></span>
//     </a> 
//     <button className='px-4 py-3 bg-green-600 text-white rounded-md'  onClick={() => setShowPopup(true)}>Request help</button>
    
     
//      { showPopup && (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//         <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
//           <h2 className="text-xl font-bold mb-4">Need Help with Project Setup?</h2>

//           <textarea
//             rows="4"
//             className="w-full p-2 border border-gray-300 rounded-md mb-4"
//             placeholder="Type your query here..."
//             value={query}
//             onChange={handleChange}
//             required
//           ></textarea>

//           <div className="flex justify-end space-x-2">
//             <button
//               className="bg-gray-300 text-black px-4 py-2 rounded-md"
//               onClick={() => setShowPopup(false)}
//             >
//               Cancel
//             </button>
//             <button
//               className="bg-green-600 text-white px-4 py-2 rounded-md"
//               onClick={handleSubmit}
//             >
//               Send Request
//             </button>
//           </div>
//         </div>
//       </div>
// )}

//   </div>
//  </div>
// </div>
// })}

 
//   </div>
// </div>
<div className='w-full min-h-screen bg-[#F8F8F8] flex flex-col md:flex-row'>
  <Toaster />
  <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

  <div
    id="scroll"
    className='w-full md:w-[77%] p-4 overflow-y-auto bg-gray-50 rounded-lg shadow-md flex flex-col gap-6'
  >
    {/* Sidebar Button for Mobile */}
    <button
      onClick={() => setSidebarOpen(true)}
      className='md:hidden self-start mb-4 relative text-2xl'
    >
      <i className='px-3 py-3 bg-blue-500 text-white rounded-full shadow-md ri-menu-fill'></i>
    </button>

    {BuyData1.map((elem, index) => (
      <div key={index} className='flex flex-col md:flex-row gap-6 bg-white rounded-lg p-4 shadow-md'>
        {/* Image Section */}
        <div className='w-full md:w-1/2 space-y-4'>
          <div className='h-[40vh]  md:h-[50vh] rounded-lg overflow-hidden shadow'>
            <img
              className='w-full h-full object-cover'
              src={elem.Image}
              alt="Project"
            />
          </div>

          {/* <div className='flex flex-wrap gap-2'>
            {[elem.more_img,   elem.Image, "https://mitech.thememove.com/wp-content/uploads/2019/03/case-study-01-480x298.jpg"].map((imgUrl, i) => (
              <img
                key={i}
                className='w-[48%] md:w-[23%] h-[100px] object-cover border-2 border-red-300 rounded'
                src={imgUrl}
                alt={`More ${i}`}
              />
            ))}
          </div> */}
        </div>

        {/* Details Section */}
        <div className='w-full md:w-1/2 p-2 space-y-4'>
          <h2 className='text-2xl font-bold text-gray-800'>{elem.pro_name}</h2>

          <div className='text-xl  font-semibold'>
            <span>Project Amount:</span>  <span className='ml-2 mb-4' >₹{elem.project_amount}</span> 
            <h2>srs_price:  <span className='ml-2 mb-4' >₹{elem.srs_price}</span>  </h2>
            <h2>sw_price:  <span  className='ml-2'>₹{elem.sw_price}</span>  </h2>
          </div>

          <div className='space-y-2'>
            <div className='flex items-center gap-2 text-gray-700'>
              <span className='font-semibold'>Language:</span>
              <span>{elem.language}</span>
            </div>

            <div>
              <span className='font-semibold'>Date:</span>{' '}
              <span>
                {(() => {
                  const [y, m, d] = elem.date.split("-");
                  return `${d}-${m}-${y}`;
                })()}
              </span>
            </div>
          </div>

          <div className='flex flex-wrap gap-3 pt-4'>
            <a
              href={elem.souce_code}
              className='bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition'
            >
              Source Code <i className="ml-2 ri-download-line"></i>
            </a>

            <a
              href={elem.srs_report}
              className='bg-gray-600 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-700 transition'
            >
              SRS Report <i className="ml-2 ri-download-line"></i>
            </a>

            <button
              className='bg-green-600 text-white px-6 py-2 rounded-lg'
              onClick={() => setShowPopup(true)}
            >
              Request Help
            </button>
          </div>
        </div>
      </div>
    ))}

    {/* Popup */}
    {showPopup && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
          <h2 className="text-xl font-bold mb-4">Need Help with Project Setup?</h2>
          <textarea
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            placeholder="Type your query here..."
            value={query}
            onChange={handleChange}
            required
          ></textarea>
          <div className="flex justify-end space-x-2">
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded-md"
              onClick={() => setShowPopup(false)}
            >
              Cancel
            </button>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-md"
              onClick={handleSubmit}
            >
              Send Request
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
</div>


  )
}

export default Content