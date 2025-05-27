import React from 'react'
import Banner from '../Java/Banner'
import Content from '../Java/Content'
import Contact from '../Node/Contact'
import Footer from '../Footer'

function Java() {
  return (
    <div className='w-full h-screen bg-white'>
        <Banner/>
        <Content/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Java