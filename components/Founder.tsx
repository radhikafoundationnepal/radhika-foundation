"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type TeamMember = {
  name: string;
  post: string;
  image: string;
};

const teamMembers: TeamMember[] = [
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
  const [active, setActive] = useState(0);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const amount = direction === "right" ? 340 : -340;

    sliderRef.current.scrollBy({
      left: amount,
      behavior: "smooth",
    });

    setActive((prev) => {
      if (direction === "right") {
        return Math.min(prev + 1, teamMembers.length - 1);
      }

      return Math.max(prev - 1, 0);
    });
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/40 to-white overflow-hidden">

      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-100/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

        {/* ================================
            SECTION HEADER
        ================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">

          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-bold text-sm shadow-sm">
            👩‍💼 Our Leadership
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black text-blue-700 tracking-tight">
            Founder & Leadership
          </h2>

          <div className="flex justify-center items-center gap-3 mt-5">
            <span className="w-12 h-1 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-blue-700 rounded-full" />
            <span className="w-12 h-1 bg-red-500 rounded-full" />
          </div>

          <p className="text-gray-600 mt-5 text-base md:text-lg leading-8">
            Radhika Foundation Nepal को सेवा यात्रालाई नेतृत्व तथा
            सहयोग प्रदान गर्ने व्यक्तित्वहरू
          </p>

        </div>


        {/* ================================
            FOUNDER FEATURE
        ================================= */}
        <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* FOUNDER IMAGE */}
            <div className="relative min-h-[430px] sm:min-h-[500px] lg:min-h-[570px]">

              <Image
                src="/images/founder.jpg"
                alt="भागवत मञ्जरी राधिका दासी"
                fill
                priority
                className="object-cover"
              />

              {/* IMAGE GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* FOUNDER NAME */}
              <div className="absolute left-6 right-6 bottom-6 md:left-10 md:right-10 md:bottom-10">

                <span className="inline-block bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                  Founder
                </span>

                <h3 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  भागवत मञ्जरी
                  <br />
                  राधिका दासी
                </h3>

                <p className="mt-3 text-white/90 font-semibold">
                  Founder & Social Leader
                </p>

              </div>

            </div>


            {/* FOUNDER DETAILS */}
            <div className="p-7 sm:p-9 md:p-12 lg:p-14 flex flex-col justify-center">

              <span className="text-blue-700 font-black text-sm uppercase tracking-[0.2em]">
                Founder & Social Leader
              </span>

              <h3 className="mt-4 text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
                सेवाबाट सकारात्मक परिवर्तनतर्फ
              </h3>

              <div className="mt-5 w-20 h-1.5 bg-blue-700 rounded-full" />

              <p className="mt-7 text-gray-600 text-base md:text-lg leading-8">
                Radhika Foundation Nepal को सामाजिक सेवा तथा
                मानवीय सहयोगको यात्रामा नेतृत्वदायी भूमिका निर्वाह
                गर्दै आउनुभएको छ।
              </p>

              <p className="mt-4 text-gray-600 leading-7">
                शिक्षा, स्वास्थ्य, सामाजिक सेवा तथा आवश्यकतामा रहेका
                व्यक्तिहरूको सहयोगका लागि Foundation मार्फत निरन्तर
                सेवा र सकारात्मक परिवर्तनको अभियान अघि बढाउँदै
                आउनुभएको छ।
              </p>


              {/* VALUES */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8">

                <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100 hover:shadow-md transition">
                  <div className="text-2xl sm:text-3xl">❤️</div>
                  <p className="font-bold text-gray-700 mt-2">
                    सेवा
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100 hover:shadow-md transition">
                  <div className="text-2xl sm:text-3xl">🤝</div>
                  <p className="font-bold text-gray-700 mt-2">
                    सहयोग
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100 hover:shadow-md transition">
                  <div className="text-2xl sm:text-3xl">🌱</div>
                  <p className="font-bold text-gray-700 mt-2">
                    परिवर्तन
                  </p>
                </div>

              </div>


              {/* BUTTON */}
              <div className="mt-8">

                <a
                  href="/about"
                  className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  Read More
                  <span>→</span>
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* ================================
            OUR TEAM
        ================================= */}
        <div className="mt-16 md:mt-20">

          {/* TEAM HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-7">

            <div>

              <span className="text-blue-700 text-sm font-black uppercase tracking-[0.2em]">
                Our Team
              </span>

              <h3 className="mt-2 text-3xl sm:text-4xl font-black text-gray-900">
                Foundation Members
              </h3>

              <p className="mt-2 text-gray-500">
                Foundation लाई अघि बढाउने हाम्रो समर्पित टोली
              </p>

            </div>


            {/* ARROWS */}
            <div className="flex gap-3">

              <button
                type="button"
                onClick={() => scrollSlider("left")}
                className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md hover:bg-blue-700 hover:text-white hover:border-blue-700 transition font-bold text-xl"
                aria-label="Previous team members"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => scrollSlider("right")}
                className="w-12 h-12 rounded-full bg-blue-700 text-white shadow-md hover:bg-blue-800 transition font-bold text-xl"
                aria-label="Next team members"
              >
                →
              </button>

            </div>

          </div>


          {/* TEAM SLIDER */}
          <div
            ref={sliderRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-5"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >

            {teamMembers.map((member, index) => (

              <div
                key={member.name}
                className="group flex-none w-[280px] sm:w-[310px] md:w-[330px] snap-start"
              >

                <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

                  {/* PHOTO */}
                  <div className="relative h-[300px] sm:h-[320px] bg-blue-50 overflow-hidden">

                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* GRADIENT */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    {/* NUMBER */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/95 text-blue-700 flex items-center justify-center font-black shadow-md">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* NAME ON PHOTO */}
                    <div className="absolute bottom-5 left-5 right-5">

                      <h4 className="text-2xl font-black text-white">
                        {member.name}
                      </h4>

                      <p className="text-yellow-300 font-bold mt-1">
                        {member.post}
                      </p>

                    </div>

                  </div>


                  {/* CARD FOOTER */}
                  <div className="p-5 flex items-center justify-between">

                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                        Radhika Foundation
                      </p>

                      <p className="text-gray-700 font-bold mt-1">
                        {member.post}
                      </p>
                    </div>

                    <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-bold group-hover:bg-blue-700 group-hover:text-white transition">
                      →
                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* SLIDER DOTS */}
          <div className="flex justify-center gap-2 mt-4">

            {teamMembers.map((_, index) => (

              <button
                key={index}
                type="button"
                onClick={() => {
                  if (!sliderRef.current) return;

                  const cardWidth =
                    sliderRef.current.firstElementChild?.clientWidth || 300;

                  sliderRef.current.scrollTo({
                    left: index * (cardWidth + 20),
                    behavior: "smooth",
                  });

                  setActive(index);
                }}
                className={`h-2.5 rounded-full transition-all ${
                  active === index
                    ? "w-8 bg-blue-700"
                    : "w-2.5 bg-gray-300"
                }`}
                aria-label={`Go to team member ${index + 1}`}
              />

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
