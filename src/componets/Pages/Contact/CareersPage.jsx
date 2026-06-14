"use client";

import React from "react";
import Link from "next/link";
import {
  FiMapPin,
  FiDollarSign,
  FiArrowUpRight,
  FiSmile,
  FiZap,
  FiAward,
} from "react-icons/fi";
import useTheme from "@/componets/utils/hooks/useTheme";

const CareersPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const perks = [
    {
      icon: <FiSmile size={22} className="text-pink-500" />,
      title: "Engineering First",
      desc: "No micro-management. Clean code architectures, automated CI/CD pipelines, and robust testing modules.",
    },
    {
      icon: <FiZap size={22} className="text-purple-500" />,
      title: "Premium Dark Tech",
      desc: "Push boundaries using full Next.js App Router capabilities, Framer Motion animations, and custom UI systems.",
    },
    {
      icon: <FiAward size={22} className="text-indigo-500" />,
      title: "Growth & Wavers",
      desc: "Competitive tech salaries, dedicated project bonuses, and massive scopes for professional expansion.",
    },
  ];

  const jobOpenings = [
    {
      id: "job-1",
      role: "Senior Full-Stack Developer (Next.js & Node.js)",
      department: "Engineering",
      location: "Remote / Dhaka, BD",
      type: "Full-time",
      salary: "৳80,000 - ৳1,20,000",
    },
    {
      id: "job-2",
      role: "UI/UX Designer (High-End Dark Interfaces)",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "৳50,000 - ৳75,000",
    },
    {
      id: "job-3",
      role: "QA Automation Engineer (Payment & Webhooks)",
      department: "Engineering",
      location: "Mirpur 13 Office",
      type: "Full-time",
      salary: "৳60,000 - ৳85,000",
    },
    {
      id: "job-4",
      role: "Logistics Operations Associate (ZapShift Node)",
      department: "Operations",
      location: "Mirpur 13 Office",
      type: "Full-time",
      salary: "৳35,000 - ৳45,000",
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold tracking-widest text-pink-500 uppercase bg-pink-500/10 px-3.5 py-1.5 rounded-md mb-4">
            Join The Dev Team
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 leading-tight">
            Build the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
              Scalable Software
            </span>
          </h1>
          <p
            className={`text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed ${isDark ? "text-neutral-400" : "text-gray-500"}`}
          >
            We are looking for driven full-stack engineers, pixel-perfect UI
            designers, and systems architects to craft lightning-fast web
            applications.
          </p>
        </div>
      </section>

      {/* CORE PERKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {perks.map((perk, i) => (
            <div
              key={i}
              className={`p-6 rounded-[1.8rem] border transition-all duration-300 ${
                isDark
                  ? "bg-neutral-900/40 border-neutral-800/80 hover:border-neutral-800"
                  : "bg-white border-gray-200/80 shadow-sm"
              }`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${isDark ? "bg-neutral-950" : "bg-gray-100"}`}
              >
                {perk.icon}
              </div>
              <h3 className="font-extrabold text-base tracking-tight mb-1.5">
                {perk.title}
              </h3>
              <p
                className={`text-xs leading-relaxed font-light ${isDark ? "text-neutral-400" : "text-gray-500"}`}
              >
                {perk.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OPEN OPENINGS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl font-black tracking-tight mb-1">
              Open Positions
            </h2>
            <p
              className={`text-xs ${isDark ? "text-neutral-500" : "text-gray-500"}`}
            >
              Find your ideal engineering role. Mirpur 13 headquarters positions
              support hybrid schedules.
            </p>
          </div>
          <span
            className={`text-xs font-bold px-3 py-1.5 rounded-lg border ${
              isDark
                ? "bg-neutral-900 border-neutral-800 text-neutral-400"
                : "bg-white border-gray-200 text-gray-600"
            }`}
          >
            {jobOpenings.length} Positions Available
          </span>
        </div>

        <div className="space-y-4">
          {jobOpenings.map((job) => (
            <Link
              href={`/careers/${job.id}`}
              key={job.id}
              className="group block"
            >
              <div
                className={`p-5 sm:p-6 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-5 transition-all duration-300 ${
                  isDark
                    ? "bg-neutral-900/30 border-neutral-900 hover:border-neutral-700/60 hover:bg-neutral-900/60"
                    : "bg-white border-gray-200/70 hover:border-pink-200 hover:shadow-md"
                }`}
              >
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-500">
                      {job.department}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${isDark ? "bg-neutral-950 text-neutral-400" : "bg-gray-100 text-gray-600"}`}
                    >
                      {job.type}
                    </span>
                  </div>
                  <h3
                    className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                      isDark
                        ? "group-hover:text-pink-500 text-white"
                        : "group-hover:text-pink-600 text-neutral-900"
                    }`}
                  >
                    {job.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-neutral-400 font-light">
                    <span className="flex items-center gap-1">
                      <FiMapPin size={13} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiDollarSign size={13} /> {job.salary}
                    </span>
                  </div>
                </div>

                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                    isDark
                      ? "bg-neutral-950 border-neutral-800 text-neutral-400 group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-500"
                      : "bg-gray-50 border-gray-200 text-gray-500 group-hover:bg-pink-600 group-hover:text-white group-hover:border-pink-600"
                  }`}
                >
                  <FiArrowUpRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
