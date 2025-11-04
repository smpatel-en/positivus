import SectionHeading from "../SectionHeading";
import { testimonialsData } from "../../../lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section>
      <div className="container">
        {/* Section Wrapper */}
        <div>
          {/* Section Head */}

          <SectionHeading
            title="Testimonials"
            description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
          />

          {/* Section Body */}
          <div className="bg-secondary lg:rounded-primary rounded-3xl py-20 text-white">
            {/* Testimonial Slider */}
            <Swiper
              centeredSlides={true}
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
                el: ".custom-swiper-pagination",
                bulletClass: "custom-swiper-bullet",
                renderBullet: function (index, className) {
                  return (
                    '<span class="' +
                    className +
                    '">' +
                    '<svg width="14" height="14" viewBox="0 0 14 14"  xmlns="http://www.w3.org/2000/svg">' +
                    '<path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="currentColor"/>' +
                    "</svg>" +
                    "</span>"
                  );
                },
                bulletActiveClass: "custom-swiper-bullet-active",
              }}
              navigation={{
                prevEl: ".custom-swiper-prev",
                nextEl: ".custom-swiper-next",
                disabledClass: "custom-swiper-button-disabled",
              }}
              modules={[Pagination, Navigation]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="mySwiper"
            >
              {/* Testimonial Item */}
              {testimonialsData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="lg:rounded-primary border-primary mb-10 rounded-3xl border p-8 lg:p-12">
                    <p>"{testimonial.content}"</p>
                    <div></div>
                  </div>
                  <div className="mx-auto max-w-[80%]">
                    <h4 className="text-primary">{testimonial.author}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination and Navigation */}
            <div className="mx-auto mt-15 flex max-w-[50%] items-center justify-between gap-6 lg:mt-30">
              {/* Previous Button */}
              <button
                className="custom-swiper-prev hover:text-primary cursor-pointer transition-all"
                aria-label="Previous slide"
              >
                <FaArrowLeft className="text-2xl" />
              </button>

              {/* Pagination Dots */}
              <div className="custom-swiper-pagination flex w-fit justify-center gap-2"></div>

              {/* Next Button */}
              <button
                className="custom-swiper-next hover:text-primary cursor-pointer transition-all"
                aria-label="Next slide"
              >
                <FaArrowRight className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
