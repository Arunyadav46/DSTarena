import React from 'react'
import Content from '../DashPayment1/Content'
import Footer from '../Footer'

function DashPayment() {
  return (
    <div>
        <Content/>
        <Footer/>
    </div>
  )
}

export default DashPayment



{/* <div className='p-6'>
      <h1 className='text-3xl font-bold mb-8 text-gray-800'>Your Purchased Projects</h1>
      
      {BuyData.length === 0 ? (
        <p className='text-gray-500'>No data available.</p>
      ) : (
        <div className='space-y-6'>
          {BuyData.map((item, index) => (
            <div key={index} className='flex flex-col md:flex-row items-center md:items-start bg-white p-6 border rounded-xl shadow-lg'> */}
              
              {/* Image Section */}
              // <img 
              //   src={item.Image} 
              //   alt={item.pro_name} 
              //   className='w-28 h-28 object-cover rounded-lg mb-4 md:mb-0 md:mr-6'
              // />
              
              {/* Project Details Section */}
              // <div className='flex-1'>
              //   <h2 className='text-2xl font-semibold text-gray-800 mb-2'>{item.pro_name}</h2>
              //   <p className='text-gray-600 mb-2'>Technology: <span className='font-medium'>{item.language}</span></p>
              //   <p className='text-gray-600 mb-2'>Amount: <span className='font-medium text-green-600'>₹{item.amount}</span></p>
              //   <p className='text-gray-600 mb-2'>Purchase Date: <span className='font-medium'>{item.date}</span></p>
              // </div>

    //           {/* Download Links Section */}
    //           <div className='mt-4 md:mt-0'>
    //             {item.souce_code && (
    //               <a href={item.souce_code} className='block bg-blue-500 text-white px-4 py-2 rounded-lg text-center mb-2 hover:bg-blue-600'>
    //                 Download Source Code
    //               </a>
    //             )}
    //             {item.srs_report && (
    //               <a href={item.srs_report} className='block bg-gray-500 text-white px-4 py-2 rounded-lg text-center hover:bg-gray-600'>
    //                 Download SRS Report
    //               </a>
    //             )}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   )}
    // </div>