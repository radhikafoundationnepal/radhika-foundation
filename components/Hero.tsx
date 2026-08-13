"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const heroImages = [
  "/images/hero-bg.jpg",
  "/images/hero-bg2.jpg",
  "/images/hero-bg3.jpg",
  "/images/hero-bg4.jpg",
  "/images/hero-bg5.jpg",
  "/images/hero-bg6.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  /* =========================
      AUTOMATIC SLIDESHOW
  ========================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[650px] md:min-h-[720px] overflow-hidden">

      {/* =====================================================
          BACKGROUND SLIDES
      ====================================================== */}

      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`
            absolute
            inset-0
            bg-cover
            bg-center
            transition-all
            duration-[1500ms]
            ease-in-out
            ${
              currentImage === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }
          `}
          style={{
            backgroundImage: `url("${image}")`,
          }}
        />
      ))}


      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}

      <div className="absolute inset-0 bg-blue-950/60" />

      {/* =====================================================
          GRADIENT OVERLAY
      ====================================================== */}

      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-blue-900/50 to-blue-950/85" />


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[650px] md:min-h-[720px] flex items-center justify-center">

        <div className="text-center max-w-4xl">

          {/* WELCOME BADGE */}

          <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-blue-700 px-6 py-3 rounded-full font-bold shadow-xl">

            <span className="text-xl">
              🙏
            </span>

            <span>
              Welcome to Radhika Foundation Nepal
            </span>

          </div>


          {/* TITLE */}

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight drop-shadow-2xl">

            Together We Build

            <br />

            <span className="text-yellow-300">
              Better Communities
            </span>

          </h1>


          {/* DESCRIPTION */}

          <p className="mt-7 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">

            Radhika Foundation Nepal is dedicated to education,
            health, women empowerment, environmental protection
            and sustainable development.

          </p>


          {/* =================================================
              BUTTONS
          ================================================== */}

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">

            {/* DONATE */}

            <Link
              href="/donate"
              className="
                group
                bg-red-600
                hover:bg-red-700
                text-white
                px-9
                py-4
                rounded-full
                font-extrabold
                text-lg
                shadow-2xl
                transition-all
                duration-300
                hover:scale-105
                hover:-translate-y-1
              "
            >
              ❤️ Donate Now
            </Link>


            {/* VOLUNTEER */}

            <Link
              href="#volunteer"
              className="
                bg-white/95
                hover:bg-white
                text-blue-700
                px-9
                py-4
                rounded-full
                font-bold
                text-lg
                shadow-2xl
                transition-all
                duration-300
                hover:scale-105
                hover:-translate-y-1
              "
            >
              🙋 Become a Volunteer
            </Link>


            {/* LEARN MORE */}

            <Link
              href="/about"
              className="
                border-2
                border-white
                text-white
                hover:bg-white
                hover:text-blue-700
                px-9
                py-4
                rounded-full
                font-bold
                text-lg
                transition-all
                duration-300
                hover:scale-105
                hover:-translate-y-1
              "
            >
              Learn More →
            </Link>

          </div>


          {/* =================================================
              TRUST / WORK AREAS
          ================================================== */}

          <div className="mt-12 flex flex-wrap justify-center gap-5 md:gap-8 text-white/95 text-sm md:text-base">

            <div className="flex items-center gap-2">
              <span className="text-xl">
                🎓
              </span>

              <span className="font-semibold">
                Education
              </span>
            </div>


            <div className="flex items-center gap-2">
              <span className="text-xl">
                ❤️
              </span>

              <span className="font-semibold">
                Health & Care
              </span>
            </div>


            <div className="flex items-center gap-2">
              <span className="text-xl">
                🌱
              </span>

              <span className="font-semibold">
                Environment
              </span>
            </div>


            <div className="flex items-center gap-2">
              <span className="text-xl">
                🤝
              </span>

              <span className="font-semibold">
                Community
              </span>
            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          SLIDE INDICATORS
      ====================================================== */}

      <div className="absolute bottom-24 md:bottom-28 left-0 right-0 z-20 flex justify-center gap-2">

        {heroImages.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              h-2.5
              rounded-full
              transition-all
              duration-500
              ${
                currentImage === index
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }
            `}
          />
        ))}

      </div>


      {/* =====================================================
          BOTTOM CURVE
      ====================================================== */}

      <div className="absolute bottom-0 left-0 right-0 z-20">

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
