import React from 'react'
import { Link } from 'react-router-dom';

function Content() {
  const blogs = [
    {
      id: 1,
      title: "Ideas for High Returns on Investment between authorities",
      date: "February 28, 2019",
      description:
        "Using the profit accumulator is one such way, and you should understand why it increases your chances of the profits...",
      image: "https://mitech.thememove.com/wp-content/uploads/2019/03/blog-08-370x230@2x.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      title: "How Technology Made Businesses More Efficient",
      date: "February 28, 2019",
      description:
        "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses...",
      image: "https://mitech.thememove.com/wp-content/uploads/2019/03/blog-08-370x230@2x.jpg",
    },
    {
      id: 3,
      title: "Data Secure on Transitioning to a New Office",
      date: "February 28, 2019",
      description:
        "It is far wiser to do your own installations and ensure that all data flowing through the organization has end-to-end encryption...",
      image: "https://mitech.thememove.com/wp-content/uploads/2019/03/blog-08-370x230@2x.jpg",
    },
    {
      id: 4,
      title: "The Keys to Persuading Customers Nowadays",
      date: "February 28, 2019",
      description:
        "The middle part is called the emotional, brain-controlled feeling. The outer part controls logical reasoning...",
      image: "https://mitech.thememove.com/wp-content/uploads/2019/03/blog-08-370x230@2x.jpg",
    },
    {
      id: 5,
      title: "Blockchain Technology Effects on Logistics Sector?",
      date: "February 22, 2019",
      description:
        "Changing or adding information to the 'chain' requires the authentication of everyone who is in the network...",
      image: "https://mitech.thememove.com/wp-content/uploads/2019/03/blog-08-370x230@2x.jpg",
    },
    {
      id: 6,
      title: "How Wireless Technology is Changing Business",
      date: "February 22, 2019",
      description:
        "If there’s one way that wireless technology has changed the way we work, it’s that everyone is now connected...",
      image: "https://mitech.thememove.com/wp-content/uploads/2019/03/blog-08-370x230@2x.jpg",
    },
  ];
  return (
    <div className="w-full px-10 pt-5  xl:px-32 bg-[#FFFFFF] xl:py-10">
    <h2 className="text-center text-4xl font-semibold mb-20 mt-12">
      Interesting articles <span className="text-blue-600">updated daily</span>
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex justify-center space-x-4 mb-20">
        {[
          { label: "All", count: "" },
          { label: "Cloud Services", count: 1 },
          { label: "Cyber Security", count: 3 },
          { label: "IT consultancy", count: 1 },
          { label: "IT Security", count: 1 },
        ].map((filter, index) => (
          <button key={index} className="px-4 mb-4 py-2 border rounded text-gray-700 hover:bg-blue-600 hover:text-white">
            {filter.label} <span className="ml-1 text-sm"></span>
          </button>
        ))}
      </div>
      <div className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <p className="text-gray-500 text-sm mb-2">📅 {blog.date}</p>
              <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
              <Link className='text-blue-500' to="/Blog/Learnmore">Read More</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">1</button>
        <button className="px-4 py-2 mx-2 text-gray-500">2</button>
        <button className="px-4 py-2 text-gray-500">Next</button>
      </div>
    </div>
  </div>
  )
}

export default Content