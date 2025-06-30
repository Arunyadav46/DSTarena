import axios from '../Axios/Axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function Content() {


  const { category } = useParams(); // 'android', 'dot-net', etc.
  // console.log(category)
  const [projectName, setprojectName] = useState([]);



  const getMBADet = () => {
    axios
      .get(`/API/header_cat_list_api/pending_pro_list_api.php?id=${category}`)
      .then((res) => {
        setprojectName(res.data || []);
        // console.log(res)
      })
      .catch((err) => console.log("API Error:", err));
  };
    useEffect(() => {
    getMBADet();
  }, [projectName,category]);
  // console.log(projectName)
  return (
    <div id="text9" className="flex flex-col w-full bg-[#FFFFFF] p-5 md:p-10 lg:p-5 xl:px-32">
      {projectName.map((elem, index) => (
        <div
          key={index}
          className="bg-white p-2 rounded-[10px] shadow-lg border-2 hover:border-[#6787FE] bg-blue-100 md:px-5 md:py-5 lg:px-8 lg:py-8 xl:px-8 xl:py-2 mb-5 flex justify-between items-center"
        >
          <div className="xl:w-[80%]">
            <h2 className="text-[10px] md:text-[14px] lg:text-[18px] xl:text-[16px] text-gray-800 mt-2">
              {elem.Project_name}
            </h2>
          </div>

          <p className="mt-2 text-[10px] md:text-[15px] lg:text-[18px] font-bold xl:text-2xl">
            {/* If you want to show price or ID, insert here */}
          </p>

          <Link
            to={`/MBA1/${elem.Project_name}`}
            className="text-[8px] md:text-[15px] lg:text-[18px] ml-4 bg-[#F0F3FF] xl:text-xl hover:bg-[#6787FE] hover:text-white text-[#6787FE] px-4 py-2 xl:px-6 xl:py-3 rounded-full"
          >
            Request
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Content