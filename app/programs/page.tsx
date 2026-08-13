import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Education & Child Support",
    nepaliTitle: "शिक्षा तथा बाल सहयोग",
    description:
      "आवश्यकतामा रहेका तथा असहाय बालबालिकालाई शिक्षा, आवास, आवश्यक सामग्री तथा उज्ज्वल भविष्य निर्माणका लागि सहयोग गर्ने।",
    icon: "📚",
    image: "/images/program-education.jpg",
  },
  {
    title: "Health & Social Service",
    nepaliTitle: "स्वास्थ्य तथा सामाजिक सेवा",
    description:
      "स्वास्थ्यसम्बन्धी कार्यक्रम, सहयोग तथा विभिन्न सामाजिक सेवामार्फत आवश्यकतामा रहेका समुदाय र व्यक्तिहरूलाई सहयोग गर्ने।",
    icon: "❤️",
    image: "/images/program-health.jpg",
  },
  {
    title: "Women Empowerment",
    nepaliTitle: "महिला सशक्तीकरण",
    description:
      "महिलाको क्षमता विकास, आत्मनिर्भरता तथा सामाजिक सहभागिता बढाउन विभिन्न कार्यक्रम सञ्चालन गर्ने।",
    icon: "👩",
    image: "/images/program-women.jpg",
  },
  {
    title: "Environment Protection",
    nepaliTitle: "वातावरण संरक्षण",
    description:
      "वातावरण संरक्षण, वृक्षारोपण तथा हरित समाज निर्माणका लागि समुदायसँग सहकार्य गर्दै अभियान सञ्चालन गर्ने।",
    icon: "🌱",
    image: "/images/program-environment.jpg",
  },
  {
    title: "Community Development",
    nepaliTitle: "समुदाय विकास",
    description:
      "स्थानीय समुदायको आवश्यकता पहिचान गरी सामाजिक, शैक्षिक तथा विकासमूलक कार्यक्रममार्फत सकारात्मक परिवर्तन ल्याउने।",
    icon: "🤝",
    image: "/images/program-community.jpg",
  },
  {
    title: "Rescue & Rehabilitation",
    nepaliTitle: "उद्धार तथा पुनर्स्थापना",
    description:
      "आवश्यकतामा रहेका तथा सडकमा रहेका असहाय व्यक्तिहरूको उद्धार, सहयोग तथा पुनर्स्थापनाका लागि कार्य गर्ने।",
    icon: "🏠",
    image: "/images/program-rescue.jpg",
  },
];

export default function ProgramsPage() {
  return (
    <main className="bg-white">

      {/* =========================
          HERO
      ========================== */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold text-sm">
            🌿 Our Programs
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mt-5">
            Our Programs
          </h1>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg mt-5 leading-8">
            Radhika Foundation Nepal ले शिक्षा, स्वास्थ्य, सामाजिक सेवा,
            महिला सशक्तीकरण, वातावरण संरक्षण तथा समुदाय विकासका क्षेत्रमा
            विभिन्न कार्यक्रमहरू सञ्चालन गर्दै आएको छ।
          </p>

        </div>
      </section>


      {/* =========================
          PROGRAMS
      ========================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What We Do
            </h2>

            <p className="text-gray-600 mt-4">
              हाम्रो प्रमुख सेवा तथा कार्यक्रमहरू
            </p>

            <div className="w-16 h-1 bg-blue-700 rounded-full mx-auto mt-5" />

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {programs.map((program) => (
              <article
                key={program.title}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                {/* IMAGE */}
                <div className="relative h-56 bg-blue-100 overflow-hidden">

                  <Image
                    src={program.image}
                    alt={program.nepaliTitle}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Icon */}
                  <div className="absolute left-5 bottom-5 w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-3xl">
                    {program.icon}
                  </div>

                </div>


                {/* CONTENT */}
                <div className="p-7">

                  <p className="text-blue-700 text-sm font-bold uppercase tracking-wide">
                    {program.title}
                  </p>

                  <h3 className="text-2xl font-bold text-gray-800 mt-2">
                    {program.nepaliTitle}
                  </h3>

                  <div className="w-12 h-1 bg-blue-700 rounded-full mt-4" />

                  <p className="text-gray-600 leading-7 mt-5">
                    {program.description}
                  </p>

                  <Link
                    href="/contact"
                    className="inline-block mt-6 text-blue-700 font-bold hover:text-blue-900 hover:underline"
                  >
                    Get Involved →
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =========================
          CALL TO ACTION
      ========================== */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl">

            <div className="text-5xl mb-5">
              🤝
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              तपाईं पनि हाम्रो अभियानमा जोडिनुहोस्
            </h2>

            <p className="text-gray-600 text-lg mt-5 max-w-2xl mx-auto leading-8">
              तपाईंको समय, सहयोग, सीप वा सानो योगदानले पनि कसैको
              जीवनमा ठूलो परिवर्तन ल्याउन सक्छ।
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

              <Link
                href="/volunteer"
                className="bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 rounded-lg font-bold transition shadow-lg"
              >
                Become a Volunteer
              </Link>

              <Link
                href="/donate"
                className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-bold transition shadow-lg"
              >
                ❤️ Donate Now
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}