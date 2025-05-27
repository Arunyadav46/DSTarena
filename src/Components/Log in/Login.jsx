import React from 'react'
import Banner from '../LoginDetails/Banner'
import Content from '../LoginDetails/Content'
import Contact from '../Node/Contact'
import Footer from '../Footer'
import { Helmet } from 'react-helmet'

function Login() {
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

export default Login