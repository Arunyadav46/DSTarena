import React from 'react'
import Banner from '../BlogLearnDetails.jsx/Banner'
import Content from '../BlogLearnDetails.jsx/Content'
import Contact from '../Node/Contact'
import Footer from "../Footer"


function BlogMore() {
  return (
    <div className='w-full h-[250vh] bg-[#FFFFFF]'>
        <Banner/>
        <Content/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default BlogMore