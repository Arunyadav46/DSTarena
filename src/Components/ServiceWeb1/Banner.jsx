import React, { useEffect, useState } from 'react'
import img from "../assest2/Banner.webp"
import axios from '../Axios/Axios'
import { useParams } from 'react-router-dom'

function Banner() {

  const[Banner,getbanner1] = useState([])
  const{id} =  useParams()
 
  const getbanner = ()=>{
    axios.get(`/API/services.php?id=${id}`)
    .then((data)=>{
      // console.log(data)
      getbanner1(data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
 
  useEffect(()=>{
    getbanner()
  },[Banner])

  return (
     <div style={{
                    background:`url(${img})`
                }} className='w-full h-[35vh] flex items-center justify-center'>
                  {Banner.map((elem,index)=>{
                    return  <div key={index}>
                    <h2 className='text-3xl md:text-5xl text-center text-[#002FA6] font-semibold'>{elem.category}</h2>
                    <h4 className='text-center mt-5'>Home/{elem.category}</h4>
                    </div>
                  })}
                    
                </div>
  )
}

export default Banner