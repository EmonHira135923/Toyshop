"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiShoppingCart, FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import useTheme from "../utils/hooks/useTheme";
import Navlink from "./Navlink";

const Navvar = () => {
  const { toggleTheme, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনু স্টেট

  const isDark = theme === "dark";
  const isLight = theme === "light";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 border-b transition-colors duration-300 backdrop-blur-md ${
        isLight
          ? "bg-white/70 border-gray-200/80 shadow-sm"
          : "bg-black/70 border-neutral-900 shadow-xl shadow-black/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* ================= LEFT: LOGO SECTION ================= */}
        <Link
          href="/"
          className="flex-shrink-0 transition-transform active:scale-95 relative z-10"
        >
          <h1 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 tracking-tight select-none">
            ToyShop
          </h1>
        </Link>

        {/* ================= CENTER: MAIN ROUTES (DESKTOP) ================= */}
        <div className="hidden md:flex items-center gap-1">
          <Navlink href="/" isLight={isLight}>
            Home
          </Navlink>
          <Navlink href="/products" isLight={isLight}>
            All Products
          </Navlink>
          <Navlink href="/about" isLight={isLight}>
            About Us
          </Navlink>
          <Navlink href="/contact" isLight={isLight}>
            Contact
          </Navlink>
        </div>

        {/* ================= RIGHT: GLOBAL ACTIONS (MOBILE & DESKTOP) ================= */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* 🛒 CART BUTTON (সর্বদা দৃশ্যমান - মোবাইল ও ডেস্কটপ উভয় ক্ষেত্রে) */}
          <Navlink href="/cart" isLight={isLight}>
            <div className="relative p-1.5 transition-transform active:scale-90">
              <FiShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-4 h-4 text-[9px] font-black rounded-full bg-pink-600 text-white px-1 shadow-md shadow-pink-500/20">
                0
              </span>
            </div>
          </Navlink>

          {/* Auth Links (Desktop Only - Large Screen) */}
          <div className="hidden lg:flex items-center gap-1.5 mr-1">
            <Navlink href="/auth/login" isLight={isLight}>
              Login
            </Navlink>
            <Link
              href="/auth/signup"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 rounded-xl transition-all shadow-md shadow-pink-500/10 active:scale-95"
            >
              Sign Up
            </Link>
          </div>

          {/* Auth Links (Tablet Only - Medium Screen) */}
          <div className="hidden md:flex lg:hidden items-center gap-1 mr-1">
            <Navlink href="/auth/login" isLight={isLight}>
              Login
            </Navlink>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
              isLight
                ? "bg-gray-100 hover:bg-gray-200 text-neutral-800"
                : "bg-neutral-900 hover:bg-neutral-800 text-white"
            } border ${isLight ? "border-gray-200/60" : "border-neutral-800"} active:scale-90`}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <FiSun
                size={17}
                className="text-amber-400 animate-[spin_50s_linear_infinite]"
              />
            ) : (
              <FiMoon size={17} className="text-indigo-950/80" />
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-xl md:hidden transition-all border ${
              isLight
                ? "text-gray-800 hover:bg-gray-100 border-gray-200/60"
                : "text-white hover:bg-neutral-900 border-neutral-900"
            }`}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE DROPDOWN MENU ================= */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[400px] border-t" : "max-h-0 border-t-0"
        } ${isLight ? "bg-white border-gray-100" : "bg-neutral-950 border-neutral-900"}`}
      >
        <div className="px-5 py-4 flex flex-col gap-1.5">
          {/* Mobile Links */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`py-2.5 px-3 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
              isLight
                ? "hover:bg-gray-50 text-gray-700"
                : "hover:bg-neutral-900 text-neutral-300"
            }`}
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            className={`py-2.5 px-3 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
              isLight
                ? "hover:bg-gray-50 text-gray-700"
                : "hover:bg-neutral-900 text-neutral-300"
            }`}
          >
            All Products
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={`py-2.5 px-3 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
              isLight
                ? "hover:bg-gray-50 text-gray-700"
                : "hover:bg-neutral-900 text-neutral-300"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`py-2.5 px-3 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
              isLight
                ? "hover:bg-gray-50 text-gray-700"
                : "hover:bg-neutral-900 text-neutral-300"
            }`}
          >
            Contact
          </Link>

          <hr
            className={`my-2 ${isLight ? "border-gray-100" : "border-neutral-900"}`}
          />

          {/* Mobile Auth Actions */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <Link
              href="/auth/login"
              onClick={() => setIsOpen(false)}
              className={`w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider rounded-xl border transition-all ${
                isLight
                  ? "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                  : "bg-neutral-900 border-neutral-800 text-white hover:bg-neutral-800"
              }`}
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl transition-all active:scale-[0.98]"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navvar;
