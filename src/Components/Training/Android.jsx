import React from 'react'
import Banner from '../Android/Banner'
import Content from '../Android/Content'
import Contact from '../Node/Contact'
import Footer from '../Footer'

function Android() {
  return (
    <div className='w-full h-screen bg-white'>
        <Banner/>
        <Content/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Android