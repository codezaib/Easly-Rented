import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Alice Johnson",
    location: "New York, USA",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    message:
      "This service is amazing! I was able to rent everything I needed quickly and easily.",
  },
  {
    name: "John Smith",
    location: "London, UK",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    message: "Highly recommend! Smooth experience from start to finish.",
  },
  {
    name: "Maria Gonzalez",
    location: "Madrid, Spain",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    message: "The variety of products is impressive. Will use again for sure.",
  },
  {
    name: "Ahmed Khan",
    location: "Lahore, Pakistan",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    message: "Great support and really convenient. Loved it!",
  },
];

const TestimonialSection = () => {
  return (
    <div className="py-16 px-4 bg-white flex flex-col items-center">
      {/* Top Quote */}
      <blockquote className="text-center text-xl sm:text-2xl font-semibold max-w-2xl mb-10 text-gray-700 italic">
        “We don't just rent products, We build Relationships!”
      </blockquote>

      {/* Slider Container */}
      <div className="w-full max-w-4xl md:w-3/5">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full overflow-hidden rounded-xl">
                <div className="bg-gray-50 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover mb-4"
                  />
                  <p className="text-gray-600 mb-4">"{testimonial.message}"</p>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <span className="text-sm text-gray-500">
                    {testimonial.location}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
