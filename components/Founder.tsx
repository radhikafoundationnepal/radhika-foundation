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
    name: "अञ्जु आचार्य",
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
  const [paused, setPaused] = useState(false);

  /* =========================
     AUTO SLIDER
  ========================== */
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % members.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [paused]);

  const nextMember = () => {
    setCurrent((prev) => (prev + 1) % members.length);
  };

  const previousMember = () => {
    setCurrent(
      (prev) => (prev - 1 + members.length) % members.length
    );
  };

  const activeMember = members[current];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white py-20 md:py-28">

      {/* BACKGROUND DECORATION */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="text-center mb-12 md:mb-16">

          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm">
            👑 Leadership
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-blue-700 tracking-tight">
            Founder & Leadership
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-base md:text-lg leading-7 md:leading-8">
            Radhika Foundation Nepal को सेवा यात्रालाई नेतृत्व तथा
            सहयोग प्रदान गर्ने व्यक्तित्वहरू
          </p>

        </div>


        {/* =========================
            FOUNDER + MEMBERS
        ========================== */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10 items-stretch">


          {/* =================================
              FOUNDER CARD
          ================================= */}
          <div className="relative bg-white rounded-[2rem] shadow-xl border border-blue-100 overflow-hidden">

            {/* TOP IMAGE */}
            <div className="relative h-[300px] sm:h-[360px] md:h-[400px]">

              <Image
                src="/images/founder.jpg"
                alt="भागवत मञ्जरी राधिका दासी"
                fill
                priority
                className="object-cover"
              />

              {/* IMAGE GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* FOUNDER LABEL */}
              <div className="absolute top-5 left-5">
                <span className="bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg">
                  Founder
                </span>
              </div>

              {/* NAME */}
              <div className="absolute bottom-5 left-5 right-5">

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                  भागवत मञ्जरी राधिका दासी ज्यू
                </h3>

                <p className="text-blue-100 text-sm mt-1 font-medium">
                  Founder & Social Leader
                </p>

              </div>

            </div>


            {/* FOUNDER SHORT DETAIL */}
            <div className="p-5 sm:p-6 md:p-7">

              <div className="w-12 h-1 bg-blue-700 rounded-full mb-5" />

              <p className="text-gray-700 text-sm sm:text-base leading-7">
                Radhika Foundation Nepal को सामाजिक सेवा तथा मानवीय
                सहयोगको यात्रामा नेतृत्वदायी भूमिका निर्वाह गर्दै
                आउनुभएको छ।
              </p>

              <p className="text-gray-600 text-sm leading-6 mt-3">
                शिक्षा, स्वास्थ्य, सामाजिक सेवा तथा आवश्यकतामा रहेका
                व्यक्तिहरूको सहयोगका लागि Foundation मार्फत निरन्तर
                सेवा र सकारात्मक परिवर्तनको अभियान अघि बढाउँदै
                आउनुभएको छ।
              </p>

              {/* VALUES */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-6">

                <div className="bg-blue-50 rounded-xl p-3 text-center">
                  <div className="text-xl">❤️</div>
                  <p className="text-xs sm:text-sm font-bold text-gray-700 mt-1">
                    सेवा
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-3 text-center">
                  <div className="text-xl">🤝</div>
                  <p className="text-xs sm:text-sm font-bold text-gray-700 mt-1">
                    सहयोग
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-3 text-center">
                  <div className="text-xl">🌱</div>
                  <p className="text-xs sm:text-sm font-bold text-gray-700 mt-1">
                    परिवर्तन
                  </p>
                </div>

              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-6 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
              >
                Read More
                <span>→</span>
              </Link>

            </div>

          </div>


          {/* =================================
              MEMBERS SIDE
          ================================= */}
          <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] border border-blue-100 shadow-xl p-5 sm:p-7 md:p-9 flex flex-col">

            {/* MEMBERS HEADER */}
            <div className="flex items-center justify-between gap-4 mb-7">

              <div>

                <span className="text-blue-700 text-xs font-black uppercase tracking-[0.2em]">
                  Our Team
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-1">
                  Foundation Members
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  Foundation परिवारका समर्पित सदस्यहरू
                </p>

              </div>

              {/* ARROWS */}
              <div className="hidden sm:flex items-center gap-2">

                <button
                  type="button"
                  onClick={previousMember}
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-blue-700 hover:text-white text-gray-700 shadow-sm transition"
                  aria-label="Previous member"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={nextMember}
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-blue-700 hover:text-white text-gray-700 shadow-sm transition"
                  aria-label="Next member"
                >
                  →
                </button>

              </div>

            </div>


            {/* =================================
                MEMBER SLIDE
            ================================= */}
            <div
              className="relative flex-1 flex items-center justify-center py-4 sm:py-8"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >

              {/* DECORATIVE CIRCLE */}
              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-blue-50" />

              <div
                key={activeMember.name}
                className="relative z-10 text-center animate-[fadeIn_0.6s_ease-in-out]"
              >

                {/* ROUND PHOTO */}
                <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52">

                  <div className="absolute -inset-3 rounded-full border-2 border-dashed border-blue-200 animate-[spin_12s_linear_infinite]" />

                  <div className="relative w-full h-full rounded-full overflow-hidden border-[7px] border-white shadow-2xl bg-gray-100">

                    <img
                      src={activeMember.image}
                      alt={activeMember.name}
                      className="w-full h-full object-cover"
                    />

                  </div>

                  {/* NUMBER */}
                  <div className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center text-xs font-black border-4 border-white shadow-lg">
                    {String(current + 1).padStart(2, "0")}
                  </div>

                </div>


                {/* MEMBER NAME */}
                <h4 className="mt-7 text-2xl sm:text-3xl font-black text-gray-900">
                  {activeMember.name}
                </h4>

                {/* POST */}
                <div className="inline-flex items-center gap-2 mt-3 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  {activeMember.post}
                </div>

                <p className="mt-4 text-gray-500 text-sm max-w-md mx-auto leading-6">
                  Radhika Foundation Nepal को सामाजिक सेवामा
                  योगदान पुर्‍याउँदै आउनुभएको समर्पित सदस्य।
                </p>

              </div>

            </div>


            {/* =================================
                MOBILE ARROWS
            ================================= */}
            <div className="flex sm:hidden justify-center gap-3 mt-4">

              <button
                type="button"
                onClick={previousMember}
                className="w-11 h-11 rounded-full border border-gray-200 bg-white hover:bg-blue-700 hover:text-white text-gray-700 shadow-sm transition"
              >
                ←
              </button>

              <button
                type="button"
                onClick={nextMember}
                className="w-11 h-11 rounded-full border border-gray-200 bg-white hover:bg-blue-700 hover:text-white text-gray-700 shadow-sm transition"
              >
                →
              </button>

            </div>


            {/* =================================
                SLIDER DOTS
            ================================= */}
            <div className="flex justify-center items-center gap-2 mt-6">

              {members.map((member, index) => (
                <button
                  key={member.name}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Show ${member.name}`}
                  className={`rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-8 h-2.5 bg-blue-700"
                      : "w-2.5 h-2.5 bg-gray-300 hover:bg-blue-300"
                  }`}
                />
              ))}

            </div>

          </div>

        </div>


        {/* =========================
            BOTTOM MESSAGE
        ========================== */}
        <div className="mt-10 text-center">

          <p className="text-gray-500 text-sm">
            हाम्रो समर्पित नेतृत्व र सदस्यहरूको सहकार्यबाट
            सेवाको यात्रा निरन्तर अगाडि बढिरहेको छ।
          </p>

        </div>

      </div>

      {/* =========================
          CUSTOM ANIMATION
      ========================== */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

    </section>
  );
}
