import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Content() {
     const [activeTab, setActiveTab] = useState("courseRoadmap");
                  const [openSection, setOpenSection] = useState(null);
                  const [expanded, setExpanded] = useState(null);
                
                const roadmap = [
  {
    title: "Introduction",
    topics: [
      "What is SEO (Search Engine Optimization)",
      "Importance of SEO in Website/Project Success",
      "How SEO Brings Traffic and Visibility",
      "Real-world Examples of SEO Effectiveness"
    ]
  },
  {
    title: "Understanding SEO Fundamentals",
    topics: [
      "Key Factors Affecting Website Ranking",
      "Types of SEO: On-page, Off-page, Technical",
      "Organic vs Paid Search Results"
    ]
  },
  {
    title: "On-Page & Offline Optimization Techniques",
    topics: [
      "Page Title, Meta Description, and Keywords",
      "Heading Tags, Alt Attributes, Internal Linking",
      "URL Structure, Page Speed, Responsive Design",
      "Content Quality and Keyword Placement"
    ]
  },
  {
    title: "Off-Page & Online Optimization Techniques",
    topics: [
      "Link Building Strategies",
      "Social Media Signals",
      "Influencer Outreach",
      "Guest Blogging and Bookmarking"
    ]
  },
  {
    title: "Tools and Resources",
    topics: [
      "SEO Dock and Its Usage",
      "Google Search Console",
      "Google Analytics",
      "Keyword Research Tools (e.g., Ubersuggest, SEMrush)"
    ]
  },
  {
    title: "SEO for Product Visibility",
    topics: [
      "Creating SEO Strategy for Product Promotion",
      "Optimizing Digital Products for Search",
      "Case Studies on Product Reach via SEO"
    ]
  },
  {
    title: "Practical Sessions",
    topics: [
      "Live Optimization of Web Pages",
      "Keyword Analysis and Ranking Reports",
      "Monitoring Website Traffic using Tools",
      "Hands-on SEO Practice with Real Projects"
    ]
  },
  {
    title: "Conclusion",
    topics: [
      "Recap of Key SEO Techniques",
      "Final Assessment/Project Review",
      "Certificate of Completion",
      "24×7 Support During and After Training"
    ]
  }
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
        <p id="one1" className="mt-2 text-gray-500 text-[15px] text-justify md:text-[16px] lg:text-[16px]">
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
    <div className="w-full shadow-xl  lg:absolute lg:top-[10%]  lg:right-[-33%] lg:h-[60vh] lg:w-[40%] bg-white shadow-md rounded-lg p-6">
      <div className="space-y-4">
        <div className="flex justify-between py-4 border-b-2 text-gray-700 font-semibold">
          <span>⏳ Duration</span>
          <span>3/6 Month</span>
        </div>
        <div className="flex justify-between py-4 border-b-2 text-gray-700 font-semibold">
          <span>📄 Enrolled</span>
          <span>255 students</span>
        </div>
        <div className="flex justify-between py-4 border-b-2 text-gray-900 font-semibold">
          <span>🔒 Access</span>
          <span>Lifetime</span>
        </div>
        <Link to="/training-form?course=SEO" className="absolute xl:mx-32 px-5 bg-orange-500 text-white py-3 rounded-lg font-semibold">
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
  )
}

export default Content