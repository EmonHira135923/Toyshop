"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus, FiHelpCircle, FiMessageSquare } from "react-icons/fi";
import useTheme from "@/componets/utils/hooks/useTheme";
import Link from "next/link";

const FaqPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // একটি স্টেট দিয়ে ট্র্যাক করা হবে কোন ইনডেক্সের প্রশ্নটি ওপেন আছে
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // আবার ক্লিক করলে ক্লোজ হবে
    } else {
      setActiveIndex(index); // নতুন প্রশ্নে ক্লিক করলে ওপেন হবে
    }
  };

  // ToyShop এর রিয়েল প্রশ্ন ও উত্তরের ডাটা লিস্ট
  const faqs = [
    {
      category: "Product & Safety",
      question: "Are your toys safe and non-toxic for infants?",
      answer:
        "Absolutely. All our plushies and wooden toys are 100% hypoallergenic, constructed with premium organic cotton, and painted with certified non-toxic water-based inks. They match global EN71 safety standard metrics with flawless double-lock stitching.",
    },
    {
      category: "Product & Safety",
      question: "What materials do you use for the plush toys?",
      answer:
        "We source our premium materials directly from certified eco-friendly manufacturing units. We use long-staple ultra-soft fabrics with high-grade hollow fiber stuffing, making them perfectly huggable, cloud-soft, and easily machine washable.",
    },
    {
      category: "Orders & Shipping",
      question: "How long does shipping take and can I track it?",
      answer:
        "For deliveries within Dhaka, it takes 24 to 48 hours. Outside Dhaka takes 3-5 business days. Once your order is processed, a live premium tracking ID will be sent to your dynamic user dashboard and via SMS so you can monitor your parcel status.",
    },
    {
      category: "Orders & Shipping",
      question: "What is your return policy if my kid doesn't like a toy?",
      answer:
        "We offer a zero-hassle 7-day return policy! If the toy is completely unused, has its tags attached, and is kept inside its original biodegradable packaging, you can request a return directly from your dashboard or contact our customer support node.",
    },
    {
      category: "Payments",
      question: "Which payment gateways do you support?",
      answer:
        "We support secure automated checking pipelines. You can seamlessly pay using Stripe for international cards, standard local mobile banking channels (bKash, Nagad, Rocket), or select Cash on Delivery (COD) at your doorstep.",
    },
    {
      category: "Payments",
      question: "Is my payment information securely handled?",
      answer:
        "Yes, 100%. We never save your raw credit card data on our servers. All transactions are securely routed via fully encrypted HTTPS TLS 1.3 handshakes directly through SSL and automated billing webhooks.",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-neutral-950 text-white" : "bg-neutral-50 text-neutral-900"
      }`}
    >
      {/* ================= SECTION 1: HERO HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-12 text-center relative overflow-hidden">
        {/* Glow Asset */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold tracking-widest text-pink-500 uppercase bg-pink-500/10 px-3.5 py-1.5 rounded-md mb-4">
            Help Center
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Have Questions? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
              We Have Answers
            </span>
          </h1>
          <p
            className={`text-xs sm:text-sm font-light leading-relaxed ${isDark ? "text-neutral-400" : "text-gray-500"}`}
          >
            Everything you need to know about our soft premium material choices,
            dynamic parcel tracking system, and payment refund terms.
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: ACCORDION LIST ================= */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? isDark
                      ? "bg-neutral-900/50 border-neutral-700"
                      : "bg-white border-pink-200 shadow-md shadow-pink-100/10"
                    : isDark
                      ? "bg-neutral-900/20 border-neutral-900 hover:border-neutral-800"
                      : "bg-white border-gray-200/70 hover:shadow-sm"
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <FiHelpCircle
                      size={18}
                      className={`flex-shrink-0 transition-colors ${isOpen ? "text-pink-500" : "text-neutral-400"}`}
                    />
                    <span
                      className={`text-sm sm:text-base font-bold tracking-tight ${
                        isOpen
                          ? isDark
                            ? "text-pink-400"
                            : "text-pink-600"
                          : isDark
                            ? "text-neutral-200"
                            : "text-neutral-800"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Plus/Minus Smooth Shift */}
                  <div
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center flex-shrink-0 transition-all ${
                      isOpen
                        ? "bg-pink-600 border-pink-600 text-white rotate-180"
                        : isDark
                          ? "bg-neutral-950 border-neutral-800 text-neutral-400"
                          : "bg-gray-50 border-gray-200 text-gray-500"
                    }`}
                  >
                    {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
                  </div>
                </button>

                {/* Accordion Smooth Body Drawer */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t" : "max-h-0"
                  } ${isDark ? "border-neutral-800/60" : "border-gray-100"}`}
                >
                  <div
                    className={`p-5 sm:p-6 text-xs sm:text-sm leading-relaxed font-light ${
                      isDark
                        ? "text-neutral-400 bg-neutral-900/30"
                        : "text-gray-600 bg-gray-50/30"
                    }`}
                  >
                    <div className="mb-2 inline-block text-[10px] uppercase tracking-wider font-bold text-purple-500 bg-purple-500/10 px-2 py-0.5 rounded-md">
                      {faq.category}
                    </div>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= SECTION 3: INBOUND SUPPORT CTA ================= */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-28">
        <div
          className={`p-6 sm:p-8 rounded-[2.2rem] border text-center relative overflow-hidden ${
            isDark
              ? "bg-neutral-900/40 border-neutral-900"
              : "bg-white border-gray-200/80 shadow-sm"
          }`}
        >
          <FiMessageSquare size={26} className="text-pink-500 mx-auto mb-3" />
          <h3 className="text-lg font-bold tracking-tight mb-1">
            Still confused about a toy feature?
          </h3>
          <p
            className={`text-xs font-light max-w-sm mx-auto mb-5 ${isDark ? "text-neutral-400" : "text-gray-500"}`}
          >
            Our dedicated toy support guild is active 24/7. Shoot us an instant
            message and we will respond right away.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all active:scale-95"
          >
            Contact Live Support
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
