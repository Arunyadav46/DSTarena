import axios from '../Components/Axios/Axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// function Content3() {
 
//     const [visibleCards, setVisibleCards] = useState(7);

//   const loadMore = () => {
//     setVisibleCards(product.length);
//   };
   
//       const [product,setproduct] = useState([]);
//       const getData = ()=>{
//         const api = "/dashboard/API/home_page_project_list_api.php";
//         axios.get(api).then((data)=>{
//          console.log(data.data)
//          setproduct(data.data)
//         }).catch((err)=>{
//             console.log(err)
//         })
//       }
//       useEffect(()=>{
//         getData();
//       },[])
//     //   console.log(product)

//   return (
//     <div className="xl:py-10  xl:px-32 bg-[#F8F8F8]">
//     <div className=" px-4">
//       <div className="text-center mb-20">
//       <div className='flex items-center mb-5 justify-center gap-5'>
//                       <img src="https://manfood.in/images/line2.png" alt="" /> 
//                       <h2 className='text-[#0E53BE] text-xl text-center font-semibold' >Our Projects</h2>
//                      <img src="https://manfood.in/images/line1.png" alt="" /> 
//                       </div>
//         <h3 className="text-3xl font-semibold">
//           Proud projects that <span className="text-blue-600">make us stand out</span>
//         </h3>
//       </div>


//       {/* Project Grid */}

//       <div className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
//         {product.slice(1, visibleCards).map((elem, index) => (

//           <div key={index} className="bg-white min-h-[50vh] shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
//               <h2 className='text-3xl '>{elem.branch}</h2>
//             <img src={elem.image} alt={elem.title} className="w-full h-[30vh]"/>
//             <div className="p-4">
//             <p className="text-sm text-gray-500 mb-2 font-semibold"> <span className='line-through mr-5'>₹{elem.base_price}</span> ₹{elem.sale_price}</p>
//               <h6 className="text-lg font-semibold">{elem.project_name}</h6>
//               <p className="text-sm text-gray-700 mb-4 text-justify">
//                 {/* This case study focuses on core modernization and technological evolution. */}
//               </p>
//               <hr />
//               <div className="flex items-center text-blue-600 font-semibold">
//                 {/* <Link
//                   className="mt-5 text-center text-white rounded-md bg-[#086AD8] px-2 py-2 border-2 w-full"
//                   to="/project/det"
//                 >
//                   View Details
//                 </Link> */}
//                 <Link
//                   className="mt-5 text-center text-white rounded-md bg-[#086AD8] px-2 py-2 border-2 w-full"
//                   to={`/project/${elem.project_id}`}
//                 >
//                   View Details
//                 </Link>
//               </div>
          
//             </div>
//             <h2 className='px-3 absolute top-0 right-0 py-2 bg-red-600 text-white rounded-md'>{elem.discount}% OFF</h2>
//           </div>
          
//         ))}
//       </div>
//       {product.length > 6 && visibleCards < product.length && (
//         <div className="text-center mt-5">
//           <button
//             className="bg-[#086AD8] text-white px-4 py-2 rounded-md"
//             onClick={loadMore}
//           >
//             Load More
//           </button>
//         </div>
//       )}
      
    
//     </div>
//   </div>
//   )
// }

// export default Content3


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function Content3() {
//   const [products, setProducts] = useState([]);
//   const [branchData, setBranchData] = useState({});
//   const [currentPage, setCurrentPage] = useState({});

//   const getData = () => {
//     const api = "/dashboard/API/home_page_project_list_api.php";
//     axios.get(api).then((data) => {
//       setProducts(data.data);

//       // Categorize by branch and initialize pagination
//       const groupedData = {};
//       const pages = {};
//       data.data.forEach((item) => {
//         if (!groupedData[item.branch]) {
//           groupedData[item.branch] = [];
//           pages[item.branch] = 1;
//         }
//         groupedData[item.branch].push(item);
//       });
//       setBranchData(groupedData);
//       setCurrentPage(pages);
//     }).catch((err) => {
//       console.log(err);
//     });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handlePageChange = (branch, direction) => {
//     setCurrentPage((prev) => ({
//       ...prev,
//       [branch]: prev[branch] + direction
//     }));
//   };

//   return (
//     <div className="xl:py-10 xl:px-32 bg-[#F8F8F8]">
//       <div className="px-4">
//         <div className="text-center mb-20">
//           <div className='flex items-center mb-5 justify-center gap-5'>
//             <img src="https://manfood.in/images/line2.png" alt="" />
//             <h2 className='text-[#0E53BE] text-xl font-semibold'>Our Projects</h2>
//             <img src="https://manfood.in/images/line1.png" alt="" />
//           </div>
//           <h3 className="text-3xl font-semibold">Proud projects that <span className="text-blue-600">make us stand out</span></h3>
//         </div>

//         {Object.keys(branchData).map((branch) => {
//           const startIndex = (currentPage[branch] - 1) * 6;
//           const visibleProjects = branchData[branch].slice(startIndex, startIndex + 6);

//           return (
//             <div key={branch} className="mb-16">
//               <h2 className="text-3xl text-center text-blue-600 font-bold mb-8">{branch}</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
//                 {visibleProjects.map((elem, index) => (
//                   <div key={index} className="bg-white min-h-[50vh] shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
//                     <img src={elem.image} alt={elem.title} className="w-full h-[30vh]" />
//                     <div className="p-4">
//                       <p className="text-sm text-gray-500 mb-2 font-semibold"> <span className='line-through mr-5'>₹{elem.base_price}</span> ₹{elem.sale_price}</p>
//                       <h6 className="text-lg font-semibold">{elem.project_name}</h6>
//                       <hr />
//                       <div className="flex items-center text-blue-600 font-semibold">
//                         <Link className="mt-5 text-center text-white rounded-md bg-[#086AD8] px-2 py-2 border-2 w-full" to={`/project/${elem.project_id}`}>View Details</Link>
//                       </div>
//                     </div>
//                     <h2 className='px-3 absolute top-0 right-0 py-2 bg-red-600 text-white rounded-md'>{elem.discount}% OFF</h2>
//                   </div>
//                 ))}
//               </div>

//               {/* Pagination */}
//               <div className="text-center mt-5 flex justify-center items-center gap-4">
//                 {currentPage[branch] > 1 && (
//                   <button onClick={() => handlePageChange(branch, -1)} className="text-blue-600">Prev</button>
//                 )}
//                 <span className="text-blue-600">{currentPage[branch]}</span>
//                 {currentPage[branch] * 6 < branchData[branch].length && (
//                   <button onClick={() => handlePageChange(branch, 1)} className="text-blue-600">Next</button>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Content3;

// function Content3() {
//   const [products, setProducts] = useState([]);
//   const [branchData, setBranchData] = useState({});
//   const [currentPage, setCurrentPage] = useState({});

//   const getData = () => {
//     const api = "/dashboard/API/home_page_project_list_api.php";
//     axios.get(api).then((response) => {
//       const data = response.data;
//       setProducts(data);

//       // Categorize by branch and initialize pagination
//       const groupedData = {};
//       const pages = {};
//       data.forEach((item) => {
//         if (item.branch) {
//           if (!groupedData[item.branch]) {
//             groupedData[item.branch] = [];
//             pages[item.branch] = 1;
//           }
//           groupedData[item.branch].push(item);
//         }
//       });
//       setBranchData(groupedData);
//       setCurrentPage(pages);
//     }).catch((err) => {
//       console.log(err);
//     });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handlePageChange = (branch, direction) => {
//     setCurrentPage((prev) => ({
//       ...prev,
//       [branch]: prev[branch] + direction
//     }));
//   };

//   return (
//     <div className="xl:py-10 xl:px-32 bg-[#F8F8F8]">
//       <div className="px-4">
//         <div className="text-center mb-20">
//           <div className='flex items-center mb-5 justify-center gap-5'>
//             <img src="https://manfood.in/images/line2.png" alt="" />
//             <h2 className='text-[#0E53BE] text-xl font-semibold'>Our Projects</h2>
//             <img src="https://manfood.in/images/line1.png" alt="" />
//           </div>
//           <h3 className="text-3xl font-semibold">Proud projects that <span className="text-blue-600">make us stand out</span></h3>
//         </div>

//         {Object.keys(branchData).map((branch) => {
//           const startIndex = (currentPage[branch] - 1) * 6;
//           const visibleProjects = branchData[branch].slice(startIndex, startIndex + 6);

//           return (
//             <div key={branch} className="mb-16">
//               <h2 className="text-3xl text-center text-blue-600 font-bold mb-8">{branch}</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
//                 {visibleProjects.map((elem, index) => (
//                   <div key={index} className="bg-white min-h-[50vh] shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
//                     <img src={elem.image} alt={elem.title} className="w-full h-[30vh]" />
//                     <div className="p-4">
//                       <p className="text-sm text-gray-500 mb-2 font-semibold"> <span className='line-through mr-5'>₹{elem.base_price}</span> ₹{elem.sale_price}</p>
//                       <h6 className="text-lg font-semibold">{elem.project_name}</h6>
//                       <hr />
//                       <div className="flex items-center text-blue-600 font-semibold">
//                         <Link className="mt-5 text-center text-white rounded-md bg-[#086AD8] px-2 py-2 border-2 w-full" to={`/project/${elem.project_id}`}>View Details</Link>
//                       </div>
//                     </div>
//                     <h2 className='px-3 absolute top-0 right-0 py-2 bg-red-600 text-white rounded-md'>{elem.discount}% OFF</h2>
//                   </div>
//                 ))}
//               </div>

//               {/* Pagination */}
//               <div className="text-center mt-5 flex justify-center items-center gap-4">
//                 {currentPage[branch] > 1 && (
//                   <button onClick={() => handlePageChange(branch, -1)} className="text-blue-600">Prev</button>
//                 )}
//                 <span className="text-blue-600">{currentPage[branch]}</span>
//                 {currentPage[branch] * 6 < branchData[branch].length && (
//                   <button onClick={() => handlePageChange(branch, 1)} className="text-blue-600">Next</button>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Content3;




// function Content3() {
//   const [products, setProducts] = useState([]);
//   const [branchData, setBranchData] = useState({});
//   const [currentPage, setCurrentPage] = useState({});

//   const getData = () => {
//     const api = "http://netkhoj.com/dstarena/dashboard/API/home_page_project_list_api.php";
//     axios.get(api).then((response) => {
//       const data = Array.isArray(response.data) ? response.data : [];
//       setProducts(data);

//       // Categorize by branch and initialize pagination
//       const groupedData = {};
//       const pages = {};
//       data.forEach((item) => {
//         const branchKey = item.branch || 'Unknown';
//         if (!groupedData[branchKey]) {
//           groupedData[branchKey] = [];
//           pages[branchKey] = 1;
//         }
//         groupedData[branchKey].push(item);
//       });
//       setBranchData(groupedData);
//       setCurrentPage(pages);
//     }).catch((err) => {
//       console.error('API Error:', err);
//     });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handlePageChange = (branch, direction) => {
//     setCurrentPage((prev) => ({
//       ...prev,
//       [branch]: prev[branch] + direction
//     }));
//   };

//   return (
//     <div className="xl:py-10 xl:px-32 bg-[#F8F8F8]">
//       <div className="px-4">
//         <div className="text-center mb-20">
//           <div className='flex items-center mb-5 justify-center gap-5'>
//             <img src="https://manfood.in/images/line2.png" alt="" />
//             <h2 className='text-[#0E53BE] text-xl font-semibold'>Our Projects</h2>
//             <img src="https://manfood.in/images/line1.png" alt="" />
//           </div>
//           <h3 className="text-3xl font-semibold">Proud projects that <span className="text-blue-600">make us stand out</span></h3>
//         </div>

//         {Object.keys(branchData).map((branch) => {
//           const startIndex = (currentPage[branch] - 1) * 6;
//           const visibleProjects = branchData[branch].slice(startIndex, startIndex + 6);

//           return (
//             <div key={branch} className="mb-16">
//               <h2 className="text-3xl text-center text-blue-600 font-bold mb-8">{branch}</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
//                 {visibleProjects.map((elem, index) => (
//                   <div key={index} className="bg-white min-h-[50vh] shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
//                     <img src={elem.image} alt={elem.project_name} className="w-full h-[30vh]" />
//                     <div className="p-4">
//                       <p className="text-sm text-gray-500 mb-2 font-semibold"> <span className='line-through mr-5'>₹{elem.base_price}</span> ₹{elem.sale_price}</p>
//                       <h6 className="text-lg font-semibold">{elem.project_name}</h6>
//                       <hr />
//                       <div className="flex items-center text-blue-600 font-semibold">
//                         <Link className="mt-5 text-center text-white rounded-md bg-[#086AD8] px-2 py-2 border-2 w-full" to={`/project/${elem.project_id}`}>View Details</Link>
//                       </div>
//                     </div>
//                     <h2 className='px-3 absolute top-0 right-0 py-2 bg-red-600 text-white rounded-md'>{elem.discount}% OFF</h2>
//                   </div>
//                 ))}
//               </div>

//               {/* Pagination */}
//               <div className="text-center mt-5 flex justify-center items-center gap-4">
//                 {currentPage[branch] > 1 && (
//                   <button onClick={() => handlePageChange(branch, -1)} className="text-blue-600">Prev</button>
//                 )}
//                 <span className="text-blue-600">{currentPage[branch]}</span>
//                 {currentPage[branch] * 6 < branchData[branch].length && (
//                   <button onClick={() => handlePageChange(branch, 1)} className="text-blue-600">Next</button>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Content3;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// function Content3() {
//   const [product, setProduct] = useState([]);
//   const [visibleCards, setVisibleCards] = useState({});

//   const getData = () => {
//     const api = "/dashboard/API/home_page_project_list_api.php";
//     axios
//       .get(api)
//       .then((data) => {
//         console.log(data.data);
//         setProduct(data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const loadMore = (branch) => {
//     setVisibleCards((prev) => ({
//       ...prev,
//       [branch]: (prev[branch] || 6) + 6,
//     }));
//   };

//   // Grouping projects by branch
//   const groupedProjects = product.reduce((acc, project) => {
//     const branch = project.branch || "Unknown";
//     if (!acc[branch]) acc[branch] = [];
//     acc[branch].push(project);
//     return acc;
//   }, {});

//   return (
//     <div className="xl:py-10 xl:px-32 bg-[#F8F8F8]">
//       <div className="px-4">
//         <div className="text-center mb-20">
//           <div className="flex items-center mb-5 justify-center gap-5">
//             <img src="https://manfood.in/images/line2.png" alt="" />
//             <h2 className="text-[#0E53BE] text-xl font-semibold">Our Projects</h2>
//             <img src="https://manfood.in/images/line1.png" alt="" />
//           </div>
//           <h3 className="text-3xl font-semibold">
//             Proud projects that <span className="text-blue-600">make us stand out</span>
//           </h3>
//         </div>

//         {/* Displaying Projects by Branch */}
//         {Object.keys(groupedProjects).map((branch) => (
//           <div key={branch} className="mb-16">
//             <h2 className="text-3xl font-bold mb-8">{branch}</h2>
//             <div className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
//               {groupedProjects[branch].slice(0, visibleCards[branch] || 6).map((elem, index) => (
//                 <div key={index} className="bg-white min-h-[50vh] shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
//                   <img src={elem.image} alt={elem.project_name} className="w-full h-[30vh]" />
//                   <div className="p-4">
//                     <p className="text-sm text-gray-500 mb-2 font-semibold">
//                       <span className="line-through mr-5">₹{elem.base_price}</span> ₹{elem.sale_price}
//                     </p>
//                     <h6 className="text-lg font-semibold">{elem.project_name}</h6>
//                     <hr />
//                     <div className="flex items-center text-blue-600 font-semibold">
//                       <Link className="mt-5 text-center text-white rounded-md bg-[#086AD8] px-2 py-2 border-2 w-full" to={`/project/${elem.project_id}`}>
//                         View Details
//                       </Link>
//                     </div>
//                   </div>
//                   <h2 className="px-3 absolute top-0 right-0 py-2 bg-red-600 text-white rounded-md">{elem.discount}% OFF</h2>
//                 </div>
//               ))}
//             </div>

//             {/* Load More Button */}
//             {groupedProjects[branch].length > (visibleCards[branch] || 6) && (
//               <div className="text-center mt-5">
//                 <button className="bg-[#086AD8] text-white px-4 py-2 rounded-md" onClick={() => loadMore(branch)}>
//                   Load More
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Content3;




// function Content3() {
//   const [product, setProduct] = useState([]);
//   const [visibleCards, setVisibleCards] = useState({});

//   const getData = () => {
//     const api = "/dashboard/API/home_page_project_list_api.php";
//     axios
//       .get(api)
//       .then((data) => {
//         console.log(data.data);
//         setProduct(data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const loadMore = (branch) => {
//     setVisibleCards((prev) => ({
//       ...prev,
//       [branch]: (prev[branch] || 6) + 6,
//     }));
//   };

//   // Grouping projects by branch, ignoring the branch itself for mapping
//   const groupedProjects = product.reduce((acc, project, index) => {
//     const branch = project.branch || "Unknown";

//     // Skip the branch heading (0, 85, 170, 255 index)
//     if ([0, 85, 170, 255].includes(index)) {
//       if (!acc[branch]) acc[branch] = { heading: project.branch, projects: [] };
//     } else {
//       if (!acc[branch]) acc[branch] = { heading: branch, projects: [] };
//       acc[branch].projects.push(project);
//     }
//     return acc;
//   }, {});

//   return (
//     <div className="xl:py-10 xl:px-32 bg-[#F8F8F8]">
//       <div className="px-4">
//         <div className="text-center mb-20">
//           <div className="flex items-center mb-5 justify-center gap-5">
//             <img src="https://manfood.in/images/line2.png" alt="" />
//             <h2 className="text-[#0E53BE] text-xl font-semibold">Our Projects</h2>
//             <img src="https://manfood.in/images/line1.png" alt="" />
//           </div>
//           <h3 className="text-3xl font-semibold">
//             Proud projects that <span className="text-blue-600">make us stand out</span>
//           </h3>
//         </div>

//         {/* Displaying Projects by Branch */}
//         {Object.keys(groupedProjects).map((branch) => (
//           <div key={branch} className="mb-16">
//             {/* Display Branch Name as Heading */}
//             <h2 className="text-3xl font-bold mb-8">{groupedProjects[branch].heading}</h2>

//             {/* Project Grid */}
//             <div className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
//               {groupedProjects[branch].projects.slice(0, visibleCards[branch] || 6).map((elem, index) => (
//                 <div key={index} className="bg-white min-h-[50vh] shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
//                   <img src={elem.image} alt={elem.project_name} className="w-full h-[30vh]" />
//                   <div className="p-4">
//                     <p className="text-sm text-gray-500 mb-2 font-semibold">
//                       <span className="line-through mr-5">₹{elem.base_price}</span> ₹{elem.sale_price}
//                     </p>
//                     <h6 className="text-lg font-semibold">{elem.project_name}</h6>
//                     <hr />
//                     <div className="flex items-center text-blue-600 font-semibold">
//                       <Link className="mt-5 text-center text-white rounded-md bg-[#086AD8] px-2 py-2 border-2 w-full" to={`/project/${elem.project_id}`}>
//                         View Details
//                       </Link>
//                     </div>
//                   </div>
//                   <h2 className="px-3 absolute top-0 right-0 py-2 bg-red-600 text-white rounded-md">{elem.discount}% OFF</h2>
//                 </div>
//               ))}
//             </div>

//             {/* Load More Button */}
//             {groupedProjects[branch].projects.length > (visibleCards[branch] || 6) && (
//               <div className="text-center mt-5">
//                 <button className="bg-[#086AD8] text-white px-4 py-2 rounded-md" onClick={() => loadMore(branch)}>
//                   Load More
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Content3;




function Content3() {
  const [product, setProduct] = useState([]);
  const [visibleCards, setVisibleCards] = useState({});

  const getData = () => {
    const api = "/API/home_page_project_list_api.php";
    axios
      .get(api)
      .then((data) => {
        // console.log(data.data);
        setProduct(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const loadMore = (branch) => {
    setVisibleCards((prev) => ({
      ...prev,
      [branch]: (prev[branch] || 6) + 6,
    }));
  };

  // Grouping projects by branch using the index and assigning data to respective branches
  const groupedProjects = {};
  let currentBranch = "";

  product.forEach((item, index) => {
    // Check if the current index is for a branch heading
    if ([0, 85, 170, 255].includes(index)) {
      currentBranch = item.branch || "Unknown";
      if (!groupedProjects[currentBranch]) {
        groupedProjects[currentBranch] = {
          heading: item.branch,
          projects: [],
        };
      }
    } else {
      if (!groupedProjects[currentBranch]) {
        groupedProjects[currentBranch] = { heading: currentBranch, projects: [] };
      }
      groupedProjects[currentBranch].projects.push(item);
    }
  });

  return (
    <div className="xl:py-10 xl:px-32 bg-[#F8F8F8]">
      <div className="px-4">
        <div className="text-center mb-20">
          <div className="flex items-center mb-5 justify-center gap-5">
            <img src="https://manfood.in/images/line2.png" alt="" />
            <h2 className="text-[#0E53BE] text-xl font-semibold">Our Projects</h2>
            <img src="https://manfood.in/images/line1.png" alt="" />
          </div>
          <h3 className="text-3xl font-semibold">
            Proud projects that <span className="text-blue-600">make us stand out</span>
          </h3>
        </div>

        {/* Displaying Projects by Branch */}
        {Object.keys(groupedProjects).map((branch) => (
          <div key={branch} className="mb-16">
            {/* Display Branch Name as Heading */}
            <h2 className="text-3xl mx-3 font-bold mb-16">{groupedProjects[branch].heading}</h2>
            {/* Project Grid */}
            <div className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
              {groupedProjects[branch].projects.slice(0, visibleCards[branch] || 6).map((elem, index) => (
                <div id='img6' key={index} className="bg-white min-h-[50vh] shadow-lg rounded-lg overflow-hidden transform hover:scale-100 transition duration-300 ease-in-out">
                  <img id='img7' src={elem.image} alt={elem.project_name} className="w-full h-[30vh] transition duration-300 ease-in-ou" />
                  <div className="p-4">
                    <p className="text-sm text-gray-500 mb-2 font-semibold">
                      <span className="line-through mr-5">₹{elem.base_price}</span> ₹{elem.sale_price}
                    </p>
                    <h6 className="text-lg font-semibold">{elem.project_name}</h6>
                    <hr/>
                    <div className="flex items-center text-blue-600 font-semibold">
                      <Link className="mt-5 text-center text-white rounded-md bg-[#086AD8] px-2 py-2 border-2 w-full" to={`/project/${elem.project_id}`}>
                        View Details
                      </Link>
                    </div>
                  </div>
                  <h2 className="px-3 absolute top-0 right-0 py-2 bg-red-600 text-white rounded-md">{elem.discount}% OFF</h2>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {groupedProjects[branch].projects.length > (visibleCards[branch] || 6) && (
              <div className="text-center mt-10">
                <button className="bg-[#086AD8] text-white px-4 py-2 rounded-md" onClick={() => loadMore(branch)}>
                  Load More
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Content3;




