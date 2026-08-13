"use client";

import Link from "next/link";

const services = [
  {
    icon: "📚",
    title: "Education",
    nepaliTitle: "शिक्षा सेवा",
    description:
      "आवश्यकता भएका बालबालिकालाई शिक्षा तथा उज्ज्वल भविष्य निर्माणमा सहयोग।",
    number: "01",
  },
  {
    icon: "🏥",
    title: "Health",
    nepaliTitle: "स्वास्थ्य सेवा",
    description:
      "स्वास्थ्य सेवा, स्वास्थ्य सचेतना तथा आवश्यक स्वास्थ्य सहयोगमा योगदान।",
    number: "02",
  },
  {
    icon: "🏠",
    title: "Accommodation",
    nepaliTitle: "आश्रय तथा सहयोग",
    description:
      "आश्रय तथा आवश्यक सहयोग चाहिने व्यक्तिहरूलाई सुरक्षित वातावरण प्रदान गर्ने प्रयास।",
    number: "03",
  },
  {
    icon: "❤️",
    title: "Life Motivation",
    nepaliTitle: "जीवन प्रेरणा",
    description:
      "जीवनमा सकारात्मक सोच, आत्मविश्वास र प्रेरणा विकास गर्न सहयोग।",
    number: "04",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-blue-50/40 py-20 md:py-28">

      {/* BACKGROUND DECORATION */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-red-100/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-700 shadow-sm">
            <span className="text-lg">🌱</span>
            <span>Our Work</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Our{" "}
            <span className="text-blue-700">
              Services
            </span>
          </h2>

          {/* DECORATIVE LINE */}
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="h-1 w-10 rounded-full bg-red-500" />
            <span className="h-1 w-16 rounded-full bg-blue-700" />
            <span className="h-1 w-10 rounded-full bg-yellow-400" />
          </div>

          <p className="mt-5 text-base sm:text-lg text-gray-600 leading-8">
            Radhika Foundation Nepal ले शिक्षा, स्वास्थ्य, आश्रय
            तथा सकारात्मक जीवन निर्माणका क्षेत्रमा सेवा तथा सहयोग
            प्रदान गर्दै आएको छ।
          </p>

        </div>


        {/* ================= SERVICE CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-7">

          {services.map((service) => (

            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 sm:p-7 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* TOP NUMBER */}
              <div className="absolute right-5 top-5 text-5xl font-black text-gray-100 transition-colors duration-500 group-hover:text-blue-50">
                {service.number}
              </div>


              {/* ICON */}
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-4xl shadow-sm transition-all duration-500 group-hover:bg-blue-700 group-hover:shadow-lg">

                <span className="transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </span>

              </div>


              {/* TITLE */}
              <h3 className="relative mt-6 text-2xl font-extrabold text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                {service.title}
              </h3>

              <p className="mt-1 text-sm font-semibold text-blue-600">
                {service.nepaliTitle}
              </p>


              {/* LINE */}
              <div className="mt-4 h-1 w-10 rounded-full bg-blue-700 transition-all duration-500 group-hover:w-16" />


              {/* DESCRIPTION */}
              <p className="mt-5 text-sm sm:text-base leading-7 text-gray-600">
                {service.description}
              </p>


              {/* LINK */}
              <Link
                href="/programs"
                className="mt-6 inline-flex items-center gap-2 font-bold text-blue-700 transition-all duration-300 hover:text-blue-900"
              >
                Learn More
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>


              {/* BOTTOM HOVER LINE */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-700 transition-all duration-500 group-hover:w-full" />

            </div>

          ))}

        </div>


        {/* ================= BOTTOM CTA ================= */}
        <div className="relative mt-12 md:mt-16 overflow-hidden rounded-[2rem] bg-blue-700 px-6 py-10 sm:px-10 md:px-14 md:py-12 shadow-2xl">

          {/* DECORATIVE CIRCLE */}
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-10 h-48 w-48 rounded-full bg-white/10" />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div className="max-w-3xl">

              <div className="flex items-center gap-3">
                <span className="text-3xl">
                  ❤️
                </span>

                <span className="text-sm font-bold uppercase tracking-widest text-blue-100">
                  Serve Humanity
                </span>
              </div>

              <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                सेवा नै हाम्रो मुख्य उद्देश्य हो
              </h3>

              <p className="mt-4 text-sm sm:text-base md:text-lg leading-7 text-blue-100">
                समाजका आवश्यकतामा रहेका व्यक्तिहरूसम्म सहयोग पुर्‍याउँदै
                सकारात्मक र समावेशी समाज निर्माणमा हामी निरन्तर अघि
                बढिरहेका छौँ।
              </p>

            </div>


            {/* CTA BUTTON */}
            <div className="shrink-0">

              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-extrabold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
              >
                Contact Us
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>


        {/* BOTTOM MESSAGE */}
        <div className="mt-8 text-center">

          <p className="text-sm sm:text-base font-medium text-gray-500">
            शिक्षा • स्वास्थ्य • आश्रय • प्रेरणा • मानव सेवा
          </p>

        </div>

      </div>
    </section>
  );
}
