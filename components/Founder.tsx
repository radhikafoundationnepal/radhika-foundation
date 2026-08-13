"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    name: "अन्जु आचार्य",
    post: "वरिष्ठ उपाध्यक्ष",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzjSojmJxmMqwLk9ReKiiGYXfrBOaFTXVseiR3cbsfgFmZ8CeVPYY8b1TxqhYHIUboVX_GTC33xuui_JnLj3QgRqxZZmzpxBpUZCnxr4i8Ofk8JcYeAFX43b_lzlBNH0Z8HMZc_YwME5voy9jxV7wr-oVFoogVrrb4O7ln4Ygc3_LRJ6nG7nNZb_vdrh4/s403/Anju%20aacharya.jpg",
  },
  {
    name: "कैलाश गर्तौला",
    post: "उपाध्यक्ष",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_xF5ZuwgxV9E4xB3NsSXdJ5Vm2rJefW_QJizepO5rIYeizVVYY36iSzrR6naJpJyjsHhgYg6j-yPL61tY0ff2VVIhvbajwgVAow8UVS8UlLp7zSDNrAHBfwGT4CEmX0bnTtloP5AdhVNMWiGC7cn13ROsGtur4PBeHer_53dFJkquo_y3TUviN18UWnc/s403/kailas%20gadtaula.jpg",
  },
  {
    name: "शान्ता न्यौपाने",
    post: "कोषाध्यक्ष",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRCMZlHML6M4XN11BXTzDwf17AXwwAG0iS7MeSXE5gYjzYG0PuVvnFV4wrdTr0JjihZ4yGv3OAP1uVjLVhjSDWKK2ADP3p25zzNZk0vXAC_dB4uPUabgxj26lwGAeW0mRDb7XLcoyzB_aYBW9acJA7iDn8pUKDAbQXw6IcZiN1KjHbOZE_MPTbvINrn3o/s403/santa%20neupane.jpg",
  },
  {
    name: "कल्पना भट्टराई",
    post: "सचिव",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia_tnDJRLZcAA6GIL-zZrjELbyXZB6hPzJbrgrTFu8W_gjYJ6d5SoK5YIe7vY7iAdTPpUVL9xq05C0vetdwm7QmD3DKTWbKOKeWTHaiOjMQAK8tCqHMb30ZQRr2xlP7fbIaZ4ONHYupUP2PMxLupcaCo0-nQlMuPHFHBeA_t-Vdj5azvK9iwJvoF6cVZY/s403/kalpana%20bhattarai.jpg",
  },
  {
    name: "रमा नेपाल",
    post: "सदस्य",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCS5gM5YFM60YeYn6o09DKqxMt6YsUl9FyqB8xg9z1zMP638-hMupHSM_4h-8cPJiHTTfrePJ04mkacTHW0c6Iq1m5eZg94iG_ughws0qK3966Hi2v-bdG0_FUqzV_CY5wKbZyBBqaybPo_HgDbG0KshAr60SGleR9Rshz2hdXYW-xX2UizWa0NQ-TzSs/s403/Rama%20nepal.jpg",
  },
  {
    name: "इन्दिरा गेलाल",
    post: "सदस्य",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhh8h5WNCL3mo25x7qDJQvXHv0RPZbrTkg8Jl7qDOTiX-1qOgVBWb-O_MLoCFhKfiqIxuUetBoAjqr-IQNNjIxpH9OGMVQ4ZCqo6jHbx37JFnlpIr6Td3RECfBG_lekPIsJcpcCsioKbYwL9E66oFavOch-M5hrkxwT3oDshWx_5MvVwevWb8QxnL12vng/s403/indira%20gelal.jpg",
  },
  {
    name: "पंकज नेपाल",
    post: "जनसम्पर्क",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlxFrIpTg5Nq8S8pMpGUsOIDw0UQOhmSMLgEvkGc-VCyO9J4Z0-SOa0X96TMacugt0xGstRlEus85IrOWf0WVMW4nMTI3FMhUg2offnNWgk0DBjJZMxz-WzGW72fcPwkZFdMQZVC9FQ4HLu1_OVk43mMEM3ntUg2u_cWp005N7cwm5JEtUIM-gQxoGUqE/s750/pankaj%20ji.jpg",
  },
  {
    name: "मिलन चौहान",
    post: "कर्मचारी",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgz8Wso76__A56310FQ84ZFdcHXQb_UacdotpmeHqAQLxBF7_EldRPsELrqBWhDfzoiZ0tgwjkNczK2-l-BqNbFuCU5CLpBxBPnjC0ACxsrvENFsPJZmyK19PP7nyA5k5y02_NAu2w1mnqg7ZoIggZd3WU3G-Ei7hFOU_DsDREO8E9o34LXgiR7JyfMScU/s512/milan.jpg",
  },
];

export default function Founder() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* =========================
     AUTO SLIDE
  ========================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;

        if (next >= teamMembers.length) {
          return 0;
        }

        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* =========================
     MOVE SLIDER
  ========================== */

  useEffect(() => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;

    const card = container.querySelector(
      "[data-team-card]"
    ) as HTMLElement | null;

    if (!card) return;

    const gap = 20;

    const cardWidth = card.offsetWidth + gap;

    container.scrollTo({
      left: currentIndex * cardWidth,
      behavior: "smooth",
    });
  }, [currentIndex]);

  function previousSlide() {
    setCurrentIndex((prev) =>
      prev === 0 ? teamMembers.length - 1 : prev - 1
    );
  }

  function nextSlide() {
    setCurrentIndex((prev) =>
      prev === teamMembers.length - 1 ? 0 : prev + 1
    );
  }

  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 md:py-28">

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-12 text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-extrabold text-blue-700">
            👩‍💼 Leadership
          </span>

          <h2 className="mt-5 text-3xl font-black text-blue-700 sm:text-4xl md:text-5xl">
            Founder & Leadership
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Radhika Foundation Nepal को सेवा यात्रालाई
            नेतृत्व तथा सहयोग प्रदान गर्ने व्यक्तित्वहरू
          </p>

        </div>


        {/* =====================================================
            MAIN LAYOUT
        ====================================================== */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(330px,0.85fr)_minmax(0,1.65fr)]">


          {/* =================================================
              FOUNDER
          ================================================== */}

          <div className="group overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-100">

            {/* IMAGE */}

            <div className="relative h-[420px] overflow-hidden sm:h-[500px]">

              <Image
                src="/images/founder.jpg"
                alt="भागवत मञ्जरी राधिका दासी"
                fill
                priority
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />


              {/* FOUNDER INFO */}

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                <div className="mb-2 inline-flex rounded-full bg-yellow-400 px-3 py-1 text-xs font-black text-gray-900">
                  FOUNDER
                </div>

                <h3 className="text-2xl font-black text-white sm:text-3xl">
                  भागवत मञ्जरी राधिका दासी
                </h3>

                <p className="mt-2 text-sm font-medium text-white/80">
                  Founder & Social Leader
                </p>

              </div>

            </div>


            {/* FOUNDER CONTENT */}

            <div className="p-6 sm:p-8">

              <div className="h-1 w-16 rounded-full bg-blue-700" />

              <p className="mt-5 text-base leading-7 text-gray-600">
                Radhika Foundation Nepal को सामाजिक सेवा तथा
                मानवीय सहयोगको यात्रामा नेतृत्वदायी भूमिका
                निर्वाह गर्दै आउनुभएको छ।
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                शिक्षा, स्वास्थ्य, सामाजिक सेवा तथा आवश्यकतामा
                रहेका व्यक्तिहरूको सहयोगका लागि Foundation मार्फत
                निरन्तर सेवा र सकारात्मक परिवर्तनको अभियान
                अघि बढाउँदै आउनुभएको छ।
              </p>


              {/* VALUES */}

              <div className="mt-6 grid grid-cols-3 gap-2">

                <div className="rounded-xl bg-blue-50 p-3 text-center">
                  <div className="text-xl">❤️</div>
                  <p className="mt-1 text-xs font-bold text-gray-700">
                    सेवा
                  </p>
                </div>

                <div className="rounded-xl bg-blue-50 p-3 text-center">
                  <div className="text-xl">🤝</div>
                  <p className="mt-1 text-xs font-bold text-gray-700">
                    सहयोग
                  </p>
                </div>

                <div className="rounded-xl bg-blue-50 p-3 text-center">
                  <div className="text-xl">🌱</div>
                  <p className="mt-1 text-xs font-bold text-gray-700">
                    परिवर्तन
                  </p>
                </div>

              </div>

              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-blue-800 hover:-translate-y-0.5"
              >
                Read More
                <span>→</span>
              </Link>

            </div>

          </div>


          {/* =================================================
              TEAM SLIDER
          ================================================== */}

          <div className="relative min-w-0">


            {/* TEAM HEADER */}

            <div className="mb-5 flex items-center justify-between">

              <div>

                <p className="text-sm font-extrabold uppercase tracking-widest text-blue-700">
                  Our Team
                </p>

                <h3 className="mt-1 text-2xl font-black text-gray-900 sm:text-3xl">
                  Foundation Members
                </h3>

              </div>


              {/* ARROWS */}

              <div className="hidden gap-2 sm:flex">

                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="Previous team member"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-xl font-bold text-gray-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next team member"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-xl font-bold text-gray-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
                >
                  →
                </button>

              </div>

            </div>


            {/* SLIDER */}

            <div
              ref={sliderRef}
              className="
                flex
                gap-5
                overflow-x-hidden
                scroll-smooth
                pb-4
              "
            >

              {teamMembers.map((member, index) => (

                <div
                  key={member.name}
                  data-team-card
                  className="
                    group
                    relative
                    min-w-[270px]
                    overflow-hidden
                    rounded-3xl
                    bg-white
                    shadow-lg
                    ring-1
                    ring-gray-100
                    transition
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                    sm:min-w-[290px]
                    lg:min-w-[300px]
                  "
                >

                  {/* IMAGE */}

                  <div className="relative h-[330px] overflow-hidden bg-blue-50">

                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 90vw, 300px"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* IMAGE GRADIENT */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />


                    {/* NUMBER */}

                    <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-sm font-black text-blue-700 shadow">
                      {String(index + 1).padStart(2, "0")}
                    </div>


                    {/* NAME ON IMAGE */}

                    <div className="absolute bottom-0 left-0 right-0 p-5">

                      <h4 className="text-xl font-black text-white">
                        {member.name}
                      </h4>

                      <p className="mt-1 text-sm font-semibold text-yellow-300">
                        {member.post}
                      </p>

                    </div>

                  </div>


                  {/* CARD FOOTER */}

                  <div className="flex items-center justify-between p-5">

                    <div>

                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Radhika Foundation
                      </p>

                      <p className="mt-1 font-bold text-gray-700">
                        {member.post}
                      </p>

                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                      →
                    </div>

                  </div>

                </div>

              ))}

            </div>


            {/* =================================================
                MOBILE ARROWS
            ================================================== */}

            <div className="mt-3 flex justify-center gap-3 sm:hidden">

              <button
                type="button"
                onClick={previousSlide}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl font-bold text-blue-700 shadow-md"
                aria-label="Previous"
              >
                ←
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-xl font-bold text-white shadow-md"
                aria-label="Next"
              >
                →
              </button>

            </div>


            {/* =================================================
                DOTS
            ================================================== */}

            <div className="mt-5 flex justify-center gap-2">

              {teamMembers.map((member, index) => (

                <button
                  key={member.name}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`View ${member.name}`}
                  className={`
                    h-2.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      currentIndex === index
                        ? "w-8 bg-blue-700"
                        : "w-2.5 bg-gray-300 hover:bg-blue-400"
                    }
                  `}
                />

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
