import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function ContentRo() {
  const [activeTab, setActiveTab] = useState("courseRoadmap");
  const [openSection, setOpenSection] = useState(null);
  const [expanded, setExpanded] = useState(null);

  const roadmap = [
    {
      title: "Introduction",
      topics: [
        "What is Robotics?",
        "History and Evolution of Robotics",
        "Applications of Robotics in Various Fields",
        "Future Scope and Career Opportunities in Robotics"
      ]
    },
    {
      title: "Understanding Robotics Fundamentals",
      topics: [
        "Basic Concepts: Sensors, Actuators, Controllers",
        "Types of Robots: Industrial, Mobile, Humanoid",
        "Degrees of Freedom and Kinematics",
        "Power Sources and Energy Management"
      ]
    },
    {
      title: "Hardware Components",
      topics: [
        "Microcontrollers (Arduino, Raspberry Pi, etc.)",
        "Motors: DC, Servo, Stepper",
        "Sensors: IR, Ultrasonic, Temperature, Gyroscope",
        "Chassis and Mechanical Design Basics"
      ]
    },
    {
      title: "Software and Programming",
      topics: [
        "Introduction to Embedded C / Python",
        "Programming Microcontrollers",
        "Using IDEs like Arduino IDE / Thonny",
        "Logic Building and Algorithm Design"
      ]
    },
    {
      title: "Electronics and Circuit Design",
      topics: [
        "Breadboarding and Soldering Basics",
        "Input/Output Pin Configuration",
        "Working with LEDs, Buzzers, and Displays",
        "Power Supply Design and Battery Management"
      ]
    },
    {
      title: "Robot Design and Development",
      topics: [
        "Line Follower Robot",
        "Obstacle Avoider Robot",
        "Bluetooth Controlled Robot",
        "Voice Controlled Robot"
      ]
    },
    {
      title: "Advanced Robotics Concepts",
      topics: [
        "Introduction to IoT in Robotics",
        "AI Integration with Robotics",
        "Autonomous Navigation (GPS, Mapping)",
        "Simulation Tools (e.g., Tinkercad, Gazebo)"
      ]
    },
    {
      title: "Practical Sessions",
      topics: [
        "Hands-on Assembly of Robots",
        "Sensor Calibration and Testing",
        "Debugging and Troubleshooting Hardware",
        "Project Building and Documentation"
      ]
    },
    {
      title: "Conclusion",
      topics: [
        "Recap of Robotics Concepts",
        "Final Project Review and Evaluation",
        "Certificate of Completion",
        "24×7 Support During and After Training"
      ]
    }
  ];

  return (
    <div className="p-4 relative md:p-10 lg:p-24 xl:p-32 2xl:p-40 md:w-[100%] lg:w-[55%] xl:w-[70%] lg:bg-white">
      {/* Navigation Tabs */}
      <div className="text-[12px] xl:mt-[-80px] w-full flex shadow-md rounded-full font-bold text-[16px] lg:text-[18px] xl:text-[18px] border-b pb-2">
        {[{ id: "introduction", label: "Introduction" }, { id: "courseRoadmap", label: "Course Roadmap" }, { id: "reviews", label: "Reviews" }].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 ${activeTab === tab.id ? "border-b-2 border-orange-500" : "text-gray-900"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Introduction Section */}
      {activeTab === "introduction" && (
        <div className="mt-4 rounded-lg p-4">
          <h2 className="text-3xl font-bold mb-4">Training Overview</h2>
          <p id="one1" className="mt-2 text-gray-500 text-[15px] text-justify md:text-[16px] lg:text-[16px]">
            DSTArena offers a comprehensive Robotics Course that equips learners with practical knowledge of robot hardware, programming, and design. The course introduces basic electronics, sensors, motors, and microcontrollers before guiding students into advanced areas like autonomous robotics and IoT integration.
          </p>
          <p id="two1" className='mt-2 text-[#6B6B84] text-[15px] text-justify md:text-[16px] lg:text-[16px]'>
            Students work hands-on with kits and simulations, building various robots such as line followers, obstacle avoiders, and Bluetooth-controlled systems. By the end, students will be confident in building and programming functional robots for real-world use.
          </p>

          <h3 className="mt-10 text-xl font-bold mb-6">Why Choose Us</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li className='mb-1'>Industry-recognized Certificates.</li>
            <li className='mb-1'>Hands-on Projects with real robot kits.</li>
            <li className='mb-1'>Premium Tools and Support Material.</li>
            <li className='mb-1'>24×7 Expert Support During Training.</li>
            <li>End-to-End Project Support with Real Deployment.</li>
          </ul>
        </div>
      )}

      {/* Reviews Section */}
      {activeTab === "reviews" && (
        <div className='w-full h-auto lg:h-[65vh] p-6'>
          <h2 className='text-[18px] font-semibold'>Course Rating</h2>
          <div className='flex gap-2 mt-2'>
            {[...Array(5)].map((_, i) => <i key={i} className="text-xl ri-star-line"></i>)}
          </div>
          <h2 className='mt-2'>4.6 average based on 9 reviews.</h2>
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
      <div className="w-full shadow-xl lg:absolute lg:top-[10%] lg:right-[-33%] lg:h-[60vh] lg:w-[40%] bg-white shadow-md rounded-lg p-6">
        <div className="space-y-4">
          <div className="flex justify-between py-4 border-b-2 text-gray-700 font-semibold">
            <span>⏳ Duration</span>
            <span>3/6 Month</span>
          </div>
          <div className="flex justify-between py-4 border-b-2 text-gray-700 font-semibold">
            <span>📄 Enrolled</span>
            <span>180 students</span>
          </div>
          <div className="flex justify-between py-4 border-b-2 text-gray-900 font-semibold">
            <span>🔒 Access</span>
            <span>Lifetime</span>
          </div>
          <Link to="/training-form?course=Robotics" className="absolute xl:mx-32 px-5 bg-orange-500 text-white py-3 rounded-lg font-semibold">
            Apply Now
          </Link>
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
  );
}

export default ContentRo;
