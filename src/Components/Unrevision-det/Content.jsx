import React from 'react'

function Content() {
  return (
    <div className="px-4 md:px-40 py-10 bg-white text-gray-800">
  <h1 className="text-3xl font-bold text-center mb-2">Unlimited Revisions</h1>
  <p className="text-center text-lg text-gray-600 mb-10">
    Refine your thesis endlessly until it's perfect
  </p>

  <div className="text-justify mx-auto space-y-6">
    <p>
      Perfection takes time—and we respect that. With <strong>unlimited revisions</strong>, you get the freedom to
      shape your thesis exactly how your guide and university expects it.
    </p>
    <p>
      Whether you're working through formatting issues, citation updates, or structural feedback,
      <strong> THESISGLOBAL </strong> is committed to walking with you until the very end.
    </p>

    <div className="flex flex-col md:flex-row gap-10 mt-10 items-start">
      <img
        src="https://mythesis.co.in/wp-content/uploads/2017/11/22.jpg"
        alt="Editing and reviewing thesis"
        className="w-full md:w-1/2 rounded-xl shadow"
      />

      <div className="w-full md:w-1/2 space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">What Our Revision Support Covers:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Structural and formatting corrections</li>
            <li>Content enhancement and rephrasing</li>
            <li>Plagiarism reduction and originality improvement</li>
            <li>APA/MLA/IEEE style adjustments</li>
            <li>Guide/university-specific feedback updates</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Why Unlimited Revisions Matter?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Ensures your thesis meets exact expectations</li>
            <li>No stress about "limited attempts"—take your time</li>
            <li>Peace of mind knowing we’re with you throughout</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-10 space-y-4">
      <h2 className="text-xl font-semibold">Key Advantages of Our Unlimited Revision Policy</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>✅ Boosts confidence in your submission</li>
        <li>✅ Adapts your thesis to evolving feedback</li>
        <li>✅ Allows you to meet every academic criterion</li>
        <li>✅ Saves time and prevents last-minute panic</li>
      </ul>
    </div>

    <div className="mt-10 text-center">
      <h3 className="text-xl font-semibold mb-2">📩 Not satisfied yet? No worries.</h3>
      <p className="text-gray-700">We’re here until you are. Get started with revision support now.</p>
      <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow">
        Contact Us
      </button>
    </div>
  </div>
</div>

  )
}

export default Content