"use client";

import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import useTheme from "@/componets/utils/hooks/useTheme";

const SocialLinks = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleSocialAuth = (provider) => {
    console.log(`Initiating Auth with: ${provider}`);
    // আপনার Firebase বা NextAuth লজিক এখানে বসবে
  };

  return (
    <div className="space-y-3.5">
      <div className="flex items-center my-5">
        <div
          className={`flex-grow border-t ${isDark ? "border-neutral-800" : "border-gray-200"}`}
        />
        <span
          className={`px-3 text-[10px] font-bold uppercase tracking-widest ${isDark ? "text-neutral-500" : "text-gray-400"}`}
        >
          Or Continue With
        </span>
        <div
          className={`flex-grow border-t ${isDark ? "border-neutral-800" : "border-gray-200"}`}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Google Button */}
        <button
          type="button"
          onClick={() => handleSocialAuth("Google")}
          className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all active:scale-[0.98] ${
            isDark
              ? "bg-neutral-950 border-neutral-800 hover:border-neutral-700 text-neutral-200 hover:bg-neutral-900"
              : "bg-gray-50 border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          <FaGoogle className="text-rose-500" size={14} /> Google
        </button>

        {/* GitHub Button */}
        <button
          type="button"
          onClick={() => handleSocialAuth("GitHub")}
          className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all active:scale-[0.98] ${
            isDark
              ? "bg-neutral-950 border-neutral-800 hover:border-neutral-700 text-neutral-200 hover:bg-neutral-900"
              : "bg-gray-50 border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          <FaGithub size={14} /> GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLinks;
