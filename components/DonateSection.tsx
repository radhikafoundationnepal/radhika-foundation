"use client";

import Link from "next/link";

export default function DonateSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">

      {/* =========================================
          BACKGROUND
      ========================================== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/donate-bg.jpg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-blue-950/80" />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-950/60" />


      {/* =========================================
          CONTENT
      ========================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* =====================================
              LEFT CONTENT
          ====================================== */}
          <div>

            {/* SMALL TITLE */}
            <div className="flex items-center gap-3">

              <span className="w-10 h-1 bg-yellow-400 rounded-full" />

              <span className="uppercase tracking-widest text-sm font-bold text-yellow-300">
                Support Our Mission
              </span>

            </div>


            {/* HEADING */}
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">

              Together, We Can
              <span className="block text-yellow-300 mt-2">
                Make a Difference
              </span>

            </h2>


            {/* DESCRIPTION */}
            <p className="mt-6 text-white/85 text-lg leading-8 max-w-xl">
              Every contribution, every volunteer and every act of
              kindness can help create meaningful change in society.
            </p>

            <p className="mt-4 text-white/70 leading-7 max-w-xl">
              तपाईंको सानो सहयोगले शिक्षा, स्वास्थ्य, सामाजिक सेवा,
              वातावरण संरक्षण तथा आवश्यकतामा रहेका मानिसहरूको
              जीवनमा सकारात्मक परिवर्तन ल्याउन सक्छ।
            </p>


            {/* BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-extrabold text-lg shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                ❤️ Donate Now
                <span>→</span>
              </Link>


              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                🤝 Become a Volunteer
              </Link>

            </div>

          </div>


          {/* =====================================
              RIGHT - SUPPORT CARD
          ====================================== */}
          <div className="lg:justify-self-end w-full max-w-md">

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

              {/* CARD HEADER */}
              <div className="bg-blue-700 px-7 py-7 text-white">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center text-3xl">
                    ❤️
                  </div>

                  <div>

                    <h3 className="text-2xl font-extrabold">
                      Your Support Matters
                    </h3>

                    <p className="text-white/75 text-sm mt-1">
                      Help us create a better future
                    </p>

                  </div>

                </div>

              </div>


              {/* CARD BODY */}
              <div className="p-7">

                <div className="space-y-5">

                  {/* EDUCATION */}
                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl shrink-0">
                      🎓
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-800">
                        Education
                      </h4>

                      <p className="text-sm text-gray-500">
                        Supporting children's education
                      </p>
                    </div>

                  </div>


                  {/* HEALTH */}
                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl shrink-0">
                      ❤️
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-800">
                        Health & Care
                      </h4>

                      <p className="text-sm text-gray-500">
                        Helping people in need
                      </p>
                    </div>

                  </div>


                  {/* COMMUNITY */}
                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl shrink-0">
                      🌱
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-800">
                        Community
                      </h4>

                      <p className="text-sm text-gray-500">
                        Building stronger communities
                      </p>
                    </div>

                  </div>

                </div>


                {/* DIVIDER */}
                <div className="my-6 border-t border-gray-100" />


                {/* CTA */}
                <Link
                  href="/donate"
                  className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-extrabold text-lg transition shadow-lg"
                >
                  ❤️ Help Us Today
                  <span>→</span>
                </Link>


                <p className="text-center text-xs text-gray-400 mt-4">
                  Every contribution makes a difference.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
