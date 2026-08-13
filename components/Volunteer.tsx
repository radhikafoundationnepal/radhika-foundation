"use client";

import Link from "next/link";

export default function Volunteer() {
  return (
    <section className="py-20 bg-blue-700">
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">

            {/* LEFT */}
            <div className="p-8 md:p-12">

              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
                🤝 Join Us
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-5 leading-tight">
                Become a Volunteer
              </h2>

              <p className="text-gray-600 text-lg mt-5 leading-8">
                Radhika Foundation Nepal सँग जोडिएर समाजका लागि
                सकारात्मक परिवर्तन ल्याउन तपाईं पनि स्वयंसेवक बन्नुहोस्।
              </p>

              <p className="text-gray-600 mt-4 leading-7">
                तपाईंको समय, सीप र सानो प्रयासले शिक्षा, स्वास्थ्य,
                वातावरण तथा सामाजिक सेवाका क्षेत्रमा ठूलो योगदान पुर्‍याउन सक्छ।
              </p>

              <Link
                href="/volunteer"
                className="inline-block mt-8 bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 rounded-lg font-bold transition shadow-lg"
              >
                Become a Volunteer →
              </Link>

            </div>

            {/* RIGHT */}
            <div className="bg-blue-50 p-8 md:p-12 flex items-center">

              <div className="grid grid-cols-2 gap-5 w-full">

                <div className="bg-white rounded-2xl p-6 text-center shadow">
                  <div className="text-4xl mb-3">🤝</div>
                  <h3 className="font-bold text-gray-800">
                    Serve
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    समाज सेवामा योगदान
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center shadow">
                  <div className="text-4xl mb-3">❤️</div>
                  <h3 className="font-bold text-gray-800">
                    Care
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    समुदायप्रति माया
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center shadow">
                  <div className="text-4xl mb-3">🌱</div>
                  <h3 className="font-bold text-gray-800">
                    Grow
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    सकारात्मक विकास
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center shadow">
                  <div className="text-4xl mb-3">🌍</div>
                  <h3 className="font-bold text-gray-800">
                    Change
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    राम्रो समाज निर्माण
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}