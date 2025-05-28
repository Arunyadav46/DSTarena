import React from 'react'
import logo from "../assets/DstLogo.jpeg"

function Footer() {
  return (
    <footer className="w-full h-[60vh] bg-[#FFFFFF] xl:px-32 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Contact */}
          <div>
            <div className='flex w-full h-[4vh] gap-2 items-center'>
            <img src={logo}    alt="Mitech Logo"  className="mb-6 w-[25%]" />
            <h2 className='mb-6 text-2xl font-semibold'>DSTArena</h2>
            </div>
            

            <ul className="space-y-2 mt-4 text-gray-600">
              <li>121, Malviya Nagar New Market
                <h2>Bhopal-462003</h2>
                <h2>M.P</h2>
              </li>
              <li>Ph:9993897203</li>
              
              <li>
                  dstarenainfo@gmail.com
                
              </li>
             
            </ul>
          </div>
          
          {/* IT Services */}
          <div>
            <h6 className="font-semibold mb-4">TRAINING</h6>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:underline">Career Training</a></li>
              <li><a href="#" className="hover:underline">Real Time Program Training</a></li>
              <li><a href="#" className="hover:underline">Corporate Training</a></li>
              <li><a href="#" className="hover:underline">Internship Training</a></li>
              <li><a href="#" className="hover:underline">In-Plant Training</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h6 className="font-semibold mb-4">Company</h6>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:underline">ABOUT-US</a></li>
              <li><a href="#" className="hover:underline">QUALITY POLICY</a></li>
              <li><a href="#" className="hover:underline">Terms And Services</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Our Team</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h6 className="font-semibold mb-4">PROJECTS</h6>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:underline">Embedded Projects</a></li>
              <li><a href="#" className="hover:underline">Java Projects</a></li>
              <li><a href="#" className="hover:underline">Dot net Projects</a></li>
              <li><a href="#" className="hover:underline">Android Projects</a></li>
              <li><a href="#" className="hover:underline">NS2 Projects</a></li>
              <li><a href="#" className="hover:underline">VLSI Projects</a></li>
            </ul>
          </div>
          
          {/* App Store & Google Play */}
          <div>
            <h6 className="font-semibold mb-4">Download</h6>
            <ul className="space-y-2 w-24">
              <li><a href="#"><img src="https://dstarena.com/wp-content/themes/slicetheme/images/msme1.png" alt="Google Play" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright & Social Media */}
      <div className="border-t mt-8 pt-6 text-gray-600 text-center md:text-left container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <span>&copy; 2025 DSTArena. <a href="https://hasthemes.com/" className="text-blue-600 hover:underline">All Rights Reserved.</a></span>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://twitter.com/" target="_blank" className="hover:text-blue-500"><i className="fab fa-twitter"></i></a>
          <a href="https://facebook.com/" target="_blank" className="hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
          <a href="https://instagram.com/" target="_blank" className="hover:text-blue-500"><i className="fab fa-instagram"></i></a>
          <a href="https://linkedin.com/" target="_blank" className="hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer