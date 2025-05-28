import React from 'react'
import Banner from '../Node/Banner'

import Contact from '../Node/Contact'
import Footer from '../Footer'
import Banner1 from '../Phython/Banner1'
import Content from '../Phython/Content'

function Python() {
  return (
    <div className='w-full h-screen bg-white'>
         <Banner1/>
         <Content/>
         <Contact/>
         <Footer/>
    </div>
  )
}

export default Python