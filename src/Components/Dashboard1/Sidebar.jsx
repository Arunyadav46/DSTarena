import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Sidebar({ sidebarOpen, setSidebarOpen }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

 const [isOpen, setIsOpen] = useState(false);
  return (
    <div
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

    <Link to='/' className='flex gap-2 items-center mb-4 px-3 py-2 rounded-md hover:bg-white hover:text-black'>
    <i className='ri-home-5-line'></i>
     <h2>Home</h2>
    </Link>

<Link to="/dashboard/home" className='flex gap-2 items-center mb-4 px-3 py-2 rounded-md hover:bg-white hover:text-black'>
<i class="ri-dashboard-line"></i>
  <h2>Dashboard</h2>
</Link>



<div className='flex gap-2 items-center mb-4 px-3 py-2 rounded-md hover:bg-white hover:text-black'>
<i class="ri-download-line"></i>
  <h2>Download Certificate</h2>
</div>

<Link to="/dashboard/payment" className='flex gap-2 items-center mb-4 px-3 py-2 rounded-md hover:bg-white hover:text-black'>
  <i className='ri-home-5-line'></i>
  <h2>Enrolled Course</h2>
</Link>

<Link to="/dashboard/profile" className='flex gap-2 items-center mb-4 px-3 py-2 rounded-md hover:bg-white hover:text-black'>
<i class="ri-profile-fill"></i>
  <h2>Profile</h2>
</Link>

{/* <Link to="/dashboard/refer" className='flex gap-2 items-center mb-4 px-3 py-2 rounded-md hover:bg-white hover:text-black'>
<i class="ri-user-add-line"></i>
  <h2>Referral </h2>
</Link> */}
 <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full gap-2 items-center mb-2 px-3 py-2 rounded-md hover:bg-white hover:text-black"
      >
        <i className="ri-user-add-line"></i>
        <h2>Referral</h2>
        <i className={`ri-arrow-down-s-line ml-auto transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>

      {isOpen && (
        <div className="ml-8 flex flex-col gap-1 text-sm">
          <Link
            to="/dashboard/refer"
            className="block px-3 py-1 rounded hover:bg-gray-500"
          >
            Referral User
          </Link>
          <Link
            to="/dashboard/withdraw"
            className="block px-3 py-1 rounded hover:bg-gray-500"
          >
            Withdraw History
          </Link>
        </div>
      )}
    </div>


<div className='flex gap-2 items-center mb-4 px-3 py-2 rounded-md hover:bg-white hover:text-black'>
  <i className='ri-home-5-line'></i>
  <h2>Our Services</h2>
</div>

  </div>
  )
}

export default Sidebar