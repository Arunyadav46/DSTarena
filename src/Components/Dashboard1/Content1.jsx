import React, { useState } from 'react'
// import img from "../assest2/referal.webp"
// import img1 from "../assest2/profile.webp"
// import img2 from "../assest2/project.webp"
// import img3 from "../assest2/payment.webp"
import img from "../assest2/DstLogo.jpeg"
import { Link, Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'



// function Content1() {
//   return (
//     <div className='w-full h-screen flex bg-white'>
//       {/* sidebar */}
//       <div className='w-[23%] h-full text-white rounded-md  bg-[#00488B]'>
//         <h2 className='text-3xl text-center p-10'>DSTArena</h2>
//         <div className='flex gap-2 items-center mb-4 mx-5 px-3 py-2 rounded-md hover:bg-white hover:text-black'>
//         <i className="ri-home-5-line"></i>
//         <h2>Home</h2>
//         </div>
//         <div className='flex gap-2 items-center  mb-4 mx-5 px-3 py-2 rounded-md hover:bg-white hover:text-black'>
//         <i className="ri-dashboard-line"></i>
//         <h2>Dashboard</h2>
//         </div>
//         <div className='flex gap-2 items-center  mb-4 mx-5 px-3 py-2 rounded-md hover:bg-white hover:text-black'>
//         <i className="ri-home-5-line"></i>
//         <h2>Course</h2>
//         </div>
//         <div className='flex gap-2 items-center  mb-4 mx-5 px-3 py-2 rounded-md hover:bg-white hover:text-black'>
//         <i className="ri-home-5-line"></i>
//         <h2>Download Certificate</h2>
//         </div>
//         <div className='flex gap-2 items-center mx-5  mb-4 px-3 py-2 rounded-md hover:bg-white hover:text-black'>
//         <i className="ri-home-5-line"></i>
//         <h2>Payment History</h2>
//         </div>
//         <div className='flex gap-2 items-center mx-5  mb-4 px-3 py-2 rounded-md hover:bg-white hover:text-black'>
//         <i className="ri-home-5-line"></i>
//         <h2>Profile</h2>
//         </div>
//         <div className='flex gap-2 items-center mx-5  mb-4 px-3 py-2 rounded-md hover:bg-white hover:text-black'>
//         <i className="ri-home-5-line"></i>
//         <h2>Referral Code</h2>
//         </div>
//         <div className='flex gap-2 items-center mx-5  mb-4 px-3 py-2 rounded-md hover:bg-white hover:text-black'>
//         <i className="ri-home-5-line"></i>
//         <h2>Our Services</h2>
//         </div>
        
//       </div>
//       <div className='w-[77%] h-full bg-[#FFFFFF] p-2 pt-10 overflow-y-auto px-4'>
//         <h1 className='text-6xl'>Welcome to the Dashboard</h1>
//         <div className='bg-[#E9ECEF] mt-10'>
//         <div className="marquee text-gray-500 pt-3 h-[10vh] ">
//                 <marquee behavior="scroll" direction="up" scrollamount="2" loop="infinite">
//                     🔔 New job recommendation available. &nbsp; 📅 Your interview is scheduled for tomorrow. &nbsp; ✅ Application for Software Engineer was viewed. &nbsp; 🚀 New company hiring in your industry.
//                 </marquee>
//             </div>
//          </div>

//          <div className='mt-10 text-white flex gap-5'>
//            <div className='w-[35%] h-[10vh] flex justify-center items-center rounded-md bg-[#FF5733]'>
//             <h1 className='text-2xl'>📁 Applied Jobs: 523</h1>
//            </div>
//            <div className='w-[35%] h-[10vh] flex justify-center items-center rounded-md bg-[#33C3FF]'>
//             <h1 className='text-2xl'>🔖 Saved Jobs: 312</h1>
//            </div>
//            <div className='w-[35%] h-[10vh] flex justify-center items-center rounded-md bg-[#28A745]'>
//             <h1 className='text-2xl'>👁️ Viewed Jobs: 721</h1>
//            </div>
//          </div>

//          <div className='mt-20 h-[100vh] flex gap-10'>
//           <div className='w-[70%] grid grid-cols-2 gap-10  h-[60vh] bg-white'>
//           <div className=' flex flex-col items-center justify-center bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 duration-300'>
//           <img className='w-[34%]' src={img} alt='' />
//           <h2 className='text-2xl'>Referral</h2>
//           </div>
//           <div className=' flex flex-col items-center justify-center bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 duration-300'>
//           <img className='w-[34%]' src={img1} alt='' />
//           <h2 className='text-2xl'>Profile</h2>
//           </div>
//           <div className=' flex flex-col items-center justify-center bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 duration-300'>
//           <img className='w-[34%]' src={img2} alt='' />
//           <h2 className='text-2xl'>Project</h2>
//           </div>
//           <div className=' flex flex-col items-center justify-center bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 duration-300'>
//           <img className='w-[34%]' src={img3} alt='' />
//           <h2 className='text-2xl'>Payment-History</h2>
//           </div>
//           </div>
//           <div className="notifications bg-[#F8F9FA] h-[60vh] rounded-md">
//                                 <h3 className='text-center text-4xl'>Notifications</h3>
//                                 <marquee  behavior="5" direction="up">
//                                 <div className="border-b-2 px-3 py-3 text-gray-600">🔔<a href=""> New job recommendation available.</a></div>
//                                 <div className="border-b-2 px-3 py-3 text-gray-600">📅 <a href="">Your interview is scheduled for tomorrow</a>.</div>
//                                 <div className="border-b-2 px-3 py-3 text-gray-600">✅ <a href="">Application for Software Engineer was viewed.</a></div>
//                                 <div className="border-b-2 px-3 py-3 text-gray-600">🚀 <a href="">New company hiring in your industry.</a></div>
//                                 <div className="border-b-2 px-3 py-3 text-gray-600">📅<a href=""> Your interview is scheduled for tomorrow.</a></div>
//                                 <div className="border-b-2 px-3 py-3 text-gray-600">✅ <a href="">Application for Software Engineer was viewed.</a></div>
//                                 <div className="border-b-2 px-3 py-3 text-gray-600">🚀<a href=""> New company hiring in your industry.</a></div>
//                             </marquee>
//                          </div>
//          </div>
//       </div>
//     </div>
//   )
// }

// export default Content1

// function Content1() {
//   return (
//     <div className='w-full min-h-screen grid md:grid-cols-[23%_77%] bg-white'>
//       {/* Sidebar */}
//       <div className='hidden md:block text-white rounded-md bg-[#00488B] p-5'>
//         <h2 className='text-3xl text-center mb-8'>DSTArena</h2>
//         {['Home', 'Dashboard', 'Course', 'Download Certificate', 'Payment History', 'Profile', 'Referral Code', 'Our Services'].map((item, index) => (
//           <div key={index} className='flex gap-2 items-center mb-4 px-3 py-2 rounded-md hover:bg-white hover:text-black'>
//             <i className={`ri-home-5-line`}></i>
//             <h2>{item}</h2>
//           </div>
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className='w-full bg-[#FFFFFF] p-5 overflow-y-auto'>
//         <h1 className='text-4xl md:text-6xl mb-8'>Welcome to the Dashboard</h1>
        
//         {/* Marquee Section */}
//         <div className='bg-[#E9ECEF] p-3 rounded-md mb-8'>
//           <marquee behavior='scroll' direction='up' scrollamount='2'>
//             🔔 New job recommendation available. &nbsp; 📅 Your interview is scheduled for tomorrow. &nbsp; ✅ Application for Software Engineer was viewed. &nbsp; 🚀 New company hiring in your industry.
//           </marquee>
//         </div>

//         {/* Stats Section */}
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-10'>
//           {[{color:'#FF5733', text:'Applied Jobs', count:523, icon:'📁'}, {color:'#33C3FF', text:'Saved Jobs', count:312, icon:'🔖'}, {color:'#28A745', text:'Viewed Jobs', count:721, icon:'👁️'}].map((item, index) => (
//             <div key={index} className='h-[10vh] flex justify-center items-center rounded-md text-white' style={{ backgroundColor: item.color }}>
//               <h1 className='text-2xl'>{item.icon} {item.text}: {item.count}</h1>
//             </div>
//           ))}
//         </div>

//         {/* Cards and Notifications Section */}
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
//           <div className='md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10'>
//             {[{img: img, text: 'Referral'}, {img: img1, text: 'Profile'}, {img: img2, text: 'Project'}, {img: img3, text: 'Payment-History'}].map((item, index) => (
//               <div key={index} className='flex flex-col items-center justify-center bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 duration-300 p-5'>
//                 <img className='w-[34%]' src={item.img} alt={item.text} />
//                 <h2 className='text-2xl mt-4'>{item.text}</h2>
//               </div>
//             ))}
//           </div>

//           {/* Notifications */}
//           <div className='bg-[#F8F9FA] rounded-md p-5'>
//             <h3 className='text-center text-4xl mb-5'>Notifications</h3>
//             <marquee behavior='scroll' direction='up'>
//               {['🔔 New job recommendation available.', '📅 Your interview is scheduled for tomorrow.', '✅ Application for Software Engineer was viewed.', '🚀 New company hiring in your industry.'].map((notification, index) => (
//                 <div key={index} className='border-b-2 px-3 py-3 text-gray-600'>{notification}</div>
//               ))}
//             </marquee>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Content1;

// function Content1() {
//   return (
//     <div className='w-full min-h-screen grid md:grid-cols-[23%_77%] bg-white'>
//       {/* Sidebar */}
//       <div className='hidden md:block text-white rounded-md bg-[#00488B] p-5 fixed h-full'>
//         <h2 className='text-3xl text-center mb-8'>DSTArena</h2>
//         {['Home', 'Dashboard', 'Course', 'Download Certificate', 'Payment History', 'Profile', 'Referral Code', 'Our Services'].map((item, index) => (
//           <div key={index} className='flex gap-2 items-center mb-4 px-3 py-2 rounded-md hover:bg-white hover:text-black'>
//             <i className={`ri-home-5-line`}></i>
//             <h2>{item}</h2>
//           </div>
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className='w-full ml-[23%] bg-[#FFFFFF] p-5 overflow-y-auto h-screen'>
//         <h1 className='text-4xl md:text-6xl mb-8'>Welcome to the Dashboard</h1>
        
//         {/* Marquee Section */}
//         <div className='bg-[#E9ECEF] p-3 rounded-md mb-8'>
//           <marquee behavior='scroll' direction='up' scrollamount='2'>
//             🔔 New job recommendation available. &nbsp; 📅 Your interview is scheduled for tomorrow. &nbsp; ✅ Application for Software Engineer was viewed. &nbsp; 🚀 New company hiring in your industry.
//           </marquee>
//         </div>

//         {/* Stats Section */}
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-10'>
//           {[{color:'#FF5733', text:'Applied Jobs', count:523, icon:'📁'}, {color:'#33C3FF', text:'Saved Jobs', count:312, icon:'🔖'}, {color:'#28A745', text:'Viewed Jobs', count:721, icon:'👁️'}].map((item, index) => (
//             <div key={index} className='h-[10vh] flex justify-center items-center rounded-md text-white' style={{ backgroundColor: item.color }}>
//               <h1 className='text-2xl'>{item.icon} {item.text}: {item.count}</h1>
//             </div>
//           ))}
//         </div>

//         {/* Cards and Notifications Section */}
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
//           <div className='md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10'>
//             {[{img: img, text: 'Referral'}, {img: img1, text: 'Profile'}, {img: img2, text: 'Project'}, {img: img3, text: 'Payment-History'}].map((item, index) => (
//               <div key={index} className='flex flex-col items-center justify-center bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 duration-300 p-5'>
//                 <img className='w-[34%]' src={item.img} alt={item.text} />
//                 <h2 className='text-2xl mt-4'>{item.text}</h2>
//               </div>
//             ))}
//           </div>

//           {/* Notifications */}
//           <div className='bg-[#F8F9FA] rounded-md p-5'>
//             <h3 className='text-center text-4xl mb-5'>Notifications</h3>
//             <marquee behavior='scroll' direction='up'>
//               {['🔔 New job recommendation available.', '📅 Your interview is scheduled for tomorrow.', '✅ Application for Software Engineer was viewed.', '🚀 New company hiring in your industry.'].map((notification, index) => (
//                 <div key={index} className='border-b-2 px-3 py-3 text-gray-600'>{notification}</div>
//               ))}
//             </marquee>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Content1;

// function Content1() {
//   return (
//     <div className='w-full min-h-screen flex bg-white'>
//       {/* Sidebar */}
//       <div className='hidden md:block w-[23%] h-full text-white rounded-md bg-[#00488B] p-5 fixed'>
//         <h2 className='text-3xl text-center mb-8'>DSTArena</h2>
//         {['Home', 'Dashboard', 'Course', 'Download Certificate', 'Payment History', 'Profile', 'Referral Code', 'Our Services'].map((item, index) => (
//           <div key={index} className='flex gap-2 items-center mb-4 px-3 py-2 rounded-md hover:bg-white hover:text-black'>
//             <i className={`ri-home-5-line`}></i>
//             <h2>{item}</h2>
//           </div>
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className='w-full md:w-[77%] ml-auto bg-[#FFFFFF] p-5 overflow-y-auto h-screen'>
//         <h1 className='text-4xl md:text-6xl mb-8'>Welcome to the Dashboard</h1>
        
//         {/* Marquee Section */}
//         <div className='bg-[#E9ECEF] p-3 rounded-md mb-8'>
//           <marquee behavior='scroll' direction='up' scrollamount='2'>
//             🔔 New job recommendation available. &nbsp; 📅 Your interview is scheduled for tomorrow. &nbsp; ✅ Application for Software Engineer was viewed. &nbsp; 🚀 New company hiring in your industry.
//           </marquee>
//         </div>

//         {/* Stats Section */}
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-10'>
//           {[{color:'#FF5733', text:'Applied Jobs', count:523, icon:'📁'}, {color:'#33C3FF', text:'Saved Jobs', count:312, icon:'🔖'}, {color:'#28A745', text:'Viewed Jobs', count:721, icon:'👁️'}].map((item, index) => (
//             <div key={index} className='h-[10vh] flex justify-center items-center rounded-md text-white' style={{ backgroundColor: item.color }}>
//               <h1 className='text-2xl'>{item.icon} {item.text}: {item.count}</h1>
//             </div>
//           ))}
//         </div>

//         {/* Cards and Notifications Section */}
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
//           <div className='md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10'>
//             {[{img: img, text: 'Referral'}, {img: img1, text: 'Profile'}, {img: img2, text: 'Project'}, {img: img3, text: 'Payment-History'}].map((item, index) => (
//               <div key={index} className='flex flex-col items-center justify-center bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 duration-300 p-5'>
//                 <img className='w-[34%]' src={item.img} alt={item.text} />
//                 <h2 className='text-2xl mt-4'>{item.text}</h2>
//               </div>
//             ))}
//           </div>

//           {/* Notifications */}
//           <div className='bg-[#F8F9FA] rounded-md p-5'>
//             <h3 className='text-center text-4xl mb-5'>Notifications</h3>
//             <marquee behavior='scroll' direction='up'>
//               {['🔔 New job recommendation available.', '📅 Your interview is scheduled for tomorrow.', '✅ Application for Software Engineer was viewed.', '🚀 New company hiring in your industry.'].map((notification, index) => (
//                 <div key={index} className='border-b-2 px-3 py-3 text-gray-600'>{notification}</div>
//               ))}
//             </marquee>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Content1;



// import React, { useState } from 'react';

function Content1() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      
      
    <div className='w-full h-auto xl:h-auto flex'>

      {/* Sidebar */}
      {/* <div
        className={`fixed top-0 left-0 h-screen text-white rounded-md bg-[#00488B] p-5 z-10 overflow-y-auto transition-transform duration-300 md:relative md:w-[23%] xl:w-[23%] 
          ${sidebarOpen ? 'w-[85%] translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <h2 className='text-3xl mb-8'>DSTArena</h2>
        <button
          onClick={() => setSidebarOpen(false)}
          className='absolute top-5 right-5 text-2xl md:hidden'
        >
          <i className='ri-close-line bg-red-400'></i>
        </button>
        {['Home', 'Dashboard', 'Course', 'Download Certificate', 'Payment History', 'Profile', 'Referral Code', 'Our Services'].map((item, index) => (
          <div key={index} className='flex gap-2 items-center mb-4 px-3 py-2 rounded-md hover:bg-white hover:text-black'>
            <i className={`ri-home-5-line`}></i>
            <h2>{item}</h2>
          </div>
        ))}
      </div> */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

      {/* Main Content */}
      <div id="scroll" className='w-full md:w-[77%] ml-auto bg-[#F6FAFE] relative  p-5 h-auto'>
      <button onClick={() => setSidebarOpen(true)} className='md:hidden   text-2xl'>
            <i className='px-3 py-3 bg-blue-200 absolute top-[7%] rounded-md ml-[-10px] mr-5 ri-menu-fill'></i>
          </button>
        <Outlet/>
        {/* <div className='flex justify-between items-center mb-8'>
          <button onClick={() => setSidebarOpen(true)} className='md:hidden text-2xl'>
            <i className='px-3 py-3 bg-blue-200 rounded-md ml-[-10px] mr-5 ri-menu-fill'></i>
          </button>
          <h1 className='text-4xl md:text-6xl mt-5 mb-5'>Welcome to the Dashboard</h1>
        </div> */}

        {/* Marquee Section */}
        {/* <div className='bg-[#E9ECEF] p-3 rounded-md mb-8'>
          <marquee behavior='scroll' direction='up' scrollamount='2'>
            🔔 New job recommendation available. &nbsp; 📅 Your interview is scheduled for tomorrow. &nbsp; ✅ Application for Software Engineer was viewed. &nbsp; 🚀 New company hiring in your industry.
          </marquee>
        </div> */}

        {/* Stats Section */}
        {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-10'>
          {[{color:'#FF5733', text:'Applied Jobs', count:523, icon:'📁'}, {color:'#33C3FF', text:'Saved Jobs', count:312, icon:'🔖'}, {color:'#28A745', text:'Viewed Jobs', count:721, icon:'👁️'}].map((item, index) => (
            <div key={index} className='h-[10vh] flex justify-center items-center rounded-md text-white' style={{ backgroundColor: item.color }}>
              <h1 className='text-2xl'>{item.icon} {item.text}: {item.count}</h1>
            </div>
          ))}
        </div> */}

        {/* Cards and Notifications Section */}
        {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
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
                <h2 className='text-2xl mt-4'>Payment-History</h2>
              </Link>
          
          </div>

          Notifications
          <div className='bg-[#F8F9FA] rounded-md p-5'>
            <h3 className='text-center text-4xl mb-5'>Notifications</h3>
            <marquee behavior='scroll' direction='up'>
              {['🔔 New job recommendation available.', '📅 Your interview is scheduled for tomorrow.', '✅ Application for Software Engineer was viewed.', '🚀 New company hiring in your industry.'].map((notification, index) => (
                <div key={index} className='border-b-2 px-3 py-3 text-gray-600'>{notification}</div>
              ))}
            </marquee>
          </div>
        </div> */}

      </div>
    </div>
    </div>
  );
}

export default Content1;

// import React, { useState } from 'react';

// function Content1() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className='w-full min-h-screen flex bg-white xl:px-40'>
//       {/* Sidebar */}
//       <div className={`fixed md:block ${sidebarOpen ? 'w-[80%]' : 'hidden'} xl:w-[23%] h-full text-white rounded-md bg-[#00488B] p-5 z-50`}>
//         <h2 className='text-3xl mb-8'>DSTArena</h2>
//         <button onClick={() => setSidebarOpen(false)} className='absolute top-5 right-5 text-2xl md:hidden'>
//           <i className='ri-close-line bg-red-400'></i>
//         </button>
//         {['Home', 'Dashboard', 'Course', 'Download Certificate', 'Payment History', 'Profile', 'Referral Code', 'Our Services'].map((item, index) => (
//           <div key={index} className='flex gap-2 items-center mb-4 px-3 py-2 rounded-md hover:bg-white hover:text-black'>
//             <i className={`ri-home-5-line`}></i>
//             <h2>{item}</h2>
//           </div>
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className='w-full md:w-[77%] ml-auto bg-[#FFFFFF] overflow-y-auto p-5 h-screen'>
//         <div className='flex justify-between items-center mb-8'>
//           <button onClick={() => setSidebarOpen(true)} className='md:hidden text-2xl'>
//             <i className='px-3 py-3 bg-blue-200 rounded-md ml-[-10px] mr-5 ri-menu-fill'></i>
//           </button>
//           <h1 className='text-4xl md:text-6xl'>Welcome to the Dashboard</h1>
//         </div>

//         {/* Marquee Section */}
//         <div className='bg-[#E9ECEF] p-3 rounded-md mb-8'>
//           <marquee behavior='scroll' direction='up' scrollamount='2'>
//             🔔 New job recommendation available. &nbsp; 📅 Your interview is scheduled for tomorrow. &nbsp; ✅ Application for Software Engineer was viewed. &nbsp; 🚀 New company hiring in your industry.
//           </marquee>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Content1;







// import React, { useState } from 'react'


// function Content1() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   return (
//     <div className="flex min-h-screen p-5">
//     {/* Sidebar */}
//     <div className={`fixed md:relative w-[20%] p-5 bg-blue-900 rounded-md text-white transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
//       <div className="p-5 font-bold text-2xl">DSTArena</div>
//       <ul>
//         {['Home', 'Dashboard', 'Create', 'Todo-Lists', 'Calendar', 'Prborder-b-2 px-3 py-3 text-gray-600) => (
//       border-b-2 px-3 py-3 text-gray-600} className="py-4 px-5 hover:bg-blue-800 cursborder-b-2 px-3 py-3 text-gray-600}</li>
//         ))}
//       </ul>
//     </div>

//     {/* Main Content */}
//     <div className="flex-1 p-5">
//       <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden p-3 bg-blue-600 text-white rounded mb-5">
//         {sidebarOpen ? 'Close Menu' : 'Open Menu'}
//       </button>

//       <h1 className="text-3xl font-bold mb-5">Welcome to the Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-red-500 text-white p-5 text-xl rounded-lg">📁 Applied Jobs: 523</div>
//         <div className="bg-blue-500 text-white p-5 text-2xl rounded-lg">🔖  Saved Jobs: 312</div>
//         <div className="bg-green-500 text-white p-5 text-2xl rounded-lg">👁️ Viewed Jobs: 721</div>
//       </div>

//       <div className="grid w-[80%] grid-cols-1 md:grid-cols-3 gap-4 mt-5">
//         <div className="bg-white p-5 w-[90%] flex flex-col justify-center items-center h-[40vh] rounded-lg shadow-lg">
//           <img className='w-[40%] h-[14vh]'  src="http://127.0.0.1:5500/refferc/assets/images/icons/referal.webp" alt="" />
//           <h2 className='mx-10 text-3xl mt-5'>Referral</h2>
//         </div>
//         <div className="bg-white p-5 w-[90%] flex flex-col justify-center items-center h-[40vh] rounded-lg shadow-lg">
//           <img className='w-[40%] h-[14vh]'  src="http://127.0.0.1:5500/refferc/assets/images/icons/project.webp" alt="" />
//           <h2 className='mx-10 text-3xl mt-5'>Referral</h2>
//         </div>
//         {/* <div className="bg-white p-5 w-[90%] flex flex-col justify-center items-center h-[40vh] rounded-lg shadow-lg">
//           <img className='w-[40%] h-[14vh]'  src="http://127.0.0.1:5500/refferc/assets/images/icons/project.webp" alt="" />
//           <h2 className='mx-10 text-3xl mt-5'>Referral</h2>
//         </div> */}
     
//       </div>
//       <div className="bg-white p-5 rounded-lg shadow-lg">
//           <h2 className="text-xl font-bold mb-4">Notifications</h2>
//           <ul>
//             <li>📄 Application for Software Engineer was viewed.</li>
//             <li>🚀 New company hiring in your industry.</li>
//             <li>📅 Your interview is scheduled for tomorrow.</li>
//           </ul>
//         </div>
//     </div>
//   </div>
//   )
// }

// export default Content1


// import React from 'react'

// function Content1() {
//   return (
//     <div className="content">
//     <div className="container-fluid">
//       <h1 className="mt-4 mb-5">Welcome to the Dashboard</h1>

//       {/* Marquee Section */}
//       <div className="marquee mt-3">
//         <marquee behavior="scroll" direction="up" scrollamount="2" loop="infinite">
//           🔔 New job recommendation available. &nbsp; 📅 Your interview is scheduled for tomorrow. &nbsp; ✅ Application for Software Engineer was viewed. &nbsp; 🚀 New company hiring in your industry.
//         </marquee>
//       </div>

//       {/* Job Stats Section */}
//       <div className="row mt-5">
//         <div className="col-md-4">
//           <div className="card p-3 mb-4 card-1">📁 Applied Jobs: 523</div>
//         </div>
//         <div className="col-md-4">
//           <div className="card p-3 mb-4 card-2">🔖 Saved Jobs: 312</div>
//         </div>
//         <div className="col-md-4">
//           <div className="card p-3 mb-4 card-3">👁️ Viewed Jobs: 721</div>
//         </div>
//       </div>

//       {/* Action Cards Section */}
//       <div className="row mt-5">
//         <div className="col-12 d-flex flex-wrap">
//           {[{
//             link: './refferal.html',
//             imgSrc: 'assets/images/icons/referal.webp',
//             text: 'Referral',
//           }, {
//             link: './payment-history.html',
//             imgSrc: 'assets/images/icons/payment.webp',
//             text: 'Payment History',
//           }, {
//             link: './project.html',
//             imgSrc: './assets/images/icons/project.webp',
//             text: 'Project',
//           }, {
//             link: './profile.html',
//             imgSrc: './assets/images/icons/profile.webp',
//             text: 'Profile',
//      border-b-2 px-3 py-3 text-gray-600, index) => (
//             <div key={index} className="col-auto d-flex justify-content-center mb-4" style={{ cursor: 'pointer' }}>
//           border-b-2 px-3 py-3 text-gray-600.link}>
//                 <div className={`card p-3 custom-card ${index % 2 === 0 ? 'card-gap' : ''}`}>
//                   <div className="box-image">
//                     <img className="imgborder-b-2 px-3 py-3 text-gray-600.border-b-2 px-3 py-3 text-gray-600.text} width="105px" />
//                   </div>
//       border-b-2 px-3 py-3 text-gray-600.text}
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Notifications Section */}
//       <div className="row col-4 mt-4">
//         <div className="col-md-12">
//           <div className="notifications">
//             <h3>Notifications</h3>
//             <marquee behavior="scroll" direction="up" scrollamount="5">
//               {[{
//                 icon: '🔔',
//                 message: 'New job recommendation available.',
//               }, {
//                 icon: '📅',
//                 message: 'Your interview is scheduled for tomorrow.',
//               }, {
//                 icon: '✅',
//                 message: 'Application for Software Engineer was viewed.',
//               }, {
//                 icon: '🚀',
//                 message: 'New company hiring in your industry.',
//               }].map((notif, index) => (
//                 <div key={index} className="border-b-2 px-3 py-3 text-gray-600">
//                   {notif.icon} <a href="#"> {notif.message}</a>
//                 </div>
//               ))}
//             </marquee>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Content1