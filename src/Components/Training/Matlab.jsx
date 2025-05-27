import React from 'react'
import Banner from '../Matlab/Banner'
import Contact from '../Node/Contact'
import Footer from '../Footer'
import Content from '../Matlab/Content'
import Content2 from '../Content2'

function Matlab() {
  return (
    <div className='w-full h-screen bg-white'>
        <Banner/>
        <Content/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Matlab