import React from 'react'
import { useState } from 'react';
import img from "../assest2/Mission.webp"
import img2 from "../assest2/Vision.webp"


function Content() {
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        { question: "How can we help your business?", answer: "We offer innovative solutions to streamline your workflow." },
        { question: "What are the advantages of DstArena?", answer: "Dstarena provides top-notch services with cutting-edge technology." },
        { question: "How working process is simplified?", answer: "Our processes are automated and optimized for efficiency." },
      ];
  return (
    <div className="w-full xl:px-32  bg-[#FFFFFF]">
         <h4 className="text-gray-500 uppercase tracking-widest text-center pt-10">Our Company</h4>
      <h2 className="text-4xl md:text-4xl xl:text-5xl w-full font-bold mt-2 xl:w-1/2 text-center xl:mx-[280px] mt-5 mb-10 leading-relaxed">
        Share the joy of achieving <span className="text-blue-600">glorious moments</span> & climbed up <span className="text-blue-600">the top</span>.
      </h2>
     <div className='xl:flex'>
          {/* left side */}
    <div className="md:w-1/2 md:mx-32 text-center md:text-left">
      <div className="flex justify-center items-center mt-6">
        <span className="text-[30vw] md:text-[12vw] font-bold text-blue-600">13</span>
        <div className="ml-3 text-gray-500">
          <p className="text-xs">YEARS’</p>
          <p className="text-xs">EXPERIENCE</p>
          <p className="text-xs">IN IT</p>
        </div>
      </div>
      <p className=" text-gray-600 text-xl w-3/8">
        We’ve been triumphing all these <span className="text-blue-600">13 years</span>. Sacrifices are made up with success.
      </p>

    </div>

    {/* Right Side - FAQ Section */}
    <div className="md:w-full lg:w-full md:p-5 xl:w:5/6 mt-6 md:mt-20">
      {faqs.map((faq, index) => (
        <div key={index} className="border rounded-lg mb-2 overflow-hidden">
          <button
            className="w-full text-left p-4 flex justify-between items-center bg-white shadow-md"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {faq.question}
            <span>{openIndex === index ? "-" : "+"}</span>
          </button>
          {openIndex === index && <div className="p-4 bg-gray-100">{faq.answer}</div>}
        </div>
      ))}
    </div>
     </div>
     <div className="bg-[#FFFFFF] text-justify border-2 mt-20 p-10 rounded-xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={img}
            alt="Our Mission"
            className="w-full bg-[#F3F4F6]  object-cover"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
          <hr className="border-t-2 border-gray-400 w-16 my-2" />
          <h3 className="text-xl font-semibold text-gray-900">
          Leading Technological Innovation for a Future-Ready World.
          </h3>
          <p className="text-gray-600 mt-4">
          To be a leading institution in technical education, research, and innovation, empowering students and professionals with cutting-edge knowledge and skills. DST Arena aims to create a dynamic learning environment that fosters creativity, problem-solving, and technological advancements, ensuring excellence in research, development, and project execution.
          </p>
        </div>
      </div>
    </div>

    <section className="flex flex-col text-justify border-2 mt-10 rounded-md md:flex-row items-center justify-between px-10 py-16 bg-white">
      {/* Left Content */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
        <hr className="w-16 border-t-2 border-gray-900 my-2" />
        <h3 className="text-xl font-semibold text-gray-900 mt-4">
          Leading the future with seamless tech solutions
        </h3>
        <p className="text-gray-700 mt-4">
        To lead in technological innovation by providing high-quality education, research support, and industry-focused training. We empower students and professionals with cutting-edge skills, foster creativity, and ensure excellence in research and development. Through expert guidance, hands-on learning, and continuous innovation, we strive to build a future-ready world driven by technology and impactful solutions.
        </p>
      </div>
      
      {/* Right Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img 
          src={img2} 
          alt="Vision Illustration" 
          className="w-full max-w-lg" 
        />
      </div>
    </section>
    

  </div>
  )
}

export default Content