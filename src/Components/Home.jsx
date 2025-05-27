import React from 'react'
import Header2 from './Header2'
import Hero2 from './Hero2'
import Content from './Content'
import OurCompany from './OurCompany'
import Content2 from './Content2'
import Footer from './Footer'
import Marque from './Marque'
import Content3 from './Content3'
import img from "./assest2/icons8-matlab.webp"
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <>
    <Helmet>
       <meta name="description" content="Welcome to DSTarena - India's trusted student project and learning platform." />
        <meta name="keywords" content="DSTarena, student platform, training, internships, projects, online learning, B.Tech, M.Tech, MBA, MPharm" />
    </Helmet>
     <div>
        {/* <Header2/> */}
        <Hero2/>
        <Marque/>
        <OurCompany/>
        <Content img={img}/>
        <Content3/>
        <Content2/>
        <Footer/>
    </div>
    </>
   
  )
}

export default Home