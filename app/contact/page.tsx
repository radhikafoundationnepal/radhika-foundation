"use client";

import { FormEvent, useState } from "react";
import { addContactMessage } from "@/lib/firestore";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("कृपया Name, Email र Message भर्नुहोस्।");
      return;
    }

    try {
      setLoading(true);

      await addContactMessage(
        form.name,
        form.email,
        form.phone,
        form.message
      );

      alert("तपाईंको message सफलतापूर्वक पठाइयो। धन्यवाद!");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact error:", error);
      alert("Message पठाउन सकिएन। कृपया फेरि प्रयास गर्नुहोस्।");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold text-sm">
            📞 Contact Us
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mt-5">
            Get In Touch
          </h1>

          <p className="text-gray-600 text-lg mt-5 max-w-2xl mx-auto">
            Radhika Foundation Nepal सँग सम्पर्क गर्न हामीलाई
            message, phone वा social media मार्फत सम्पर्क गर्नुहोस्।
          </p>

        </div>
      </section>


      {/* =====================================================
          CONTACT INFORMATION + FORM
      ====================================================== */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* =================================================
                LEFT - CONTACT INFORMATION
            ================================================== */}
            <div>

              <span className="text-blue-700 font-bold uppercase tracking-wide text-sm">
                Radhika Foundation Nepal
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
                हामीसँग सम्पर्क गर्नुहोस्
              </h2>

              <div className="w-16 h-1 bg-blue-700 rounded-full mt-5" />


              {/* ADDRESS */}
              <div className="mt-8 bg-blue-50 rounded-2xl p-6">

                <div className="flex gap-4">

                  <div className="w-12 h-12 bg-blue-700 text-white rounded-xl flex items-center justify-center text-2xl shrink-0">
                    📍
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      Address
                    </h3>

                    <p className="text-gray-600 mt-1">
                      Radhika Foundation
                    </p>

                    <p className="text-gray-600">
                      Kanakai - 6, Manasapur, Jhapa, Nepal
                    </p>
                  </div>

                </div>

              </div>


              {/* PHONE */}
              <div className="mt-4 bg-green-50 rounded-2xl p-6">

                <div className="flex gap-4">

                  <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center text-2xl shrink-0">
                    📞
                  </div>

                  <div>

                    <h3 className="font-bold text-lg text-gray-800">
                      Phone
                    </h3>

                    <div className="flex flex-col mt-1 gap-1">

                      <a
                        href="tel:9800822224"
                        className="text-gray-600 hover:text-green-600 transition"
                      >
                        9800822224
                      </a>

                      <a
                        href="tel:9841424995"
                        className="text-gray-600 hover:text-green-600 transition"
                      >
                        9841424995
                      </a>

                    </div>

                  </div>

                </div>

              </div>


              {/* EMAIL */}
              <div className="mt-4 bg-red-50 rounded-2xl p-6">

                <div className="flex gap-4">

                  <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center text-2xl shrink-0">
                    ✉️
                  </div>

                  <div className="min-w-0">

                    <h3 className="font-bold text-lg text-gray-800">
                      Email
                    </h3>

                    <a
                      href="mailto:radhikafoundation2078@gmail.com"
                      className="text-gray-600 hover:text-red-600 break-all transition"
                    >
                      radhikafoundation2078@gmail.com
                    </a>

                  </div>

                </div>

              </div>


              {/* WEBSITE */}
              <div className="mt-4 bg-purple-50 rounded-2xl p-6">

                <div className="flex gap-4">

                  <div className="w-12 h-12 bg-purple-600 text-white rounded-xl flex items-center justify-center text-2xl shrink-0">
                    🌐
                  </div>

                  <div>

                    <h3 className="font-bold text-lg text-gray-800">
                      Website
                    </h3>

                    <a
                      href="https://radhikadaasi.com.np/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-700 hover:underline"
                    >
                      radhikadaasi.com.np
                    </a>

                  </div>

                </div>

              </div>


              {/* =================================================
                  SOCIAL MEDIA
              ================================================== */}
              <div className="mt-7">

                <h3 className="text-xl font-bold text-gray-800">
                  Follow Us
                </h3>

                <p className="text-gray-500 mt-1">
                  हाम्रो social media मा पनि जोडिनुहोस्।
                </p>


                <div className="flex flex-wrap gap-3 mt-5">

                  {/* FACEBOOK */}
                  <a
                    href="https://www.facebook.com/radhikafoundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold transition shadow-sm"
                  >
                    f&nbsp; Facebook
                  </a>


                  {/* YOUTUBE */}
                  <a
                    href="https://www.youtube.com/@radhikadaasiofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg font-semibold transition shadow-sm"
                  >
                    ▶&nbsp; YouTube
                  </a>


                  {/* TIKTOK */}
                  <a
                    href="https://www.tiktok.com/@radhikadaasiofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black hover:bg-gray-800 text-white px-5 py-3 rounded-lg font-semibold transition shadow-sm"
                  >
                    ♪&nbsp; TikTok
                  </a>

                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT - CONTACT FORM
            ================================================== */}
            <div>

              <div className="bg-white rounded-3xl shadow-xl border p-7 md:p-10">

                <div className="mb-7">

                  <span className="text-blue-700 font-semibold">
                    💬 Send Message
                  </span>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
                    Send Us a Message
                  </h2>

                  <p className="text-gray-500 mt-2">
                    तपाईंको प्रश्न, सुझाव वा जानकारी हामीलाई पठाउनुहोस्।
                  </p>

                </div>


                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* NAME */}
                  <div>

                    <label className="block font-semibold text-gray-700 mb-2">
                      Name *
                    </label>

                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value,
                        })
                      }
                      placeholder="Your Name"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />

                  </div>


                  {/* EMAIL */}
                  <div>

                    <label className="block font-semibold text-gray-700 mb-2">
                      Email *
                    </label>

                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email: e.target.value,
                        })
                      }
                      placeholder="your@email.com"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />

                  </div>


                  {/* PHONE */}
                  <div>

                    <label className="block font-semibold text-gray-700 mb-2">
                      Phone
                    </label>

                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          phone: e.target.value,
                        })
                      }
                      placeholder="Your Phone Number"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />

                  </div>


                  {/* MESSAGE */}
                  <div>

                    <label className="block font-semibold text-gray-700 mb-2">
                      Message *
                    </label>

                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          message: e.target.value,
                        })
                      }
                      placeholder="Write your message..."
                      rows={6}
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    />

                  </div>


                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white py-4 rounded-xl font-bold text-lg transition shadow-lg"
                  >
                    {loading
                      ? "Sending..."
                      : "📩 Send Message"}
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GOOGLE MAP
      ====================================================== */}
      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg border">

            <div className="p-6 md:p-8">

              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                📍 Find Us
              </h2>

              <p className="text-gray-600 mt-2">
                Radhika Foundation, Kanakai - 6, Manasapur, Jhapa
              </p>

            </div>

            <div className="w-full h-[450px]">

              <iframe
                src="https://www.google.com/maps?q=Radhika%20Foundation%2C%20Kanakai%20-%206%2C%20Manasapur%2C%20Jhapa%2C%20Nepal&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}