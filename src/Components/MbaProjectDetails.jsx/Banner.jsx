import React, { useEffect, useState } from 'react'
import img from "../assest2/Banner.webp"
import axios from '../Axios/Axios';
import { useParams } from 'react-router-dom';


function Banner() {

  const {category} = useParams();
  // console.log(category)


  // const[projectName, setprojectName] = useState([])
  // const getMBADet = ()=>{
  //   axios.get(`/API/header_cat_list_api/pending_pro_list_api.php?id=${category}&branch=`)
  //   .then((data)=>{
  //     // console.log(data.data)
  //     setprojectName(data.data||[])
  //   }).catch((err)=>{
  //     console.log(err)
  //   })
  // }
  // useEffect(()=>{
  //   getMBADet()
  // },[projectName])
  // console.log(projectName)


  return (
    <div style={{
        background:`url(${img})`
    }} className='w-full h-[20vh] xl:h-[30vh] flex items-center justify-center'>
      
       <div>
        <h2 className='text-3xl md:text-2xl lg:text-3xl xl:text-5xl text-[#002FA6] font-semibold'>{category}</h2>
        <h4 className='text-center mt-5'>Home/Mba</h4>
        </div>
        

    </div>
  )
}

export default Banner