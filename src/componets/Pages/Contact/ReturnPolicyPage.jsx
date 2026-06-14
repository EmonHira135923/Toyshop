"use client";

import React from "react";
import Link from "next/link";
import {
  FiRefreshCw,
  FiCheckCircle,
  FiXCircle,
  FiPackage,
  FiTruck,
  FiCornerUpLeft,
  FiArrowRight,
} from "react-icons/fi";
import useTheme from "@/componets/utils/hooks/useTheme";

const ReturnPolicyPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // রিটার্ন করার ৩টি সহজ স্টেপস
  const steps = [
    {
      icon: <FiPackage size={20} className="text-pink-500" />,
      title: "1. Pack The Toy",
      desc: "Keep the plushie or toy inside its original biodegradable ToyShop packaging with all security tags fully intact.",
    },
    {
      icon: <FiCornerUpLeft size={20} className="text-purple-500" />,
      title: "2. Request From Dashboard",
      desc: "Go to your Profile Orders section, select the parcel ID, and hit 'Request Return' within 7 days of delivery.",
    },
    {
      icon: <FiTruck size={20} className="text-indigo-500" />,
      title: "3. Fast Pickup & Refund",
      desc: "Our pickup agent will collect the item, and once verified, your refund will be instantly routed via automated webhooks.",
    },
  ];

  // কি কি কন্ডিশন মানতে হবে
  const acceptedConditions = [
    "Toys must be completely unplayed and unused.",
    "Original security tags, barcodes, and labels must be attached.",
    "Must include original boxes, accessories, and manuals.",
    "Defective or broken-on-arrival items are replaced instantly at zero cost.",
  ];

  const nonAcceptedConditions = [
    "Toys damaged due to intense/rough playing after delivery.",
    "Plushies with missing fabric tags or washed materials.",
    "Return requests submitted after the strict 7-day timeline window.",
    "Customized or personalized surprise toy boxes.",
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-neutral-950 text-white" : "bg-neutral-50 text-neutral-900"
      }`}
    >
      {/* ================= SECTION 1: HERO HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold tracking-widest text-pink-500 uppercase bg-pink-500/10 px-3.5 py-1.5 rounded-md mb-4">
            Trust & Safety
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Zero Hassle <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
              7-Day Return Policy
            </span>
          </h1>
          <p
            className={`text-xs sm:text-sm font-light leading-relaxed ${isDark ? "text-neutral-400" : "text-gray-500"}`}
          >
            Want to swap a toy or changed your mind? Don't worry! We ensure a
            completely smooth and transparent return framework for all our
            little customers.
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: HOW IT WORKS (STEPS) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="text-center md:text-left mb-8">
          <h2 className="text-xl md:text-2xl font-black tracking-tight flex items-center justify-center md:justify-start gap-2">
            <FiRefreshCw
              className="text-pink-500 animate-spin [animation-duration:15s]"
              size={20}
            />{" "}
            How The Process Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-6 rounded-[2rem] border transition-all duration-300 ${
                isDark
                  ? "bg-neutral-900/40 border-neutral-900"
                  : "bg-white border-gray-200/70 shadow-sm"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${isDark ? "bg-neutral-950" : "bg-gray-100"}`}
              >
                {step.icon}
              </div>
              <h3 className="font-extrabold text-base tracking-tight mb-2">
                {step.title}
              </h3>
              <p
                className={`text-xs leading-relaxed font-light ${isDark ? "text-neutral-400" : "text-gray-500"}`}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 3: CONDITIONS CHECKLIST ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Accepted Conditions */}
          <div
            className={`p-6 sm:p-8 rounded-[2.5rem] border ${
              isDark
                ? "bg-neutral-900/20 border-neutral-900"
                : "bg-white border-gray-200/60 shadow-sm"
            }`}
          >
            <h3 className="text-lg font-black tracking-tight mb-5 flex items-center gap-2 text-emerald-500">
              <FiCheckCircle size={18} /> When Return is Eligible
            </h3>
            <ul className="space-y-3.5">
              {acceptedConditions.map((cond, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm font-light"
                >
                  <FiCheckCircle
                    size={15}
                    className="text-emerald-500 mt-0.5 flex-shrink-0"
                  />
                  <span
                    className={isDark ? "text-neutral-300" : "text-gray-600"}
                  >
                    {cond}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Non-Accepted Conditions */}
          <div
            className={`p-6 sm:p-8 rounded-[2.5rem] border ${
              isDark
                ? "bg-neutral-900/20 border-neutral-900"
                : "bg-white border-gray-200/60 shadow-sm"
            }`}
          >
            <h3 className="text-lg font-black tracking-tight mb-5 flex items-center gap-2 text-rose-500">
              <FiXCircle size={18} /> When Return is Void
            </h3>
            <ul className="space-y-3.5">
              {nonAcceptedConditions.map((cond, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm font-light"
                >
                  <FiXCircle
                    size={15}
                    className="text-rose-500 mt-0.5 flex-shrink-0"
                  />
                  <span
                    className={isDark ? "text-neutral-300" : "text-gray-600"}
                  >
                    {cond}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: REQ SUPPORT INBOUND ================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-28">
        <div
          className={`p-8 rounded-[2.5rem] border text-center relative overflow-hidden ${
            isDark
              ? "bg-gradient-to-b from-neutral-900 to-neutral-950 border-neutral-800"
              : "bg-white border-gray-200/80 shadow-md"
          }`}
        >
          <h2 className="text-xl md:text-2xl font-black tracking-tight mb-2">
            Need Help with an Ongoing Return?
          </h2>
          <p
            className={`text-xs max-w-md mx-auto mb-6 font-light leading-relaxed ${isDark ? "text-neutral-400" : "text-gray-500"}`}
          >
            If our pickup automated webhook agent hasn't arrived or if you faced
            a payment gate split issue, ping our custom toy helpline.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all active:scale-95 group"
          >
            Contact Return Desk{" "}
            <FiArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ReturnPolicyPage;
