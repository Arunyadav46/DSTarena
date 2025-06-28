import React from 'react'

function Content() {
  return (
   <div id="text9" className="w-[90%] text-justify md:w-[80%] mx-auto my-10 bg-white shadow-lg rounded-2xl p-6 md:p-10 space-y-6">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Training Overview</h2>
  
  <p className="text-gray-700 leading-relaxed">
    Our courses feature hands-on tasks and real-world scenarios. In just a matter of days, you’ll be more productive and embracing new technology standards. The goal of our training program is to provide the world with skilled human resources who are competent to practice and provide solutions in an ever-changing technology world.
  </p>

  <p className="text-gray-700 leading-relaxed">
    To attain this goal, Dstarena uses a robust and well-researched proven training model. Trainees are exposed to a wide range of professional role models, mentors, and trainers. During this journey, they develop a unique professional identity.
  </p>

  <p className="text-gray-700 leading-relaxed">
    Our mentors provide a structured path of learning through experiential activities. From student to professional, trainees grow in autonomy and skill. Corporate training refreshes experienced professionals with the latest practices and confidence to take on new challenges.
  </p>

  <p className="text-gray-700 leading-relaxed">
    We also focus on <span className="font-semibold text-blue-600">self-awareness</span> and <span className="font-semibold text-blue-600">reflection</span>. Trainees are encouraged to explore their personal and professional growth through meaningful discussions with mentors in a safe, respectful environment.
  </p>

  <div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Training Methodology Includes:</h3>
    <ul className="list-disc pl-6 text-gray-700 space-y-1">
      <li>Classroom Lectures</li>
      <li>Group Discussions</li>
      <li>Case Studies</li>
      <li>Paper Presentations</li>
      <li>Live Projects</li>
      <li>Learning by doing the actual work</li>
      <li>Observing live models of various projects</li>
    </ul>
  </div>
</div>

  )
}

export default Content