"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { addVolunteer } from "@/lib/firestore";

export default function VolunteerPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    area: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      await addVolunteer({
        name: form.name,
        phone: form.phone,
        email: form.email,
        address: form.address,
        area: form.area,
        message: form.message,
      });

      setSuccess(true);

      setForm({
        name: "",
        phone: "",
        email: "",
        address: "",
        area: "",
        message: "",
      });
    } catch (err) {
      console.error("Volunteer registration error:", err);
      setError(
        "Registration हुन सकेन। कृपया केही समयपछि फेरि प्रयास गर्नुहोस्।"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-10">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
            🤝 Join Us
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mt-5">
            Become a Volunteer
          </h1>

          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto leading-8">
            Radhika Foundation Nepal सँग जोडिएर समाजमा सकारात्मक
            परिवर्तन ल्याउन तपाईं पनि स्वयंसेवक बन्नुहोस्।
          </p>

        </div>

        {/* FORM */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10">

          {success && (
            <div className="mb-8 bg-green-50 border border-green-200 text-green-700 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">🎉</div>

              <h3 className="font-bold text-lg">
                Registration Successful!
              </h3>

              <p className="mt-1">
                तपाईंको volunteer registration सफलतापूर्वक प्राप्त भयो।
                धन्यवाद!
              </p>
            </div>
          )}

          {error && (
            <div className="mb-8 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME + PHONE */}
            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="98XXXXXXXX"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

            {/* EMAIL + ADDRESS */}
            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Address
                </label>

                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Your address"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

            {/* AREA */}
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Volunteer Area *
              </label>

              <select
                name="area"
                value={form.area}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">
                  Select volunteer area
                </option>

                <option value="Education">
                  Education
                </option>

                <option value="Health">
                  Health
                </option>

                <option value="Women Empowerment">
                  Women Empowerment
                </option>

                <option value="Environment">
                  Environment
                </option>

                <option value="Disaster Relief">
                  Disaster Relief
                </option>

                <option value="Social Service">
                  Social Service
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us about yourself or how you would like to help..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white py-4 rounded-xl font-bold text-lg transition shadow-lg"
            >
              {loading ? "Submitting..." : "🤝 Submit Volunteer Registration"}
            </button>

          </form>

        </div>

        {/* BACK HOME */}
        <div className="text-center mt-8">

          <Link
            href="/"
            className="text-blue-700 font-semibold hover:underline"
          >
            ← Back to Home
          </Link>

        </div>

      </div>
    </main>
  );
}