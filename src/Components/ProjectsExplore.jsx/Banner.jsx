import React, { useEffect, useState } from 'react'
import img from "../assest2/Banner.webp"
import { useParams } from 'react-router-dom'
import axios from '../Axios/Axios'

function Banner() {

 const[head, sethead] =  useState([])
  const{id} =  useParams()
  // console.log(id)

  const getBanner = ()=>{
    axios.get(`/API/single_project_details_api.php?id=${id}`)
    .then((data)=>{
      // console.log(data)
      sethead(data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getBanner()
  },[])
  


  return (
     <div style={{
            background:`url(${img})`
        }} className='w-full h-[35vh] flex items-center justify-center'>

      {head.map((elem,index)=>{
        return    <div key={index}>
            <h2 className='text-5xl text-[#002FA6] text-center font-semibold'>Projects Details</h2>
            <h4 className='text-center mt-5'>Home/{elem.language}/{elem.project_name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')}</h4>
          </div>
      })}
          
        </div>
  )
}

export default Banner