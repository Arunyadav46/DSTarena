import React from 'react'
import logo from "../assets/DstLogo.jpeg"
import { Link } from 'react-router-dom'

function Footer() {
  return (
      // <footer className="w-full h-[60vh] bg-[#FFFFFF] xl:px-32 pt-20 pb-8">
      //   <div className="container mx-auto px-4">
      //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      //       {/* Logo & Contact */}
      //       <div>
      //         <div className='flex w-full h-[4vh] gap-2 items-center'>
      //         <img src={logo}    alt="Mitech Logo"  className="mb-6 w-[25%]" />
      //         <h2 className='mb-6 text-2xl font-semibold'>DSTArena</h2>
      //         </div>
              

      //         {/* <ul className="space-y-2 mt-4 text-gray-600">
      //           <li>121, Malviya Nagar New Market
      //             <h2>Bhopal-462003</h2>
      //             <h2>M.P</h2>
      //           </li>
      //           <li>Ph:9993897203</li>
                
      //           <li>
      //               dstarenainfo@gmail.com
      //           </li>
    
      //         </ul> */}
      //         <p className='mt-5'>Superiority rules our thesis writing services to offer you a peaceful research journey</p>
      //         <h2 className='mt-5 text-2xl'>Follow us</h2>
            
      //       <div className='flex gap-2 mt-2'>
      //         <i class="text-3xl ri-facebook-circle-line"></i>
      //         <i class="text-3xl ri-instagram-line"></i>
      //         <i class="text-3xl ri-twitter-line"></i>
      //       </div>

      //       </div>
            
      //       {/* IT Services */}
      //       <div>
      //         <h6 className="font-semibold mb-4">TRAINING</h6>
      //         <ul className="space-y-2 text-gray-600">
      //           <li><a href="#">Career Training</a></li>
      //           <li><a href="#">Real Time Program Training</a></li>
      //           <li><a href="#">Corporate Training</a></li>
      //           <li><a href="#">Internship Training</a></li>
      //           <li><a href="#">In-Plant Training</a></li>
      //         </ul>
      //       </div>
            
      //       {/* Quick Links */}
      //       <div>
      //         <h6 className="font-semibold mb-4">Company</h6>
      //         <ul className="space-y-2 text-gray-600">
      //           <li><a href="#">ABOUT-US</a></li>
      //           <li><a href="#">QUALITY POLICY</a></li>
      //           <li><a href="#">Terms And Services</a></li>
      //           <li><a href="#">Privacy Policy</a></li>
      //           <li><a href="#">Our Team</a></li>
      //         </ul>
      //       </div>
            
      //       {/* Support */}
      //       <div>
      //         <h6 className="font-semibold mb-4">PROJECTS</h6>
      //         <ul className="space-y-2 text-gray-600">
      //           <li><a href="#">Embedded Projects</a></li>
      //           <li><a href="#">Java Projects</a></li>
      //           <li><a href="#">Dot net Projects</a></li>
      //           <li><a href="#">Android Projects</a></li>
      //           <li><a href="#">NS2 Projects</a></li>
      //           <li><a href="#">VLSI Projects</a></li>
      //         </ul>
      //       </div>
            
          
      //       <div>
      //         <h6 className="font-semibold mb-4">Company Address</h6>
      //         <ul className="space-y-2 w-[120%]">
      //           <p>DstArena Address:  121,Malviya Nagar,New Market,</p>
      //           <p>Bhopal- 462003,MP</p>
      //           <p>Tel: 9993897203</p>
      //           <p>Ph: 0755-4222290</p>
      //           <p>Email:  dstarenainfo@gmail.com</p>
              
      //         </ul>
      //       </div>
      //     </div>
      //   </div>
        
      
      //   <div className="border-t mt-8 pt-6 text-gray-600 text-center md:text-left container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      //     <span>&copy; 2025 DSTArena. <a href="https://hasthemes.com/" className="text-blue-600 hover:underline">All Rights Reserved.</a></span>
      //     <div className="flex space-x-4 mt-4 md:mt-0">
      //       <a href="https://twitter.com/" target="_blank" className="hover:text-blue-500"><i className="fab fa-twitter"></i></a>
      //       <a href="https://facebook.com/" target="_blank" className="hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
      //       <a href="https://instagram.com/" target="_blank" className="hover:text-blue-500"><i className="fab fa-instagram"></i></a>
      //       <a href="https://linkedin.com/" target="_blank" className="hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
      //     </div>
      //   </div>
      // </footer>   bg-[#2F6E86]
      <footer className="w-full bg-[#2F6E86]  text-white px-6 md:px-10 xl:px-32 pt-16 pb-10 ">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
      
      {/* Logo & About */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="DSTArena Logo" className="w-14 h-14 rounded-full" />
          <h2 className="text-2xl font-bold">DSTArena</h2>
        </div>
        <p className="text-white leading-relaxed mb-4">
          Superiority rules our thesis writing services to offer you a peaceful research journey.
        </p>
        <h3 className="text-lg font-semibold mt-6 mb-2 text-white">Follow Us</h3>
        <div className="flex gap-4 text-2xl text-white">
          <i className="ri-facebook-circle-line hover:text-[#1877f2] transition"></i>
          <i className="ri-instagram-line hover:text-[#E1306C] transition"></i>
          <i className="ri-twitter-line hover:text-[#1DA1F2] transition"></i>
        </div>
      </div>

      {/* Training */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Training</h3>
        <ul className="space-y-2 text-white">
          <li><Link to="/career">Career Training</Link></li>
          <li><Link to="/real">Real Time Program Training</Link></li>
          <li><Link to="">Corporate Training</Link></li>
          <li><Link to="/intern">Internship Training</Link></li>
          <li><Link to="/plant">In-Plant Training</Link></li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
        <ul className="space-y-2 text-white">
           <Link to="/Aboutus">About Us</Link>
          <li><Link to="/Quality">Quality Policy</Link></li>
          <li><Link to="/terms">Terms & Services</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
   
        </ul>
      </div>

      {/* Projects */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Projects</h3>
        <ul className="space-y-2 text-white">
          <li><Link to="/embedded">Embedded Projects</Link></li>
          <li><Link to="/javap">Java Projects</Link></li>
          <li><Link to="/dot">Dot Net Projects</Link></li>
          <li><Link to="/android">Android Projects</Link></li>
          <li><Link to="/vls">VLSI Projects</Link></li>
        </ul>
      </div>

      {/* Address */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Company Address</h3>
        <ul className="space-y-1 text-white text-sm">
          {/* <li>Address:</li> */}
          <li>121, Malviya Nagar, New Market</li>
          <li>Bhopal - 462003, MP</li>
          <li>Tel: 9993897203</li>
          <li>Ph: 0755-4222290</li>
          <li>Email: <a href="mailto:dstarenainfo@gmail.com">dstarenainfo@gmail.com</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
      <p>&copy; 2025 DSTArena. All rights reserved.</p>
      <div className="flex gap-4 mt-4 md:mt-0 text-xl">
        <a href="#" className="hover:text-white"><i className="ri-facebook-fill"></i></a>
        <a href="#" className="hover:text-white"><i className="ri-instagram-fill"></i></a>
        <a href="#" className="hover:text-white"><i className="ri-twitter-fill"></i></a>
        <a href="#" className="hover:text-white"><i className="ri-linkedin-box-fill"></i></a>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer