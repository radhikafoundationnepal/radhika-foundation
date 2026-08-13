"use client";

import Link from "next/link";

const services = [
  {
    icon: "📚",
    title: "Education",
    description:
      "आवश्यकता भएका बालबालिकालाई शिक्षा तथा उज्ज्वल भविष्य निर्माणमा सहयोग।",
  },
  {
    icon: "🏥",
    title: "Health",
    description:
      "स्वास्थ्य सेवा, स्वास्थ्य सचेतना तथा आवश्यक स्वास्थ्य सहयोगमा योगदान।",
  },
  {
    icon: "🏠",
    title: "Accommodation",
    description:
      "आश्रय तथा आवश्यक सहयोग चाहिने व्यक्तिहरूलाई सुरक्षित वातावरण प्रदान गर्ने प्रयास।",
  },
  {
    icon: "❤️",
    title: "Life Motivation",
    description:
      "जीवनमा सकारात्मक सोच, आत्मविश्वास र प्रेरणा विकास गर्न सहयोग।",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
            🌱 Our Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mt-5">
            Our Services
          </h2>

          <p className="text-gray-600 text-lg mt-5 leading-8">
            Radhika Foundation Nepal ले शिक्षा, स्वास्थ्य, आश्रय
            तथा सकारात्मक जीवन निर्माणका क्षेत्रमा सेवा तथा सहयोग
            प्रदान गर्दै आएको छ।
          </p>

        </div>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-7 shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              {/* ICON */}
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-4xl group-hover:bg-blue-700 transition duration-300">
                <span className="group-hover:scale-110 transition duration-300">
                  {service.icon}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-bold text-gray-800 mt-6 group-hover:text-blue-700 transition">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 mt-4 leading-7">
                {service.description}
              </p>

              {/* MORE */}
              <Link
                href="/programs"
                className="inline-block mt-6 text-blue-700 font-bold hover:underline"
              >
                Learn More →
              </Link>

            </div>
          ))}

        </div>

        {/* BOTTOM MESSAGE */}
        <div className="mt-14 bg-blue-700 rounded-3xl p-8 md:p-10 text-center shadow-xl">

          <h3 className="text-2xl md:text-3xl font-bold text-white">
            सेवा नै हाम्रो मुख्य उद्देश्य हो
          </h3>

          <p className="text-blue-100 mt-3 max-w-3xl mx-auto leading-7">
            समाजका आवश्यकतामा रहेका व्यक्तिहरूसम्म सहयोग पुर्‍याउँदै
            सकारात्मक र समावेशी समाज निर्माणमा हामी निरन्तर अघि बढिरहेका छौँ।
          </p>

          <Link
            href="/contact"
            className="inline-block mt-6 bg-white text-blue-700 hover:bg-gray-100 px-7 py-3 rounded-lg font-bold transition"
          >
            Contact Us →
          </Link>

        </div>

      </div>
    </section>
  );
}