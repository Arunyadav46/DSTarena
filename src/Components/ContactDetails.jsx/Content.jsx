import React from 'react'

function Content() {
  return (
    <div className="xl:py-16 xl:px-48 bg-[#FFFFFF]">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className='border-l-4 pl-10 border-l-[#D2A98E]'>
          <h3 className="text-3xl font-bold mb-4">
            To make requests for <br /> further information, <br />
            <span className="text-blue-500">contact us</span> via our social channels.
          </h3>
          <p className="text-lg text-gray-700">
            We just need a couple of hours! <br /> No more than 2 working days since receiving your issue ticket.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <form id="contact-form" action="https://htmldemo.net/mitech/assets/php/mail.php" method="post">
            <div className="space-y-4">
              <input
                name="con_name"
                type="text"
                placeholder="Name *"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="con_email"
                type="email"
                placeholder="Email *"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="con_subject"
                type="text"
                placeholder="Subject *"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="con_message"
                placeholder="Please describe what you need."
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <div className='w-full h-[70vh] mt-20 bg-red-400'>
            <img className='w-full h-full object-cover' src="https://mitech.thememove.com/wp-content/uploads/2019/03/mitech-contact-hotspot-map.jpg" alt="" />
      </div> */}
    </div>
  </div>
  )
}

export default Content