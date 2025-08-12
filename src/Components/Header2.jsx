import React, { useEffect } from 'react'
import img from "../assets/DstLogo.webp"
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from '../Components/Axios/Axios';
import { FaWhatsapp, FaPhone } from "react-icons/fa";

function Header2({ setCartAllProduct , cartCount }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setDropdownOpen5] = useState(false);
  const [isDropdownOpen6, setDropdownOpen6] = useState(false);
  const [isDropdownOpen7, setDropdownOpen7] = useState(false);
  const [isDropdownOpen8, setDropdownOpen8] = useState(false);
  const [isDropdownOpen9, setDropdownOpen9] = useState(false);

  //menu bar vale dropdown hai ye 
  const [menuOpen, setMenuOpen] = useState(false);
  const [trainingDropdownOpen, setTrainingDropdownOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [mbaDropdownOpen, setMbaDropdownOpen] = useState(false);
  const [nursingDropdownOpen, setNursingDropdownOpen] = useState(false);
  const [mtechDropdownOpen, setMtechDropdownOpen] = useState(false);
  const [btechDropdownOpen, setBtechDropdownOpen] = useState(false);
  const [mpharmDropdownOpen, setMpharmDropdownOpen] = useState(false);


  const navigate = useNavigate();

  const handleMenuClick = (path) => {
    setMenuOpen(false);
    navigate(path);
  };


  const handleLogout = () => {
  const userId = localStorage.getItem('userId');

  // Get all cart items
  const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Filter out current user's cart items
  const updatedCart = existingCart.filter(item => item.userId !== userId);

  // Update cartItems in localStorage
  localStorage.setItem('cartItems', JSON.stringify(updatedCart));

    // Step 4: Clear the cart from state (for UI)
  setCartAllProduct([]);

  // Now remove the userId from storage
  localStorage.removeItem('userId');
 
  // Redirect to login
  navigate('/login');
};


  //if user Login so see Dashboard uske liye
  const userId = localStorage.getItem('userId');
  // console.log(userId)

  const[user,setuser] = useState([]);
  const getuserData = ()=>{
    axios.get(`/API/dashboard/profile_update_api.php?id=${userId}`)
    .then((data)=>{
      // console.log(data.data)
      setuser(data.data || [])
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getuserData();
  },[userId])
   
  //Header API Data
  const[Mba, setMba] = useState([])

  const getMBAProject = ()=>{
    axios.get("/API/header_category_api/mba_list_api.php")
    .then((data)=>{
      // console.log(data.data)
      setMba(data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getMBAProject();
  },[])
  // console.log(Mba);

  //Header mpharmn API data
  const[Mpharm, setMpharm] = useState([]);

  const getMpharmproject = ()=>{
    axios.get('/API/header_category_api/MPharma_list_api.php')
    .then((data)=>{
      // console.log(data.data)
      setMpharm(data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getMpharmproject();
  },[])

  // console.log(Mpharm)
  //Nursing Header API
  const[Nurse, getnurse] = useState([]);
  const getNursingProject = ()=>{
    axios.get('/API/header_category_api/nursing_list_api.php')
    .then((data)=>{
      // console.log(data.data)
      getnurse(data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getNursingProject()
  },[])
  // console.log(Nurse)

  //ME/MTECh Header API

  const[Mtech, getMtech] = useState([]);
  const getMtechProject = ()=>{
    axios.get('/API/header_category_api/Me_mtech_list_api.php')
    .then((data)=>{
      // console.log(data.data)
      getMtech(data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  // console.log(Mtech)

  useEffect(()=>{
    getMtechProject()
  },[])

  //Software Project Header API
  const[soft, setsoft] = useState([])
  const getSoftware = ()=>{
     axios.get('/API/header_category_api/software_service_list_api.php')
     .then((data)=>{
      // console.log(data)
      setsoft(data.data)
     }).catch((err)=>{
      console.log(err)
     })
  }
  useEffect(()=>{
    getSoftware()
  },[])

  //BE/BTech Projects
 const[Btech, setbtech] = useState([]);
  const getBtechProject = ()=>{
    axios.get('/API/header_category_api/Be_Btech_list_api.php')
    .then((data)=>{
      // console.log(data)
      setbtech(data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getBtechProject()
  },[])

  //Service Header API

  const[service, setservice] = useState([]);
  const getService = ()=>{
    axios.get('/API/header_category_api/service.php')
    .then((data)=>{
      // console.log(data)
      setservice(data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getService();
  },[])
  // console.log(service)

  return (
    <header>
      {/* Top Bar */}
      <div className="lg:h-[17vh]  bg-red-400 xl:flex  xl:items-center xl:justify-between md:flex md:justify-between  md:items-center md:py-4 bg-white shadow-md p-2 md:px-10 lg:px-20 xl:px-36 bg-red-100">
        <div className="flex items-center justify-between p-1  py-3 lg:py-4">
       
          <div className="w-48 flex gap-2 items-center md:w-52 lg:w-56 xl:w-56">
  <a href="/">
    <img
      src={img}
      alt="DSTARENA Logo"
      width="224"  // Width in pixels (adjust to your actual logo size)
      height="56"  // Height in pixels (adjust to your actual logo size)
      className="w-full h-full"
    />
  </a>
  <h2 className="font-semibold text-2xl lg:text-3xl">DSTArena</h2>
          </div>
        
         {/* mobile menu */}
        <div className="lg:hidden flex   cursor-pointer" onClick={() => setMenuOpen(true)}>
            <i className=" text-2xl fas fa-bars"></i>
          </div>
        </div>

       

          
        {/* Contact Info */}
    <div className="hidden lg:flex space-x-6  w-[55%]">
      <div className="flex items-center w-[35%]   space-x-2 border-r-2">
        <span className="text-[#D2A98E] text-3xl fa fa-phone"></span>
        <div className='leading-relaxed'>
          <h6>9993897203</h6>
          <p className="text-sm text-[#333333]">dstarenainfo@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 w-[35%] border-r-2  leading-relaxed">
        <span className="text-3xl text-[#D2A98E] fa fa-map-marker-alt"></span>
        <div>
          <h6>121 malviya Nagar</h6>
          <p className="text-sm text-[#333333]">Bhopal MP</p>
        </div>
      </div>
      <div className="flex items-center w-[30%] border-r-2   space-x-4 leading-relaxed">
      <i className="text-3xl text-[#D2A98E] ri-message-line"></i>
        <div>
          <h6>Online 24/7</h6>
          {/* <p className="text-sm text-[#333333]">9993897203</p> */}
          <p>Available</p>
        </div>
      </div>

      
      {/* <Link to="/cart" type="button" className="relative inline-flex items-center w-12 h-10 mt-4 px-3 py-0 rounded-full text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
         <i className="text-xl ri-shopping-cart-2-line"></i>
        <span className="sr-only">Notifications</span>
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">2</div>
     </Link> */}
    </div>
    {/* Social Links */}
      {userId &&  user.length > 0 ? (
  user.map((elem, index) => (
    <div key={index} className="pr-3 relative group">
      <h2 className="hidden md:block text-[17px] cursor-pointer flex items-center">
        Hello {elem.fname} <i className="ri-arrow-drop-down-line"></i>
      </h2>

      <div className="absolute top-full left-0 mt-2 w-40 bg-[#2A4356] text-white rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
        <Link
          to="/dashboard/home"
          className="block px-4 py-2 hover:bg-[#1e2f3a] transition"
        >
          Dashboard
        </Link>
        <Link
          to="/dashboard/profile"
          className="block px-4 py-2 hover:bg-[#1e2f3a] transition"
        >
          Profile
        </Link>
        <Link
          to="/dashboard/refer"
          className="block px-4 py-2 hover:bg-[#1e2f3a] transition"
        >
          Referral
        </Link>
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 hover:bg-[#1e2f3a] transition"
        >
          Logout
        </button>
      </div>
    </div>
  ))
) : (
  <div className="hidden md:block pr-3 relative group">
    <h2 className="text-[17px]">
      My Account <i className="ri-arrow-drop-down-line"></i>
    </h2>
    <p className="absolute top-full left-0 mt-1 text-white bg-[#2A4356] px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition duration-300">
      <Link to="/login">Login</Link>
    </p>
  </div>
)}

    <div className="hidden lg:flex relative md:space-x-2 md:mr-5">
    <Link to="/cart" type="button" className="absolut left-[15%] top-[-100%] inline-flex items-center w-12 h-11 mr-4 px-3 py-0 rounded-full text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
   <i className="text-2xl ri-shopping-cart-2-line"></i>
   <span className="sr-only">Notifications</span>
  <div className="absolute top-[5% left-[50%] inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{cartCount}</div>
   </Link>
   
  {/* {userId &&  user.length > 0 ? (
  user.map((elem, index) => (
    <div key={index} className="pr-3 relative group">
      <h2 className="text-[15px] cursor-pointer flex items-center">
        Hello {elem.fname} <i className="ri-arrow-drop-down-line"></i>
      </h2>

      <div className="absolute top-full left-0 mt-2 w-40 bg-[#2A4356] text-white rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
        <Link
          to="/dashboard/home"
          className="block px-4 py-2 hover:bg-[#1e2f3a] transition"
        >
          Dashboard
        </Link>
        <Link
          to="/dashboard/profile"
          className="block px-4 py-2 hover:bg-[#1e2f3a] transition"
        >
          Profile
        </Link>
        <Link
          to="/dashboard/refer"
          className="block px-4 py-2 hover:bg-[#1e2f3a] transition"
        >
          Referral
        </Link>
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 hover:bg-[#1e2f3a] transition"
        >
          Logout
        </button>
      </div>
    </div>
  ))
) : (
  <div className="pr-3 relative group">
    <h2 className="text-[15px]">
      My Account <i className="ri-arrow-drop-down-line"></i>
    </h2>
    <p className="absolute top-full left-0 mt-1 text-white bg-[#2A4356] px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition duration-300">
      <Link to="/login">Login</Link>
    </p>
  </div>
)} */}

   
      {/* <a href="https://twitter.com/" target="_blank" className="text-gray-500 hover:text-blue-500">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://facebook.com/" target="_blank" className="text-gray-500 hover:text-blue-500">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://instagram.com/" target="_blank" className="text-gray-500 hover:text-pink-500">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://linkedin.com/" target="_blank" className="text-gray-500 hover:text-blue-700">
        <i className="fab fa-linkedin"></i>
      </a> */}
    </div>
      </div>

      {/* Mobile Menu */}
      {/* {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="w-full bg-blue-600 h-full ">
            Close Button
            <div className="p-5 bg-white flex justify-between items-center mb-5">
              <div className='flex items-center gap-2'>
              <img className='w-16' src={img} alt="" />
              <h2 className="text-black text-2xl font-bold">DSTArena</h2>
              </div>
        

              <button onClick={() => setMenuOpen(false)}>
                <i className="text-black text-3xl fas fa-times"></i>
              </button>
            </div>

            Menu Items
            <ul className="text-white px-5 space-y-4">
              <li className="cursor-pointer px-4 py-2 text-xl border-b-2 border-indigo-500" onClick={() => handleMenuClick("/")}>Home</li>
              <li className="cursor-pointer px-4 py-2 text-xl border-b-2 border-indigo-500 " onClick={() => handleMenuClick("/training")}>Training</li>
              <li className="cursor-pointer px-4 py-2 text-xl border-b-2 border-indigo-500" onClick={() => handleMenuClick("/service")}>Service</li>
              <li className="cursor-pointer px-4 py-2 text-xl border-b-2 border-indigo-500" onClick={() => handleMenuClick("/project")}>Projects</li>
              <li className="cursor-pointer px-4 py-2 text-xl border-b-2 border-indigo-500" onClick={() => handleMenuClick("/MBA")}>MBA Project</li>
              <li className="cursor-pointer px-4 py-2 text-xl border-b-2 border-indigo-500" onClick={() => handleMenuClick("/mpharm")}>MPharm Project</li>
              <li className="cursor-pointer px-4 py-2 text-xl border-b-2 border-indigo-500" onClick={() => handleMenuClick("/signup")}>Signup</li>
            </ul>
          </div>
        </div>
      )} */}

      {/* Mobile Menu */}
   {menuOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-[100]">
    <div className="w-full bg-blue-600 h-full">
      {/* Close Button */}
      <div className="p-5 bg-white flex justify-between items-center mb-5">
        <div className="flex items-center gap-2">
          <img className="w-16" src={img} alt="" />
          <h2 className="text-black text-2xl font-bold">DSTArena</h2>
        </div>
        <button onClick={() => setMenuOpen(false)}>
          <i className="text-black text-3xl fas fa-times"></i>
        </button>
      </div>

      {/* Menu Items */}
      <div
       className="max-h-[70vh]  overflow-y-auto -webkit-overflow-scrolling-touch  text-white"
       style={{ WebkitOverflowScrolling: "touch" }} // for iOS smooth scroll
>
      <ul className="text-white px-5  space-y-4">
        <li
          className="cursor-pointer px-4 py-2 text-xl border-b-2 border-indigo-500"
          onClick={() => handleMenuClick("/")}
        >
          Home
        </li>

        {/* Training Dropdown */}
        <li className="cursor-pointer px-4 py-2 text-xl border-b-2 border-indigo-600 relative">
          <div
            className="flex justify-between  items-center"
            onClick={() => setTrainingDropdownOpen(!trainingDropdownOpen)}
          >
            <span>Training</span>
            <i
              className={`fas fa-chevron-down transition-transform duration-300 ${
                trainingDropdownOpen ? "rotate-180" : ""
              }`}
            ></i>
          </div>

          {/* Dropdown links */}
          <ul
            className={`overflow-hidden transition-all duration-300 ${
              trainingDropdownOpen ? "max-h-auto mt-2 space-y-2" : "max-h-0"
            }`}
          >
            <li
              className="ml-4 p-2 text-lg border-b-2 border-indigo-500 hover:bg-red-100 pl-3 border-white"
              onClick={() => handleMenuClick("/training/java")}
            >
              Java Training
            </li>
            <li
              className="ml-4 p-2 border-b-2 text-lg  pl-3 border-white"
              onClick={() => handleMenuClick("/training/android")}
            >
              Android Training
            </li>
            <li
              className="ml-4 p-2 border-b-2 text-lg  pl-3 border-white"
              onClick={() => handleMenuClick("/training/matlab")}
            >
              Matlab Training
            </li>
            <li
              className="ml-4 p-2 border-b-2 text-lg  pl-3 border-white"
              onClick={() => handleMenuClick("/training/seo")}
            >
              SEO Training
            </li>
             <li
              className="ml-4 p-2 border-b-2 text-lg  pl-3 border-white"
              onClick={() => handleMenuClick("/training/vlsi")}
            >
              VLSI Design Training
            </li>
            <li
              className="ml-4 text-lg p-2 border-b-2 pl-3 border-white"
              onClick={() => handleMenuClick("/training/nodejs")}
            >
              Nodejs Syllabus
            </li>
             <li
              className="ml-4 text-lg p-2 border-b-2 pl-3 border-white"
              onClick={() => handleMenuClick("/training/phython")}
            >
              Python Syllabus
            </li>
             <li
              className="ml-4 text-lg p-2 border-b-2 pl-3 border-white"
              onClick={() => handleMenuClick("/training/embedded")}
            >
             Embeded System
            </li>
             <li
              className="ml-4 text-lg p-2 border-b-2 pl-3 border-white"
              onClick={() => handleMenuClick("/training/design")}
            >
             Website Design
            </li>
             <li
              className="ml-4 text-lg p-2 border-b-2 pl-3 border-white"
              onClick={() => handleMenuClick("/training/php")}
            >
             PHP & MySQL
            </li>


          </ul>
        </li>


       
        {/* Service Dropdown */}
        <li className="cursor-pointer px-4 py-2 text-xl border-b-2 border-indigo-600 relative">
  <div
    className="flex justify-between items-center"
    onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
  >
    <span>Service</span>
    <i
      className={`fas fa-chevron-down transition-transform duration-300 ${
        serviceDropdownOpen ? "rotate-180" : ""
      }`}
    ></i>
  </div>

  {/* Dropdown links */}
  <ul
    className={`transition-all duration-300 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 ${
      serviceDropdownOpen ? "max-h-60 mt-2 space-y-2" : "max-h-0"
    }`}
  >
  
  {service.map((elem,index)=>{
    return   <li
      className="ml-2 p-2 text-lg border-b-2 border-white hover:bg-red-100"
      onClick={() => handleMenuClick(`/service/${elem.id}`)}
    >
      {elem.category}
    </li>
  })}
   
  </ul>
        </li>

        {/* MBA Dropdown */}
      <li className="cursor-pointer px-4 py-2 text-xl border-b-2 border-indigo-600 relative">
  <div
    className="flex justify-between items-center"
    onClick={() => setMbaDropdownOpen(!mbaDropdownOpen)}
  >
    <span>MBA</span>
    <i
      className={`fas fa-chevron-down transition-transform duration-300 ${
        mbaDropdownOpen ? "rotate-180" : ""
      }`}
    ></i>
  </div>

  {/* Dropdown links */}
  <ul
    className={`transition-all duration-300 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 ${
      mbaDropdownOpen ? "max-h-60 mt-2 space-y-2" : "max-h-0"
    }`}
  >
    {Mba.map((elem,index)=>{
      return  <li
      className="ml-4 p-2 text-lg border-b-2 border-white hover:bg-red-100"
      onClick={() => handleMenuClick(`/Projects/${elem.category}`)}
    >
      {elem.category}
    </li>
    })}
    
  </ul>
        </li>



       {/* Nursing Dropdown */}
<li className="cursor-pointer px-4 py-2 text-xl border-b-2 border-indigo-600 relative">
  <div
    className="flex justify-between items-center"
    onClick={() => setNursingDropdownOpen(!nursingDropdownOpen)}
  >
    <span>Nursing</span>
    <i
      className={`fas fa-chevron-down transition-transform duration-300 ${
        nursingDropdownOpen ? "rotate-180" : ""
      }`}
    ></i>
  </div>

  {/* Dropdown links */}
  <ul
    className={`overflow-hidden transition-all duration-300 ${
      nursingDropdownOpen ? "max-h-auto mt-2 space-y-2" : "max-h-0"
    }`}
  >

    {/* {Nurse.map((elem,index)=>{
      return  <li
      className="ml-4 p-2 text-lg border-b-2 border-white hover:bg-red-100"
      onClick={() => handleMenuClick(`/Projects/${elem.category}`)}
    >
      {elem.category}
    </li>
    })} */}

    {Nurse.map((elem, index) => {
  // Safely handle undefined/null and capitalize each word
  const formatCategory = (str) => {
    if (!str) return "";
    return str
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <li
      key={index}
      className="ml-4 p-2 text-lg border-b-2 border-white hover:bg-red-100"
      onClick={() => handleMenuClick(`/Projects/${elem.category}`)}
    >
      {formatCategory(elem.category)}
    </li>
  );
})}

    
  </ul>
</li>



     {/* ME/MTech Dropdown */}
<li className="cursor-pointer px-4 py-2 text-xl border-b-2 border-indigo-600 relative">
  <div
    className="flex justify-between items-center"
    onClick={() => setMtechDropdownOpen(!mtechDropdownOpen)}
  >
    <span>ME/MTech</span>
    <i
      className={`fas fa-chevron-down transition-transform duration-300 ${
        mtechDropdownOpen ? "rotate-180" : ""
      }`}
    ></i>
  </div>

  {/* Dropdown links */}
  <ul
    className={`overflow-hidden transition-all duration-300 ${
      mtechDropdownOpen ? "max-h-auto mt-2 space-y-2" : "max-h-0"
    }`}
  >
    {Mtech.map((elem,index)=>{
      return   <li
      className="ml-4 p-2 text-lg border-b-2 border-white hover:bg-red-100"
      onClick={() => handleMenuClick(`/Projects/${elem.category}`)}
    >
      {elem.category}
    </li>
    })}
   
  </ul>
</li>
     
      {/* BE/BTech Dropdown */}
<li className="cursor-pointer px-4 py-2 text-xl border-b-2 border-indigo-600 relative">
  <div
    className="flex justify-between items-center"
    onClick={() => setBtechDropdownOpen(!btechDropdownOpen)}
  >
    <span>BE/BTech</span>
    <i
      className={`fas fa-chevron-down transition-transform duration-300 ${
        btechDropdownOpen ? "rotate-180" : ""
      }`}
    ></i>
  </div>

  {/* Dropdown links */}
  <ul
    className={`overflow-hidden transition-all duration-300 ${
      btechDropdownOpen ? "max-h-auto mt-2 space-y-2" : "max-h-0"
    }`}
  >
    {Btech.map((elem,index)=>{
      return  <li
      className="ml-4 p-2 text-lg border-b-2 border-white hover:bg-red-100"
      onClick={() => handleMenuClick(`/Projects/${elem.category}?branch=${elem.branch || ""}`)}
    >
      {elem.category}
    </li>
    })}
   
    
  </ul>
</li>





        {/* M.Pharm Dropdown */}
<li className="cursor-pointer px-4 py-2 text-xl border-b-2 border-indigo-600 relative">
  <div
    className="flex justify-between items-center"
    onClick={() => setMpharmDropdownOpen(!mpharmDropdownOpen)}
  >
    <span>M.Pharm</span>
    <i
      className={`fas fa-chevron-down transition-transform duration-300 ${
        mpharmDropdownOpen ? "rotate-180" : ""
      }`}
    ></i>
  </div>

  {/* Dropdown links */}
  <ul
    className={`overflow-hidden transition-all duration-300 ${
      mpharmDropdownOpen ? "max-h-auto mt-2 space-y-2" : "max-h-0"
    }`}
  >
    {Mpharm.map((elem,index)=>{
      return   <li
      className="ml-4 p-2 text-lg border-b-2 border-white hover:bg-red-100"
      onClick={() => handleMenuClick(`/Projects/${elem.category}`)}
    >
      {elem.category}
    </li>
    })}
   
  </ul>


</li>

<li className="cursor-pointer px-4 py-2 text-xl border-b-2 border-indigo-600 relative">
  <div
    className="flex justify-between items-center"
    onClick={() => setDropdownOpen8(!isDropdownOpen8)}
  >
    <span>Software</span>
    <i
      className={`fas fa-chevron-down transition-transform duration-300 ${
        isDropdownOpen8 ? "rotate-180" : ""
      }`}
    ></i>
  </div>

  {/* Dropdown links */}
  <ul
    className={`overflow-hidden transition-all duration-300 ${
      isDropdownOpen8 ? "max-h-auto mt-2 space-y-2" : "max-h-0"
    }`}
  >
    {soft.map((elem, index) => (
      <li
        key={index}
        className="ml-4 p-2 text-lg border-b-2 border-white hover:bg-red-100"
        onClick={() => handleMenuClick(`/productlist/${elem.category}`)}
      >
        {elem.category}
      </li>
    ))}
  </ul>
</li>

<li
          className="cursor-pointer px-4 py-2 text-xl border-b-2 border-indigo-500"
          onClick={() => handleMenuClick("/login")}
        >
          Login
        </li>
        <li
          className="cursor-pointer px-4 py-2 text-xl border-b-2 border-indigo-500"
          onClick={() => handleMenuClick("/signup")}
        >
          SignUp
        </li>




      </ul>
      </div>
    </div>
  </div>
)}

      {/* Navigation Menu for Desktop */}
      <nav className="bg-gradient-to-r from-blue-100 to-blue-100 relative lg:shadow-md lg:rounded-md py-3 px-8 md:px-10 lg:px-20 xl:px-44 hidden lg:block
">
        <ul className="flex items-center justify-between text-[16px]">
          <ul className='text-gray-1000'><Link to="/">Home</Link></ul>
          <li className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <Link to="/training">Training</Link>
            <i className="ri-arrow-down-s-line"></i>
            {isDropdownOpen && (
              <ul className="absolute  z-50 left-[-90%] w-[1480%] mb-15 mt-1 w-52 mx-[-20px] bg-white grid grid-cols-3 text-gray-900 shadow-lg rounded-md overflow-hidden">
                <li className="px-4 py-2 text-gray-700 text-[14px] mb-2 hover:bg-gray-200"><Link to="training/nodejs">NodeJs Syllabus</Link></li>
                <li className="px-4 py-2 text-gray-700 text-[14px] mb-2 hover:bg-gray-200"><Link to="/training/phython">Python Syllabus</Link></li>
                <li className="px-4 py-2 text-gray-700 text-[14px] mb-2 hover:bg-gray-200"><Link to="/training/matlab">Matlab Training</Link></li>
                <li className="px-4 py-2 text-gray-700 text-[14px] mb-2 hover:bg-gray-200"><Link to="/training/embedded">Embeded System</Link></li>
                <li className="px-4 py-2 text-gray-700 text-[14px] mb-2 hover:bg-gray-200"><Link to="/training/design">Website Design</Link></li>
                <li className="px-4 py-2 text-gray-700 text-[14px] mb-2 hover:bg-gray-200"><Link to="/training/php">PHP and MySQL</Link></li>
                <li className="px-4 py-2 text-gray-700 text-[14px] mb-2 hover:bg-gray-200"><Link to="/training/vlsi">VLSI Design Training</Link></li>
                <li className="px-4 py-2 text-gray-700 text-[14px] mb-2 hover:bg-gray-200"><Link to="/training/java">Java Training</Link></li>
                <li className="px-4 py-2 text-gray-700 text-[14px] mb-2 hover:bg-gray-200"><Link to="/training/android">Android Training</Link></li>
                <li className="px-4 py-2 text-gray-700 text-[14px] mb-2 hover:bg-gray-200"><Link to="/training/seo">SEO Training</Link></li>
              </ul>
            )}
          </li>
          {/* <li><Link to="/service">Service</Link></li> */}

           <li className="relative" onMouseEnter={() => setDropdownOpen9(true)} onMouseLeave={() => setDropdownOpen9(false)}>
            <Link to="/training">Support</Link>
            <i className="ri-arrow-down-s-line"></i>
            {isDropdownOpen9 && (
              <ul className="absolute  z-50 left-[-90%] w-[1480%] mb-15 mt-1 w-52 mx-[-20px] bg-white grid grid-cols-3 text-gray-900 shadow-lg rounded-md overflow-hidden">
                {/* <li className="px-4 py-2 text-gray-700 text-[14px] mb-2 hover:bg-gray-200"><Link to="/research">Research Paper Writing</Link></li> */}
                <li className="px-4 py-2 text-gray-700 text-[14px] mb-2 hover:bg-gray-200"><Link to="/review">Review paper Writing</Link></li>
                <li className="px-4 py-2 text-gray-700 text-[14px] mb-2 hover:bg-gray-200"><Link to="/conference">Conference paper writing</Link></li>
                <li className="px-4 py-2 text-gray-700 text-[14px] mb-2 hover:bg-gray-200"><Link to="/literature">Literature review writing</Link></li>
                <li className="px-4 py-2 text-gray-700 text-[14px] mb-2 hover:bg-gray-200"><Link to="/Thesis">Thesis writing service</Link></li>
                <li className="px-4 py-2 text-gray-700 text-[14px] mb-2 hover:bg-gray-200"><Link to="/synopsis">Synopsis writing service</Link></li>
                <li className="px-4 py-2 text-gray-700 text-[14px] mb-2 hover:bg-gray-200"><Link to="/researchproposel">Research proposal writing</Link></li>
                <li className="px-4 py-2 text-gray-700 text-[14px] mb-2 hover:bg-gray-200"><Link to="/internal">Internal report writing</Link></li>
                <li className="px-4 py-2 text-gray-700 text-[14px] mb-2 hover:bg-gray-200"><Link to="/resume">Resume writing service</Link></li>
                {/* <li className="px-4 py-2 text-gray-700 text-[14px] mb-2 hover:bg-gray-200"><Link to="/training/seo">Internal Report writing</Link></li> */}
              </ul>
            )}
          </li>

               <li className="relative" onMouseEnter={() => setDropdownOpen7(true)} onMouseLeave={() => setDropdownOpen7(false)}>
               <Link>Service</Link>
               <i className="ri-arrow-down-s-line"></i>

                <div className={`absolute z-50 left-[-220%] mt-1 w-[1560%] grid grid-cols-2 pb-5 border-b-2 border-b-blue-600 mx-[-20px] bg-white text-gray-900 shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
                isDropdownOpen7 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px] pointer-events-none"}`}>
                {service.map((elem, index) => (
                <li key={index} className="px-4 text-[14px] pt-5 py-2 text-gray-700 hover:bg-gray-200">
              <Link to={`/service/${elem.id}`}>{elem.category}</Link>
      </li>
    ))}
  </div>
           </li>



<li
  className="relative"
  onMouseEnter={() => setDropdownOpen5(true)}
  onMouseLeave={() => setDropdownOpen5(false)}>
   <Link>Software</Link>
  <i className="ri-arrow-down-s-line"></i>

  <div
    className={`absolute z-50 left-[-320%] mt-1 w-[1360%] grid grid-cols-5 pb-5 border-b-2 border-b-blue-600 mx-[-20px] bg-white text-gray-900 shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
      isDropdownOpen5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px] pointer-events-none"
    }`}
  >
    {soft.map((elem, index) => (
      <li key={index} className="px-4 text-[14px] pt-5 py-2 text-gray-700 hover:bg-gray-200">
        <Link to={`/productlist/${elem.category}`}>{elem.category}</Link>
      </li>
    ))}
  </div>
</li>

 

              {/* <li className="relative"onMouseEnter={() => setDropdownOpen1(true)} onMouseLeave={() => setDropdownOpen1(false)}>
              <Link>MBA</Link>
              <i className="ri-arrow-down-s-line"></i>
              <div className={`absolute z-50 left-[-700%] mt-2 w-[2200%] grid grid-cols-2 pb-5 border-b-2 border-b-blue-600 mx-[-20px] bg-white text-gray-900 shadow-lg rounded-md overflow-hidden transition-all duration-300  ${
               isDropdownOpen1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px] pointer-events-none" }`}>
              {Mba.map((elem, index) => (
            <li key={index} className="px-4 text-[14px] pt-5 py-2 text-gray-700 hover:bg-gray-200">
           <Link to={`/Projects/${elem.category}`}>{elem.category}</Link>
           </li>
               ))}
             </div>
            </li> */}

     <li className="relative">
  {/* Wrap both trigger and dropdown together */}
  <div
    onMouseEnter={() => setDropdownOpen1(true)}
    onMouseLeave={() => setDropdownOpen1(false)}
    className="inline-block"
  >
    {/* Trigger */}
    <div className="flex items-center gap-1 cursor-pointer">
      <Link>MBA</Link>
      <i className="ri-arrow-down-s-line"></i>
    </div>

    {/* Dropdown */}
    {isDropdownOpen1 && (
      <div
        className={`absolute z-50 left-[-700%] mt-1 w-[2200%] grid grid-cols-2 pb-5 border-b-2 border-b-blue-600 mx-[-20px] bg-white text-gray-900 shadow-lg rounded-md overflow-hidden transition-all duration-300`}
      >
        {Mba.map((elem, index) => (
          <li
            key={index}
            className="px-4 text-[14px] pt-5 py-2 text-gray-700 hover:bg-gray-200"
          >
            <Link to={`/Projects/${elem.category}`}>{elem.category}</Link>
          </li>
        ))}
      </div>
    )}
  </div>
</li>






            <li
  className="relative"
  onMouseEnter={() => setDropdownOpen3(true)}
  onMouseLeave={() => setDropdownOpen3(false)}
>
  <Link>Nursing</Link>
  <i className="ri-arrow-down-s-line"></i>

  <div
    className={`absolute z-50 left-[-610%] grid grid-cols-2 pl-[30px] mt-1 w-[1500%] pb-5 border-b-2 border-b-blue-600 mx-[-20px] bg-white text-gray-900 shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
      isDropdownOpen3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px] pointer-events-none"
    }`}
  >
  {Nurse.map((elem, index) => {
  const formatCategory = (str) => {
    if (!str) return "";
    return str
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <li key={index} className="px-4 text-[14px] pt-5 py-2 text-gray-700 hover:bg-gray-200">
      <Link to={`/Projects/${elem.category}`}>{formatCategory(elem.category)}</Link>
    </li>
  );
})}

  </div>
           </li>


          {/* <li className="relative" onMouseEnter={() => setDropdownOpen4(true)} onMouseLeave={() => setDropdownOpen4(false)}>
            <Link to="/mpharm">ME/Mtech</Link>
            <i className="ri-arrow-down-s-line"></i>
            {isDropdownOpen4 && (
              <ul className="absolute z-50 left-[-590%] mt-5 w-[1200%] grid grid-cols-3   pb-5 border-b-2 border-b-blue-600 mx-[-20px] bg-white text-gray-900 shadow-lg rounded-md overflow-hidden">
                 {Mtech.map((elem,index)=>{
                  return  <li className="px-4 py-2 mb-4 text-[14px] text-gray-700    hover:bg-gray-200"><Link to="training/nodejs">{elem.category}</Link></li>
                 })}
              </ul>
            )}
          </li> */}

        <li className="relative">
  <div
    onMouseEnter={() => setDropdownOpen4(true)}
    onMouseLeave={() => setDropdownOpen4(false)}
    className="inline-block"
  >
    {/* Trigger */}
    <div className="flex items-center gap-1 cursor-pointer">
      <Link>ME/Mtech</Link>
      <i className="ri-arrow-down-s-line"></i>
    </div>

    {/* Dropdown */}
    <div
      className={`absolute z-50 left-[-590%] mt-1 w-[1200%] grid grid-cols-3 pb-5 border-b-2 border-b-blue-600 mx-[-20px] bg-white text-gray-900 shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
        isDropdownOpen4
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-[-10px] pointer-events-none"
      }`}
    >
      {Mtech.map((elem, index) => (
        <li
          key={index}
          className="px-4 py-2 mb-4 text-[14px] text-gray-700 hover:bg-gray-200"
        >
          <Link to={`/Projects/${elem.category}`}>{elem.category}</Link>
        </li>
      ))}
    </div>
  </div>
</li>




          {/* <li><Link to="/Blog">Blog</Link></li> */}

          {/* <li className="relative" onMouseEnter={() => setDropdownOpen6(true)} onMouseLeave={() => setDropdownOpen6(false)}>
            <Link to="/mpharm">BE/Btech</Link>
            <i className="ri-arrow-down-s-line"></i>
            {isDropdownOpen6 && (
              <ul className="absolute z-50 left-[-800%] mt-5 w-[1350%] grid grid-cols-2 flex flex-col  flex-wrap pb-5 border-b-2 border-b-blue-600 mx-[-20px] bg-white text-gray-900 shadow-lg rounded-md overflow-hidden">
                 {Btech.map((elem,index)=>{
                  return  <li className="px-4 py-2 mb-2 text-[14px] text-gray-700    hover:bg-gray-200"><Link to="training/nodejs">{elem.category}</Link></li>
                 })}
              </ul>
            )}
          </li> */}

        <li
  className="relative"
  onMouseEnter={() => setDropdownOpen6(true)}
  onMouseLeave={() => setDropdownOpen6(false)}
>
  <Link>BE/Btech</Link>
  <i className="ri-arrow-down-s-line"></i>

  <div
    className={`absolute z-50 left-[-800%] mt-1 w-[1350%] grid grid-cols-2 flex flex-col flex-wrap pb-5 border-b-2 border-b-blue-600 mx-[-20px] bg-white text-gray-900 shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
      isDropdownOpen6 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px] pointer-events-none"
    }`}
  >
    {Btech.map((elem, index) => (
      <li key={index} className="px-4 py-2 mb-2 text-[14px] text-gray-700 hover:bg-gray-200">
        <Link to={`/Projects/${elem.category}?branch=${elem.branch || ""}`}>{elem.category}</Link>
      </li>
    ))}
  </div>
       </li>


          {/* <li className="relative" onMouseEnter={() => setDropdownOpen2(true)} onMouseLeave={() => setDropdownOpen2(false)}>
            <Link to="/mpharm">M.Pharm</Link>
            <i className="ri-arrow-down-s-line"></i>
            {isDropdownOpen2 && (
              <ul className="absolute z-50 left-[-950%] mt-5 w-[1380%]  grid grid-cols-4 pb-5 border-b-2 border-b-blue-600 mx-[-20px] bg-white text-gray-900 shadow-lg rounded-md overflow-hidden">
                 {Mpharm.map((elem,index)=>{
                  return  <li className="px-4 py-2  text-[14px] mb-2 text-gray-700    hover:bg-gray-200"><Link to="training/nodejs">{elem.category}</Link></li>
                 })}
              </ul>
            )}
          </li> */}

        <li  className="relative"
  onMouseEnter={() => setDropdownOpen2(true)}
  onMouseLeave={() => setDropdownOpen2(false)}
>
  <Link>M.Pharm</Link>
  <i className="ri-arrow-down-s-line"></i>

  <div
    className={`absolute z-50 left-[-920%] mt-1 w-[1380%] grid grid-cols-4 pb-5 border-b-2 border-b-blue-600 mx-[-20px] bg-white text-gray-900 shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
      isDropdownOpen2 ?"opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px] pointer-events-none"
    }`}
  >
    {Mpharm.map((elem, index) => (
      <li key={index} className="px-4 py-2 text-[14px] mb-2 text-gray-700 hover:bg-gray-200">
        <Link to={`/Projects/${elem.category}`}>{elem.category}</Link>
      </li>
    ))}
  </div>
        </li>



         {/* <div className='flex items-center '> */}
         {/* <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="" /> */}
         
          {/* <li className="px-4 py-2 bg-gray-300 rounded-full"><Link to="/cart"> <i className="text-xl ri-shopping-cart-2-line"></i></Link></li> */}
          
     {/* <Link to="/cart" type="button" className="relative inline-flex items-center px-3 py-2 rounded-full text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
< i className="text-xl ri-shopping-cart-2-line"></i>
<span className="sr-only">Notifications</span>
  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">2</div>
</Link> */}

         {/* </div> */}
          
       
          <li>
          {userId?(<button onClick={handleLogout} className=''></button> ):<Link className='border-2 border-[#2563EB] rounded-full px-5 py-2' to="/login">Log in</Link>}

             {/* <Link className='border-2 border-[#2563EB] rounded-full px-5 py-2' to="/login">Log in</Link> */}
          </li>
          {userId?"": <Link to="/signup" className="px-6 text-white py-2 bg-[#2563EB] font-medium rounded-full text-[16px]">Sign Up</Link>}
          {/* <Link to="/signup" className="px-6 text-white py-2 bg-[#2563EB] font-medium rounded-full text-[16px]">Sign Up</Link> */}

          {userId?( <Link to="/dashboard/home" className="px-6 text-white py-2 bg-[#2563EB] font-medium rounded-full text-[16px]">Dashboard</Link>):""}

           {/* <Link to="/dashboard/home" className="px-6 text-white py-2 bg-[#2563EB] font-medium rounded-full text-[16px]">Dashboard</Link> */}
       
        </ul>
        
      </nav>

      <div className="fixed top-[50%] right-0 z-50 flex flex-col items-center space-y-6 px-2 py-4">
        
        <a  href="https://api.whatsapp.com/send?phone=919993897203&text=Hello!%20I%20am%20interested%20in%20knowing%20more%20about%20DSTarena."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2">
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg relative">
          <div className="absolute inset-0 rounded-full blur-xl bg-red-300 opacity-40"></div>
          
          <FaWhatsapp className="text-green-600 text-xl z-10" />
        </div>
        </a>
      
       
        <a href="tel:9993897203">
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg relative">
          <div className="absolute inset-0 rounded-full blur-xl bg-red-300 opacity-40"></div>
          <FaPhone className="text-green-600 text-xl z-10" />
        </div>
        </a>
      </div>
    </header>
  );
}

export default Header2


{/* <header> */}
{/* <div className="border-b-2 bg-white shadow-md p-2 md:px-40 ">
  <div className="flex items-center justify-between md:flex md:justify-between  md:items-center md:py-4">
    Logo
    <div className="w-48  flex gap-2 items-center md:w-52 md:flex md:items-center md:mr-40">
      <a href="/">
        <img src={img} alt="DSTARENA Logo" className='w-[100%] h-[100%] md:w-[100%] md:h-[90%]'
        />
      </a>
      <h2 className='font-semibold text-3xl'>DSTArena</h2>
    </div>
    Mobile Menu Icon
    <div className=" md:hidden cursor-pointer">
                  <i className="pr-5 text-2xl fas fa-bars"></i>
     </div>

    Contact Info
    <div className="hidden md:flex space-x-6  w-[55%]">
      <div className="flex items-center w-[35%]   space-x-2 border-r-2">
        <span className="text-[#D2A98E] text-3xl fa fa-phone"></span>
        <div className='leading-relaxed'>
          <h6>9993897203</h6>
          <p className="text-sm text-[#333333]">dstinfo@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 w-[35%] border-r-2  leading-relaxed">
        <span className="text-3xl text-[#D2A98E] fa fa-map-marker-alt"></span>
        <div>
          <h6>121 malviya Nagar</h6>
          <p className="text-sm text-[#333333]">Bhopal MP</p>
        </div>
      </div>
      <div className="flex items-center w-[40%]   space-x-4 leading-relaxed">
      <i className="text-3xl text-[#D2A98E] ri-message-line"></i>
        <div>
          <h6>Online 24/7</h6>
          <p className="text-sm text-[#333333]">9993897203</p>
        </div>
      </div>
    </div>

    Social Links
    <div className="hidden md:flex md:space-x-4">
      <a href="https://twitter.com/" target="_blank" className="text-gray-500 hover:text-blue-500">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://facebook.com/" target="_blank" className="text-gray-500 hover:text-blue-500">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://instagram.com/" target="_blank" className="text-gray-500 hover:text-pink-500">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://linkedin.com/" target="_blank" className="text-gray-500 hover:text-blue-700">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  </div>
</div> */}

{/* Navigation Menu */}
 {/* <nav className="bg-[#FFFFFF] py-3 px-40">
              <div className="">
                <ul className="hidden md:flex items-center justify-between text-[16px]">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  
                   <li 
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                   >
                    <div className='flex items-center gap-1 hover:text-blue-500'>
                    <Link to="/training">Training</Link>
                    <i className="ri-arrow-down-s-line"></i>
                    </div>
                     
                    {isDropdownOpen && (
                      <ul className="absolute  left-[-5%]  mt-2 w-52 mx-[-20px] bg-white text-gray-900 shadow-lg rounded-md overflow-hidden">
                        <li className="px-4 py-2 hover:bg-gray-200">
                          
                          <Link to="training/nodejs">NodeJs Syllabus</Link>
                        </li>
        
                        <li className="px-4 py-2 hover:bg-gray-200">
                        <Link to="phython">Python Syllabus</Link>
                          
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Matlab Training</a></li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Embeded System</a></li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Website Design</a></li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">PHP and MySQL</a></li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">VLSI Design Training</a></li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Java Training</a></li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Android Training</a></li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">SEO Training</a></li>
                      </ul>
                    )}
                  </li>
        
                  <li className="relative"
                    onMouseEnter={() => setDropdownOpen1(true)}
                    onMouseLeave={() => setDropdownOpen1(false)}>
                    <div className='hover:text-blue-500'>
                    <Link to="/service">Service</Link>
                    <i className="ri-arrow-down-s-line"></i>
                    </div>
                    {isDropdownOpen1 && (
                      <ul className="absolute  left-[-5%]  mt-2 w-52 mx-[-20px] bg-white text-gray-900 shadow-lg rounded-md overflow-hidden">
                        <li className="px-4 py-2 hover:bg-gray-200">
                         
                          <Link to="/service/Hoisting">Web Hoisting</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Linux Webhosting Institute in Bhopal</a></li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Window Webhosting Bhopal</a></li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Software Development</a></li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Projects</a></li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Website Design & PHP MySQL Software</a></li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Android Training</a></li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">SEO Training</a></li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <Link to="/project">Projects</Link>
                  </li>
                  <li>
                   
                    <Link to="/MBA">MBA Projects</Link>
                  </li>
                  <li>
                    
                    <Link to="/Blog">Blog</Link>

                  </li>
                  <li>
                   
                    <Link to="/cont">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="mpharm">M.Pharm Project Topic</Link>
                  </li>
                  <button className='px-4 text-white py-2 bg-[#14213D] rounded-full text-[15px]'>Contact</button>
                </ul>
                
              </div>
            </nav> */}

{/* </header> */}