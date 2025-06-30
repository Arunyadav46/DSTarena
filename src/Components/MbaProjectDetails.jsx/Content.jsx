import axios from '../Axios/Axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';


function Content() {
 
  
  const {category} = useParams();
  
  // console.log(category)
  const location = useLocation();

  const[projectName, setprojectName] = useState([])
  const [branch, setBranch] = useState(""); // Add this state to manage branch

    // Extract branch from URL
    
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const branchValue = queryParams.get("branch") || "";
    setBranch(branchValue);
  }, [location]);
  

  const getMBADet = ()=>{

    const branchParam = branch ? `&branch=${branch}` : "&branch=";
    axios.get(`/API/header_cat_list_api/pending_pro_list_api.php?id=${category}${branchParam}`)
    .then((data)=>{
      // console.log(data.data)
      setprojectName(data.data||[])
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getMBADet()
  },[projectName,branch])
  // console.log(projectName)


  return (
    <div className="w-full  bg-[#FFFFFF] p-5 md:p-10 lg:p-5   xl:px-32">
      <h2 className='text-xl mt-10 mb-10 md:text-2xl lg:text-3xl md:mt-10  xl:text-4xl text-center xl:mt-20 xl:mb-20 font-semibold'>Projects for  <span className='text-[#002FA6]'>{category} </span></h2>
    {/* {projectName.map((elem,index) => (
      
      <div key={index} className="bg-white  p-2 bg-white rounded-[10px] shadow-lg  border-2 hover:border-[#6787FE]  bg-blue-100 rounded-lg md:px-5 md:py-5 lg:px-8 lg:py-8  xl:px-8 xl:py-2 mb-5 flex justify-between items-center" >
        
        <div className='xl:w-[80%]'>
          <h2 className="text-[10px] md:text-[14px] lg:text-[18px] xl:text-[16px] xl:text-gray-800 mt-2">{elem.Project_name}</h2>
        </div>
          <p className="mt-2 text-[10px] md:text-[15px] lg:text-[18px] font-bold xl:text-2xl"></p>
        
        
        <Link to={`/MBA1/${elem.Project_name}`} className="text-[8px] md:text-[15px] lg:text-[18px]  ml-4 bg-[#F0F3FF] xl:text-xl hover:bg-[#6787FE] hover:text-white text-[#6787FE] px-4 py-2 xl:px-6 xl:py-3 rounded-full">Request</Link>

      </div>
    ))} */}
    {projectName.map((elem, index) => (
  <div
    key={index}
    className="bg-white p-4 rounded-[10px] shadow-lg border-2 hover:border-[#6787FE] bg-blue-100 mb-5 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0"
  >
    <div className="sm:w-[80%] text-center sm:text-left">
      <h2 className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-gray-800">
        {elem.Project_name}
      </h2>
    </div>

    <Link
      to={`/MBA1/${elem.Project_name}`}
      className="text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px] bg-[#F0F3FF] hover:bg-[#6787FE] hover:text-white text-[#6787FE] px-4 py-2 sm:px-6 sm:py-2 rounded-full"
    >
      Request
    </Link>
  </div>
))}

  </div>
  )
}

export default Content