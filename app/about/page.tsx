export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-blue-700 text-white py-20 px-4">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-blue-100 font-semibold mb-3">
            Radhika Foundation Nepal
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            About Us
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-blue-50 leading-8">
            समुदायको विकास, सामाजिक सेवा र सकारात्मक परिवर्तनका
            लागि समर्पित Radhika Foundation Nepal।
          </p>

        </div>

      </section>

      {/* ABOUT */}

      <section className="py-16 px-4">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              हाम्रो बारेमा
            </h2>

            <p className="text-gray-600 leading-8">
              Radhika Foundation Nepal सामाजिक क्षेत्रमा काम गर्ने
              गैर-नाफामूलक संस्थाको रूपमा समुदायमा सकारात्मक परिवर्तन
              ल्याउने उद्देश्यले स्थापना गरिएको संस्था हो।
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              हामी शिक्षा, स्वास्थ्य, महिला तथा बालबालिका, विपन्न
              समुदायको सहयोग र विभिन्न सामाजिक तथा मानवीय
              गतिविधिहरूमार्फत समुदायलाई सहयोग गर्ने लक्ष्य राख्छौँ।
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <div className="w-20 h-20 rounded-full bg-blue-700 text-white flex items-center justify-center text-3xl font-bold mx-auto">
              R
            </div>

            <h3 className="text-2xl font-bold text-center mt-5">
              Radhika Foundation Nepal
            </h3>

            <p className="text-center text-gray-500 mt-3">
              Serving Community • Creating Change
            </p>

          </div>

        </div>

      </section>

      {/* VISION / MISSION */}

      <section className="bg-white py-16 px-4">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <h2 className="text-3xl font-bold text-gray-800">
              हाम्रो उद्देश्य
            </h2>

            <p className="text-gray-600 mt-3">
              समुदायमा दीर्घकालीन र सकारात्मक परिवर्तन ल्याउने हाम्रो
              प्रतिबद्धता।
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* VISION */}

            <div className="bg-blue-50 rounded-2xl p-8">

              <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold">
                V
              </div>

              <h3 className="text-2xl font-bold mt-5">
                हाम्रो Vision
              </h3>

              <p className="text-gray-600 leading-8 mt-4">
                समावेशी, सक्षम र आत्मनिर्भर समुदाय निर्माण गर्दै
                सबैका लागि सम्मानजनक र अवसरयुक्त समाज निर्माण गर्नु।
              </p>

            </div>

            {/* MISSION */}

            <div className="bg-gray-50 rounded-2xl p-8 border">

              <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold">
                M
              </div>

              <h3 className="text-2xl font-bold mt-5">
                हाम्रो Mission
              </h3>

              <p className="text-gray-600 leading-8 mt-4">
                शिक्षा, स्वास्थ्य, सामाजिक सहयोग र समुदाय विकासका
                कार्यक्रममार्फत आवश्यकतामा रहेका मानिसहरूलाई सहयोग
                पुर्‍याउनु।
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* OUR WORK */}

      <section className="py-16 px-4">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <h2 className="text-3xl font-bold text-gray-800">
              हामी के गर्छौँ?
            </h2>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-2xl shadow p-6 text-center">

              <div className="text-4xl mb-4">
                🎓
              </div>

              <h3 className="text-xl font-bold">
                शिक्षा
              </h3>

              <p className="text-gray-600 mt-3">
                शिक्षा तथा सिकाइका अवसरमा सहयोग।
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-6 text-center">

              <div className="text-4xl mb-4">
                ❤️
              </div>

              <h3 className="text-xl font-bold">
                स्वास्थ्य
              </h3>

              <p className="text-gray-600 mt-3">
                स्वास्थ्य तथा मानवीय सहयोगका कार्यक्रम।
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-6 text-center">

              <div className="text-4xl mb-4">
                👨‍👩‍👧‍👦
              </div>

              <h3 className="text-xl font-bold">
                समुदाय
              </h3>

              <p className="text-gray-600 mt-3">
                समुदाय विकास तथा सामाजिक कार्यक्रम।
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-6 text-center">

              <div className="text-4xl mb-4">
                🤝
              </div>

              <h3 className="text-xl font-bold">
                सहयोग
              </h3>

              <p className="text-gray-600 mt-3">
                आवश्यकतामा रहेका व्यक्तिहरूलाई सहयोग।
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}