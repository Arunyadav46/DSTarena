import React from 'react'
import Banner from '../MbaDet1/Banner'
import Content from '../MbaDet1/Content'
import Footer from '../Footer'
import Contact from '../Node/Contact'

function MbaDet() {
  return (
    <div className='w-full h-screen  bg-white'>
        <Banner/>
        <Content/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default MbaDet