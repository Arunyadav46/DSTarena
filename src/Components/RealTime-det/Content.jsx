import React from 'react'

function Content() {
  return (
       <div id="text9" className="bg-white py-12 px-6 md:px-20 shadow-xl rounded-2xl max-w-7xl mx-auto mt-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 border-b-2 border-blue-300 pb-2">
        Internship Policy
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Purpose</h2>
        <p className="text-gray-700 leading-relaxed">
          The purpose of our policy is to establish a clear framework that will guide and give
          direction to the management of all internship training of DSTARENA.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Objectives</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>
            To provide an opportunity for interns to use the workplace as an active learning
            environment.
          </li>
          <li>
            To provide opportunities for new entrants with a view to acquiring skills that would make
            them employable.
          </li>
          <li>
            To assist students to obtain required practical experience and to complete their
            qualifications.
          </li>
          <li>
            To provide the Departments with an opportunity to compile a database of prospective
            employees for future recruitment purposes.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Duration of Internship</h2>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <p className="text-gray-700 mb-2">
            <span className="font-semibold text-blue-800">Time Period:</span> 6 months
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-blue-800">Working Hours:</span> 9:30 A.M To 7:00 P.M
          </p>
        </div>
      </section>
    </div>
  )
}

export default Content