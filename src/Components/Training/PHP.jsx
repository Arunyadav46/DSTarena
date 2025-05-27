import React from 'react'
import Banner from '../PHP/Banner'
import Content from '../PHP/Content'
import Contact from '../Node/Contact'
import Footer from '../Footer'

function PHP() {
  return (
    <div className='w-full h-screen bg-white'>
        <Banner/>
        <Content/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default PHP