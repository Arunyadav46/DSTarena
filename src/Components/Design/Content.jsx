import React, { useState } from 'react'

function Content() {
    const [activeTab, setActiveTab] = useState("courseRoadmap");
      const [openSection, setOpenSection] = useState(null);
      const [expanded, setExpanded] = useState(null);
    
      const roadmap = [
        {
          title: "HTML 4.01 and XHTML 1.1",
          topics: [
            "What is Markup Language",
            "Basic Structure of HTML",
            "Difference Between HTML and",
            "XHTML",
            "Head Section and Elements of Head",
            "Section",
            "Meta Tags",
            "Css Tags",
            "Script Tag",
            "Table Tag",
            "Div Tag",
            "Header Tags",
            "Paragraph, Span, Pre Tags",
            "Object Tag",
            "Forms"
          ],
        },
        { title: "Adobe Dreamweaver", topics: [
          "Introduction to Adobe Dreamweaver",
          "Defining a Dreamweaver site",
          "Insert Toolbar",
          "Common Tools",
          "Layout Tools",
          "Forms Tool",
          "Spry Tools",
          "Properties Panel",
          "Using Snippets panel",
          "Dreamweaver extensions",
          "Template Design in DW",
          "Editable and Non-Editable Regions",
          "Defining the DWT for project.",
          "Creating sub pages for project"
        ] },
        { title: "HTML5", topics: [
          ".Introduction to HTML",
          "Features of HTML.",
          "HTML5 DocType",
          "New Structure Tag",
          "Section",
          "Article",
          "Header",
          "Footer",
          "Designing a HTML Structure of Page",
          "New Media Tag",
          "Audio Tag",
          "Video Tag"
        ] },
        { title: "CSS", topics: [
          "Introduction to CSS 3",
          "New CSS 3 Selectors",
          "Attribute Selectors",
          "First-of-type",
          "Last-of-type",
          "Nth-child",
          "Element:empty",
          "New CSS3 Properties",
          "Custom Fonts",
          "Text-Shadow Property",
          "Text-Stroke Property",
          "Rounded Corners",
          "Box Shadows",
          "CSS Gradients",
          "CSS Multiple backgrounds",
          "Opacity Property",
          "Transition effect",
          "Animation effects",
          "Css Media Queries",
          "Using CSS3 in Practical Layout"
        ] },
        { title: "Responsive Web Design with Bootsrap", topics: [
          "Introduction to Responsive Design",
          "Mobile first design concepts",
          "Common device dimensions",
          ".View-port tag",
          "Using css media queries",
          "Menu conversion script",
          "Basic Custom Layout",
          "Introduction to Bootstrap",
          "Installation of Bootstrap",
          "Grid System",
          "Forms",
          "Buttons",
          "Icons Integration",
          "Using CSS3 in Practical Layout"
        ] },
        { title: "Adobe Flash", topics: [
          "Introduction to Generics",
          "Introduction to Animation",
          "Introduction to Adobe Flash",
          "Tools in Adobe Flash",
          "Shape Tween and Motion Tween",
          "Frame Animation",
          "Various Flash Effects",
          "Creating Flash Banners",
          "Creating Flash Intro’s",
          "Creating Flash Website",
          "Basics of Action Scripting"
        ] },
        { title: "Conclusion", topics: [
          "Static Project",
          "We provide Software and E-book",
          "24*7 support during the training program.",
          "Certificate"
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
    <div className="w-full shadow-xl    lg:absolute lg:top-[10%]  lg:right-[-33%] lg:h-[60vh] lg:w-[40%] bg-white shadow-md rounded-lg p-6">
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
        <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold">
          Apply Now
        </button>
        <div className="text-center text-orange-500 font-semibold cursor-pointer">
          <span>Share This Course 🔗</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Content