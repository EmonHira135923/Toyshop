"use client";

import React from "react";
import Link from "next/link";
import { FiArrowLeft, FiHome } from "react-icons/fi";
import useTheme from "@/componets/utils/hooks/useTheme";

const NotFound = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-[calc(100vh-76px)] flex items-center justify-center p-6 transition-colors duration-300 ${
        isDark ? "bg-neutral-950 text-white" : "bg-neutral-50 text-neutral-900"
      }`}
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-8 relative z-10">
        
        {/* ================= BIG 404 TEXT WITH TOYSHOP GRADIENT ================= */}
        <div className="relative inline-block select-none">
          <h1 className="text-9xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 animate-pulse">
            404
          </h1>
          {/* Cute Sub-badge */}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white bg-pink-600 rounded-full shadow-md shadow-pink-500/20">
            Oops! Lost In Wonder
          </span>
        </div>

        {/* ================= TEXT MESSAGES ================= */}
        <div className="space-y-2.5">
          <h2 className="text-2xl font-black tracking-tight">
            Magical Page Not Found
          </h2>
          <p
            className={`text-xs font-light leading-relaxed max-w-sm mx-auto ${
              isDark ? "text-neutral-400" : "text-gray-500"
            }`}
          >
            The toy box you are looking for seems to be empty or moved to another shelf. Let's get you back to the safe playground!
          </p>
        </div>

        {/* ================= INTERACTIVE BUTTONS ================= */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          {/* Go Back Button */}
          <button
            onClick={() => window.history.back()}
            className={`w-full sm:w-auto px-5 py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 ${
              isDark
                ? "bg-neutral-900 border-neutral-800 text-white hover:bg-neutral-800"
                : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm"
            }`}
          >
            <FiArrowLeft size={14} />
            Go Back
          </button>

          {/* Return Home Button */}
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-pink-500/10 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
          >
            <FiHome size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;