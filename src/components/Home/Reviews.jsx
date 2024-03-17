import React, { useRef, useState } from 'react';
import Cards from './Cards';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


export default function Reviews() {
  return (
    <>
      <div className='overflow-x-auto mx-7'>
      <h3 className='text-4xl font-bold text-gradient flex justify-center   mt-16'>What Students Say our Product </h3>
      <p className='text-gray-700 font-semibold flex justify-center align-middle m-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugit explicabo facere!</p>

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true} // Enable looping
        autoplay={{
          delay: 0, // Delay between transitions (in ms). Adjust as needed.
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        speed={5000} // Adjust transition speed for smoother animations (in ms)
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1  ,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0   ,
          },
        }}
        modules={[Autoplay]} // Only include Autoplay module here
        className="mySwiper  "
       
        >
        <SwiperSlide ><Cards name={"Aisha Khan"}  school={"Beacon Hills High School"}content={"NextgenStudy AI has revolutionized the way I approach my studies. It's like having a tutor available anytime I need it!"} /></SwiperSlide>
        <SwiperSlide ><Cards name={"Mateo Garcia"} school={"Montgomery Blair High School "} content={"Thanks to NextgenStudy AI, I've seen a significant improvement in my grades and understanding of complex topics."} /></SwiperSlide>
        <SwiperSlide ><Cards name={"Claire Dubois"} school={"Los Angeles School of Arts "} content={"This tool is a game-changer for exam preparation. It's incredibly user-friendly and effective!" } /></SwiperSlide>
        <SwiperSlide ><Cards name={"Luna Garcia "} school={"The Doon School "} content={"Finally, a study tool that keeps up with my pace and challenges me to learn more deeply."} /></SwiperSlide>
        <SwiperSlide ><Cards name={"Nora Walker"}  school={"Westfield High School "}content={"The clarity of explanations and depth of knowledge provided by NextgenStudy AI is unmatched."} /></SwiperSlide>
      </Swiper>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true} // Enable looping
        autoplay={{
          delay: 0, // Delay between transitions (in ms). Adjust as needed.
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        speed={5000} // Adjust transition speed for smoother animations (in ms)
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1  ,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0   ,
          },
        }}
        modules={[Autoplay]} // Only include Autoplay module here
        className="mySwiper  "
       
        
      >
        <SwiperSlide ><Cards name={"Nadia Patel"} school={"Symbiosis School of Law"} content={"NextgenStudy AI has been invaluable for my thesis research, offering clear explanations and quick answers to complex questions."} /></SwiperSlide>
        <SwiperSlide ><Cards school={"The Aga Khan Academy "} name={"Mohamed Hassan"} content={"The depth of NextgenStudy AI's problem-solving is phenomenal. It has helped me grasp concepts I struggled with for months." } /></SwiperSlide>       
         <SwiperSlide ><Cards name={"Audrey Moor"} school={"St. Xavier's Collegiate School"} content={"I was skeptical at first, but NextgenStudy AI proved to be an extraordinary aid for my advanced mathematics course."} /></SwiperSlide>
        <SwiperSlide ><Cards name={"Benjamin Lee"} school={"Highland Park High School"} content={"NextgenStudy AI's intuitive approach to learning complex scientific theories has made it my favorite study companion."} /></SwiperSlide>
        <SwiperSlide ><Cards name={"Manish Kumar"} school={"Delhi public school"} content={"I've recommended NextgenStudy AI to all my friends. It's an indispensable resource for any student."} /></SwiperSlide>
      </Swiper>
      </div>
    </>
  )
}
