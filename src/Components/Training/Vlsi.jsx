import React from 'react'
import Banner from '../Vlsi/Banner'
import Content from '../Vlsi/Content'
import Contact from '../Node/Contact'
import Footer from '../Footer'

function Vlsi() {
  return (
    <div className='w-full h-screen bg-white'>
        <Banner/>
        <Content/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Vlsi