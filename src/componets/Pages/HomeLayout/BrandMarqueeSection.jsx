"use client";
"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export const BrandMarqueeSection = ({ isDark }) => {
  const brandItems = [
    { src: "/image/babydoll-toy-1.webp", label: "BabyDoll Co." },
    { src: "/image/car-toy-1.webp", label: "TurboWheels" },
    { src: "/image/dog-toy-1.webp", label: "PuppyCraft" },
    { src: "/image/elephent-toy-1.webp", label: "JumboPlush" },
    { src: "/image/mickey-teady.webp", label: "Disney Magic" },
    { src: "/image/panda-1.jpg", label: "BambooBears" },
    { src: "/image/penguain-1.webp", label: "ArcticFluff" },
    { src: "/image/pink-bunny-teady.webp", label: "BunnyHugs" },
    { src: "/image/teady-bear-1.webp", label: "ClassicBear" },
    { src: "/image/teady-cat-1.webp", label: "KittySoft" },
    { src: "/image/teady-hourse-1.webp", label: "RoyalStallion" },
    { src: "/image/teady-marvel-1.webp", label: "HeroPlush" },
    { src: "/image/teady-shark-1.webp", label: "ApexToys" },
    { src: "/image/truck-toy-1.webp", label: "IronRig Trucks" },
  ];

  return (
    <section className={`py-12 mt-16 md:mt-24 border-y transition-colors duration-300 ${
      isDark ? "bg-neutral-900/30 border-neutral-800" : "bg-neutral-100/60 border-neutral-200"
    }`}>
      
      {/* Title Container - সেন্ট্রাল অ্যালাইনমেন্ট নিশ্চিত করা হয়েছে */}
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <span className="inline-block text-xs font-bold tracking-widest text-pink-500 uppercase bg-pink-500/10 px-4 py-2 rounded-md border border-pink-500/10">
          Our Featured Brands
        </span>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden">
        {/* Side Gradient Overlays (প্রিমিয়াম গ্লাস ইফেক্ট) */}
        <div className={`absolute inset-y-0 left-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-r ${isDark ? "from-neutral-950" : "from-neutral-50"} to-transparent`} />
        <div className={`absolute inset-y-0 right-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-l ${isDark ? "from-neutral-950" : "from-neutral-50"} to-transparent`} />
        
        {/* React Fast Marquee */}
        <Marquee
          speed={45}
          pauseOnHover={true}
          gradient={false}
          direction="left"
          className="py-2"
        >
          {/* গ্যাপ এবং রাইট প্যাডিং ফিক্সড রাখা হয়েছে যাতে ইনফিনিট লুপে কোনো ব্রেক না পড়ে */}
          <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
            {brandItems.map((item, idx) => (
              <div 
                key={idx} 
                className={`flex items-center gap-3 px-4 py-2.5 md:px-6 md:py-3 rounded-2xl border transition-all duration-300 group cursor-pointer ${
                  isDark 
                    ? "border-neutral-800 bg-neutral-900/50 hover:border-pink-500/30 hover:bg-neutral-900" 
                    : "border-neutral-200 bg-white hover:border-violet-500/30 hover:shadow-sm"
                }`}
              >
                {/* Brand Logo Container */}
                <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden flex-shrink-0 bg-neutral-950/5 dark:bg-white/5">
                  <Image 
                    src={item.src} 
                    alt={item.label} 
                    fill 
                    sizes="(max-width: 768px) 40px, 48px" 
                    className="object-contain p-1 group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                {/* Brand Label */}
                <span className="text-xs md:text-sm font-extrabold tracking-wide uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};


// =========================================================================
// ৬. PROMOTIONAL BANNER (৫০% অফের অফার ব্যানার)
// =========================================================================
export const PromoBannerSection = ({ isDark }) => {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 md:px-6">
      <div
        className={`relative rounded-[2.5rem] overflow-hidden py-16 px-8 md:px-16 flex flex-col lg:flex-row justify-between items-center gap-10 border transition-all duration-300 ${
          isDark
            ? "bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border-neutral-800 shadow-2xl shadow-black/50"
            : "bg-gradient-to-br from-pink-50 via-white to-violet-50 border-neutral-200/80 shadow-xl shadow-neutral-200/50"
        }`}
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-violet-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-violet-500/5 rounded-full blur-2xl pointer-events-none" />

        {/* Content Box */}
        <div className="relative z-10 max-w-2xl text-center lg:text-left">
          <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase px-3.5 py-1.5 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-full shadow-md shadow-pink-500/20">
            🔥 Mid-Year Mega Sale
          </span>
          <h2
            className={`text-4xl md:text-6xl font-black mt-5 mb-4 leading-tight tracking-tight ${
              isDark
                ? "text-white"
                : "bg-gradient-to-r from-neutral-950 to-neutral-800 bg-clip-text text-transparent"
            }`}
          >
            Get Up to <span className="text-pink-500">50% Off</span> On Soft
            Plushies
          </h2>
          <p
            className={`text-base md:text-lg font-light leading-relaxed ${isDark ? "text-neutral-400" : "text-neutral-600"}`}
          >
            Bring home infinite smiles. Secure the absolute finest premium plush
            collections today and grab{" "}
            <span className="font-bold text-violet-500 dark:text-pink-400">
              Express Free Delivery
            </span>{" "}
            right to your doorstep.
          </p>
        </div>

        {/* Call To Action Button (Uniform State) */}
        <div className="relative z-10 flex-shrink-0 w-full lg:w-auto text-center">
          <button className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-pink-600 to-violet-600 hover:from-pink-500 hover:to-violet-500 text-white text-base font-black rounded-2xl shadow-xl shadow-pink-500/20 hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-pink-500/30">
            Claim Your Discount
          </button>
        </div>
      </div>
    </section>
  );
};

// =========================================================================
// ৭. TESTIMONIALS (প্যারেন্টস রিভিউ - Uniform Layout)
// =========================================================================
export const TestimonialsSection = ({ isDark }) => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Mother of 2",
      rating: "⭐⭐⭐⭐⭐",
      text: "The quality of the BabyDoll is superb! Extremely soft, no rough edges, and my daughter refuses to sleep without it. Absolutely certified safe!",
    },
    {
      name: "David Miller",
      role: "Father of Toddler",
      rating: "⭐⭐⭐⭐⭐",
      text: "Rapid delivery inside city. The TurboWheels truck toy is highly durable, premium-finished, and entirely toxin-free. 5 stars easily!",
    },
    {
      name: "Alina Yasmin",
      role: "Loving Aunt",
      rating: "⭐⭐⭐⭐⭐",
      text: "Bought the Classic Teddy Bear as a gift. It arrived wrapped in beautiful gift notes. The cloud cotton stuffing keeps it incredibly fluffy.",
    },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 md:px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-pink-500 bg-pink-500/10 px-3 py-1.5 rounded-md">
          Real Feedback
        </span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-3">
          Loved by Parents Worldwide
        </h2>
        <p
          className={`mt-2 text-sm md:text-base max-w-md mx-auto ${isDark ? "text-neutral-400" : "text-neutral-600"}`}
        >
          See what our verified global community says about our plush safety
          standards.
        </p>
      </div>

      {/* Grid Wrapper (Uniform Card Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((item, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-[2rem] border flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
              isDark
                ? "bg-neutral-900/60 border-neutral-800/80 hover:border-neutral-700 hover:shadow-2xl hover:shadow-black/50"
                : "bg-white border-neutral-200/80 shadow-sm hover:shadow-xl hover:shadow-neutral-200/60"
            }`}
          >
            <div>
              {/* Rating Star Badges */}
              <div className="text-sm mb-4 select-none tracking-wider">
                {item.rating}
              </div>
              {/* Quote Mark */}
              <div className="text-pink-500 text-5xl font-serif leading-none mb-2">
                “
              </div>
              {/* Review Text */}
              <p
                className={`text-base italic mb-8 leading-relaxed font-light ${
                  isDark ? "text-neutral-300" : "text-neutral-600"
                }`}
              >
                {item.text}
              </p>
            </div>

            {/* Author Meta Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-neutral-800/10 dark:border-white/5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-violet-500 flex items-center justify-center text-white font-black text-sm uppercase select-none">
                {item.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-extrabold text-sm tracking-wide">
                  {item.name}
                </h4>
                <span
                  className={`text-xs ${isDark ? "text-neutral-500" : "text-neutral-400"}`}
                >
                  {item.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
