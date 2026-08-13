"use client";

import Image from "next/image";
import Link from "next/link";

export default function Founder() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
            👩‍💼 Leadership
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mt-5">
            Founder & Leadership
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            सेवाको यात्रालाई नेतृत्व प्रदान गर्ने व्यक्तित्व
          </p>

        </div>

        {/* FOUNDER CARD */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* IMAGE */}
            <div className="relative min-h-[420px] md:min-h-[520px] bg-blue-100">

              <Image
                src="/images/founder.jpg"
                alt="भागवत मञ्जरी राधिका दासी"
                fill
                className="object-cover"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* NAME ON IMAGE */}
              <div className="absolute bottom-0 left-0 right-0 p-8">

                <p className="text-white text-sm font-semibold mb-2">
                  Founder
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  भागवत मञ्जरी राधिका दासी
                </h3>

              </div>

            </div>

            {/* CONTENT */}
            <div className="p-8 md:p-12 flex flex-col justify-center">

              <span className="text-blue-700 font-bold text-sm uppercase tracking-wider">
                Founder & Social Leader
              </span>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
                भागवत मञ्जरी राधिका दासी ज्यू
              </h3>

              <div className="w-16 h-1 bg-blue-700 rounded-full mt-5" />

              <p className="text-gray-600 text-lg leading-8 mt-7">
                Radhika Foundation Nepal को सामाजिक सेवा तथा
                मानवीय सहयोगको यात्रामा नेतृत्वदायी भूमिका निर्वाह
                गर्दै आउनुभएको छ।
              </p>

              <p className="text-gray-600 leading-7 mt-4">
                शिक्षा, स्वास्थ्य, सामाजिक सेवा तथा आवश्यकतामा रहेका
                व्यक्तिहरूको सहयोगका लागि Foundation मार्फत
                निरन्तर सेवा र सकारात्मक परिवर्तनको अभियान अघि
                बढाउँदै आउनुभएको छ।
              </p>

              {/* VALUES */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">

                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <div className="text-2xl">❤️</div>
                  <p className="font-semibold text-gray-700 mt-2">
                    सेवा
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <div className="text-2xl">🤝</div>
                  <p className="font-semibold text-gray-700 mt-2">
                    सहयोग
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <div className="text-2xl">🌱</div>
                  <p className="font-semibold text-gray-700 mt-2">
                    परिवर्तन
                  </p>
                </div>

              </div>

              {/* BUTTON */}
              <div className="mt-9">

                <Link
                  href="/about"
                  className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 rounded-lg font-bold transition shadow-lg"
                >
                  Read More →
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}