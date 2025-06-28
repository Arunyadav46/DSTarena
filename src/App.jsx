import React, { useEffect, useState } from 'react'

import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Components/Home'
import Node from './Components/Training/Node'
import Header2 from './Components/Header2'
import Python from './Components/Training/Python'
import MBA from './Components/MbaProject/MBA'
import Pata from './Components/ContactUs/Pata'
import ProLearn from './Components/ProjectsLearn/ProLearn'
import ServiceWeb from './Components/ServiceWeb/ServiceWeb'
import MbaDet from './Components/MbaDet/MbaDet'
import About from './Components/AboutUs/About'
import Matlab from './Components/Training/Matlab'
import Embedded from './Components/Training/Embedded'
import Design from './Components/Training/Design'
import PHP from './Components/Training/PHP'
import Vlsi from './Components/Training/Vlsi'
import Java from './Components/Training/Java'
import Seo from './Components/Training/Seo'
import Registration from './Components/SignUp/Registration'
import Login from './Components/Log in/Login'
import Android from './Components/Training/Android'
import Cart from './Components/Cart/Cart'
import Dashboard from './Components/Dashboard/Dashboard'
import Refer from './Components/DashRefer/Refer'
import DashRefer from './Components/DashRefer1/DashRefer'
import DashProfile from './Components/DashProfile/DashProfile'
import DashPayment from './Components/DashPayment/DashPayment'
import DashHome from './Components/DashHome/DashHome'
import ProtectedRoute from './Components/ProtectedRoute'
import DashPayDet from './Components/DashPayDet/DashPayDet'
import Withdraw from './Components/Dashwithdraw/Withdraw'
import Forgot from './Components/Forgot/Forgot'
import Reset from './Components/ResetPassword/Reset'
import Training1 from './Components/Training1/Training1'
import Pata1 from './Components/ContactUs/Pata1'
import Robotics from './Components/Training/Robotics'
import Form1 from './Components/Training/Form1'
import Quality from './Components/Quality-P/Quality'
import Terms from './Components/Terms/Terms'
import Privacy from './Components/Privacy/Privacy'
import Career from './Components/Career/Career'
import RealTime from './Components/RealTime/RealTime'
import Corporate from './Components/Corporate/Corporate'
import Intern from './Components/Intern/Intern'
import InPlant from './Components/In-plant/InPlant'
import Embeded from './Components/Embedded/Embeded'
import Java2 from './Components/Java2/Java2'
import Dot from './Components/Dot/Dot'
import Andro from './Components/Andro/Andro'
import Vls from './Components/VLS/Vls'






function App() {
  

const [productID, setproductID] = useState([]);
const [cartAllProduct, setCartAllProduct] = useState([]);

useEffect(() => {
  // On page load, restore from localStorage
  const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  setCartAllProduct(savedCart);
}, []);

// When productID changes (new item added), also update cart
useEffect(() => {
  if (productID.length !== 0) {
    const updated = [...cartAllProduct, productID];
    setCartAllProduct(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  }
}, [productID]);

//counter add to cart k liye

 const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartCount(existingCart.length);
  }, []);

  return (
    <div id="main" className='overflow-x-hidden lg:overflow-visible '>
    {/* <div id="gol" className='visible xl:w-[2%] xl:h-[4vh] xl:border-2 xl:border-[#086AD8] xl:rounded-full xl:z-50 xl:fixed'></div> */}
    
    
  <Header2 cartCount={cartCount} setCartAllProduct={setCartAllProduct}/>
    <Routes>
  <Route path='/' element = {<Home/>}/>
  
  <Route path='/cart' element={<Cart setCartCount={setCartCount} cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct}/>}/>
  {/* footer-Navigation */}
  <Route path='/Aboutus' element={<About/>}/>
  <Route path='/quality-policy' element={<Quality/>}/>
  <Route path='/terms-condition' element={<Terms/>}/>
  <Route path='/privacy-policy' element={<Privacy/>}/>
  <Route path='/career-training' element={<Career/>}/>
  <Route path="/intership-information" element={<RealTime/>}/>
  <Route path='/corporate' element={<Corporate/>}/>
  <Route path='/internship' element={<Intern/>}/>
  <Route path='/Inplant' element={<InPlant/>}/>
  {/* <Route path='/embedded-projects' element={<Embeded/>}/> */}
  {/* <Route path='/:category' element={<Java2/>}/> */}
  {/* <Route path='/:category' element={<Dot/>}/> */}
  <Route path='/:category' element={<Andro/>} />

  {/* <Route path='/:category' element={<Vls/>}/> */}


  
  
  <Route path='/cont' element={<Pata1/>}/>


   <Route path='/training' element={<Training1/>}/>

   <Route path='/Aboutus' element={<About/>}/>

  <Route path='/training/nodejs' element={<Node/>}/>
  <Route path='/training/nodejs/form1' element={<Form1/>}/>
  <Route path='/training/phython/form1' element={<Form1/>}/>
  <Route path='/training/matlab/form1' element={<Form1/>}/>
  <Route path='/training/embedded/form1' element={<Form1/>}/>
  <Route path='/training/design/form1' element={<Form1/>}/>
  <Route path='/training/php/form1' element={<Form1/>}/>
  <Route path='/training/vlsi/form1' element={<Form1/>}/>
  <Route path='/training/java/form1' element={<Form1/>}/>
  <Route path='/training/seo/form1' element={<Form1/>}/>
  <Route path='/training/robotics/form1' element={<Form1/>}/>
  <Route path='/training/android/form1' element={<Form1/>}/>
  

  <Route path='/service/:id' element={<ServiceWeb/>}/>
  <Route path='/training/phython' element={<Python/>}/>
  <Route path="/training/matlab" element={<Matlab/>}/>
  <Route path='/training/embedded' element={<Embedded/>}/>
  <Route path="/training/design" element={<Design/>}/>
  <Route path="/training/php" element={<PHP/>}/>
  <Route path='/training/vlsi' element={<Vlsi/>}/>
  <Route path='/training/java' element={<Java/>}/>
  <Route path="/training/seo" element={<Seo/>}/>
  <Route path='/training/robotics' element={<Robotics/>}/>
  <Route path="/training/android" element={<Android/>}/>
  <Route path='/signup' element={<Registration/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/project/:id' element={<ProLearn setCartCount={setCartCount} setproductID={setproductID}/>}/>
  <Route path='/Projects/:category' element={<MBA/>}/>
  <Route path='/MBA1/:name' element={<MbaDet/>}/>
  <Route path='/det' element={<MbaDet/>}/>
  <Route path='/cont' element={<Pata/>}/>
  <Route path='/forgotPassword' element={<Forgot/>}/>
  <Route path='/resetpassword' element={<Reset/>}/>

   {/* Protected Dashboard Routes */}

  <Route path='/dashboard/home' element={
     <ProtectedRoute>
      <Dashboard/>
      {/* <DashHome /> */}
    </ProtectedRoute>
    }>

    <Route path='/dashboard/home' element={
      <ProtectedRoute>
      <DashHome/>
      </ProtectedRoute>
      }/>
  </Route>
  <Route path='/dashboard/refer' element={
     <ProtectedRoute>
      <DashRefer/>
    </ProtectedRoute>
    }/>

     <Route path='/dashboard/withdraw' element={
     <ProtectedRoute>
     <Withdraw/>
    </ProtectedRoute>
    }/>

  <Route path='/dashboard/profile' element={
     <ProtectedRoute>
    <DashProfile/>
    </ProtectedRoute>
    }/>
  <Route path='/dashboard/payment' element={
     <ProtectedRoute>
    <DashPayment/>
    </ProtectedRoute>
    }/>

    <Route path='/dashboard/payment/det' element={
       <ProtectedRoute>
        <DashPayDet/>
       </ProtectedRoute>
    }/>
  </Routes>
    </div>
  )
}

export default App