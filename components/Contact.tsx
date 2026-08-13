"use client";

import { useState } from "react";
import { addContactMessage } from "@/lib/firestore";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    try {
      await addContactMessage(
        name,
        email,
        phone,
        message
      );

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      setSuccess(true);
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Message पठाउन समस्या भयो। कृपया फेरि प्रयास गर्नुहोस्।");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
            Contact Us
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Radhika Foundation Nepal सँग सम्पर्क गर्न
            तलको form प्रयोग गर्नुहोस्।
          </p>

        </div>


        {/* CONTENT */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">


          {/* CONTACT INFORMATION */}

          <div className="bg-blue-700 text-white rounded-3xl p-8 md:p-10">

            <h3 className="text-3xl font-bold">
              Get In Touch
            </h3>

            <p className="text-blue-100 mt-4 leading-7">
              तपाईंको सुझाव, प्रश्न वा सहयोग सम्बन्धी जानकारीका लागि
              हामीलाई सम्पर्क गर्नुहोस्।
            </p>


            {/* PHONE */}

            <div className="mt-10 flex gap-4">

              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl">
                📞
              </div>

              <div>

                <p className="text-blue-200 text-sm">
                  Phone
                </p>

                <a
                  href="tel:9800822224"
                  className="font-semibold hover:underline"
                >
                  9800822224
                </a>

              </div>

            </div>


            {/* EMAIL */}

            <div className="mt-7 flex gap-4">

              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl">
                ✉️
              </div>

              <div>

                <p className="text-blue-200 text-sm">
                  Email
                </p>

                <a
                  href="mailto:info@radhikafoundation.org.np"
                  className="font-semibold hover:underline break-all"
                >
                  info@radhikafoundation.org.np
                </a>

              </div>

            </div>


            {/* ADDRESS */}

            <div className="mt-7 flex gap-4">

              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl">
                📍
              </div>

              <div>

                <p className="text-blue-200 text-sm">
                  Location
                </p>

                <p className="font-semibold">
                  Nepal
                </p>

              </div>

            </div>

          </div>


          {/* CONTACT FORM */}

          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">

            <h3 className="text-2xl font-bold text-gray-800">
              Send us a Message
            </h3>


            {/* SUCCESS MESSAGE */}

            {success && (
              <div className="mt-5 bg-green-50 border border-green-200 text-green-700 rounded-xl p-4">
                तपाईंको message सफलतापूर्वक पठाइयो। धन्यवाद! 🙏
              </div>
            )}


            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >

              {/* NAME */}

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="तपाईंको नाम"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* EMAIL */}

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* PHONE */}

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone
                </label>

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="98XXXXXXXX"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* MESSAGE */}

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="तपाईंको message लेख्नुहोस्..."
                  rows={6}
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white py-4 rounded-xl font-bold transition"
              >
                {loading
                  ? "Sending..."
                  : "Send Message →"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}