"use client";
import React from "react";
import Image from "next/image";
import useTheme from "@/componets/utils/hooks/useTheme";

// Swiper কম্পোনেন্ট এবং মডিউলস ইমপোর্ট
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

// Swiper এর প্রয়োজনীয় CSS ইমপোর্ট
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Homepage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sliderData = [
    {
      src: "/image/babydoll-toy-1.webp",
      title: "Cute Baby Dolls Collection",
      subtitle: "Soft, safe & perfect companion for kids",
    },
    {
      src: "/image/elephent-toy-1.webp",
      title: "Friendly Elephant Toys",
      subtitle: "Big fun with adorable elephant friends",
    },
    {
      src: "/image/teady-bear-1.webp",
      title: "Classic Teddy Bear",
      subtitle: "A timeless cuddle buddy for everyone",
    },
    {
      src: "/image/teady-cat-1.webp",
      title: "Lovely Teddy Cat",
      subtitle: "Soft and playful furry friend",
    },
    {
      src: "/image/teady-hourse-1.webp",
      title: "Royal Horse Toy",
      subtitle: "Ride into imagination and adventure",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-neutral-950 text-white" : "bg-neutral-50 text-neutral-900"}`}
    >
      {/* ================= HERO SLIDER ================= */}
      <div className="relative w-full h-screen md:h-[90vh] overflow-hidden group">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          effect={"fade"} // প্রিমিয়াম ফেড ইফেক্ট
          fadeEffect={{ crossFade: true }}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full h-full"
        >
          {sliderData.map((slide, index) => (
            <SwiperSlide key={index} className="relative w-full h-full">
              {/* Slide Image */}
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-6 md:px-16 z-20">
                <div className="max-w-2xl">
                  <span className="inline-block text-pink-400 font-bold tracking-widest text-xs uppercase mb-4 bg-pink-400/10 px-4 py-2 rounded-full">
                    ✨ New Arrival
                  </span>

                  <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>

                  <p className="text-gray-100 text-lg md:text-2xl max-w-xl mb-8 drop-shadow-md">
                    {slide.subtitle}
                  </p>

                  <div className="flex gap-4">
                    <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-violet-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-pink-500/50">
                      Shop Now
                    </button>
                    <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CUSTOM NAVIGATION ARROWS (Swiper এর সাথে কানেক্টেড) */}
        <button className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* CUSTOM PAGINATION DOTS CONTAINEER */}
        <div className="swiper-pagination-custom absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-3 z-30 w-auto"></div>
      </div>
    </div>
  );
};

export default Homepage;
