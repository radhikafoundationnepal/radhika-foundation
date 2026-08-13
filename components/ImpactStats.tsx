"use client";

const stats = [
  {
    number: "6235",
    title: "सेवा प्राप्त संख्या",
    icon: "🤝",
  },
  {
    number: "700",
    title: "पुनर्मिलन संख्या",
    icon: "❤️",
  },
  {
    number: "1130",
    title: "पदक तथा सम्मान संख्या",
    icon: "🏆",
  },
  {
    number: "5000",
    title: "भेटघाट कार्यक्रम संख्या",
    icon: "👥",
  },
];

export default function ImpactStats() {
  return (
    <section className="py-20 bg-blue-700">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="inline-block bg-white/10 text-white border border-white/20 px-4 py-2 rounded-full font-semibold text-sm">
            🌟 Our Impact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-5">
            हाम्रो प्रभाव
          </h2>

          <p className="text-blue-100 mt-4 text-lg">
            Radhika Foundation Nepal का सेवा तथा सामाजिक गतिविधिका केही महत्वपूर्ण तथ्यहरू
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white rounded-2xl p-8 text-center shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              {/* ICON */}
              <div className="text-4xl mb-4">
                {stat.icon}
              </div>

              {/* NUMBER */}
              <div className="text-4xl md:text-5xl font-extrabold text-blue-700">
                {stat.number}
                <span className="text-2xl">+</span>
              </div>

              {/* TITLE */}
              <h3 className="text-gray-700 font-bold text-lg mt-4">
                {stat.title}
              </h3>
            </div>
          ))}

        </div>

        {/* BOTTOM */}
        <div className="text-center mt-12">
          <p className="text-white text-lg font-medium">
            तपाईंको साथ र सहयोगले अझ धेरै जीवनमा सकारात्मक परिवर्तन ल्याउन सकिन्छ। ❤️
          </p>
        </div>

      </div>
    </section>
  );
}