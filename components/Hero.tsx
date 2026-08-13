"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[680px] md:min-h-[760px] overflow-hidden">

      {/* =========================================
          BACKGROUND IMAGE
      ========================================== */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      />

      {/* BLUR + DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />

      {/* BLUE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/75 to-blue-900/20" />

      {/* BOTTOM DARK GRADIENT */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-blue-950/70 to-transparent" />


      {/* =========================================
          CONTENT
      ========================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="min-h-[680px] md:min-h-[760px] flex items-center">

          <div className="max-w-3xl pt-16 md:pt-10">

            {/* SMALL BADGE */}
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/25 text-white px-5 py-3 rounded-full shadow-xl">

              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white">
                ❤️
              </span>

              <span className="font-semibold text-sm md:text-base">
                Welcome to Radhika Foundation Nepal
              </span>

            </div>


            {/* MAIN TITLE */}
            <h1 className="mt-7 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">

              Together We Can

              <span className="block text-yellow-300 mt-2">
                Make a Difference
              </span>

            </h1>


            {/* DESCRIPTION */}
            <p className="mt-7 text-base sm:text-lg md:text-xl text-white/90 leading-8 max-w-2xl">

              Radhika Foundation Nepal is dedicated to education,
              health, women empowerment, environmental protection
              and sustainable development.

            </p>


            {/* BUTTONS */}
            <div className="mt-9 flex flex-col sm:flex-row gap-4">

              {/* DONATE */}
              <Link
                href="/donate"
                className="group inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-extrabold text-lg shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <span>❤️</span>
                Donate Now
                <span className="group-hover:translate-x-1 transition">
                  →
                </span>
              </Link>


              {/* VOLUNTEER */}
              <Link
                href="/volunteer"
                className="group inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span>🤝</span>
                Become a Volunteer
                <span className="group-hover:translate-x-1 transition">
                  →
                </span>
              </Link>

            </div>


            {/* TRUST POINTS */}
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-white/90">

              <div className="flex items-center gap-2">
                <span className="text-xl">✓</span>
                <span>Education Support</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xl">✓</span>
                <span>Health & Care</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xl">✓</span>
                <span>Community Service</span>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          FLOATING IMPACT CARD
      ========================================== */}
      <div className="absolute z-20 bottom-16 right-6 md:right-12 lg:right-20 hidden md:block">

        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-5 w-64">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
              🤝
            </div>

            <div>
              <p className="text-3xl font-extrabold text-blue-700">
                6235+
              </p>

              <p className="text-sm text-gray-600 font-medium">
                People Served
              </p>
            </div>

          </div>

          <div className="mt-4 h-1.5 bg-blue-100 rounded-full overflow-hidden">
            <div className="h-full w-4/5 bg-blue-700 rounded-full" />
          </div>

          <p className="text-xs text-gray-500 mt-3">
            Together, we can create meaningful change.
          </p>

        </div>

      </div>


      {/* =========================================
          BOTTOM WAVE
      ========================================== */}
      <div className="absolute bottom-0 left-0 right-0">

        <svg
          viewBox="0 0 1440 100"
          className="w-full h-16 md:h-24"
          preserveAspectRatio="none"
        >

          <path
            d="M0,65 C300,110 520,10 820,45 C1100,80 1260,15 1440,50 L1440,100 L0,100 Z"
            fill="white"
          />

        </svg>

      </div>

    </section>
  );
}
