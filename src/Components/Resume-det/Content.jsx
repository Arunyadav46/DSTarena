import React from 'react'
import { FaTimesCircle, FaClipboard } from 'react-icons/fa';

function Content() {

      const leftColumn = [
    "Do not include most personal details in your resume",
    "Unprofessional Email Address",
    "Generic objective statement",
    "Excessive jargons & technical terms",
    "Typos & grammatical errors",
    "Irrelevant skills or experiences",
  ];

  const centerColumn = [
    "Unquantifiable achievements",
    "Overly lengthy resumes",
    "Too much formatting",
    "Copying & pasting from job descriptions",
    "Listing references on the resume itself",
    "Outdated information",
  ];

  const rightColumn = [
    "Unprofessional design choices",
    "Hobbies or interests unrelated to the job",
    "Negative information about the previous employer",
    "Overstating your skills & experience",
    "Using templates & tables given in the software",
    "Failure to align with job requirements",
  ];
  return (
     <div className="bg-white px-6 md:px-40 py-12 text-slate-800 text-center">
      {/* Title */}
      <h2 className="text-2xl  font-extrabold mb-6 ">
        INDIA’S NO:1 RESUME WRITING SERVICE- TAILORING EACH RESUME
      </h2>
      <p className="mb-12 text-sm md:text-base text-justify text-gray-700">
        In today’s world, we have more free online resume builders, but one who writes their resume with the help of professional resume writers will have a lasting impression on their employers.
        You can make your resume online free anywhere, but HIGS – the best resume preparation service – will do the best quality resume with an affordable quote.
        Thoroughly analyze your job description. We identify your key skills and qualifications.
        We incorporate all your details and adjust your resume to highlight the customized points.
        We also analyze relevant experiences and achievements that directly match the requirements of the specific role.
      </p>

      {/* Free Discussion Section */}
      <div className="bg-white py-6 px-4 rounded-lg shadow-sm mb-12">
        <h3 className="text-xl font-semibold">DO YOU WANT TO HAVE A FREE TECHNICAL DISCUSSION?</h3>
        <p className="text-sm mt-2">
          <strong>Our Team Is Here To Provide A Free Technical Discussion.</strong> You Can Avail Client Service From Our Team Through Calls, Email, And Chat.
          We Clarify All Your Doubts, Reveal Offer Details, And Price Details, Confirm Turnaround Time, And More.
        </p>
        <button className="mt-4 inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded">
          <FaClipboard />
          VIEW SAMPLE PROFILE PAGE HERE
        </button>
      </div>

      {/* Dangerous Mistakes Section */}
      <h3 className="text-xl md:text-2xl font-extrabold text-teal-900 mb-6">
        YOU MAY MAKE THE FOLLOWING DANGEROUS MISTAKES WHILE BUILDING YOUR RESUME
      </h3>
      <p className="mb-6 text-base font-semibold">
        Your Employer Or Your Industry People Can Reject You Because…
      </p>

      <div className="grid md:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
        {[leftColumn, centerColumn, rightColumn].map((column, colIndex) => (
          <ul key={colIndex} className="space-y-4 text-sm">
            {column.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-rose-600">
                <FaTimesCircle className="mt-1 text-lg" />
                <span className="italic text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Bottom CTA Button */}
      <div className="mt-10">
        <button className="inline-block px-6 py-3 bg-slate-600 text-white rounded hover:bg-slate-700 text-sm font-semibold shadow-md">
          📝 BUILD MY WEBSITE RESUME FROM THE HANDS OF INDUSTRY-STANDARD SPECIALISTS
        </button>
      </div>
    </div>
  )
}

export default Content