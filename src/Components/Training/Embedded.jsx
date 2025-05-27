import React from 'react'
import Banner from '../Embeded/Banner'
import Content from '../Embeded/Content'
import Contact from '../Node/Contact'
import Footer from '../Footer'

function Embedded() {
  return (
    <div className='w-full h-screen bg-white'>
        <Banner/>
        <Content/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Embedded