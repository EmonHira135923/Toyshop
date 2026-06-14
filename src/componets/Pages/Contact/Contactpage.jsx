"use client";
import React from "react";
import useTheme from "@/componets/utils/hooks/useTheme";
import { useForm } from "react-hook-form"; // react-hook-form ইমপোর্ট করা হলো

const Contactpage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // register, handleSubmit, এবং errors অবজেক্ট ডিস্ট্রাকচার করা হলো
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // ফর্ম সাবমিট হ্যান্ডেলার
  const onSubmit = (data) => {
    console.log("Form Submitted Successfully with React Hook Form:", data);
    // এখানে আপনার এপিআই বা ব্যাকএন্ড সাবমিট লজিক দিতে পারেন

    reset(); // সাবমিট শেষে ফর্ম ফিল্ডগুলো খালি করার জন্য
  };

  const contactDetails = [
    {
      icon: "📞",
      title: "Call Us Anytime",
      text: "+880 1234-567890",
      subText: "Sat - Thu, 9am - 6pm",
    },
    {
      icon: "✉️",
      title: "Email Support",
      text: "support@cuddletoys.com",
      subText: "Response within 24 hours",
    },
    {
      icon: "📍",
      title: "Main Headquarters",
      text: "Mirpur 13, Dhaka", // মিরপুর ১৩ আপডেট করা হলো
      subText: "Block-C, Main Road, Mirpur 13, Dhaka 1216",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-neutral-950 text-white" : "bg-neutral-50 text-neutral-900"
      }`}
    >
      {/* ================= SECTION 1: HERO HEADER ================= */}
      <section
        className={`py-16 text-center relative overflow-hidden ${
          isDark
            ? "bg-neutral-900/30 border-b border-neutral-900"
            : "bg-white border-b border-neutral-200/60 shadow-sm"
        }`}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-pink-500/10 to-violet-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <span className="inline-block text-xs font-bold tracking-widest text-pink-500 uppercase bg-pink-500/10 px-3.5 py-1.5 rounded-md mb-3">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            We’d Love to Hear <span className="text-pink-500">From You</span>
          </h1>
          <p
            className={`text-sm md:text-base font-light max-w-md mx-auto leading-relaxed ${
              isDark ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            Have questions about your toy delivery, custom gift orders, or bulk
            packaging? Drop us a message!
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: INFOCARDS GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactDetails.map((info, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border flex items-center gap-4 transition-all duration-300 ${
                isDark
                  ? "bg-neutral-900/60 border-neutral-800/80 hover:border-neutral-700"
                  : "bg-white border-neutral-200 hover:shadow-md"
              }`}
            >
              <span className="text-3xl bg-pink-500/10 dark:bg-pink-500/5 p-3.5 rounded-xl flex-shrink-0">
                {info.icon}
              </span>
              <div>
                <h3 className="font-bold text-sm text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                  {info.title}
                </h3>
                <p className="text-base font-extrabold mt-0.5">{info.text}</p>
                <p
                  className={`text-xs mt-0.5 ${isDark ? "text-neutral-500" : "text-neutral-400"}`}
                >
                  {info.subText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 3: FORM & MAP GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Form */}
          <div
            className={`lg:col-span-7 p-6 md:p-10 rounded-[2rem] border flex flex-col justify-between ${
              isDark
                ? "bg-neutral-900 border-neutral-800"
                : "bg-white border-neutral-200/80 shadow-sm"
            }`}
          >
            <div>
              <h2 className="text-2xl font-black tracking-tight mb-2">
                Send Us a Message
              </h2>
              <p
                className={`text-sm mb-8 ${isDark ? "text-neutral-400" : "text-neutral-600"}`}
              >
                Fill out the secure form below and our support squad will get
                back to you shortly.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name Field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Emon Hossain"
                      {...register("name", { required: "Name is required" })}
                      className={`px-4 py-3.5 rounded-xl text-sm outline-none focus:ring-2 transition-all border ${
                        errors.name
                          ? "focus:ring-red-500 border-red-500/60"
                          : "focus:ring-pink-500"
                      } ${
                        isDark
                          ? "bg-neutral-950 border-neutral-800 text-white"
                          : "bg-neutral-50 border-neutral-200 text-neutral-900"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs font-semibold text-red-500 pl-1">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Email Address
                    </label>
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
                      className={`px-4 py-3.5 rounded-xl text-sm outline-none focus:ring-2 transition-all border ${
                        errors.email
                          ? "focus:ring-red-500 border-red-500/60"
                          : "focus:ring-pink-500"
                      } ${
                        isDark
                          ? "bg-neutral-950 border-neutral-800 text-white"
                          : "bg-neutral-50 border-neutral-200 text-neutral-900"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs font-semibold text-red-500 pl-1">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Order Tracking / Partnership Inquiry"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className={`px-4 py-3.5 rounded-xl text-sm outline-none focus:ring-2 transition-all border ${
                      errors.subject
                        ? "focus:ring-red-500 border-red-500/60"
                        : "focus:ring-pink-500"
                    } ${
                      isDark
                        ? "bg-neutral-950 border-neutral-800 text-white"
                        : "bg-neutral-50 border-neutral-200 text-neutral-900"
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-xs font-semibold text-red-500 pl-1">
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Your Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Type your message details here..."
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters long",
                      },
                    })}
                    className={`px-4 py-3.5 rounded-xl text-sm outline-none focus:ring-2 transition-all border resize-none ${
                      errors.message
                        ? "focus:ring-red-500 border-red-500/60"
                        : "focus:ring-pink-500"
                    } ${
                      isDark
                        ? "bg-neutral-950 border-neutral-800 text-white"
                        : "bg-neutral-50 border-neutral-200 text-neutral-900"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs font-semibold text-red-500 pl-1">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-600 to-violet-600 hover:from-pink-500 hover:to-violet-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md hover:shadow-pink-500/20 transition-all duration-300 active:scale-95"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Google Maps Location (Mirpur 13 Embed Link) */}
          <div
            className={`lg:col-span-5 rounded-[2rem] overflow-hidden border min-h-[350px] relative ${
              isDark
                ? "bg-neutral-900 border-neutral-800"
                : "bg-white border-neutral-200 shadow-sm"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9443!2d90.3757!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72a687db475%3A0x3f024e694206be66!2sMirpur%2013%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1710000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={`w-full h-full ${isDark ? "invert-[90%] hue-rotate-180 opacity-80" : ""}`}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactpage;
