import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';


function Content() {
  const [activeTab, setActiveTab] = useState("courseRoadmap");
  const [openSection, setOpenSection] = useState(null);
  const [expanded, setExpanded] = useState(null);

  const roadmap = [
    {
      title: "Introduction",
      topics: [
        "What is Nodejs",
        "Advantages of Node Js",
        "Tradional Web Server Model",
        "Node.js Process Model",
      ],
    },
    { title: "Setup Dev Environment", topics: [
      "Install Node.js on Windows",
      " Working in REPL",
      "BNode JS Console",
    ] },
    { title: "Node JS Modules", topics: [
      "Functions",
      "Buffer",
      "Module",
      "Module Types",
      "Core Modules",
      "Local Modules",
      "Module.Exports"
    ] },

    { title: "Node Package Manager", topics: [
      "What is NPM",
      "Installing Packages Locally",
      "Adding the dependency in package.json",
      "Installing packages globally",
      "Updating packages"
    ] },
    { title: "Creating Web serve", topics: [
      "Creating web server",
      "Handling HTTP requests",
      "Sending requests"
    ] },
    { title: "File System", topics: [
      "Fs.readFile",
      "Writing a File",
      "Writing a file asynchronously",
      "Opening a file",
      "Deleting a file",
      "Other IO Operations"
    ] },
    { title: "Debugging Node JS Application", topics: [
      "Core Node JS debugger.",
      "Debugging with Visual Studio."
    ] },
    { title: "Events", topics: [
      "Event Emitter class",
      "Returning event emitter",
      "Inhering events"
    ] },
    { title: "Express.JS", topics: [
      "Configuring routes",
      "Working with express"
    ] },
    { title: "Serving Static Resources", topics: [
      "Serving static files",
      "Working with middleware"
    ] },
    { title: "Database connectivity:", topics: [
      "Connection string",
      "Configuring",
      "Working with the select command",
      "Updating records",
      "Deleting records"
    ] },
    { title: "Template Engines", topics: [
      "Why Template Engine",
      "What is Jade",
      "What is vash"
    ] },
  
  ];
  return (
    <div className="p-4 relative md:p-10 lg:p-24 xl:p-32 2xl:p-40 md:w-[100%] lg:w-[55%] xl:w-[70%] lg:bg-white">
    {/* Navigation Tabs */}
    <div className="text-[12px] xl:mt-[-80px] w-full  flex  shadow-md rounded-full  font-bold text-[16px] lg:text-[18px] xl:text-[18px] border-b pb-2">
      {[{ id: "introduction", label: "Introduction" }, { id: "courseRoadmap", label: "Course Roadmap" }, { id: "reviews", label: "Reviews" }].map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4  py-2 ${activeTab === tab.id ? "border-b-2 border-orange-500" : "text-gray-900"}`}
        >
          {tab.label}
        </button>
      ))}
    </div>

    {/* Introduction Section */}
    {activeTab === "introduction" && (
      <div className="mt-4 rounded-lg p-4">
        <h2 className="text-3xl font-bold mb-4">Training Overview</h2>
        <p id="one1" className="mt-2 text-gray-500 text-[15px] leading-relaxed text-justify md:text-[16px] lg:text-[16px]">
        DSTArena offers a comprehensive PHP Course designed to equip participants with the essential skills needed for effective web development using PHP, a widely used server-side scripting language. The course begins with foundational topics, including PHP syntax, variable management, and script creation, ensuring that even those new to programming can follow along.
        </p>
        <p id="two1" className='mt-2 text-[#6B6B84] text-[15px] text-justify md:text-[16px] lg:text-[16px]'>As students progress, they will explore critical concepts such as flow control,
          which includes conditional statements and loops, enabling them to manage the execution
          flow of their scripts effectively which includes conditional statements and loops, enabling them to manage the execution
          flow of their scripts effectively.</p>

        <h3 className="mt-10 text-xl font-bold mb-6">Why Choose Us</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li className='mb-1'>Industry-recognized Certificates.</li>
          <li className='mb-1'>Hands-on Projects for real-world experience.</li>
          <li className='mb-1'>Premium Software and E-books.</li>
          <li className='mb-1'>24*7 expert support during training.</li>
          <li>End-to-end project support with live deployment.</li>
        </ul>
      </div>
    )}

    {activeTab === "reviews" && (
      <div className='w-full h-auto lg:h-[65vh] p-6'>
        <h2 className='text-[18px] font-semibold'>Course Rating</h2>
        <div className='flex gap-2 mt-2'>
          {[...Array(5)].map((_, i) => <i key={i} className="text-xl ri-star-line"></i>)}
        </div>
        <h2 className='mt-2'>4.1 average based on 4 reviews.</h2>
        <div className='p-5 space-y-4'>
          {[5, 4, 3, 2, 1].map((star, index) => (
            <div key={index} className='flex gap-1 items-center'>
              <h2>{star} Star</h2>
              <div className='w-[70%] md:w-[85%] lg:w-[90%] h-[3vh] bg-gray-200 rounded-full overflow-hidden'>
                <div className={`h-full bg-${star === 5 ? "green-500" : star === 4 ? "blue-500" : star === 3 ? "cyan-500" : star === 2 ? "orange-500" : "gray-400"} w-[${star * 20}%]`}></div>
              </div>
              <h2>{6 - star}</h2>
            </div>
          ))}
        </div>
      </div>
    )}

    {/* Course Roadmap Section */}
    {activeTab === "courseRoadmap" && (
      <div className="mt-4 border rounded-lg p-4">
        {roadmap.map((section, index) => (
          <div key={index} className="mb-2 border-b">
            <button className="w-full text-left p-3 flex justify-between items-center hover:bg-gray-100" onClick={() => setExpanded(expanded === index ? null : index)}>
              <span>{section.title}</span>
              <span>{expanded === index ? "-" : "+"}</span>
            </button>
            {expanded === index && section.topics.length > 0 && (
              <ul className="pl-6 text-gray-600">
                {section.topics.map((topic, i) => (
                  <li key={i} className="py-1 list-disc">{topic}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    )}

    {/* Course Details Card */}
    <div className="w-full shadow-xl    lg:absolute lg:top-[10%]  lg:right-[-33%] lg:h-[60vh] lg:w-[40%] bg-white shadow-md rounded-lg p-6">
      <div className="space-y-4">
        <div className="flex justify-between py-4  border-b-2 text-gray-700 font-semibold">
          <span>⏳ Duration</span>
          <span>3/6 Month</span>
        </div>
        <div className="flex justify-between py-4 border-b-2 text-gray-700 font-semibold">
          <span>📄 Enrolled</span>
          <span>255 students</span>
        </div>
        <div className="flex   justify-between py-4 border-b-2 text-gray-900 font-semibold">
          <span>🔒 Access</span>
          <span>Lifetime</span>
        </div>


        <Link to="/training/nodejs/register" className="absolute px-8 py-3 xl:mx-28 bg-orange-500 text-white py-2 rounded-lg font-semibold">
          Apply Now
        </Link>
        
        {/* <div className="text-center text-orange-500 font-semibold cursor-pointer">
          <span>Share This Course 🔗</span>
        </div> */}
        <div
  onClick={() => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this course on DSTarena!',
        text: 'I found this great course on DSTarena. Have a look!',
        url: window.location.href, // shares current page URL
      })
      .then(() => console.log('Course shared successfully'))
      .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Sharing not supported on this browser. Copy the link manually.');
    }
  }}
  className="text-center text-orange-500 pt-14 font-semibold cursor-pointer"
>
  <span>Share This Course 🔗</span>
      </div>

      </div>
    </div>
  </div>
    
  )
}

export default Content




//  <div className="md:p-20 md:pl-40 md:w-[60%] bg-white md:p-6">
    {/* Navigation Tabs */}
    // <div className="text-[14px] mx-4 pt-10 flex md:space-x-4 md:shadow-xl md:rounded-full md:px-10 md:py-2  font-bold md:text-[17px] border-b md:pb-2">
    //   {[
    //     { id: "introduction", label: "Introduction" },
    //     { id: "courseRoadmap", label: "Course Roadmap" },
    //     { id: "reviews", label: "Reviews" },
    //   ].map((tab) => (
    //     <button
    //       key={tab.id}
    //       onClick={() => setActiveTab(tab.id)}
    //       className={`px-4 py-2 ${
    //         activeTab === tab.id
    //           ? "border-b-2 border-orange-500"
    //           : "text-gray-900"
    //       }`}
    //     >
    //       {tab.label}
    //     </button>
    //   ))}
    // </div>

    {/* Introduction Section */}
    // {activeTab === "introduction" && (
    //   <div className="mt-4  rounded-lg p-4">
    //     <h2 className="text-3xl mt-4 mb-4 font-bold">Training Overview</h2>
    //     <p id="one1"  className="mt-2 text-[15px] text-justify text-gray-800 md:text-[15px]">
    //     DSTArena offers a comprehensive PHP Course designed to equip participants with the essential skills needed for effective web development using PHP, a widely used server-side scripting language. The course begins with foundational topics, including PHP syntax, variable management, and script creation, ensuring that even those new to programming can follow along.
    //     </p>
    //     <p id="two1" className="mt-2 text-gray-800 text-[15px] text-justify">
    //       As students progress, they will explore critical concepts such as flow control,
    //       which includes conditional statements and loops, enabling them to manage the execution
    //       flow of their scripts effectively which includes conditional statements and loops, enabling them to manage the execution
    //       flow of their scripts effectively.
    //     </p>
    //     <h3 className="mt-10 text-xl font-bold mb-6">Why Choose Us</h3>
    //     <ul  className="list-disc pl-6 text-gray-900">
    //       <li className='mb-1'>DSTArena provides industry-recognized Certificates.</li>
    //       <li className='mb-1'>DSTArena offers hands-on Projects for real-world experience.</li>
    //       <li className='mb-1'>DSTArena provides premium Software and E-books.</li>
    //       <li className='mb-1'>DSTArena ensures 24*7 expert support during training.</li>
    //       <li>DSTArena offers end-to-end project support with live deployment.</li>
    //     </ul>
    //   </div>
    // )}
    // {activeTab === "reviews" && (
    //   <div className='w-full h-[65vh]'>
    //      <div className='flex px-5 gap-8 pt-10'>
    //       <h2 className='text-[18px] font-semibold'>Course Rating</h2>
    //       <div className='flex gap-2'>
    //       <i class="text-xl ri-star-line"></i>
    //       <i class="text-xl ri-star-line"></i>
    //       <i class="text-xl ri-star-line"></i>
    //       <i class="text-xl ri-star-line"></i>
    //       <i class="text-xl ri-star-line"></i>
    //       </div>
    //      </div>
    //      <h2 className='px-5 mt-2'>4.1 average based on 4 reviews.</h2>
    //      <div className='p-5'>
    //       <div className='p-1 flex gap-3  mt-5'>
    //         <h2>5 Star</h2>
    //       <div className='w-[70%] md:w-[85%] h-[3vh] bg-[#4CAF50] rounded-full'></div>
    //       <h2>02</h2>
    //       </div>
    //       <div className='p-1 flex gap-3 mt-5'>
    //         <h2>4 Star</h2>
    //       <div className='w-[70%] md:w-[85%] h-[3vh] bg-[#F1F1F1] overflow-hidden  rounded-full'>
    //         <div className='w-[70%] h-full bg-[#2196F3]'></div>
    //       </div>
    //       <h2>03</h2>
    //       </div>
    //       <div className='p-1 flex gap-3 mt-5'>
    //         <h2>3 Star</h2>
    //       <div className='w-[70%] md:w-[85%] h-[3vh] bg-[#F1F1F1] rounded-full overflow-hidden'>
    //         <div className='w-[50%] h-full bg-[#00BCD4]'></div>
    //       </div>
    //       <h2>04</h2>
    //       </div>
    //       <div className='p-1 flex gap-3 mt-5'>
    //         <h2>2 Star</h2>
    //       <div className='w-[70%] md:w-[85%] h-[3vh] bg-[#F1F1F1] rounded-full overflow-hidden'>
    //         <div className='w-[20%] h-full bg-[#FF9800]'></div>
    //       </div>
    //       <h2>05</h2>
    //       </div>
    //       <div className='p-1 flex gap-3 mt-5'>
    //         <h2>1 Star</h2>
    //       <div className='w-[70%] md:w-[85%] h-[3vh] bg-[#F1F1F1] rounded-full'></div>
    //       <h2>00</h2>
    //       </div>
          
    //      </div>
    //   </div>
     
    // )}

    {/* Course Roadmap Section */}
    // {activeTab === "courseRoadmap" && (
    //   <div className="mt-4  border rounded-lg p-4">
    //     {roadmap.map((section, index) => (
    //       <div key={index} className="mb-2 border-b">
    //         <button
    //           className="w-full text-left p-3 flex justify-between items-center hover:bg-gray-100"
    //           onClick={() => setExpanded(expanded === index ? null : index)}
    //         >
    //           <span>{section.title}</span>
    //           <span>{expanded === index ? "-" : "+"}</span>
    //         </button>
    //         {expanded === index && section.topics.length > 0 && (
    //           <ul className="pl-6 text-gray-600">
    //             {section.topics.map((topic, i) => (
    //               <li key={i} className="py-1 list-disc">{topic}</li>
    //             ))}
    //           </ul>
    //         )}
    //       </div>
    //     ))}
    //   </div>
    // )}

     {/* cards */}
    //  <div className="w-full shadow-xl md:absolute md:top-[70%] md:right-[10%] md:h-[60vh] md:w-[25%] md:ml-6md: p-10 bg-white shadow-md rounded-lg">
    //     <div className="space-y-4">
    //       <div className="flex  py-5 border-b-2 justify-between text-gray-700 font-semibold">
    //         <span>⏳ Duration</span>
    //         <span>3/6 Month</span>
    //       </div>
    //       <div className="flex relative justify-between py-5 border-b-2 text-gray-700 font-semibold">
    //         <span>📄 Enrolled</span>
    //         <span>255 students</span>
    //       </div>
    //       <div className="flex justify-between py-5 b-5 mb- border-b-2 text-gray-900 font-semibold">
    //         <span>🔒 Access</span>
    //         <span>Lifetime</span>
           
    //       </div>

    //       <button className="w-full md:absolute md:bottom-[20%] md:left-0 bg-orange-500 text-white py-2 rounded-lg font-semibold">
    //         Apply Now
    //       </button>
    //       <div className="text-center md:absolute bottom-[10%] left-[30%]  text-orange-500 font-semibold cursor-pointer">
    //         <span className='pt-10'>Share This Course 🔗</span>
            
    //       </div>
    //     </div>
    //   </div>
  // </div>