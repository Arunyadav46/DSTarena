import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import img from "../assest2/referal.webp"
import img1 from "../assest2/profile.webp"
import img2 from "../assest2/project.webp"
import img3 from "../assest2/payment.webp"
import axios from '../Axios/Axios'



function DashHome() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const userId = localStorage.getItem('userId');
     
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
   
  return (
    <div>
         <div className='flex items-center justify-cente '>
          {/* <button onClick={() => setSidebarOpen(true)} className='md:hidden text-2xl'>
            <i className='px-3 py-3 bg-blue-200 rounded-md ml-[-10px] mr-5 ri-menu-fill'></i>
          </button> */}
          <h1 className='text-3xl md:text-6xl mx-12 xl:mx-4 mt-12 mt-3 mb-10'>Welcome to the Dashboard</h1>
        </div>

        {/* Marquee Section */}
        {/* <div className=' bg-[#E9ECEF] p-3 rounded-md mb-8'>
          <marquee behavior='scroll' direction='up' scrollamount='2'>
            🔔 New job recommendation available. &nbsp; 📅 Your interview is scheduled for tomorrow. &nbsp; ✅ Application for Software Engineer was viewed. &nbsp; 🚀 New company hiring in your industry.
          </marquee>
        </div> */}
         <div className="bg-[#E9ECEF] p-3 rounded-md mb-8 overflow-hidden h-16">
      <div className="marquee-container hover:pause">
        <div className="marquee-content">
          <div>🔔New job recommendation available. 📅 Your interview is scheduled for tomorrow. ✅ Application for Software Engineer was viewed. 🚀 New company hiring in your industry.</div>
        </div>
      </div>
    </div>
    
        {/* Stats Section */}
        <div className='grid grid-cols-1  md:grid-cols-3 gap-5  mb-10'>
        <div  className='h-[10vh] flex justify-center items-center  rounded-md text-white' style={{ backgroundColor: "#FF5733" }}>
              <Link to="/dashboard/payment" className='text-2xl'>📁 <span>Buy Projects</span></Link>
              <h2 className='px-4 py-2 bg-blue-400 rounded-full ml-5'>{BuyData.length}</h2>
         </div>
         <div  className='h-[10vh] flex justify-center items-center rounded-md text-white' style={{ backgroundColor: "#28A745" }}>
              <h1 className='text-2xl'><i class="ri-money-rupee-circle-fill"></i> <span>Payment history </span></h1>
              
         </div>
          {/* {[{color:'#FF5733', text:'Buy Projects',  icon:'📁' },  {color:'#28A745', text:'Payment history',  icon:<i class="ri-money-rupee-circle-fill"></i>}].map((item, index) => (
            <div key={index} className='h-[10vh] flex justify-center items-center rounded-md text-white' style={{ backgroundColor: item.color }}>
              <h1 className='text-2xl'>{item.icon} {item.text} {item.count}</h1>
              <h2 className='px-3 py-1 bg-blue-400 rounded-full ml-10'>0</h2>
            </div>
          ))} */}
        </div>

        {/* Cards and Notifications Section */}
        <div className='grid grid-cols-1 p-10 md:grid-cols-2 gap-10'>
          <div className='md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10'>
      
              <Link to="/dashboard/refer"  className='flex flex-col items-center justify-center bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 duration-300 p-5'>
                <img className='w-[34%]' src={img}/>
                <h2 className='text-2xl mt-4'>Referral</h2>
              </Link>

              <Link to="/dashboard/profile" className='flex flex-col items-center justify-center bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 duration-300 p-5'>
                <img className='w-[34%]' src={img1}/>
                <h2 className='text-2xl mt-4'>Profile</h2>
              </Link>
              <div  className='flex flex-col items-center justify-center bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 duration-300 p-5'>
                <img className='w-[34%]' src={img2}  />
                <h2 className='text-2xl mt-4'>Project</h2>
              </div>

              <Link to="/dashboard/payment"  className='flex flex-col items-center justify-center bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 duration-300 p-5'>
                <img className='w-[34%]' src={img3}  />
                <h2 className='text-2xl mt-4'>Enrolled Course</h2>
              </Link>
          
          </div>

          {/* Notifications */}
          {/* <div className='bg-[#F8F9FA] rounded-md p-5'>
            <h3 className='text-center text-4xl mb-5'>Notifications</h3>
            <marquee behavior='scroll' direction='up'>
              {['🔔 New job recommendation available.', '📅 Your interview is scheduled for tomorrow.', '✅ Application for Software Engineer was viewed.', '🚀 New company hiring in your industry.'].map((notification, index) => (
                <div key={index} className='border-b-2 px-3 py-3 text-gray-600'>{notification}</div>
              ))}
            </marquee>
          </div> */}
        </div>
    </div>
  )
}

export default DashHome