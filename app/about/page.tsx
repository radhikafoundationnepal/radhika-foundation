import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* =========================
          ABOUT HERO
      ========================== */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold text-sm">
              🌿 About Us
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mt-5">
              Radhika Foundation Nepal
            </h1>

            <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
              सेवा, शिक्षा र सकारात्मक सामाजिक परिवर्तनका लागि समर्पित
              Radhika Foundation Nepal को बारेमा।
            </p>

          </div>

        </div>
      </section>


      {/* =========================
          LOGO + INTRODUCTION
      ========================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LARGE LOGO */}
            <div className="flex justify-center">

              <div className="relative w-full max-w-xl min-h-[500px] bg-blue-50 rounded-3xl flex items-center justify-center overflow-hidden shadow-xl border border-blue-100">

                {/* Decorative circles */}
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-100 rounded-full" />

                <div className="absolute -bottom-28 -left-24 w-80 h-80 bg-blue-100 rounded-full" />

                {/* WHITE LOGO BOX */}
                <div className="relative z-10 bg-white rounded-full p-10 md:p-14 shadow-2xl">

                  <Image
                    src="/images/logo.png"
                    alt="Radhika Foundation Nepal Logo"
                    width={380}
                    height={380}
                    className="w-64 h-64 md:w-80 md:h-80 object-contain"
                    priority
                  />

                </div>

              </div>

            </div>


            {/* ABOUT CONTENT */}
            <div>

              <span className="text-blue-700 font-bold uppercase tracking-wider text-sm">
                Who We Are
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
                Together We Build Better Communities
              </h2>

              <div className="w-16 h-1 bg-blue-700 rounded-full mt-5" />

              <p className="text-gray-600 text-lg leading-8 mt-7">
                Radhika Foundation Nepal शिक्षा, स्वास्थ्य, महिला
                सशक्तीकरण, वातावरण संरक्षण तथा सामाजिक सेवाका क्षेत्रमा
                सकारात्मक परिवर्तन ल्याउने उद्देश्यले निरन्तर कार्य गर्दै
                आएको सामाजिक संस्था हो।
              </p>

              <p className="text-gray-600 leading-8 mt-5">
                आवश्यकता भएका बालबालिका तथा व्यक्तिहरूलाई सहयोग,
                शिक्षा तथा विभिन्न सामाजिक सेवामार्फत सक्षम र सम्मानजनक
                जीवनतर्फ अघि बढाउन Foundation ले आफ्नो सेवा यात्रा
                निरन्तर अगाडि बढाइरहेको छ।
              </p>

              <p className="text-gray-600 leading-8 mt-5">
                हाम्रो विश्वास सेवा, सहकार्य र मानवीय भावनाबाट नै
                सकारात्मक समाज निर्माण गर्न सकिन्छ भन्ने हो।
              </p>

              {/* BUTTON */}
              <Link
                href="/contact"
                className="inline-block mt-8 bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 rounded-lg font-bold transition shadow-lg"
              >
                Contact Us →
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          OUR MISSION
      ========================== */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
              हाम्रो उद्देश्य
            </h2>

            <p className="text-gray-600 mt-4">
              समाजमा सकारात्मक परिवर्तन ल्याउने हाम्रो प्रतिबद्धता
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

            <div className="bg-white rounded-2xl p-8 shadow-md text-center">
              <div className="text-5xl">📚</div>

              <h3 className="text-xl font-bold text-gray-800 mt-5">
                शिक्षा
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                आवश्यकतामा रहेका बालबालिकालाई शिक्षाको अवसर प्रदान गर्ने।
              </p>
            </div>


            <div className="bg-white rounded-2xl p-8 shadow-md text-center">
              <div className="text-5xl">❤️</div>

              <h3 className="text-xl font-bold text-gray-800 mt-5">
                सामाजिक सेवा
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                आवश्यकतामा रहेका व्यक्तिहरूलाई सहयोग तथा सेवा प्रदान गर्ने।
              </p>
            </div>


            <div className="bg-white rounded-2xl p-8 shadow-md text-center">
              <div className="text-5xl">🌱</div>

              <h3 className="text-xl font-bold text-gray-800 mt-5">
                दिगो विकास
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                समाज तथा वातावरणको दिगो विकासमा योगदान पुर्‍याउने।
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}