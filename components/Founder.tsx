"use client";

import Image from "next/image";
import Link from "next/link";

export default function Founder() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-blue-50/40 py-20 md:py-28">

      {/* DECORATIVE BACKGROUND */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-yellow-100/50 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-700 shadow-sm">
            <span className="text-lg">👩‍💼</span>
            <span>Leadership</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Founder &{" "}
            <span className="text-blue-700">
              Leadership
            </span>
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-1 w-12 rounded-full bg-red-500" />
            <span className="h-1 w-20 rounded-full bg-blue-700" />
            <span className="h-1 w-12 rounded-full bg-yellow-400" />
          </div>

          <p className="mt-5 text-base sm:text-lg text-gray-600 leading-8">
            सेवाको यात्रालाई नेतृत्व प्रदान गर्ने व्यक्तित्व
          </p>

        </div>


        {/* ================= MAIN CARD ================= */}
        <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-gray-100">

          <div className="grid grid-cols-1 lg:grid-cols-12">


            {/* ================= IMAGE ================= */}
            <div className="relative lg:col-span-5 min-h-[480px] sm:min-h-[560px] lg:min-h-[650px] overflow-hidden bg-blue-100">

              <Image
                src="/images/founder.jpg"
                alt="भागवत मञ्जरी राधिका दासी"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* TOP BADGE */}
              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">

                <div className="rounded-full border border-white/30 bg-black/30 px-5 py-2 backdrop-blur-md">
                  <span className="text-sm font-bold tracking-wide text-white">
                    ✨ Founder
                  </span>
                </div>

              </div>


              {/* NAME */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">

                <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-yellow-300">
                  Founder & Social Leader
                </p>

                <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-white">
                  भागवत मञ्जरी
                  <br className="sm:hidden" /> राधिका दासी
                </h3>

                <div className="mt-4 h-1 w-16 rounded-full bg-yellow-400" />

              </div>

            </div>


            {/* ================= CONTENT ================= */}
            <div className="flex flex-col justify-center lg:col-span-7 p-7 sm:p-9 md:p-12 lg:p-14 xl:p-16">

              {/* SMALL TITLE */}
              <div className="flex items-center gap-3">

                <span className="h-1 w-10 rounded-full bg-red-500" />

                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-blue-700">
                  Founder & Social Leader
                </span>

              </div>


              {/* TITLE */}
              <h3 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
                भागवत मञ्जरी
                <span className="text-blue-700">
                  {" "}राधिका दासी ज्यू
                </span>
              </h3>


              {/* DESCRIPTION */}
              <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
                Radhika Foundation Nepal को सामाजिक सेवा तथा
                मानवीय सहयोगको यात्रामा नेतृत्वदायी भूमिका निर्वाह
                गर्दै आउनुभएको छ।
              </p>

              <p className="mt-4 text-sm sm:text-base md:text-lg leading-7 text-gray-600">
                शिक्षा, स्वास्थ्य, सामाजिक सेवा तथा आवश्यकतामा रहेका
                व्यक्तिहरूको सहयोगका लागि Foundation मार्फत
                निरन्तर सेवा र सकारात्मक परिवर्तनको अभियान अघि
                बढाउँदै आउनुभएको छ।
              </p>


              {/* ================= VALUES ================= */}
              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">

                {/* SERVICE */}
                <div className="group rounded-2xl border border-blue-100 bg-blue-50/70 p-4 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-blue-100 hover:shadow-lg">

                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                    ❤️
                  </div>

                  <p className="mt-3 text-sm sm:text-base font-extrabold text-gray-800">
                    सेवा
                  </p>

                  <p className="mt-1 hidden sm:block text-xs text-gray-500">
                    समाज सेवा
                  </p>

                </div>


                {/* SUPPORT */}
                <div className="group rounded-2xl border border-blue-100 bg-blue-50/70 p-4 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-blue-100 hover:shadow-lg">

                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                    🤝
                  </div>

                  <p className="mt-3 text-sm sm:text-base font-extrabold text-gray-800">
                    सहयोग
                  </p>

                  <p className="mt-1 hidden sm:block text-xs text-gray-500">
                    मानव सहयोग
                  </p>

                </div>


                {/* CHANGE */}
                <div className="group rounded-2xl border border-blue-100 bg-blue-50/70 p-4 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-blue-100 hover:shadow-lg">

                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                    🌱
                  </div>

                  <p className="mt-3 text-sm sm:text-base font-extrabold text-gray-800">
                    परिवर्तन
                  </p>

                  <p className="mt-1 hidden sm:block text-xs text-gray-500">
                    सकारात्मक परिवर्तन
                  </p>

                </div>

              </div>


              {/* ================= QUOTE ================= */}
              <div className="mt-8 rounded-2xl border-l-4 border-blue-700 bg-blue-50 px-5 py-4 sm:px-6">

                <p className="text-sm sm:text-base italic leading-7 text-gray-700">
                  “सेवा नै मानवताको सबैभन्दा सुन्दर रूप हो।”
                </p>

              </div>


              {/* ================= BUTTON ================= */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-7 py-3.5 text-center font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl"
                >
                  Read More About Founder
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-blue-700 px-7 py-3.5 font-bold text-blue-700 transition-all duration-300 hover:bg-blue-700 hover:text-white"
                >
                  Contact Foundation
                </Link>

              </div>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM MESSAGE ================= */}
        <div className="mt-8 text-center">

          <p className="text-sm sm:text-base text-gray-500">
            शिक्षा • स्वास्थ्य • सेवा • मानवता • सकारात्मक परिवर्तन
          </p>

        </div>

      </div>

    </section>
  );
}
