import React from 'react'
import { Link } from 'react-router-dom';
import img1 from "../assest2/icons8-nodejs.svg"
import img2 from "../assest2/icons8-python.svg"
import img3 from "../assest2/icons8-matlab.svg"
import img4 from "../assest2/Embeded.webp"
import img5 from "../assest2/webDesign.webp"
import img9 from "../assest2/php.png"
import img7 from "../assest2/Java.webp"
import img10 from "../assest2/icons8-java-50.png"
import img11 from "../assest2/SEO.webp"
import img12 from "../assest2/cpu.png"
import img13 from "../assest2/application.png"


function Feature1() {
    const features = [
        {
          title: "Nodejs Training ",
          text: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
          imgSrc: img1
        },
        {
          title: "Python Training",
          text: "It’s possible to simultaneously manage and transform information from one server to another.",
          imgSrc: img2,
        },
        {
          title: "Matlab Training",
          text: "Back up your database, store in a safe and secure place while still maintaining its accessibility.",
          imgSrc: img3,
        },
        {
          title: "EMBEDDED System",
          text: "We propose feasible & practical plans for successfully transforming businesses based on their needs.",
          imgSrc: img4,
        },
        {
          title: "Website Design",
          text: "Mitech takes into account all conditions and budgets needed for building an infrastructure plan.",
          imgSrc: img5,
        },
        {
          title: "PHP & MySQL",
          text: "Enhancing the strength and security of firewalls to protect online data from malicious sources.",
          imgSrc: img9,
        },
        {
          title: "VLSI Design",
          text: "Enhancing the strength and security of firewalls to protect online data from malicious sources.",
          imgSrc: "https://mitech.thememove.com/wp-content/uploads/2019/03/mitech-box-image-style-01-image-04-100x108.png",
        },
        {
          title: "JAVA Training",
          text: "Enhancing the strength and security of firewalls to protect online data from malicious sources.",
          imgSrc: img10,
        },
        {
          title: "SEO Training",
          text: "Enhancing the strength and security of firewalls to protect online data from malicious sources.",
          imgSrc: img11,
        },
        {
          title: "Android Training",
          text: "Enhancing the strength and security of firewalls to protect online data from malicious sources.",
          imgSrc: img11,
        },
      ];
  return (
    <div className="p-10 xl:py-24 px-10 xl:px-32 bg-[#FFFFFF]">
    <div className="container mx-auto text-center">
      <h3 className="text-xl md:text-3xl leading-relaxed font-semibold mb-10">
      Empowering Your Future, <br /> we provide <span className="text-blue-500">Industry-Leading Training Solutions.</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <img className="w-20 h-20 mb-4" src={img1}/>
            <h5 className="text-xl font-medium mb-2">Nodejs Training </h5>
            <p className="text-gray-600 mb-4">We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
            <div className="flex items-center space-x-2 text-blue-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <Link to="/training/nodejs"><i className="fas fa-arrow-right"></i></Link>
            </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <img className="w-20 h-20 mb-4" src={img2}/>
            <h5 className="text-xl font-medium mb-2">Python Training </h5>
            <p className="text-gray-600 mb-4">We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
            <div className="flex items-center space-x-2 text-blue-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <Link to="/training/phython"><i className="fas fa-arrow-right"></i></Link>
            </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <img className="w-20 h-20 mb-4" src={img3}/>
            <h5 className="text-xl font-medium mb-2"> Matlab Training</h5>
            <p className="text-gray-600 mb-4">We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
            <div className="flex items-center space-x-2 text-blue-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <Link to="/training/matlab"><i className="fas fa-arrow-right"></i></Link>
            </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <img className="w-20 h-20 mb-4" src={img4}/>
            <h5 className="text-xl font-medium mb-2"> EMBEDDED System</h5>
            <p className="text-gray-600 mb-4">We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
            <div className="flex items-center space-x-2 text-blue-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <Link to="/training/embedded"><i className="fas fa-arrow-right"></i></Link>
            </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <img className="w-20 h-20 mb-4" src={img5}/>
            <h5 className="text-xl font-medium mb-2">Website Design</h5>
            <p className="text-gray-600 mb-4">We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
            <div className="flex items-center space-x-2 text-blue-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <Link to="/training/design"><i className="fas fa-arrow-right"></i></Link>
            </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <img className="w-20 h-20 mb-4" src={img9}/>
            <h5 className="text-xl font-medium mb-2">PHP & MySQL</h5>
            <p className="text-gray-600 mb-4">We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
            <div className="flex items-center space-x-2 text-blue-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <Link to="/training/php"><i className="fas fa-arrow-right"></i></Link>
            </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <img className="w-20 h-20 mb-4" src={img12}/>
            <h5 className="text-xl font-medium mb-2">VLSI Design</h5>
            <p className="text-gray-600 mb-4">We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
            <div className="flex items-center space-x-2 text-blue-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <Link to="/training/vlsi"><i className="fas fa-arrow-right"></i></Link>
            </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <img className="w-20 h-20 mb-4" src={img10}/>
            <h5 className="text-xl font-medium mb-2">Java Training</h5>
            <p className="text-gray-600 mb-4">We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
            <div className="flex items-center space-x-2 text-blue-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <Link to="/training/java"><i className="fas fa-arrow-right"></i></Link>
            </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <img className="w-20 h-20 mb-4" src={img11}/>
            <h5 className="text-xl font-medium mb-2">SEO Training</h5>
            <p className="text-gray-600 mb-4">We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
            <div className="flex items-center space-x-2 text-blue-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <Link to="/training/seo"><i className="fas fa-arrow-right"></i></Link>
            </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <img className="w-20 h-20 mb-4" src={img13}/>
            <h5 className="text-xl font-medium mb-2">Android Training</h5>
            <p className="text-gray-600 mb-4">Android training covers app development, UI design, databases, APIs, and deployment using Java/Kotlin.</p>
            <div className="flex items-center space-x-2 text-blue-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <Link to="/training/android"><i className="fas fa-arrow-right"></i></Link>
            </div>
      </div>


      </div>
      
    </div>
  </div>
  )
}

export default Feature1