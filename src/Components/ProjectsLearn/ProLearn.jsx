import React, { useState } from 'react'
import Banner from '../ProjectsExplore.jsx/Banner'
import Content from '../ProjectsExplore.jsx/Content'
import Footer from '../Footer'
import Testimonal from '../ProjectsExplore.jsx/Testimonal'
import Contact from '../Node/Contact'
import Content2 from '../ProjectsExplore.jsx/Content2'


function ProLearn({setproductID ,setCartCount }) {
  const [tech, setTech] = useState("");
  return (
    <div className='w-full h-[200vh] bg-[#FFFFFF]'>
        <Banner/>
        <Content  setCartCount={setCartCount} setproductID={setproductID} setTech={setTech}/>
        <Content2 tech={tech}/>
       {/*<Testimonal/> */}
        <Contact/>
        <Footer/>
    </div>
  )
}

export default ProLearn