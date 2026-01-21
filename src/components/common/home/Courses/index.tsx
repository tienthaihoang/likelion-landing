"use client";

import data from "@/data/data.json";
import SectionHeading from "../SectionHeading";
import CourseCard from "./CourseCard";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Courses() {
  const courses = data["courses"];

  return (
    <section id="courses" className="scroll-mt-4">
      <div className="container">
        <div className="space-y-8 sm:space-y-16">
          <SectionHeading
            title="Khóa học của chúng tôi"
            subtitle="Người mới bắt đầu? Chưa có kinh nghiệm? Khoá học lập trình của LIKELION hỗ trợ bạn mọi lúc trên con đường học tập của mình."
          />

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            loop
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={false}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            className="pb-10"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.title}>
                <CourseCard {...course} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <style jsx global>{`
        .swiper-button-next::after,
        .swiper-button-prev::after {
          color: #ff6000;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: #ff6000;
        }
      `}</style>
    </section>
  );
}
