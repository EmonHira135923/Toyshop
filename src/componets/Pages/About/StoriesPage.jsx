"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiClock, FiArrowRight, FiCalendar } from "react-icons/fi";
import useTheme from "@/componets/utils/hooks/useTheme";

const StoriesPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isLight = theme === "light";

  // ডামি স্টোরি ডাটা (আপনার প্রোজেক্টের থিম অনুযায়ী সাজানো)
  const featuredStory = {
    id: "featured-1",
    title: "How We Craft Safe, Hypoallergenic Plush Toys for Newborns",
    excerpt: "Deep dive into our manufacturing unit where organic cotton meets ultra-soft stuffing, ensuring zero chemicals and pure magical hugs for your little ones.",
    category: "Behind The Scenes",
    date: "June 12, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1559251606-c623743a6d76?q=80&w=1200&auto=format&fit=crop", // Soft premium toy/kid image placeholder
  };

  const stories = [
    {
      id: 1,
      title: "The Magic of Soft Companionship in Early Child Development",
      excerpt: "Psychological studies show how comfort objects help toddlers manage transition anxiety and build empathy early in life.",
      category: "Parenting Guide",
      date: "June 08, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1515488042361-404e9250afef?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Behind RKTrims: Perfecting the Stitching Art",
      excerpt: "A closer look at our upgraded high-precision tailoring unit and how double-lock stitching prevents any wear and tear.",
      category: "Craftsmanship",
      date: "May 28, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Eco-Friendly Packaging: Our Step Towards a Greener Future",
      excerpt: "From soy-based ink to 100% biodegradable cardboard boxes, learn how your ToyShop deliveries love the planet.",
      category: "Sustainability",
      date: "May 15, 2026",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isLight ? "bg-neutral-50 text-neutral-900" : "bg-neutral-950 text-white"
    }`}>
      
      {/* ================= SECTION 1: HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center md:text-left">
        <span className="inline-block text-xs font-bold tracking-widest text-pink-500 uppercase bg-pink-500/10 px-3.5 py-1.5 rounded-md mb-3">
          Our Journal
        </span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
          Stories Behind <span className="text-pink-500">Every Smile</span>
        </h1>
        <p className={`text-sm md:text-base font-light max-w-xl leading-relaxed ${
          isLight ? "text-gray-500" : "text-neutral-400"
        }`}>
          Explore our latest insights, design behind-the-scenes, and helpful parenting logs dedicated to making childhood magical.
        </p>
      </section>

      {/* ================= SECTION 2: FEATURED STORY ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <Link href={`/blog/${featuredStory.id}`} className="group block">
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 rounded-[2.5rem] p-4 md:p-6 border overflow-hidden transition-all duration-300 ${
            isLight 
              ? "bg-white border-gray-200/70 hover:shadow-xl hover:shadow-gray-200/40" 
              : "bg-neutral-900/40 border-neutral-800/80 hover:border-neutral-700/60 hover:bg-neutral-900/60"
          }`}>
            {/* Featured Image Box */}
            <div className="lg:col-span-7 h-64 sm:h-80 md:h-[400px] rounded-[1.8rem] overflow-hidden relative">
              <img 
                src={featuredStory.image} 
                alt={featuredStory.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute top-4 left-4 bg-pink-600 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg shadow-md">
                {featuredStory.category}
              </div>
            </div>

            {/* Featured Content Box */}
            <div className="lg:col-span-5 flex flex-col justify-center px-2 py-4 md:p-6">
              <div className="flex items-center gap-4 text-xs font-medium text-neutral-400 mb-4">
                <span className="flex items-center gap-1"><FiCalendar /> {featuredStory.date}</span>
                <span className="flex items-center gap-1"><FiClock /> {featuredStory.readTime}</span>
              </div>
              <h2 className={`text-2xl md:text-3xl font-extrabold tracking-tight mb-4 transition-colors ${
                isLight ? "group-hover:text-pink-600 text-neutral-900" : "group-hover:text-pink-500 text-white"
              }`}>
                {featuredStory.title}
              </h2>
              <p className={`text-sm leading-relaxed font-light mb-6 ${
                isLight ? "text-gray-500" : "text-neutral-400"
              }`}>
                {featuredStory.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pink-500 group-hover:translate-x-2 transition-transform">
                Read Full Story <FiArrowRight size={14} />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* ================= SECTION 3: STORIES GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Link href={`/blog/${story.id}`} key={story.id} className="group flex flex-col">
              <div className={`border rounded-[2rem] p-4 h-full flex flex-col justify-between transition-all duration-300 ${
                isLight 
                  ? "bg-white border-gray-200/60 hover:shadow-lg hover:shadow-gray-200/30" 
                  : "bg-neutral-900/30 border-neutral-800/80 hover:border-neutral-700/60 hover:bg-neutral-900/50"
              }`}>
                <div>
                  {/* Card Image */}
                  <div className="h-52 w-full rounded-[1.4rem] overflow-hidden relative mb-5">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-sm ${
                      isLight ? "bg-white text-neutral-900" : "bg-neutral-950 text-pink-500"
                    }`}>
                      {story.category}
                    </div>
                  </div>

                  {/* Card Meta */}
                  <div className="flex items-center gap-4 text-[11px] font-medium text-neutral-400 mb-3 px-1">
                    <span className="flex items-center gap-1"><FiCalendar /> {story.date}</span>
                    <span className="flex items-center gap-1"><FiClock /> {story.readTime}</span>
                  </div>

                  {/* Card Title */}
                  <h3 className={`text-lg font-bold tracking-tight mb-2 px-1 transition-colors ${
                    isLight ? "group-hover:text-pink-600 text-neutral-900" : "group-hover:text-pink-500 text-white"
                  }`}>
                    {story.title}
                  </h3>

                  {/* Card Excerpt */}
                  <p className={`text-xs leading-relaxed font-light px-1 mb-4 ${
                    isLight ? "text-gray-500" : "text-neutral-400"
                  }`}>
                    {story.excerpt}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pink-500 pt-2 px-1 group-hover:gap-3 transition-all">
                  Read More <FiArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default StoriesPage;