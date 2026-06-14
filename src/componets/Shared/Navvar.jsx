"use client";

import { FiShoppingCart, FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../utils/hooks/useTheme";
import Navlink from "./Navlink";

const Navvar = () => {
  const { toggleTheme, theme } = useTheme();
  
  // Bug Fix: এখানে সরাসরি isDark এবং isLight দুটিই ডিফাইন করে দেওয়া হলো যেন নিচে কোনো এরর না আসে
  const isDark = theme === "dark";
  const isLight = theme === "light";

  return (
    <nav className={`sticky top-0 z-50 border-b ${isLight ? 'bg-white/60 border-gray-200' : 'bg-black/80 border-gray-800'} backdrop-blur-sm shadow-sm transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo Section - থিম অনুযায়ী স্মুথ কালার শিফট */}
        <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
          ToyShop
        </h1>

        {/* Navigation Items & Actions */}
        <div className="flex items-center gap-5">
          {/* Main Links */}
          <div className="hidden md:flex items-center gap-1.5">
            <Navlink href="/" isLight={isLight}>Home</Navlink>
            <Navlink href="/products" isLight={isLight}>All Products</Navlink>
            <Navlink href="/about" isLight={isLight}>About Us</Navlink>
            <Navlink href="/contact" isLight={isLight}>Contact</Navlink>
            <Navlink href="/auth/signup" isLight={isLight}>Sign Up</Navlink>
            <Navlink href="/auth/login" isLight={isLight}>Login</Navlink>
          </div>

          {/* Divider line - থিম অনুযায়ী লাইট/ডার্ক হবে */}
          <span className={`hidden md:block h-5 w-[1px] transition-colors duration-300 ${isDark ? "bg-zinc-900" : "bg-indigo-50"}`} />

          <div className="flex items-center gap-3">
            {/* Cart Icon Button */}
            <Navlink href="/cart" isLight={isLight}>
              <div className="relative">
                <FiShoppingCart size={22} />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs rounded-full bg-pink-600 text-white">
                  0
                </span>
              </div>
            </Navlink>

            {/* Theme Toggle Button - আল্ট্রা-ক্লিন ডিজাইন */}
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${isLight ? 'bg-white border border-gray-200' : 'bg-gray-900 border border-gray-700'} hover:scale-105 transition-shadow shadow-sm hover:shadow-md`}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <FiSun size={19} className="text-amber-400 animate-[spin_40s_linear_infinite]" />
              ) : (
                <FiMoon size={19} className="text-indigo-950/70" />
              )}
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navvar;