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
  //   <div className="w-full xl:px-32  bg-[#FFFFFF]">
      
  //    <div className="bg-[#FFFFFF] text-justify  mt-20 p-10 rounded-xl">
  //     <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
  //       {/* Left Image Section */}
  //       <div className="w-full md:w-1/2">
  //         <img
  //           src={img}
  //           alt="Our Mission"
  //           className="w-full bg-[#F3F4F6]  object-cover"
  //         />
  //       </div>

  //       {/* Right Text Section */}
  //       <div className="w-full md:w-1/2">
  //         <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
  //         <hr className="border-t-2 border-gray-400 w-16 my-2" />
  //         <h3 className="text-xl font-semibold text-gray-900">
  //         Leading Technological Innovation for a Future-Ready World.
  //         </h3>
  //         <p className="text-gray-600 mt-4">
  //         To be a leading institution in technical education, research, and innovation, empowering students and professionals with cutting-edge knowledge and skills. DST Arena aims to create a dynamic learning environment that fosters creativity, problem-solving, and technological advancements, ensuring excellence in research, development, and project execution.
  //         </p>
  //       </div>
  //     </div>
  //   </div>

  //   <section className="flex flex-col text-justify border- mt-10 rounded-md md:flex-row items-center justify-between px-10  bg-white">
  //     {/* Left Content */}
  //     <div className="md:w-1/2">
  //       <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
  //       <hr className="w-16 border-t-2 border-gray-900 my-2" />
  //       <h3 className="text-xl font-semibold text-gray-900 mt-4">
  //         Leading the future with seamless tech solutions
  //       </h3>
  //       <p className="text-gray-700 mt-4">
  //       To lead in technological innovation by providing high-quality education, research support, and industry-focused training. We empower students and professionals with cutting-edge skills, foster creativity, and ensure excellence in research and development. Through expert guidance, hands-on learning, and continuous innovation, we strive to build a future-ready world driven by technology and impactful solutions.
  //       </p>
  //     </div>
      
  //     {/* Right Image */}
  //     <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
  //       <img 
  //         src={img2} 
  //         alt="Vision Illustration" 
  //         className="w-full max-w-lg" 
  //       />
  //     </div>
  //   </section>
    

  // </div>
  <div id="text9" className="w-full xl:px-32 bg-white">

  {/* Introductory Section */}
  <div  className="bg-[#F9FAFB] text-gray-600 p-10 mt-10 rounded-xl shadow-md space-y-6 text-justify">
    <h2 className="text-3xl font-bold text-center text-[#1F2937]">About DST Arena</h2>
    <p>
      <strong>Design and Study of Technology Arena (DSTARENA)</strong> is incorporated in the year 2011. We are an ISO 9001:2008 Certified Company. DST Arena guarantees strong results immediately to all its customers.
      DSTARENA has trained 10,000+ students and delivered 2000+ dissertations for M.Tech and Ph.D. We are one of the best companies in Central India offering services like Website Design and Development, Major/Minor Projects, Research Thesis work, Software Development, and Technical Training & Internship in Bhopal, Madhya Pradesh.
    </p>
    <p>
      DST Arena is web-accessible 24×7 at <a href="https://www.dstarena.com" className="text-blue-600 underline">www.dstarena.com</a>. We not only provide assistance but also deliver software products online. We help researchers in various domains like M.Tech Thesis, Ph.D. Thesis, M. Pharma, MD, and Nursing Thesis Writing, including plagiarism checking and paper writing.
    </p>
    <p>
      We have a team of hard and smart-working professionals with high integrity, all committed to delivering excellent results and customer-centric service. DST Arena is proud to be “easy to work with” and provides innovative, technology-driven solutions tailored to each customer.
    </p>
    <p>
      We offer thesis research assistance for M.Tech and Ph.D. scholars, making their post-graduation journey hassle-free.
    </p>
    <div className="bg-gray-100 p-6 rounded-lg shadow-sm mt-4">
      <h3 className="text-xl font-semibold text-gray-600 mb-2">
        ME/MTECH/PHD/NURSING/MD/MPHARMA Research Work in Bhopal
      </h3>
      <p>
        DST Arena has been providing training, research work, and project guidance for the past 12+ years. We’ve earned prestigious awards like:
      </p>
      <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
        <li>TATA FIRST DOT Award powered by NEN (National Entrepreneurship Network)</li>
        <li>Best Education Excellence Award (Central India) powered by MHRD</li>
        <li>Best Training Institute by Sankalp Sanstha, Pithampur</li>
      </ul>
    </div>

    <div className="bg-gray-100 p-6 rounded-lg shadow-sm mt-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        What Makes Our Research Guidance Unique
      </h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>Effective communication with researchers in all domains</li>
        <li>High priority on customer satisfaction</li>
        <li>Support for self and assigned research topics</li>
        <li>In-depth research on selected topics</li>
        <li>Focus on new technologies and creative approaches</li>
        <li>Proper formatting and writing guidance</li>
        <li>Structural guidance throughout the research journey</li>
      </ul>
    </div>
  </div>

  {/* Development and Training Centre Section */}
  <div className="bg-white text-gray-800 p-10 mt-10 rounded-xl shadow-md text-justify space-y-6">
    <h2 className="text-3xl font-bold text-center text-[#1F2937]">Development and Training Centre (Bhopal)</h2>
    
    <div>
      <h3 className="text-xl font-semibold text-gray-800">Hardware Training:</h3>
      <p className="text-gray-700">MATLAB, VHDL, PCB Design, Embedded System, and Robotics</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-800">Software Training:</h3>
      <p className="text-gray-700">PHP/MYSQL, JAVA, ANDROID, SEO, React, Node, Python, and Ethical Hacking</p>
    </div>

    <p>
      We also offer domain and hosting services for websites along with annual maintenance, major/minor project assistance, and customized solutions for all project-related challenges.
    </p>

    <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">About Placements</h3>
      <p>
        DST Arena has consistently delivered top placements to students, with many alumni shining in leading companies. Our expert team is dedicated to upskilling students to be market-ready with 24x7 support — both online and offline.
      </p>
    </div>

    <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">What We Offer</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Strong Project Management</li>
        <li>Efficient Requirements Definition</li>
        <li>Fast and Effective Communication</li>
        <li>Complete Quality Assurance</li>
        <li>Experienced and Skilled Team</li>
        <li>Client-Centric Approach</li>
        <li>Start-to-End Work Support</li>
      </ul>
    </div>
  </div>

  {/* Your Existing Layout Below */}
  <div className="bg-[#FFFFFF] text-justify mt-20 p-10 rounded-xl">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={img}
          alt="Our Mission"
          className="w-full bg-[#F3F4F6] object-cover"
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

  <section className="flex flex-col text-justify border mt-10 rounded-md md:flex-row items-center justify-between px-10 bg-white">
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