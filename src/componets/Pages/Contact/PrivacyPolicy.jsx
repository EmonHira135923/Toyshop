"use client";

import React from "react";
import useTheme from "@/componets/utils/hooks/useTheme";
import { FiLock, FiShield, FiEye, FiDatabase } from "react-icons/fi";

const PrivacyPolicy = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sections = [
    {
      icon: <FiDatabase className="text-pink-500" />,
      title: "1. Information We Collect",
      content:
        "We collect information to provide better services to our little shoppers and parents. This includes account details (name, email, phone number), secure delivery coordinates for shipping parcels, and device metrics to optimize your full-stack browsing experience.",
    },
    {
      icon: <FiEye className="text-purple-500" />,
      title: "2. How We Use Your Data",
      content:
        "Your data is strictly processed to fulfill orders, verify instantaneous payment states via Stripe webhooks, send live tracking status updates, and continuously polish our Next.js web ecosystem for lightning-fast performance.",
    },
    {
      icon: <FiShield className="text-indigo-500" />,
      title: "3. Data Security & Multi-Party Encryption",
      content:
        "Security is built into our core architecture. We do not store raw credit card credentials. All financial handshakes are securely piped via end-to-end encrypted TLS protocols. Your account session uses cryptographically signed tokens to prevent unauthorized route access.",
    },
    {
      icon: <FiLock className="text-pink-500" />,
      title: "4. Cookies & Pixel Tracking",
      content:
        "ToyShop utilizes lightweight localized cookies to preserve your luxurious dark mode preferences, remember cart states across device refreshes, and compile non-identifiable analytics to track layout stability.",
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <span className="inline-block text-xs font-bold tracking-widest text-pink-500 uppercase bg-pink-500/10 px-3.5 py-1.5 rounded-md mb-4">
            Legal Infrastructure
          </span>
          <h1 className="text-4xl font-black tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p
            className={`text-xs sm:text-sm font-light max-w-md mx-auto ${isDark ? "text-neutral-400" : "text-gray-500"}`}
          >
            Last updated: June 2026. Learn how we shield, encrypt, and respect
            your family's dynamic personal data assets.
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

export default PrivacyPolicy;
