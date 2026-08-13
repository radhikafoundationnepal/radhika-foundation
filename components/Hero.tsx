"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[650px] md:min-h-[720px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          filter: "blur(1.5px)",
        }}
      />

      {/* DARK / BLUE OVERLAY */}
      <div className="absolute inset-0 bg-blue-950/65" />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-blue-900/50 to-blue-950/80" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[650px] md:min-h-[720px] flex items-center justify-center">

        <div className="text-center max-w-4xl">

          {/* WELCOME */}
          <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-blue-700 px-6 py-3 rounded-full font-bold shadow-lg">
            <span className="text-xl">🙏</span>
            <span>Welcome to Radhika Foundation Nepal</span>
          </div>

          {/* TITLE */}
          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
            Together We Build
            <br />

            <span className="text-yellow-300">
              Better Communities
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-7 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Radhika Foundation Nepal is dedicated to education,
            health, women empowerment, environmental protection
            and sustainable development.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

            {/* DONATE */}
            <Link
              href="/donate"
              className="animate-pulse bg-red-600 hover:bg-red-700 text-white px-9 py-4 rounded-full font-extrabold text-lg shadow-xl transition transform hover:scale-105"
            >
              ❤️ Donate Now
            </Link>

            {/* VOLUNTEER */}
            <Link
              href="#volunteer"
              className="bg-white/95 hover:bg-white text-blue-700 px-9 py-4 rounded-full font-bold text-lg shadow-xl transition transform hover:scale-105"
            >
              🙋 Become a Volunteer
            </Link>

            {/* LEARN MORE */}
            <Link
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-9 py-4 rounded-full font-bold text-lg transition transform hover:scale-105"
            >
              Learn More →
            </Link>

          </div>

          {/* SMALL TRUST MESSAGE */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base">

            <div className="flex items-center gap-2">
              <span className="text-xl">🎓</span>
              <span>Education</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xl">❤️</span>
              <span>Health & Care</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xl">🌱</span>
              <span>Environment</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xl">🤝</span>
              <span>Community</span>
            </div>

          </div>

        </div>
      </div>

      {/* BOTTOM CURVE */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-20 md:h-24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,100 L0,100 Z"
            fill="white"
          />
        </svg>
      </div>

    </section>
  );
}