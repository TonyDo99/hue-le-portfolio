import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section id="projects">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Testimonials.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Testimonials.subtitle}
        </h4>
        <br />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[40rem] max-w-3xl"
          touchEventsTarget="container"
        >
          {Testimonials.testimonials_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={`duration-500 bg-bg_light_primary mx-8 border-2 
                px-8 pt-6 h-full rounded-2xl flex items-center gap-6 overflow-scroll
               border-slate-200 md:flex-row flex-col
                ${activeIndex !== i && "scale-75 blur-sm"}`}
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                <div className="h-24 w-40">
                  <img
                    src={content?.img}
                    alt="..."
                    className="h-full w-full object-contain rounded-2xl"
                  />
                </div>
                <div className="md:mt-28">
                  <h6 className="mb-3">{content?.company}</h6>
                  <h6 className="mb-3">Role: {content?.role}</h6>
                  {content?.review.map((text, index) => (
                    <div key={index}>
                      <p className="sm:text-base text-sm mb-4">+ {text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
