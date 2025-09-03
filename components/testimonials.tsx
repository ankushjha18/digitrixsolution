"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from "next/image"
import { Star } from "lucide-react"
import Reveal from "./anim/Reveal"

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, ExampleCorp",
    text: "This company transformed our online presence. Highly professional and reliable!",
    image: "/images/testimonial_profile.jpg",
    rating: 4.5,
  },
  {
    name: "Jane Smith",
    role: "Marketing Head, BrandX",
    text: "Exceptional service with amazing results. They really understand digital marketing.",
    image: "/images/testimonial_profile.jpg",
    rating: 4,
  },
  {
    name: "Mike Johnson",
    role: "CTO, TechSolutions",
    text: "Their development team delivered a flawless app. Highly recommended!",
    image: "/images/testimonial_profile.jpg",
    rating: 5,
  },
  {
    name: "Sara Williams",
    role: "Designer, CreativeHub",
    text: "Great design sense and attention to detail. Loved working with them.",
    image: "/images/testimonial_profile.jpg",
    rating: 4.5,
  },
  {
    name: "David Brown",
    role: "Founder, StartupZone",
    text: "Amazing consultancy and support. Our project was delivered on time.",
    image: "/images/testimonial_profile.jpg",
    rating: 4,
  },
  {
    name: "Emily Davis",
    role: "Project Manager, DevCo",
    text: "Professional and proactive. I highly recommend their services.",
    image: "/images/testimonial_profile.jpg",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="w-full py-20 bg-background">
        <Reveal>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            type: "bullets",
            el: ".swiper-pagination",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="group relative flex flex-col md:flex-row items-start bg-card rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                
                {/* Profile Picture */}
                <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="mt-4 md:mt-0 flex-1">
                  {/* Stars */}
               {/* Stars */}
                <div className="flex items-center mb-2 justify-center md:justify-start">
                {Array.from({ length: 5 }).map((_, i) => {
                    const fill = Math.min(Math.max(testimonial.rating - i, 0), 1); // 0, 0.5, 1

                    return (
                    <svg
                        key={i}
                        viewBox="0 0 24 24"
                        className="w-5 h-5 mr-1"
                    >
                        {/* Gray Star */}
                        <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.78 1.4 8.162L12 18.896 5.666 23.152l1.4-8.162L1.132 9.21l8.2-1.192z"
                        fill="#E5E7EB" // gray
                        />
                        {/* Yellow overlay star */}
                        <clipPath id={`clip-${i}`}>
                        <rect x="0" y="0" width={`${fill * 100}%`} height="100%" />
                        </clipPath>
                        <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.78 1.4 8.162L12 18.896 5.666 23.152l1.4-8.162L1.132 9.21l8.2-1.192z"
                        fill="#FBBF24" // yellow
                        clipPath={`url(#clip-${i})`}
                        />
                    </svg>
                    )
                })}
                </div>



                  {/* Testimonial text */}
                  <p className="text-sm sm:text-base text-muted-foreground mb-2">
                    "{testimonial.text}"
                  </p>

                  {/* Name & Role */}
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="swiper-button-prev text-2xl text-primary hover:text-orange-500"></div>
          <div className="swiper-button-next text-2xl text-primary hover:text-orange-500"></div>

          {/* Pagination Dots */}
          <div className="swiper-pagination mt-4 text-center"></div>
        </Swiper>
      </div>
      </Reveal>
    </section>
  )
}
