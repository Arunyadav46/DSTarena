import React from 'react'
import Banner from '../Service1Detail/Banner'

import Footer from '../Footer'
import Feature from '../Service1Detail/Feature'
import Contact from '../Node/Contact'

function Service1() {
  return (
    <div className='w-full h-screen bg-red-100'>
        <Banner/>
        {/* <Feature1/> */}
        <Feature/>
        {/* <Content/> */}
       {/* <Testimonal/> */}
        <Contact/>
        <Footer/>
    </div>
  )
}
export default Service1