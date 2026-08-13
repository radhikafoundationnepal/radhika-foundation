"use client";

import Link from "next/link";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="text-5xl mb-5">
            ❤️
          </div>

          <h1 className="text-4xl md:text-6xl font-bold">
            Support Radhika Foundation Nepal
          </h1>

          <p className="mt-5 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-8">
            तपाईंको सानो सहयोगले गरिब तथा असहाय बालबालिकाको
            शिक्षा, स्वास्थ्य र उज्ज्वल भविष्य निर्माणमा ठूलो योगदान पुर्‍याउन सक्छ।
          </p>

        </div>
      </section>


      {/* DONATION CONTENT */}
      <section className="py-16">

        <div className="max-w-6xl mx-auto px-6">

          {/* INTRO */}
          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
              सहयोग गर्नुहोस्
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-7">
              राधिका फाउन्डेशन नेपालले शिक्षा तथा सामाजिक सेवामार्फत
              आवश्यकता भएका बालबालिका र समुदायको जीवनमा सकारात्मक परिवर्तन
              ल्याउने उद्देश्यले काम गर्दै आएको छ।
            </p>

          </div>


          {/* TWO COLUMNS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">


            {/* QR CARD */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">

              <div className="text-center">

                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Fonepay मार्फत सहयोग
                </h3>

                <p className="text-gray-500 mt-2">
                  तलको QR Code Scan गरी सजिलै Donation गर्नुहोस्।
                </p>

              </div>


              {/* QR IMAGE */}
              <div className="mt-8 flex justify-center">

                <div className="bg-white border rounded-2xl p-4 shadow-sm">

                  <img
                    src="/images/donation-qr.png"
                    alt="Radhika Foundation Fonepay QR Code"
                    className="w-full max-w-md h-auto object-contain"
                  />

                </div>

              </div>


              <div className="mt-6 bg-blue-50 rounded-xl p-5">

                <p className="text-gray-700 text-center leading-7">
                  Fonepay compatible Banking App,
                  Digital Wallet वा UnionPay App बाट
                  QR Scan गरी payment गर्न सक्नुहुन्छ।
                </p>

              </div>

            </div>


            {/* BANK CARD */}
            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-center mb-8">

                <div className="text-5xl mb-4">
                  🏦
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Bank मार्फत सहयोग
                </h3>

                <p className="text-gray-500 mt-2">
                  बैंक खातामार्फत पनि सहयोग गर्न सक्नुहुन्छ।
                </p>

              </div>


              {/* BANK NAME */}
              <div className="bg-green-50 border border-green-100 rounded-2xl p-6">

                <p className="text-sm text-gray-500">
                  Bank
                </p>

                <h4 className="text-2xl font-bold text-green-700 mt-1">
                  Nabil Bank
                </h4>

              </div>


              {/* ACCOUNT */}
              <div className="mt-5 bg-gray-50 rounded-2xl p-6">

                <p className="text-sm text-gray-500">
                  Account Name
                </p>

                <p className="text-xl font-bold text-gray-800 mt-1">
                  Radhika Foundation
                </p>

              </div>


              <div className="mt-5 bg-gray-50 rounded-2xl p-6">

                <p className="text-sm text-gray-500">
                  Account Number
                </p>

                <p className="text-2xl md:text-3xl font-bold text-blue-700 mt-2 tracking-wide break-all">
                  20601017500024
                </p>

              </div>


              {/* CONTACT */}
              <div className="mt-5 bg-purple-50 rounded-2xl p-6">

                <p className="text-sm text-gray-500">
                  Contact
                </p>

                <a
                  href="tel:9800822224"
                  className="text-2xl font-bold text-purple-700 mt-1 inline-block hover:underline"
                >
                  9800822224
                </a>

              </div>

            </div>

          </div>


          {/* MESSAGE */}
          <div className="mt-12 bg-white rounded-3xl shadow-lg p-8 md:p-10 text-center">

            <div className="text-4xl mb-4">
              🙏
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              तपाईंको सहयोग हाम्रो शक्ति हो
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-8">
              तपाईंले गर्नुभएको प्रत्येक सहयोगले कुनै बालबालिकाको शिक्षा,
              स्वास्थ्य र भविष्य निर्माणमा महत्वपूर्ण भूमिका खेल्न सक्छ।
              मानव सेवामा तपाईंको अमूल्य योगदानका लागि हार्दिक धन्यवाद।
            </p>

          </div>


          {/* BACK HOME */}
          <div className="text-center mt-10">

            <Link
              href="/"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 rounded-xl font-bold transition"
            >
              ← Back to Home
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}