"use client";
import React from "react";
import Image from "next/image";
import useTheme from "@/componets/utils/hooks/useTheme";

const Aboutpage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // ৩টি মূল স্তম্ভের ডাটা (Why Choose Us)
  const coreValues = [
    {
      icon: "🛡️",
      title: "100% Certified Safe",
      desc: "Every plush toy is crafted from hypoallergenic, non-toxic organic cotton, thoroughly tested for all age groups.",
    },
    {
      icon: "🚀",
      title: "Real-time Tracking",
      desc: "Integrated with advanced courier logistics, giving you instant tracking IDs and seamless step-by-step updates.",
    },
    {
      icon: "💝",
      title: "Made with Love",
      desc: "We bring smiles to families by ensuring premium stitching, cloud-soft fluffiness, and beautiful custom gift-wrapping.",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-neutral-950 text-white" : "bg-neutral-50 text-neutral-900"
      }`}
    >
      {/* ================= SECTION 1: HERO HEADER ================= */}
      <section
        className={`py-20 text-center relative overflow-hidden ${
          isDark
            ? "bg-neutral-900/40 border-b border-neutral-900"
            : "bg-white border-b border-neutral-200/60 shadow-sm"
        }`}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-pink-500/10 to-violet-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <span className="inline-block text-xs font-bold tracking-widest text-pink-500 uppercase bg-pink-500/10 px-3.5 py-1.5 rounded-md mb-4">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Bringing Magic & <span className="text-pink-500">Soft Hugs</span> to
            Every Home
          </h1>
          <p
            className={`text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed ${
              isDark ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            Welcome to our premium plush kingdom. We are dedicated to creating
            the safest, cuddliest, and most delightful toy companions for your
            little ones.
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: BRAND MISSION & IMAGE ================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image Holder (আপনার থিমের Panda ইমেজটি উদাহরণ হিসেবে ব্যবহার করা হয়েছে) */}
          <div
            className={`relative w-full h-80 md:h-[450px] rounded-[2.5rem] overflow-hidden border p-6 flex items-center justify-center ${
              isDark
                ? "bg-neutral-900 border-neutral-800"
                : "bg-white border-neutral-200 shadow-md"
            }`}
          >
            <Image
              src="/image/panda-1.jpg"
              alt="Premium Toy Crafting"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-contain p-6 hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right Side: Description Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              We Believe A Toy Is A Child's First Best Friend
            </h2>
            <p
              className={`text-base leading-relaxed ${isDark ? "text-neutral-300" : "text-neutral-600"}`}
            >
              Founded with a simple vision, our application simplifies finding
              high-end, verified safe plush toys for modern parents. We bridge
              the gap between world-class toy designers and your nursery room.
            </p>
            <p
              className={`text-base leading-relaxed ${isDark ? "text-neutral-400" : "text-neutral-600"}`}
            >
              From giant cuddly pandas to vintage classic teddy bears, each
              product featured on our platform passes strict toxic-free
              materials audits. Combined with secure payment gateways and
              instant parcel dispatching, we ensure a premium shopping
              experience from start to finish.
            </p>

            {/* Core Stats (সংখ্যায় আমাদের ট্রাস্ট) */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800/10 dark:border-white/5">
              <div>
                <h4 className="text-2xl md:text-3xl font-black text-pink-500">
                  10k+
                </h4>
                <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 mt-1">
                  Happy Kids
                </p>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl font-black text-violet-500">
                  100%
                </h4>
                <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 mt-1">
                  Toxin Free
                </p>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl font-black text-amber-500">
                  4.9★
                </h4>
                <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 mt-1">
                  Store Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: CORE VALUES / WHY CHOOSE US ================= */}
      <section
        className={`py-20 transition-colors duration-300 ${
          isDark
            ? "bg-neutral-900/20 border-y border-neutral-900"
            : "bg-neutral-100/50 border-y border-neutral-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight">
              Our Core Promises
            </h2>
            <p
              className={`text-sm mt-2 max-w-sm mx-auto ${isDark ? "text-neutral-400" : "text-neutral-600"}`}
            >
              Why thousands of parents put their trust in our applications and
              services every single day.
            </p>
          </div>

          {/* 3-Card Uniform Value Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl border flex flex-col items-center text-center transition-all duration-300 group ${
                  isDark
                    ? "bg-neutral-900 border-neutral-800/80 hover:border-neutral-700 hover:shadow-xl hover:shadow-black/40"
                    : "bg-white border-neutral-200/80 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-200/60"
                }`}
              >
                <span className="text-4xl bg-pink-500/10 dark:bg-pink-500/5 p-4 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </span>
                <h3 className="text-lg font-bold mb-3 tracking-wide group-hover:text-pink-500 transition-colors">
                  {value.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed font-light ${
                    isDark ? "text-neutral-400" : "text-neutral-600"
                  }`}
                >
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;
