import React from 'react'
import { Link } from 'react-router-dom';
import img from "../assest2/Development.png"
import img1 from "../assest2/Thesis.webp"
import img2 from "../assest2/Graduation.png"
import img3 from "../assest2/Linux.png"
import img4 from "../assest2/cloud-computing.png"
import img5 from "../assest2/server.png"

function Feature() {
    const features = [
        {
          title: "Website design and Development",
          text: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
          imgSrc: img,
        },
        {
          title: "ME/M.Tech/PHD Thesis",
          text: "It’s possible to simultaneously manage and transform information from one server to another.",
          imgSrc: img2,
        },
        {
          title: "Linux WebHosting",
          text: "Back up your database, store in a safe and secure place while still maintaining its accessibility.",
          imgSrc: img3,
        },
        {
          title: "Web Hosting",
          text: "We propose feasible & practical plans for successfully transforming businesses based on their needs.",
          imgSrc: img4,
        },
        {
          title: "Window Web Hosting",
          text: "Mitech takes into account all conditions and budgets needed for building an infrastructure plan.",
          imgSrc: img5,
        },
        {
          title: "Firewall Advancement",
          text: "Enhancing the strength and security of firewalls to protect online data from malicious sources.",
          imgSrc: "https://mitech.thememove.com/wp-content/uploads/2019/03/mitech-box-image-style-01-image-04-100x108.png",
        },
      ];
  return (
    <div className="xl:py-20 p-10 xl:px-32 bg-[#FFFFFF]">
    <div className="container mx-auto text-center">
      <h3 className="text-3xl font-semibold mb-10">
         <br /> we provide  <span className="text-blue-500"> truly prominent IT solutions.</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
          >
            <img className="w-20 h-20 mb-4" src={feature.imgSrc} alt={feature.title} />
            <h5 className="text-xl font-medium mb-2">{feature.title}</h5>
            <p className="text-gray-600 mb-4">{feature.text}</p>
            <div className="flex items-center space-x-2 text-blue-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              {/* <a href="#" className="text-xl">
              </a> */}
              <Link to="/service/website"><i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  </div>
  )
}

export default Feature