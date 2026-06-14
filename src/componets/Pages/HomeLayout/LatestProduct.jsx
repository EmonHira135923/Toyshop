"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useTheme from "@/componets/utils/hooks/useTheme";
import axios from "axios";
import {
  BrandMarqueeSection,
  PromoBannerSection,
  TestimonialsSection,
} from "./BrandMarqueeSection";

const LatestProduct = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [latestProduct, setLatestProduct] = useState([]);
  const [loading, setLoading] = useState(true); // লোডিং স্টেট ট্র্যাকিং

  useEffect(() => {
    axios
      .get("/data/latestProduct.json")
      .then((response) => {
        setLatestProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching latest products:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section
      className={`py-20 w-full transition-colors duration-300 ${
        isDark ? "bg-neutral-950 text-white" : "bg-neutral-50 text-neutral-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-pink-500 bg-pink-500/10 px-3 py-1.5 rounded-md">
            Just Restocked
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-3">
            Explore Our Latest Products
          </h2>
          <p
            className={`mt-2 text-sm md:text-base max-w-md mx-auto ${isDark ? "text-neutral-400" : "text-neutral-600"}`}
          >
            Discover the newest additions to our magical world of premium plush
            toys.
          </p>
        </div>

        {/* Loading State Check */}
        {loading ? (
          <div className="text-center py-10 font-medium tracking-wide">
            Loading premium toys...
          </div>
        ) : (
          /* 6-Card Uniform Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestProduct?.map((product) => (
              <div
                key={product.id}
                className={`group rounded-3xl p-5 border flex flex-col justify-between transition-all duration-300 relative ${
                  isDark
                    ? "bg-neutral-900 border-neutral-800/80 hover:border-neutral-700 hover:shadow-2xl hover:shadow-black/50"
                    : "bg-white border-neutral-200/80 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-200"
                }`}
              >
                {/* Category Badge */}
                <div className="absolute top-8 left-8 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/10">
                    {product.category}
                  </span>
                </div>

                {/* Image Container */}
                <div
                  className={`relative w-full h-64 rounded-2xl overflow-hidden mb-5 ${isDark ? "bg-neutral-950" : "bg-neutral-100"}`}
                >
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.title || "Toy"}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                </div>

                {/* Content Block */}
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-extrabold text-xl line-clamp-1 group-hover:text-pink-500 transition-colors">
                        {product.title}
                      </h3>
                      <span className="text-xl font-black text-pink-500 whitespace-nowrap pl-2">
                        {product.price}
                      </span>
                    </div>

                    {/* Short Description */}
                    <p
                      className={`text-sm leading-relaxed mb-6 line-clamp-2 ${isDark ? "text-neutral-400" : "text-neutral-600"}`}
                    >
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      title="View Details"
                      className={`w-full py-3 text-xs font-bold rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-500 ${
                        isDark
                          ? "border-neutral-800 bg-neutral-950 text-neutral-300 hover:bg-neutral-800"
                          : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100"
                      }`}
                    >
                      View Details
                    </button>

                    <button className="w-full py-3 text-xs font-bold rounded-xl text-white bg-gradient-to-r from-pink-600 to-violet-600 hover:from-pink-500 hover:to-violet-500 transition-all duration-300 shadow-md hover:shadow-pink-500/20 focus:outline-none focus:ring-2 focus:ring-pink-500">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <BrandMarqueeSection isDark={isDark} />
      <PromoBannerSection isDark={isDark} />
      <TestimonialsSection isDark={isDark} />
    </section>
  );
};

export default LatestProduct;
