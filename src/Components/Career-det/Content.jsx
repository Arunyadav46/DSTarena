import React from 'react'

function Content() {
  return (
     <div id="text9" className="max-w-7xl mx-auto px-6 py-12 text-gray-600">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-700 drop-shadow">Career Training</h1>

      <div className="bg-white shadow-lg rounded-xl p-8 mb-8">
        <p className="text- leading-7">
          Corporate training is a means of providing learners with the knowledge and skills they need to perform their jobs at a high level. This is typically the responsibility of the Learning and Development / Talent teams in larger companies and the Human Resources department in smaller organizations. They’re responsible for identifying training needs, developing training programs, and making it available for employees.
        </p>
      </div>

      <div className="bg-gray-50 shadow-md rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Advantages of Corporate Training</h2>
        <p className="text-lg leading-7 mb-4">
          Corporate training is critical to the success of any business. Your employees are the powerhouse behind what you do, so helping them increase their knowledge and improve their professional skills will only boost your business. Here are at least four reasons why you should care about this.
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Increased efficiency:</strong> Well-designed training that meets employees’ needs makes your workforce more productive and efficient. Over time, these improvements will make your company more profitable.
          </li>
          <li>
            <strong>Increased motivation:</strong> Training programs help individuals, teams, and departments unite as a single organizational structure.
          </li>
          <li>
            <strong>Building corporate culture:</strong> High-quality training aligns corporate values and strategy.
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Corporate Training Programs</h2>
        <p className="text-lg leading-7 mb-6">
          Various companies may have several different training programs, depending on their size, diversity, and the specifics of their business. Here’s a list of the most common types of corporate training programs:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">1. Onboarding and Orientation</h3>
            <p className="text-gray-700">
              This kind of training is hosted right after a newly hired employee comes to the workplace. It provides general information about the company, its history, mission, vision, values, policies, and the specific training for their role.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">2. Compliance Training</h3>
            <p className="text-gray-700">
              Compliance training includes anti-harassment, diversity, ethics, workplace safety, and privacy training. It ensures staff are aware of legal responsibilities and company policies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">3. Hard Skills Training</h3>
            <p className="text-gray-700">
              Focused on technical expertise such as programming, graphic design, or data analysis. Helps employees stay updated with the latest developments and remain competitive.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">4. Soft Skills Training</h3>
            <p className="text-gray-700">
              Covers communication, teamwork, leadership, and decision-making. Soft skills boost ROI and improve internal collaboration.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">5. Product Knowledge Training</h3>
            <p className="text-gray-700">
              Enables employees to confidently explain product features and benefits to customers. Often included in onboarding or when new products are launched.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content