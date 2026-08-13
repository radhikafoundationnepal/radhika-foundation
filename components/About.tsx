"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* =====================================
              LEFT - LOGO / IMAGE AREA
          ====================================== */}
          <div className="relative">

            {/* Decorative background */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-50 rounded-3xl" />

            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-yellow-50 rounded-3xl" />

            {/* Main card */}
            <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">

              <div className="flex items-center justify-center">

                <div className="relative w-64 h-64 md:w-80 md:h-80">

                  <Image
                    src="/images/logo.png"
                    alt="Radhika Foundation Nepal Logo"
                    fill
                    priority
                    className="object-contain drop-shadow-2xl"
                  />

                </div>

              </div>

              {/* Foundation badge */}
              <div className="mt-5 text-center">

                <p className="text-blue-700 font-bold text-xl">
                  Radhika Foundation
                </p>

                <p className="text-gray-500 mt-1">
                  Nepal
                </p>

              </div>

            </div>

            {/* Floating card */}
            <div className="absolute -bottom-5 left-5 md:left-10 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gray-100">

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-full bg-red-100 flex items-center justify-center text-xl">
                  ❤️
                </div>

                <div>
                  <p className="font-extrabold text-blue-700">
                    Together
                  </p>

                  <p className="text-xs text-gray-500">
                    For a better society
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* =====================================
              RIGHT - CONTENT
          ====================================== */}
          <div>

            {/* SMALL TITLE */}
            <div className="flex items-center gap-3">

              <span className="w-10 h-1 bg-red-500 rounded-full" />

              <span className="uppercase tracking-widest text-sm font-bold text-blue-700">
                About Us
              </span>

            </div>


            {/* HEADING */}
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">

              Together We Can
              <span className="block text-blue-700 mt-2">
                Make a Difference
              </span>

            </h2>


            {/* DESCRIPTION */}
            <p className="mt-6 text-gray-600 text-lg leading-8">
              Radhika Foundation Nepal is committed to creating a
              better and more compassionate society through
              meaningful social service and community development.
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              हाम्रो संस्थाले शिक्षा, स्वास्थ्य, महिला सशक्तीकरण,
              वातावरण संरक्षण तथा सामाजिक सेवाका क्षेत्रमा
              सकारात्मक परिवर्तन ल्याउने उद्देश्यका साथ
              विभिन्न कार्यक्रमहरू सञ्चालन गर्दै आएको छ।
            </p>


            {/* HIGHLIGHTS */}
            <div className="mt-7 grid sm:grid-cols-2 gap-4">

              <div className="flex items-start gap-3">

                <div className="w-10 h-10 shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                  🎓
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">
                    Education
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    शिक्षा तथा बालबालिका सहयोग
                  </p>
                </div>

              </div>


              <div className="flex items-start gap-3">

                <div className="w-10 h-10 shrink-0 rounded-full bg-red-100 flex items-center justify-center">
                  ❤️
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">
                    Health & Care
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    स्वास्थ्य तथा मानवीय सेवा
                  </p>
                </div>

              </div>


              <div className="flex items-start gap-3">

                <div className="w-10 h-10 shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                  🌱
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">
                    Environment
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    वातावरण संरक्षण
                  </p>
                </div>

              </div>


              <div className="flex items-start gap-3">

                <div className="w-10 h-10 shrink-0 rounded-full bg-yellow-100 flex items-center justify-center">
                  🤝
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">
                    Community
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    समुदाय विकास तथा सेवा
                  </p>
                </div>

              </div>

            </div>


            {/* BUTTONS */}
            <div className="mt-9 flex flex-col sm:flex-row gap-4">

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-7 py-3.5 rounded-lg font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                Read More
                <span>→</span>
              </Link>

              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-lg font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                ❤️ Donate Now
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
