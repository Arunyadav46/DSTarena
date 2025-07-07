import axios from '../Axios/Axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Loading from '../Loading';



function Content() {

   const{category} = useParams()
//    console.log(category)

   const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

  const fetchProjects = () => {
   

    axios
      .get(`/API/header_cat_list_api/project_list_api.php?lang=${category}`)
      .then((res) => {
        // console.log(res)
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProjects();
  }, [projects]);   

     if (loading) return <Loading/>;
  return (
     <div className="p-5 xl:mx-32 xl:p-10 grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
      {projects.map((elem, index) => (
        <div id="img6" key={index} className="bg-white min-h-[50vh] shadow-lg rounded-lg overflow-hidden transform hover:scale-100 transition duration-300 ease-in-out" >
         <Link to={`/project/${elem.id}`}>
          <img id="img7" src={elem.image} alt={elem.project_name}
           className="w-full h-[30vh] object-cover transition duration-300 ease-in-out"
          />
          </Link>
          <div className="p-4">
            <p className="text-sm text-gray-500 mb-2 font-semibold">
              <span className="line-through mr-5">₹{elem.base}</span> ₹{elem.sale_price}
            </p>
            <h6 className="text-lg font-semibold">{elem.Project_name}</h6>
            <hr />
            <div className="flex items-center text-blue-600 font-semibold">
              <Link
                className="mt-5 text-center text-white rounded-md bg-[#086AD8] px-2 py-2 border-2 w-full"
                to={`/project/${elem.id}`}
              >
                View Details
              </Link>
            </div>
          </div>
         
        </div>
      ))}
    </div>
  )
}

export default Content