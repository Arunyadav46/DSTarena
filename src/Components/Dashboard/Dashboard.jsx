import React from 'react'
import Content from '../Dashboard1/Content'
import Content1 from '../Dashboard1/Content1'
import Footer from '../Footer'

function Dashboard() {
  return (
    <div className='w-full bg-[#F6FAFE]'>
        {/* <Content/> */}
        <Content1/>
        <Footer/>
    </div>
  )
}

export default Dashboard