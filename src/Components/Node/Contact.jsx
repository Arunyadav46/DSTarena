import React from 'react'
import img from "../assest2/BackContact.jpg"
import img1 from "../assest2/Call1.png"

function Contact() {
  return (
    <div className='w-full  xl:h-[80vh]'>
        <div style={{
        background:`url(${img})`
    }}  className='w-full h-full'>
       <div className='flex flex-col-reverse xl:flex xl:flex-row-reverse'>
       <div className='left  xl:w-[55%] xl:h-[80vh]   h-full xl:flex xl:items-center xl:justify-center'>
        <img className='w-full h-full object-cover' src={img1} alt=""/>
       </div>
       <div className='right py-20 xl:w-[50%] md:px-52 md:py-32'>
        <div className='mb-5 mx-14 md:mx-[80px]'>
            <h2 className='text-4xl mb-2 mx-[68px]'>4.9/5.0</h2>
            
            <div className='mx-10 text-yellow-400'>
            <i className="text-4xl ri-star-s-line"></i>
            <i className=" text-4xl ri-star-s-line"></i>
            <i className="text-4xl ri-star-s-line"></i>
            <i className="text-4xl ri-star-s-line"></i>
            <i className="text-4xl ri-star-s-line"></i>
            </div>
           
            
      </div>
      {/* <h4 className='mt-5 text-[15px] ml-10'>by 700+ customers for 3200+ clients</h4> */}
      <div className='mb-5  mt-10 mx-10 text-center gap-5 flex md:gap-10 items-center'>
         <i className="text-5xl ri-phone-line"></i>
            <div>
                <h2 className='mb-4'>CALL FOR ADVICE NOW!</h2>
                <h4 className='text-3xl md:text-4xl text-[#086AD8] font-semibold '>9993897203</h4>
            </div>
      </div>
     <div className=' mt-10 mx-10  flex gap-5 md:gap-10 items-center'>
     <i className="text-5xl ri-mail-line"></i>
            <div>
                <h2>SAY HELLO</h2>
                <h4 className='text-2xl md:text-3xl mt-3 text-center text-[#086AD8] font-semibold'>dstinfo@gmail.com</h4>
            </div>
     </div>
        
           

       </div>
     </div>
     </div>
        
        
    </div>
  )
}

export default Contact