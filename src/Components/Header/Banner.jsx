import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Button from "../Shared/Button";
import slider1 from "../../assets/slide1.png";
import slider2 from "../../assets/slide2.png";

const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper h-[400px] bg-[#d0d8db]"
    >
      <SwiperSlide>
        <div className=" text-[#171e3c] flex items-center justify-center gap-20 px-20 h-full font-Playfair">
          <div className="flex-1 space-y-3">
            <h1 className="text-8xl font-extrabold font-Playfair">Get Ready</h1>
            <h3 className="text-5xl font-bold">For New Collections</h3>
            <Button btn_text={"View Collectins"}></Button>
          </div>
          <div className="h-full">
            <img className="flex-1 h-[400px] " src={slider1} alt="slider image" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" text-[#171e3c] flex items-center justify-center gap-20 px-20 h-full font-Playfair">
          <div className="flex-1 space-y-3">
            <h1 className="text-8xl font-extrabold font-Playfair">Get Ready</h1>
            <h3 className="text-5xl font-bold">For New Collections</h3>
            <Button btn_text={"View Collectins"}></Button>
          </div>
          <div className="h-full">
            <img className="flex-1 h-[400px] " src={slider1} alt="slider image" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" text-[#171e3c] flex items-center justify-center gap-20 px-20 h-full font-Playfair">
          <div className="flex-1 space-y-3">
            <h1 className="text-8xl font-extrabold font-Playfair">Get Ready</h1>
            <h3 className="text-5xl font-bold">For New Collections</h3>
            <Button btn_text={"View Collectins"}></Button>
          </div>
          <div className="h-full">
            <img className="flex-1 h-[400px] " src={slider1} alt="slider image" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" text-[#171e3c] flex items-center justify-center gap-20 px-20 h-full font-Playfair">
          <div className="flex-1 space-y-3">
            <h1 className="text-8xl font-extrabold font-Playfair">Get Ready</h1>
            <h3 className="text-5xl font-bold">For New Collections</h3>
            <Button btn_text={"View Collectins"}></Button>
          </div>
          <div className="h-full">
            <img className="flex-1 h-[400px] " src={slider1} alt="slider image" />
          </div>
        </div>
      </SwiperSlide>
     
    </Swiper>
  );
};

export default Banner;
