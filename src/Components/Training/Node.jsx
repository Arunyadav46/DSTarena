import React from 'react'
import Banner from '../Node/Banner'
import Contact from '../Node/Contact'
import Footer from '../Footer'
import Content from '../Node/Content'

import Testimonal from '../ProjectsExplore.jsx/Testimonal'
import { Helmet } from 'react-helmet'


function Node() {
  return (
  
    <>
    <Helmet>
        <title>DSTarena | Home</title>
        <meta name="description" content="Welcome to DSTarena - India's trusted student project and learning platform." />
        <meta name="keywords" content="DSTarena, student platform, training, internships, projects, online learning, B.Tech, M.Tech, MBA, MPharm" />
      </Helmet>

     <div className='w-full bg-white h-screen'>
        <Banner/>

        <Content/>
       {/* <Content2/>
        <Content3/>
        <Testimonal/> */}
        <Contact/>
        <Footer/>
    </div>
    </>
   
  )
}

export default Node