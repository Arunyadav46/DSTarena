import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Testimonal() {
    const testimonials = [
        {
          name: "STEPHEN MEARSLEY",
          role: "PR Officer",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          review:
            "IT service is not an easy path to follow. But these guys can make it to the top with premium services and dedicated customer support.",
        },
        {
          name: "MAGGIE STRICKLAND",
          role: "Web design",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          review:
            "Working with @Mitech is like having a family member who can fix everything.",
        },
      ];
  return (
    <div className="bg-[#F5F5F5] py-16 px-32">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500 uppercase tracking-widest text-sm">TESTIMONIALS</p>
            <h2 className="text-3xl font-bold mt-2">
              How our services bring about <span className="text-blue-600">success</span>
            </h2>
          </div>
    
          <div className="mt-10">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white w-[100%] h-[40vh] px-[-40px] p-6 border-2 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
    
                    <p className="mt-4 text-gray-600">{testimonial.review}</p>
    
                    <div className="flex mt-4 text-yellow-500">
                      {"⭐".repeat(5)}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
  )
}

export default Testimonal