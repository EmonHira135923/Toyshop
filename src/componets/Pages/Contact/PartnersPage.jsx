"use client";

import React from "react";
import Link from "next/link";
import {
  FiHandshake,
  FiTruck,
  FiLayers,
  FiCreditCard,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import useTheme from "@/componets/utils/hooks/useTheme";

const PartnersPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const partnerTiers = [
    {
      icon: <FiLayers size={22} className="text-pink-500" />,
      title: "Toy Manufacturers & Artisans",
      subtitle: "Official Factory & Fabric Brands",
      description:
        "Partnering with certified producers to supply premium double-lock stitch plush materials ensuring zero loose fibers or safety design flaws.",
      perks: [
        "EN71 Safety Certified Materials",
        "Exclusive Toy Inventory Access",
        "Strict Dynamic Batch Testing",
      ],
    },
    {
      icon: <FiTruck size={22} className="text-purple-500" />,
      title: "Logistics & Express Delivery",
      subtitle: "Instant Shipping Hub Integrations",
      description:
        "Collaborating with local and global delivery networks to secure lightning fast dispatch times and premium live parcel tracking systems.",
      perks: [
        "Same-Day Dispatch Core Node",
        "Fragile Toy Handover Protocol",
        "Real-Time Hook SMS Updates",
      ],
    },
    {
      icon: <FiCreditCard size={22} className="text-indigo-500" />,
      title: "Payment Systems & Safety Gateways",
      subtitle: "Encrypted Secure Checkout Channels",
      description:
        "Integrating global industry gold-standards like Stripe and secure SSL channels for smooth automated refunds and single-click checkout workflows.",
      perks: [
        "Instant Payment Confirmed States",
        "Full Fraud Protection Layers",
        "Easy Gift-Card Wallet Splits",
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-neutral-950 text-white" : "bg-neutral-50 text-neutral-900"
      }`}
    >
      {/* HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-pink-500/10 to-violet-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold tracking-widest text-pink-500 uppercase bg-pink-500/10 px-3.5 py-1.5 rounded-md mb-4">
            Ecosystem Network
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 leading-tight">
            Our Premium <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
              Partners & Integrations
            </span>
          </h1>
          <p
            className={`text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed ${isDark ? "text-neutral-400" : "text-gray-500"}`}
          >
            Connecting global safe manufacturing labs, express logistics hubs,
            and robust encrypted banking servers to fuel the finest e-commerce
            experience.
          </p>
        </div>
      </section>

      {/* TIERS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {partnerTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-[2.2rem] border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? "bg-neutral-900/40 border-neutral-800/80 hover:border-neutral-700/60 hover:bg-neutral-900/60"
                  : "bg-white border-gray-200/80 shadow-sm hover:shadow-md"
              }`}
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${isDark ? "bg-neutral-950" : "bg-gray-100"}`}
                >
                  {tier.icon}
                </div>
                <h3 className="text-xl font-black tracking-tight mb-1">
                  {tier.title}
                </h3>
                <p className="text-[11px] font-bold text-pink-500 uppercase tracking-wide mb-4">
                  {tier.subtitle}
                </p>
                <p
                  className={`text-xs font-light leading-relaxed mb-6 ${isDark ? "text-neutral-400" : "text-gray-500"}`}
                >
                  {tier.description}
                </p>
              </div>

              <div
                className={`border-t pt-5 space-y-2.5 ${isDark ? "border-neutral-800" : "border-gray-100"}`}
              >
                {tier.perks.map((perk, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs font-medium"
                  >
                    <FiCheckCircle
                      size={14}
                      className="text-emerald-500 flex-shrink-0"
                    />
                    <span
                      className={isDark ? "text-neutral-300" : "text-gray-600"}
                    >
                      {perk}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
