import React from 'react'
import Banner from '../Seo/Banner'
import Content from '../Seo/Content'
import Contact from '../Node/Contact'
import Footer from '../Footer'

function Seo() {
  return (
    <div className='w-full h-screen bg-white'>
        <Banner/>
        <Content/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Seo