import React from 'react'
import Banner from '../Design/Banner'
import Content from '../Design/Content'
import Contact from '../Node/Contact'
import Footer from '../Footer'

function Design() {
  return (
    <div className='w-full h-screen bg-white'>
        <Banner/>
        <Content/>
        <Contact/>
        <Footer/>
    </div>
  )
} 

export default Design