import React from 'react'
import Banner from '../MbaProjectDetails.jsx/Banner'
import Content from '../MbaProjectDetails.jsx/Content'
import Contact from '../Node/Contact'
import Footer from '../Footer'
import { Helmet } from 'react-helmet'

function MBA() {
  return (

    <>
  <Helmet>
        <title>DSTarena | Home</title>
        <meta name="description" content="Welcome to DSTarena - India's trusted student project and learning platform." />
        <meta name="keywords" content="DSTarena, student platform, training, internships, projects, online learning, B.Tech, M.Tech, MBA, MPharm" />
 </Helmet>

     <div className='w-full h-screen bg-[#FFFFFF]'>
        <Banner/>
        <Content/>
        <Contact/>
        <Footer/>
    </div>
    </>
   
  )
}

export default MBA