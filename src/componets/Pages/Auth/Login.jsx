"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiShoppingBag,
  FiShield,
  FiHeart,
} from "react-icons/fi";
import useTheme from "@/componets/utils/hooks/useTheme";
import SocialLinks from "./SocialLinks"; // পাথটি আপনার প্রোজেক্ট অনুযায়ী চেক করে নিবেন

const LoginPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Login Form Data Submitted:", data);
    // আপনার লগইন API বা NextAuth লজিক এখানে কল হবে
  };

  return (
    <div
      className={`min-h-screen grid grid-cols-1 lg:grid-cols-12 transition-colors duration-300 ${
        isDark ? "bg-neutral-950 text-white" : "bg-neutral-50 text-neutral-900"
      }`}
    >
      {/* ================= LEFT SIDE: PREMIUM BRAND TEXT ================= */}
      <div
        className={`hidden lg:flex lg:col-span-5 flex-col justify-between p-12 relative overflow-hidden border-r ${
          isDark
            ? "bg-neutral-900/20 border-neutral-900"
            : "bg-white border-gray-200"
        }`}
      >
        {/* Glow Effects */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 relative z-10">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-600 to-purple-600 flex items-center justify-center text-white shadow-md">
            <FiShoppingBag size={16} />
          </div>
          <span className="font-black text-lg tracking-tight uppercase">
            Toy<span className="text-pink-500">Shop</span>
          </span>
        </Link>

        {/* Brand Content */}
        <div className="relative z-10 max-w-sm space-y-4">
          <h1 className="text-4xl font-black tracking-tight leading-tight">
            Welcome <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
              Back to Wonder.
            </span>
          </h1>
          <p
            className={`text-xs font-light leading-relaxed ${isDark ? "text-neutral-400" : "text-gray-500"}`}
          >
            Track your parcel shifts, manage your premium carts, and experience
            seamlessly optimized full-stack magic with our latest update patch.
          </p>
        </div>

        {/* Badges */}
        <div className="relative z-10 flex items-center gap-6 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
          <span className="flex items-center gap-1.5">
            <FiShield className="text-purple-500" /> Secure Session
          </span>
          <span className="flex items-center gap-1.5">
            <FiHeart className="text-pink-500" /> Certified Safe
          </span>
        </div>
      </div>

      {/* ================= RIGHT SIDE: LOGIN FORM ================= */}
      <div className="lg:col-span-7 flex items-center justify-center p-6 sm:p-12 relative overflow-y-auto">
        {/* Mobile Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl lg:hidden pointer-events-none" />

        <div
          className={`w-full max-w-md p-8 sm:p-10 rounded-[2.5rem] border backdrop-blur-md transition-all duration-300 relative z-10 ${
            isDark
              ? "bg-neutral-900/40 border-neutral-800/80 shadow-2xl shadow-neutral-950/40"
              : "bg-white border-gray-200/80 shadow-xl shadow-gray-200/40"
          }`}
        >
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-black tracking-tight mb-1">Sign In</h2>
            <p
              className={`text-xs font-light ${isDark ? "text-neutral-400" : "text-gray-500"}`}
            >
              Enter your credentials to manage your magical companions.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                  <FiMail size={15} />
                </span>
                <input
                  type="email"
                  placeholder="emon@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full pl-11 pr-4 py-2.5 rounded-xl border text-xs font-light tracking-tight focus:outline-none transition-all ${
                    errors.email
                      ? "border-rose-500/60 focus:border-rose-500"
                      : isDark
                        ? "bg-neutral-950 border-neutral-800 focus:border-pink-500/50"
                        : "bg-gray-50 border-gray-200 focus:border-pink-500/50"
                  } ${isDark ? "text-white placeholder-neutral-600" : "text-neutral-900 placeholder-gray-400"}`}
                />
              </div>
              {errors.email && (
                <p className="text-[10px] text-rose-500 font-semibold px-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-[10px] font-bold text-pink-500 hover:underline tracking-tight"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                  <FiLock size={15} />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className={`w-full pl-11 pr-12 py-2.5 rounded-xl border text-xs font-light tracking-tight focus:outline-none transition-all ${
                    errors.password
                      ? "border-rose-500/60 focus:border-rose-500"
                      : isDark
                        ? "bg-neutral-950 border-neutral-800 focus:border-pink-500/50"
                        : "bg-gray-50 border-gray-200 focus:border-pink-500/50"
                  } ${isDark ? "text-white placeholder-neutral-600" : "text-neutral-900 placeholder-gray-400"}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-pink-500"
                >
                  {showPassword ? <FiEyeOff size={15} /> : <FiEye size={15} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-[10px] text-rose-500 font-semibold px-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-purple-500/10 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
            >
              Sign In Now{" "}
              <FiArrowRight
                size={13}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>

          {/* Social Links Modular Component Injection */}
          <SocialLinks />

          {/* Footer Navigation */}
          <div className="text-center mt-5">
            <p
              className={`text-[11px] font-light ${isDark ? "text-neutral-400" : "text-gray-500"}`}
            >
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-pink-500 font-bold hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
