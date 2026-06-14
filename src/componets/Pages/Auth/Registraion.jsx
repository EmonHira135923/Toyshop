"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiLock,
  FiEye,
  FiEyeOff,
  FiCamera,
  FiArrowRight,
  FiPlus,
  FiShoppingBag,
  FiShield,
  FiHeart,
} from "react-icons/fi";
import useTheme from "@/componets/utils/hooks/useTheme";
import SocialLinks from "./SocialLinks";

const RegistrationPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [showPassword, setShowPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setValue("profileImage", file, { shouldValidate: true }); // ইমেজ সিলেক্ট হলে সাথে সাথে এরর চলে যাবে
    }
  };

  const onSubmit = (data) => {
    console.log("Form Master Data:", data);
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
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <Link href="/" className="flex items-center gap-2.5 relative z-10">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-600 to-purple-600 flex items-center justify-center text-white shadow-md">
            <FiShoppingBag size={16} />
          </div>
          <span className="font-black text-lg tracking-tight uppercase">
            Toy<span className="text-pink-500">Shop</span>
          </span>
        </Link>

        <div className="relative z-10 max-w-sm space-y-4">
          <h1 className="text-4xl font-black tracking-tight leading-tight">
            Unlock Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              World of Wonder.
            </span>
          </h1>
          <p
            className={`text-xs font-light leading-relaxed ${isDark ? "text-neutral-400" : "text-gray-500"}`}
          >
            Access your custom child-safe dashboard, keep track of your dynamic
            packages via real-time hooks, and get early waivers on new inventory
            batches.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-6 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
          <span className="flex items-center gap-1.5">
            <FiShield className="text-pink-500" /> 100% Encrypted
          </span>
          <span className="flex items-center gap-1.5">
            <FiHeart className="text-purple-500" /> Premium Curation
          </span>
        </div>
      </div>

      {/* ================= RIGHT SIDE: REGISTRATION FORM ================= */}
      <div className="lg:col-span-7 flex items-center justify-center p-6 sm:p-12 relative overflow-y-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl lg:hidden pointer-events-none" />

        <div
          className={`w-full max-w-md p-8 sm:p-10 rounded-[2.5rem] border backdrop-blur-md transition-all duration-300 relative z-10 ${
            isDark
              ? "bg-neutral-900/40 border-neutral-800/80 shadow-2xl shadow-neutral-950/40"
              : "bg-white border-gray-200/80 shadow-xl shadow-gray-200/40"
          }`}
        >
          <div className="mb-6">
            <h2 className="text-2xl font-black tracking-tight mb-1">
              Create Account
            </h2>
            <p
              className={`text-xs font-light ${isDark ? "text-neutral-400" : "text-gray-500"}`}
            >
              Join ToyShop today and explore safe soft companions.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* ================= IMAGE FIELD WITH VALIDATION ================= */}
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="relative group">
                <div
                  className={`w-16 h-16 rounded-2xl border-2 border-dashed flex items-center justify-center overflow-hidden relative transition-all ${
                    errors.profileImage
                      ? "border-rose-500 bg-rose-500/5 shadow-md shadow-rose-500/5" // এরর থাকলে লাল বর্ডার ও শ্যাডো
                      : isDark
                        ? "border-neutral-800 bg-neutral-950/50 focus-within:border-pink-500/50"
                        : "border-gray-300 bg-gray-50 focus-within:border-pink-500/50"
                  }`}
                >
                  {imagePreview ? (
                    <Image
                      fill
                      src={imagePreview}
                      alt="Avatar Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FiCamera
                      size={18}
                      className={
                        errors.profileImage
                          ? "text-rose-400"
                          : "text-neutral-400 group-hover:text-pink-500"
                      }
                    />
                  )}
                </div>
                <label
                  className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-md text-white flex items-center justify-center cursor-pointer shadow-md transition-all active:scale-90 ${
                    errors.profileImage
                      ? "bg-rose-600 hover:bg-rose-500"
                      : "bg-pink-600 hover:bg-pink-500"
                  }`}
                >
                  <FiPlus size={12} />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    {...register("profileImage", {
                      required: "Profile image is required",
                      onChange: (e) => handleImageChange(e),
                    })}
                  />
                </label>
              </div>
              {/* Image Error Text */}
              {errors.profileImage && (
                <p className="text-[10px] text-rose-500 font-semibold mt-2 px-1">
                  {errors.profileImage.message}
                </p>
              )}
            </div>

            {/* Name Field */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                  <FiUser size={15} />
                </span>
                <input
                  type="text"
                  placeholder="Emon Hossain"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full pl-11 pr-4 py-2.5 rounded-xl border text-xs font-light tracking-tight focus:outline-none transition-all ${
                    errors.name
                      ? "border-rose-500/60 focus:border-rose-500"
                      : isDark
                        ? "bg-neutral-950 border-neutral-800 focus:border-pink-500/50"
                        : "bg-gray-50 border-gray-200 focus:border-pink-500/50"
                  } ${isDark ? "text-white placeholder-neutral-600" : "text-neutral-900 placeholder-gray-400"}`}
                />
              </div>
              {errors.name && (
                <p className="text-[10px] text-rose-500 font-semibold px-1">
                  {errors.name.message}
                </p>
              )}
            </div>

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

            {/* Phone Field */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                  <FiPhone size={15} />
                </span>
                <input
                  type="tel"
                  placeholder="+880 1700-000000"
                  {...register("phone", {
                    required: "Phone number is required",
                    minLength: {
                      value: 11,
                      message: "Phone number must be at least 11 digits",
                    },
                  })}
                  className={`w-full pl-11 pr-4 py-2.5 rounded-xl border text-xs font-light tracking-tight focus:outline-none transition-all ${
                    errors.phone
                      ? "border-rose-500/60 focus:border-rose-500"
                      : isDark
                        ? "bg-neutral-950 border-neutral-800 focus:border-pink-500/50"
                        : "bg-gray-50 border-gray-200 focus:border-pink-500/50"
                  } ${isDark ? "text-white placeholder-neutral-600" : "text-neutral-900 placeholder-gray-400"}`}
                />
              </div>
              {errors.phone && (
                <p className="text-[10px] text-rose-500 font-semibold px-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                Password
              </label>
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

            {/* Register Submit Button */}
            <button
              type="submit"
              className="w-full mt-3 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-pink-500/10 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
            >
              Sign Up Now{" "}
              <FiArrowRight
                size={13}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>

          {/* Social Links Modular Component Injection */}
          <SocialLinks />

          <div className="text-center mt-5">
            <p
              className={`text-[11px] font-light ${isDark ? "text-neutral-400" : "text-gray-500"}`}
            >
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-pink-500 font-bold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
