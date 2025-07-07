import React from 'react'
import Banner from '../MpharmDeatils.jsx/Banner'
import Content from '../MpharmDeatils.jsx/Content'
import Contact from '../Node/Contact'
import Footer from '../Footer'

function Mpharm() {
  return (
    <div className='w-full h-[230vh] bg-[#FFFFFF]'>
        <Banner/>
        <Content/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Mpharm