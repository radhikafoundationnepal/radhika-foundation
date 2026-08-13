"use client";

import Link from "next/link";

const experiences = [
  {
    number: "01",
    title: "२० कोठे सेवा भवन",
    description:
      "आवश्यकता भएका व्यक्तिहरूलाई सुरक्षित तथा व्यवस्थित सेवा प्रदान गर्ने उद्देश्यले सेवा भवन निर्माण तथा सञ्चालनतर्फ महत्वपूर्ण पहल।",
    icon: "🏠",
  },
  {
    number: "02",
    title: "निःशुल्क शिक्षा कार्यक्रम",
    description:
      "अनाथ तथा असहाय बालबालिकालाई शिक्षाको अवसर प्रदान गर्दै उनीहरूको उज्ज्वल भविष्य निर्माणमा निरन्तर सहयोग।",
    icon: "📚",
  },
  {
    number: "03",
    title: "सामाजिक सेवा तथा सहयोग",
    description:
      "समाजमा आवश्यकतामा रहेका व्यक्तिहरूको पहिचान गरी विभिन्न क्षेत्रमा सहयोग तथा सेवा पुर्‍याउने निरन्तर प्रयास।",
    icon: "🤝",
  },
];

export default function Experiences() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
            🌟 Our Experiences
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mt-5">
            हाम्रा अनुभवहरू
          </h2>

          <p className="text-gray-600 text-lg mt-5 leading-8">
            Radhika Foundation Nepal ले समाज सेवा तथा मानवीय
            सहयोगका क्षेत्रमा गर्दै आएका केही महत्वपूर्ण कार्यहरू।
          </p>

        </div>

        {/* EXPERIENCE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {experiences.map((item) => (
            <div
              key={item.number}
              className="group relative bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden"
            >

              {/* NUMBER */}
              <div className="absolute top-5 right-6 text-6xl font-black text-blue-100 group-hover:text-blue-200 transition">
                {item.number}
              </div>

              {/* ICON */}
              <div className="relative w-16 h-16 rounded-2xl bg-blue-700 text-white flex items-center justify-center text-3xl shadow-lg">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="relative text-2xl font-bold text-gray-800 mt-7 group-hover:text-blue-700 transition">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="relative text-gray-600 mt-4 leading-7">
                {item.description}
              </p>

              {/* LINE */}
              <div className="mt-7 w-12 h-1 bg-blue-700 rounded-full group-hover:w-20 transition-all duration-300" />

            </div>
          ))}

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-14 bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-8 md:p-10 text-center shadow-xl">

          <h3 className="text-2xl md:text-3xl font-bold text-white">
            समाज सेवाको यात्रामा निरन्तर अगाडि
          </h3>

          <p className="text-blue-100 mt-4 max-w-3xl mx-auto leading-7">
            सेवा, सहयोग र मानवीय भावनालाई केन्द्रमा राखेर
            सकारात्मक समाज निर्माण गर्ने हाम्रो प्रयास निरन्तर जारी छ।
          </p>

          <Link
            href="/about"
            className="inline-block mt-7 bg-white text-blue-700 hover:bg-gray-100 px-7 py-3 rounded-lg font-bold transition"
          >
            About Foundation →
          </Link>

        </div>

      </div>
    </section>
  );
}