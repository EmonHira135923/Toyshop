"use client";

import React from "react";
import useTheme from "@/componets/utils/hooks/useTheme";
import {
  FiFileText,
  FiUserCheck,
  FiShoppingBag,
  FiAlertTriangle,
} from "react-icons/fi";

const TermsOfService = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sections = [
    {
      icon: <FiUserCheck className="text-pink-500" />,
      title: "1. User Account Responsibility",
      content:
        "When you spin up an official account node on ToyShop, you are responsible for safeguarding your layout password credentials. Any automated actions, checkout sequences, or premium wallet trades executed from your account dashboard are bound directly to your identity profile.",
    },
    {
      icon: <FiShoppingBag className="text-purple-500" />,
      title: "2. Commercial Purchases & Payouts",
      content:
        "All listed toy prices, stock inventories, and promotional waiver configurations are subject to automated updates based on sourcing. By verifying a checkout payload via our integrated Stripe framework, you authorize us to lock and capture the defined financial metrics.",
    },
    {
      icon: <FiAlertTriangle className="text-indigo-500" />,
      title: "3. Limitations of Liability",
      content:
        "While we craft our premium toys using certified double-lock, hypoallergenic standards, ToyShop will not be liable for any damage resulting from extreme rough utilization outside standard playful environments or unauthorized framework tempering.",
    },
    {
      icon: <FiFileText className="text-pink-500" />,
      title: "4. System Governance & Law",
      content:
        "We reserves the right to freeze profile instances exhibiting suspicious bot behavior, cross-site scripting attempts, or transaction manipulation. These terms are governed and enforced in compliance with national e-commerce guidelines.",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-neutral-950 text-white" : "bg-neutral-50 text-neutral-900"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-20 pb-24">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-tr from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <span className="inline-block text-xs font-bold tracking-widest text-purple-500 uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-md mb-4">
            User Agreement
          </span>
          <h1 className="text-4xl font-black tracking-tight mb-3">
            Terms of Service
          </h1>
          <p
            className={`text-xs sm:text-sm font-light max-w-md mx-auto ${isDark ? "text-neutral-400" : "text-gray-500"}`}
          >
            Last updated: June 2026. Please evaluate our system regulations and
            automated purchasing conditions carefully.
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded-[2rem] border transition-all duration-300 ${
                isDark
                  ? "bg-neutral-900/20 border-neutral-900"
                  : "bg-white border-gray-200/70 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${isDark ? "bg-neutral-950" : "bg-gray-100"}`}
                >
                  {section.icon}
                </div>
                <h2 className="text-base sm:text-lg font-black tracking-tight">
                  {section.title}
                </h2>
              </div>
              <p
                className={`text-xs sm:text-sm font-light leading-relaxed pl-1 ${isDark ? "text-neutral-400" : "text-gray-600"}`}
              >
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
