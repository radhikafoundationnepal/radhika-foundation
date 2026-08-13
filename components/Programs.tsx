"use client";

import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Education & Child Support",
    nepaliTitle: "शिक्षा तथा बालबालिका सहयोग",
    description:
      "असहाय तथा आवश्यकतामा रहेका बालबालिकाको शिक्षा, संरक्षण र उज्ज्वल भविष्यका लागि सहयोग।",
    image: "/images/program-education.jpg",
    icon: "🎓",
    color: "blue",
  },
  {
    title: "Health & Social Care",
    nepaliTitle: "स्वास्थ्य तथा सामाजिक सेवा",
    description:
      "स्वास्थ्य, मानवीय सहायता तथा आवश्यकतामा रहेका समुदायका लागि विभिन्न सामाजिक सेवाहरू।",
    image: "/images/program-health.jpg",
    icon: "❤️",
    color: "red",
  },
  {
    title: "Women Empowerment",
    nepaliTitle: "महिला सशक्तीकरण",
    description:
      "महिलाको क्षमता विकास, आत्मनिर्भरता र सामाजिक सहभागिता बढाउन सहयोग गर्ने कार्यक्रमहरू।",
    image: "/images/program-women.jpg",
    icon: "👩",
    color: "purple",
  },
  {
    title: "Environment & Community",
    nepaliTitle: "वातावरण तथा समुदाय विकास",
    description:
      "वातावरण संरक्षण, सामाजिक एकता र दिगो समुदाय विकासका लागि विभिन्न अभियानहरू।",
    image: "/images/program-environment.jpg",
    icon: "🌱",
    color: "green",
  },
];

export default function Programs() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* =====================================
            SECTION HEADER
        ====================================== */}
        <div className="text-center max-w-3xl mx-auto">

          <div className="flex items-center justify-center gap-3">

            <span className="w-10 h-1 bg-red-500 rounded-full" />

            <span className="uppercase tracking-widest text-sm font-bold text-blue-700">
              What We Do
            </span>

            <span className="w-10 h-1 bg-red-500 rounded-full" />

          </div>

          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Our Programs
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-8">
            समाजमा सकारात्मक परिवर्तन ल्याउने उद्देश्यले Radhika
            Foundation Nepal ले विभिन्न क्षेत्रमा सेवा तथा विकासका
            कार्यक्रमहरू सञ्चालन गर्दै आएको छ।
          </p>

        </div>


        {/* =====================================
            PROGRAM CARDS
        ====================================== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          {programs.map((program) => (

            <div
              key={program.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2"
            >

              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden bg-blue-100">

                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* ICON */}
                <div className="absolute left-5 bottom-5">

                  <div className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-2xl">
                    {program.icon}
                  </div>

                </div>

              </div>


              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-xl font-extrabold text-gray-900 leading-tight">
                  {program.title}
                </h3>

                <p className="text-blue-700 font-semibold text-sm mt-2">
                  {program.nepaliTitle}
                </p>

                <p className="text-gray-500 text-sm leading-6 mt-4">
                  {program.description}
                </p>


                {/* LEARN MORE */}
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 mt-5 text-blue-700 font-bold hover:text-blue-900 transition"
                >
                  Learn More
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>

              </div>

            </div>

          ))}

        </div>


        {/* =====================================
            BOTTOM CTA
        ====================================== */}
        <div className="mt-14 bg-blue-700 rounded-3xl overflow-hidden shadow-2xl">

          <div className="relative px-7 py-10 md:px-12 md:py-12">

            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-white/10" />

            <div className="absolute -bottom-24 left-1/3 w-64 h-64 rounded-full bg-white/5" />


            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-7">

              <div className="max-w-2xl">

                <p className="text-yellow-300 font-bold uppercase tracking-wider text-sm">
                  Together We Can
                </p>

                <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-2">
                  तपाईं पनि हाम्रो अभियानमा जोडिनुहोस्।
                </h3>

                <p className="text-white/80 mt-3 leading-7">
                  तपाईंको सानो सहयोग, समय र सीपले कसैको जीवनमा
                  ठूलो परिवर्तन ल्याउन सक्छ।
                </p>

              </div>


              <div className="flex flex-col sm:flex-row gap-3 shrink-0">

                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-lg font-bold shadow-lg transition"
                >
                  ❤️ Donate Now
                </Link>

                <Link
                  href="/volunteer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-700 px-7 py-3.5 rounded-lg font-bold shadow-lg transition"
                >
                  🤝 Join Us
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
