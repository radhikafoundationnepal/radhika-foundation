"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Member = {
  name: string;
  post: string;
  image: string;
};

const members: Member[] = [
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
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia_tnDJRLZcAA6GIL-zZrjELbyXZB6hPzJbrgrTFu8W_gYjY6d5SoK5YIe7vY7iAdTPpUVL9xq05C0vetdwm7QmD3DKTWbKOKeWTHaiOjMQAK8tCqHMb30ZQRr2xlP7fbIaZ4ONHYupUP2PMxLupcaCo0-nQlMuPHFHBeA_t-Vdj5azvK9iwJvoF6cVZY/s403/kalpana%20bhattarai.jpg",
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
  const [current, setCurrent] = useState(0);

  /*
   * Desktop मा 3 वटा card देखाउने,
   * mobile मा 1 वटा card देखाउने।
   */
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => {
      setVisibleCount(getVisibleCount());
    };

    update();

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  /*
   * AUTO SLIDE
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const max = Math.max(0, members.length - visibleCount);

        if (prev >= max) {
          return 0;
        }

        return prev + 1;
      });
    }, 3500);

    return () => clearInterval(timer);
  }, [visibleCount]);

  const maxIndex = Math.max(0, members.length - visibleCount);

  const nextSlide = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 md:py-28">

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-red-100/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

        {/* =====================================
            SECTION HEADER
        ====================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">

          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-bold text-sm shadow-sm">
            👑 Founder & Leadership
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-blue-700">
            Founder & Leadership
          </h2>

          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="w-12 h-1 bg-red-500 rounded-full" />
            <span className="w-3 h-3 rounded-full bg-blue-700" />
            <span className="w-12 h-1 bg-red-500 rounded-full" />
          </div>

          <p className="mt-5 text-gray-600 text-base md:text-lg leading-8">
            Radhika Foundation Nepal को सेवा यात्रालाई नेतृत्व
            तथा सहयोग प्रदान गर्ने व्यक्तित्वहरू
          </p>

        </div>


        {/* =====================================
            FEATURED FOUNDER
        ====================================== */}
        <div className="relative bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* FOUNDER IMAGE */}
            <div className="lg:col-span-2 relative min-h-[420px] sm:min-h-[500px] lg:min-h-[560px]">

              <Image
                src="/images/founder.jpg"
                alt="भागवत मञ्जरी राधिका दासी"
                fill
                priority
                className="object-cover"
              />

              {/* IMAGE GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* FOUNDER BADGE */}
              <div className="absolute top-6 left-6">

                <span className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-xs sm:text-sm font-black shadow-lg">
                  ⭐ FOUNDER
                </span>

              </div>

              {/* NAME */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                <p className="text-blue-200 font-bold text-sm uppercase tracking-widest">
                  Founder & Social Leader
                </p>

                <h3 className="mt-2 text-3xl sm:text-4xl font-black text-white leading-tight">
                  भागवत मञ्जरी
                  <br className="sm:hidden" />
                  राधिका दासी
                </h3>

              </div>

            </div>


            {/* FOUNDER DETAILS */}
            <div className="lg:col-span-3 p-7 sm:p-10 lg:p-14 flex flex-col justify-center">

              <div className="flex items-center gap-3">

                <span className="w-10 h-1 bg-red-500 rounded-full" />

                <span className="text-blue-700 font-black text-sm uppercase tracking-widest">
                  Founder & Social Leader
                </span>

              </div>

              <h3 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                भागवत मञ्जरी राधिका दासी ज्यू
              </h3>

              <p className="mt-6 text-gray-600 text-base sm:text-lg leading-8">
                Radhika Foundation Nepal को सामाजिक सेवा तथा
                मानवीय सहयोगको यात्रामा नेतृत्वदायी भूमिका निर्वाह
                गर्दै आउनुभएको छ।
              </p>

              <p className="mt-4 text-gray-600 leading-7">
                शिक्षा, स्वास्थ्य, सामाजिक सेवा तथा आवश्यकतामा रहेका
                व्यक्तिहरूको सहयोगका लागि Foundation मार्फत
                निरन्तर सेवा र सकारात्मक परिवर्तनको अभियान अघि
                बढाउँदै आउनुभएको छ।
              </p>


              {/* VALUES */}
              <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-8">

                <div className="group rounded-2xl bg-blue-50 hover:bg-blue-700 p-4 sm:p-5 text-center transition duration-300">
                  <div className="text-2xl sm:text-3xl group-hover:scale-110 transition">
                    ❤️
                  </div>
                  <p className="mt-2 font-bold text-gray-700 group-hover:text-white">
                    सेवा
                  </p>
                </div>

                <div className="group rounded-2xl bg-blue-50 hover:bg-blue-700 p-4 sm:p-5 text-center transition duration-300">
                  <div className="text-2xl sm:text-3xl group-hover:scale-110 transition">
                    🤝
                  </div>
                  <p className="mt-2 font-bold text-gray-700 group-hover:text-white">
                    सहयोग
                  </p>
                </div>

                <div className="group rounded-2xl bg-blue-50 hover:bg-blue-700 p-4 sm:p-5 text-center transition duration-300">
                  <div className="text-2xl sm:text-3xl group-hover:scale-110 transition">
                    🌱
                  </div>
                  <p className="mt-2 font-bold text-gray-700 group-hover:text-white">
                    परिवर्तन
                  </p>
                </div>

              </div>


              {/* BUTTON */}
              <div className="mt-8">

                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition duration-300"
                >
                  Read More
                  <span>→</span>
                </Link>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            TEAM SECTION
        ====================================== */}
        <div className="mt-16 md:mt-20">

          {/* TEAM HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">

            <div>

              <span className="text-blue-700 text-sm font-black uppercase tracking-[0.2em]">
                Our Team
              </span>

              <h3 className="mt-2 text-3xl sm:text-4xl font-black text-gray-900">
                Foundation Members
              </h3>

              <p className="mt-2 text-gray-500">
                संस्थाको सेवा अभियानमा सहकार्य गर्ने हाम्रो टिम
              </p>

            </div>


            {/* ARROWS */}
            <div className="flex items-center gap-3">

              <button
                type="button"
                onClick={prevSlide}
                className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md hover:bg-blue-700 hover:text-white hover:border-blue-700 flex items-center justify-center text-xl font-bold transition"
                aria-label="Previous members"
              >
                ←
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="w-11 h-11 rounded-full bg-blue-700 text-white shadow-md hover:bg-blue-800 flex items-center justify-center text-xl font-bold transition"
                aria-label="Next members"
              >
                →
              </button>

            </div>

          </div>


          {/* =====================================
              SLIDER
          ====================================== */}
          <div className="overflow-hidden">

            <div
              className="flex gap-5 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${
                  current * (100 / visibleCount)
                }%)`,
              }}
            >

              {members.map((member, index) => (

                <div
                  key={member.name}
                  className="shrink-0"
                  style={{
                    width:
                      visibleCount === 1
                        ? "100%"
                        : `calc((100% - ${
                            (visibleCount - 1) * 20
                          }px) / ${visibleCount})`,
                  }}
                >

                  <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                    {/* MEMBER IMAGE */}
                    <div className="relative h-72 sm:h-80 bg-gradient-to-b from-blue-50 to-gray-100 overflow-hidden">

                      {/* 
                        External Blogger image भएकाले
                        <img> प्रयोग गरिएको छ।
                      */}
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* GRADIENT */}
                      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />

                      {/* NUMBER */}
                      <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/95 text-blue-700 flex items-center justify-center font-black text-sm shadow-md">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* NAME ON IMAGE */}
                      <div className="absolute bottom-5 left-5 right-5">

                        <h4 className="text-xl sm:text-2xl font-black text-white">
                          {member.name}
                        </h4>

                        <p className="mt-1 text-yellow-300 font-bold text-sm">
                          {member.post}
                        </p>

                      </div>

                    </div>


                    {/* MEMBER FOOTER */}
                    <div className="p-5 flex items-center justify-between">

                      <div>

                        <p className="text-[11px] text-gray-400 uppercase tracking-widest font-bold">
                          Radhika Foundation
                        </p>

                        <p className="mt-1 text-gray-700 font-bold">
                          {member.post}
                        </p>

                      </div>

                      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition">
                        →
                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* SLIDER DOTS */}
          <div className="flex justify-center items-center gap-2 mt-7">

            {Array.from({ length: maxIndex + 1 }).map((_, index) => (

              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to member slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-8 bg-blue-700"
                    : "w-2.5 bg-gray-300 hover:bg-blue-400"
                }`}
              />

            ))}

          </div>

        </div>


        {/* =====================================
            BOTTOM MESSAGE
        ====================================== */}
        <div className="mt-14 text-center">

          <p className="text-gray-500 text-sm sm:text-base">
            सेवा, सहयोग र सकारात्मक परिवर्तनका लागि
            <span className="font-bold text-blue-700">
              {" "}हामी सँगै अघि बढिरहेका छौँ।
            </span>
          </p>

        </div>

      </div>

    </section>
  );
}
