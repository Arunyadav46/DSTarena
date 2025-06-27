import React from 'react'
import { Link } from 'react-router-dom'

function Marque() {
    const data = [
        {img:"https://plus.unsplash.com/premium_photo-1736165168647-e216dcd23720?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",Head:"Thesis"},
        {img:"https://plus.unsplash.com/premium_photo-1661761077411-d50cba031848?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",Head:"Research"},
        {img:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",Head:"Web Design"},
        {img:"https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",Head:"Software"},
        {img:"https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",Head:"Web Hoisting"},
        {img:"https://plus.unsplash.com/premium_photo-1661763874747-405eb7388c58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",Head:"Training"},
        {img:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",Head:"Services"},
    ]
  return (
    <div id="marque" className='marquee-container1  w-full bg-[#F6FAFE]   md:h-[15vh] flex  gap-10 items-center '>
   <div className="marquee-content1 gap-10">

    <div  className='elem h-[5%] w-[40%] mt-10 xl:mt-1 md:w-[15%] md:h-[90%] shrink-0 flex items-center gap-2 justify-center'>
         <img className='w-[20%] h-[30%] rounded-full' src="https://plus.unsplash.com/premium_photo-1736165168647-e216dcd23720?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         <h2 className='md:text-2xl font-semibold'>Thesis</h2>
    </div>
      <div  className='elem h-[5%] w-[40%] mt-10 xl:mt-1 md:w-[15%] md:h-[90%] shrink-0 flex items-center gap-2 justify-center'>
         <img className='w-[20%] h-[30%] rounded-full' src="https://plus.unsplash.com/premium_photo-1661761077411-d50cba031848?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         <h2 className='md:text-2xl font-semibold'>Research</h2>
    </div>

     <Link to="/service/5"  className='elem h-[5%] w-[40%] mt-10 xl:mt-1 md:w-[15%] md:h-[90%] shrink-0 flex items-center gap-2 justify-center'>
         <img className='w-[20%] h-[30%] rounded-full' src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         <h2 className='md:text-2xl font-semibold'>Web Design</h2>
    </Link>

      <Link to="service/4"  className='elem h-[5%] w-[40%] mt-10 xl:mt-1 md:w-[15%] md:h-[90%] shrink-0 flex items-center gap-2 justify-center'>
         <img className='w-[20%] h-[30%] rounded-full' src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         <h2 className='md:text-2xl font-semibold'>Software</h2>
    </Link>

     <Link to="/service/1" className='elem h-[5%] w-[40%] mt-10 xl:mt-1 md:w-[15%] md:h-[90%] shrink-0 flex items-center gap-2 justify-center'>
         <img className='w-[20%] h-[30%] rounded-full' src="https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         <h2 className='md:text-2xl font-semibold'>Web Hoisting</h2>
    </Link>
     <Link to="/training" className='elem h-[5%] w-[40%] mt-10 xl:mt-1 md:w-[15%] md:h-[90%] shrink-0 flex items-center gap-2 justify-center'>
         <img className='w-[20%] h-[30%] rounded-full' src="https://plus.unsplash.com/premium_photo-1661763874747-405eb7388c58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         <h2 className='md:text-2xl font-semibold'> Training</h2>
    </Link>
     <div  className='elem h-[5%] w-[40%] mt-10 xl:mt-1 md:w-[15%] md:h-[90%] shrink-0 flex items-center gap-2 justify-center'>
         <img className='w-[20%] h-[30%] rounded-full' src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         <h2 className='md:text-2xl font-semibold'>Services</h2>
    </div>


</div>
   </div>
  )
}

export default Marque


  {/* {data.map((elem,index)=>{
        return   <div key={index} className='elem h-[5%] w-[40%] mt-10 xl:mt-1 md:w-[15%] md:h-[90%] shrink-0 flex items-center gap-2 justify-center'>
         <img className='w-[20%] h-[30%] rounded-full' src={elem.img} alt="" />
         <h2 className='md:text-2xl font-semibold'>{elem.Head}</h2>
       </div>
    })}  */}