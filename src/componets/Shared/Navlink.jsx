"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ href, children, isLight }) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  /**
   * LIGHT MODE:
   * Active: Indigo-600 text, খুব হালকা Indigo ব্যাকগ্রাউন্ড এবং একটি সূক্ষ্ম Indigo বর্ডার।
   * Normal: Slate-600 text, হোভার করলে Indigo ব্লার ব্যাকগ্রাউন্ড।
   */
  const activeClass = isLight
    ? "text-pink-600 bg-pink-50 border border-pink-100/60 shadow-[0_8px_30px_-12px_rgba(219,39,119,0.18)]"
    : "text-pink-300 bg-pink-900/25 border border-pink-700/20 shadow-[0_8px_30px_-12px_rgba(139,92,246,0.15)]";

  const normalClass = isLight
    ? "text-slate-700 hover:text-pink-600 hover:bg-slate-100/80 border border-transparent"
    : "text-gray-200 hover:text-pink-200 hover:bg-white/5 border border-transparent";

  return (
    <Link
      href={href}
      className={`relative px-4 py-2 rounded-xl text-[14px] font-semibold transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 ${
        isActive ? activeClass : normalClass
      }`}
    >
      {/* Active Dot indicator (Optional: চাইলে নিচে ছোট একটি ডট দেখাতে পারো) */}
      {isActive && (
        <span
          className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
            isLight ? "bg-pink-600" : "bg-pink-300"
          }`}
        />
      )}

      <span className="relative z-10">{children}</span>
    </Link>
  );
};

export default Navlink;