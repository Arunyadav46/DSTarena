import React, { useEffect, useRef, useState } from 'react'
import axios from '../Axios/Axios';
import { Link } from 'react-router-dom';



function Content2({tech}) {
  
 
    const scrollRef = useRef(null)

      const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

    const handleCardClick = (id) => {
    setproductID(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

    // console.log(tech)
    const [relatedProjects, setRelatedProjects] = useState([]);
     useEffect(() => {
    if (tech) {
      axios.get(`/API/Related-project.php?id=${tech}`)
        .then((res) => {
          setRelatedProjects(res.data);
        });
    }
  }, [tech]);
    return (
    <div className="p-6 pt-32 xl:px-32 ">
    <h2 className="text-3xl font-bold mb-4">Related Projects</h2>
    <hr />
  <div className="relative mt-6 px-1">
  {/* Left Button */}
  <button
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border rounded-full shadow-md p-2 hover:bg-gray-100"
    onClick={() => scroll('left')}
  >
    ◀
  </button>

  {/* Scrollable Card Container */}
  <div
    ref={scrollRef}
    className="flex overflow-x-auto gap-4 px-2 hide-scrollbar scroll-smooth"
  >
    {relatedProjects.map((project, index) => (
      <div
        key={index}
        className="w-[280px] h-[390px] bg-white shadow-md rounded-xl p-4 flex-shrink-0 hover:shadow-xl transition duration-300"
        onClick={() => handleCardClick(project.project_id)}
      >
        <Link to={`/project/${project.project_id}`}>
        <img
          src={project.image}
          alt={project.project_name}
          className="w-full h-[170px] object-cover rounded-md"
        />
        </Link>
        <div className="mt-3 flex flex-col justify-between h-[170px]">
          <h3 className="text-md font-semibold line-clamp-2">
            {project.project_name}
          </h3>

          <p className="text-blue-600 font-bold text-lg mt-2">
            ₹{project.sale_price}
            <span className="line-through text-sm text-gray-500 ml-2">
              ₹{project.base_price}
            </span>
          </p>

          <Link
            className="mt-3 text-center text-white rounded-md bg-[#086AD8] px-2 py-2 border-2 w-full hover:bg-blue-700 transition"
            to={`/project/${project.project_id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    ))}
  </div>

  {/* Right Button */}
  <button
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border rounded-full shadow-md p-2 hover:bg-gray-100"
    onClick={() => scroll('right')}
  >
    ▶
  </button>
</div>



  </div>
  )
}

export default Content2