import React from 'react'
import Banner from '../ServiceWeb1/Banner'
import Contact from '../Node/Contact'
import Footer from '../Footer'
import Content from '../ServiceWeb1/Content'
import { Helmet } from 'react-helmet'

function ServiceWeb() {
  return (

    <>
       <Helmet>
        <title>DSTarena | Home</title>
        <meta name="description" content="Welcome to DSTarena - India's trusted student project and learning platform." />
        <meta name="keywords" content="DSTarena, student platform, training, internships, projects, online learning, B.Tech, M.Tech, MBA, MPharm" />
      </Helmet>
  
    <div>
        <Banner/>
        <Content/>
        <Contact/>
        <Footer/>
    </div>
    </>
    
  )
}

export default ServiceWeb