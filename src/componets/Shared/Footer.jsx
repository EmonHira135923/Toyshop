"use client";

import React from "react";
import Link from "next/link";
import { FiFacebook, FiTwitter, FiInstagram, FiHeart } from "react-icons/fi";
import useTheme from "../utils/hooks/useTheme";
import { usePathname } from "next/navigation";

const Footer = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const pathName = usePathname();

  if (pathName.startsWith("/dashboard")) return null;
  if (pathName.startsWith("/auth")) return null;

  // লিঙ্ক গ্রিডের ডাটা স্ট্রাকচার (সহজেই মডিফাই করতে পারবেন)
  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "Latest Products", href: "/products?filter=latestProduct" },
        { name: "All Products", href: "/products" },
        { name: "Toys", href: "/products?category=plush" },
        { name: "New Arrivals", href: "/products?filter=new" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Stories", href: "/about" },
        { name: "Careers", href: "/contact" },
        { name: "Partnership", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Track Order", href: "/cart" },
        { name: "FAQ & Help", href: "/faq" },
        { name: "Return Policy", href: "/returns" },
      ],
    },
  ];

  // সোশ্যাল মিডিয়া আইকন ডাটা
  const socialIcons = [
    {
      icon: <FiFacebook size={18} />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <FiInstagram size={18} />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <FiTwitter size={18} />,
      href: "https://twitter.com",
      label: "Twitter",
    },
  ];

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        isLight
          ? "bg-white border-gray-200 text-gray-600"
          : "bg-neutral-950 border-neutral-900 text-neutral-400"
      }`}
    >
      {/* ================= TOP FOOTER: LINKS & BRAND ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 lg:gap-12">
          {/* Brand Info (Takes 4 columns on desktop) */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="inline-block transition-transform active:scale-95"
            >
              <h2 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 tracking-tight">
                ToyShop
              </h2>
            </Link>
            <p
              className={`text-sm leading-relaxed max-w-sm ${isLight ? "text-gray-500" : "text-neutral-400"}`}
            >
              Bringing magic, soft hugs, and verified premium plush companions
              to every child's nursery room. Safest materials crafted with pure
              love.
            </p>

            {/* Social Media Icons Button Group */}
            <div className="flex items-center gap-3 pt-2">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${
                    isLight
                      ? "bg-gray-50 border-gray-200 text-gray-600 hover:text-pink-600 hover:border-pink-200 hover:shadow-sm"
                      : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-pink-500 hover:border-neutral-700"
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid (Takes 8 columns on desktop, dynamically renders 3 section lists) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((group, groupIdx) => (
              <div key={groupIdx} className="space-y-4">
                <h3
                  className={`text-xs font-bold uppercase tracking-widest ${
                    isLight ? "text-neutral-900" : "text-white"
                  }`}
                >
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className={`text-sm transition-colors duration-200 font-light block py-0.5 ${
                          isLight
                            ? "hover:text-pink-600 text-gray-500"
                            : "hover:text-pink-500 text-neutral-400"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= BOTTOM FOOTER: COPYRIGHT & LEGAL ================= */}
      <div
        className={`border-t py-6 transition-colors duration-300 ${
          isLight
            ? "bg-gray-50/50 border-gray-100"
            : "bg-neutral-950/40 border-neutral-900/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          {/* Copyright Label */}
          <div className="flex items-center gap-1.5 order-2 sm:order-1">
            <span>© {new Date().getFullYear()} ToyShop. Made with</span>
            <FiHeart
              size={12}
              className="text-pink-600 fill-pink-600 animate-pulse"
            />
            <span>
              by{" "}
              <span className="font-semibold text-neutral-800 dark:text-neutral-300">
                Emon Hossain
              </span>
            </span>
          </div>

          {/* Legal Document Links */}
          <div className="flex items-center gap-6 order-1 sm:order-2">
            <Link
              href="/privacy"
              className={`transition-colors ${isLight ? "hover:text-neutral-900" : "hover:text-white"}`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className={`transition-colors ${isLight ? "hover:text-neutral-900" : "hover:text-white"}`}
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${isLight ? "hover:text-neutral-900" : "hover:text-white"}`}
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
