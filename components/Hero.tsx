"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    image: "/images/hero-bg.jpg",
    smallTitle: "Welcome to Radhika Foundation Nepal",
    title: "Together We Can",
    highlight: "Make a Difference",
    description:
      "We are committed to serving humanity through education, care, compassion and community development.",
  },
  {
    image: "/images/hero-bg2.jpg",
    smallTitle: "Education for Every Child",
    title: "Every Child Deserves",
    highlight: "A Better Future",
    description:
      "We work to provide education, care and opportunities for children who need support and hope.",
  },
  {
    image: "/images/hero-bg3.jpg",
    smallTitle: "Serving Humanity with Love",
    title: "Your Support Can",
    highlight: "Change a Life",
    description:
      "Together, we can bring hope, dignity and positive change to people and communities in need.",
  },
  {
    image: "/images/hero-bg4.jpg",
    smallTitle: "Building Better Communities",
    title: "Small Acts of Kindness",
    highlight: "Create Big Change",
    description:
      "Join us in creating a compassionate society through service, empowerment and sustainable development.",
  },
  {
    image: "/images/hero-bg5.jpg",
    smallTitle: "Be Part of the Change",
    title: "Give Hope.",
    highlight: "Give Humanity.",
    description:
      "Your time, support and generosity can help us build a brighter future for those who need it most.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  function previousSlide() {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  }

  function nextSlide() {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }

  return (
    <section className="relative min-h-[650px] overflow-hidden bg-slate-900 md:min-h-[730px]">

      {/* =====================================================
          BACKGROUND SLIDES
      ====================================================== */}

      {heroSlides.map((item, index) => (
        <div
          key={item.image}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[1200ms] ${
            index === currentSlide
              ? "scale-100 opacity-100"
              : "scale-105 opacity-0"
          }`}
          style={{
            backgroundImage: `url("${item.image}")`,
          }}
        />
      ))}

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}

      <div className="absolute inset-0 bg-black/45" />

      {/* =====================================================
          LEFT GRADIENT
      ====================================================== */}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/55 to-transparent" />

      {/* =====================================================
          BOTTOM GRADIENT
      ====================================================== */}

      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/60 to-transparent" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-5 sm:px-8 md:min-h-[730px] lg:px-10">

        <div className="max-w-3xl pt-10">

          {/* SMALL TITLE */}

          <div className="mb-6 inline-flex items-center gap-3">

            <span className="h-[3px] w-12 rounded-full bg-red-500" />

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white sm:text-base">
              {slide.smallTitle}
            </p>

          </div>

          {/* MAIN TITLE */}

          <h1 className="text-4xl font-black leading-[1.08] text-white drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">

            {slide.title}

            <br />

            <span className="text-yellow-300">
              {slide.highlight}
            </span>

          </h1>

          {/* DESCRIPTION */}

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/90 sm:text-lg md:text-xl">
            {slide.description}
          </p>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/donate"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-red-600
                px-8
                py-4
                text-base
                font-extrabold
                text-white
                shadow-xl
                shadow-black/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-red-700
                hover:shadow-2xl
                sm:px-9
              "
            >
              ❤️ Donate Now
            </Link>

            <Link
              href="/about"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border-2
                border-white
                bg-white/10
                px-8
                py-4
                text-base
                font-extrabold
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white
                hover:text-blue-800
                sm:px-9
              "
            >
              Discover More →
            </Link>

          </div>

          {/* =================================================
              TRUST ITEMS
          ================================================== */}

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-white/90">

            <span>✓ Education</span>
            <span>✓ Community Service</span>
            <span>✓ Care & Support</span>
            <span>✓ Humanity</span>

          </div>

        </div>

      </div>

      {/* =====================================================
          PREVIOUS BUTTON
      ====================================================== */}

      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="
          absolute
          left-4
          top-1/2
          z-20
          hidden
          h-12
          w-12
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/30
          bg-black/20
          text-2xl
          text-white
          backdrop-blur-sm
          transition
          hover:bg-white
          hover:text-blue-800
          md:flex
        "
      >
        ←
      </button>

      {/* =====================================================
          NEXT BUTTON
      ====================================================== */}

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="
          absolute
          right-4
          top-1/2
          z-20
          hidden
          h-12
          w-12
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/30
          bg-black/20
          text-2xl
          text-white
          backdrop-blur-sm
          transition
          hover:bg-white
          hover:text-blue-800
          md:flex
        "
      >
        →
      </button>

      {/* =====================================================
          SLIDE INDICATORS
      ====================================================== */}

      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-2">

        {heroSlides.map((item, index) => (
          <button
            key={item.image}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "w-10 bg-yellow-300"
                : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}

      </div>

      {/* =====================================================
          BOTTOM WHITE CURVE
      ====================================================== */}

      <div className="absolute bottom-0 left-0 right-0 z-20">

        <svg
          viewBox="0 0 1440 100"
          className="h-14 w-full md:h-20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70 C300,20 520,100 850,55 C1100,20 1270,25 1440,65 L1440,100 L0,100 Z"
            fill="white"
          />
        </svg>

      </div>

    </section>
  );
}
