import React from 'react'

function Content() {
  return (
    <div className="xl:px-32 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Main Content */}
    <div className="md:col-span-3   xl:col-span-2 bg-white p-6 rounded-2xl shadow-lg">
      <img
        src="https://mitech.thememove.com/wp-content/uploads/2019/03/blog-08-370x230@2x.jpg"
        alt="Blog"
        className="w-full rounded-lg"
      />
      <div className="mt-4 text-gray-600 flex items-center space-x-2">
        <span className="font-semibold text-gray-900">by Chenai Simon</span>
        <span>• 0 Comments •</span>
        <span className="text-blue-500">Education</span>
      </div>
      <p className="mt-4 text-gray-700 text-[15px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
      </p>
      <blockquote className="mt-6 p-4 border-l-4 border-blue-500 bg-gray-100 italic">
        "Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic..." - John Doe
      </blockquote>
      <h2 className="mt-6 text-xl font-bold mb-5">So where to from here then?</h2>
      <p className="mt-2 text-gray-700 text-[15px] text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique mollitia architecto placeat vero excepturi ea, nihil dolorum voluptatibus quod reprehenderit delectus aliquid odio atque recusandae aspernatur vitae exercitationem necessitatibus dolor tenetur voluptate magnam rem quasi facere? At deserunt nemo iure tenetur, minus incidunt, error possimus ut ratione assumenda a ullam adipisci eum reiciendis sunt odit porro perspiciatis. Velit suscipit voluptate, ratione odio, voluptatem ullam porro culpa nobis, neque odit vel dolores quos aliquam consectetur pariatur laudantium. Enim magni eius unde voluptate tempore beatae totam, placeat quo reiciendis! Nostrum maiores unde, error et quasi delectus minima voluptate facere nesciunt fuga quod.
      </p>
      <h2 className="mt-6 text-xl font-bold pt-8 mb-10" >Conclusion</h2>
      <p className='text-[15px] text-justify'>To emphasize the importance of monitoring, consider this: 85% of IT professionals report that unplanned downtime costs their business over $300,000 per hour. In another survey, 37% of organizations experienced at least one IT outage per year, with 91% of businesses admitting that just a single hour of downtime can cost them anywhere from $100,000 to over $5 million. These statistics underscore the need for proactive monitoring, regardless of the industry. Now, let’s embark on a journey through the different monitoring tools, each playing their part in safeguarding your systems.</p>
  
      <div className="max-w-4xl mx-auto mt-24 p-6 bg-white rounded-2xl border-1 shadow-lg">
      <h2 className="text-2xl font-bold mb-8">Leave your thought here</h2>
      <p className="text-gray-500 text-sm mt-1 mb-10">
        Your email address will not be published. Required fields are marked *
      </p>
      <form className="mt-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name *"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email *"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <textarea
          placeholder="Your Comment"
          rows="4"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <label className="text-gray-600 text-sm">
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>
        <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
    </div>

    {/* Sidebar */}
    <div className="bg-white md:w-[200%] xl:w-[110%] xl:h-[70vh]  p-8 rounded-2xl border-2  shadow-lg">
      <h3 className="text-3xl mb-10 font-bold mt-4">Recent Posts</h3>
      <div className='flex items-center mb-10 gap-5'>
        <img className='rounded-md' src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-4-100x80.jpg" alt="" />
        <div>
          <h3 className='mb-2 text-[#4A6375]'>What are the advantages of being a freelancer?</h3>
          <h4 className='text-[#4A6375]'>April 23, 2021</h4>
        </div>
      </div>
      <div className='flex items-center gap-5 mb-10'>
        <img src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-15-100x80.jpg" alt="" />
        <div>
          <h3 className='mb-2 text-[#4A6375]'>What are the advantages of being a freelancer?</h3>
          <h4 className='text-[#4A6375]'>April 23, 2021</h4>
        </div>
      </div>
      <div className='flex items-center gap-5'>
        <img src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-14-100x80.jpg" alt="" />
        <div>
          <h3 className='mb-2 text-[#4A6375]'>What are the advantages of being a freelancer?</h3>
          <h4 className='text-[#4A6375]'>April 23, 2021</h4>
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default Content