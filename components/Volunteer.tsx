"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getApprovedVolunteers } from "@/lib/firestore";

type VolunteerItem = {
  id: string;
  name: string;
  address: string;
  area: string;
};

export default function Volunteer() {
  const [volunteers, setVolunteers] = useState<VolunteerItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadVolunteers() {
      try {
        const data = await getApprovedVolunteers();

        setVolunteers(data as VolunteerItem[]);
      } catch (error) {
        console.error("Volunteer load error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadVolunteers();
  }, []);

  return (
    <section className="py-20 bg-blue-700">
      <div className="max-w-6xl mx-auto px-6">

        {/* =========================
            BECOME A VOLUNTEER
        ========================== */}

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


        {/* =========================
            APPROVED VOLUNTEERS
        ========================== */}

        <div className="mt-16">

          <div className="text-center mb-10">

            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full font-semibold text-sm">
              ❤️ Our Volunteers
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Together, We Can Make a Difference
            </h2>

            <p className="text-blue-100 mt-3 max-w-2xl mx-auto">
              हाम्रो अभियानमा जोडिनुभएका स्वयंसेवकहरू
            </p>

          </div>


          {/* LOADING */}

          {loading && (
            <div className="text-center py-10">
              <p className="text-white">
                Loading volunteers...
              </p>
            </div>
          )}


          {/* NO APPROVED VOLUNTEERS */}

          {!loading && volunteers.length === 0 && (
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center">

              <div className="text-4xl mb-3">
                🤝
              </div>

              <h3 className="text-xl font-bold text-white">
                Our Volunteer Team
              </h3>

              <p className="text-blue-100 mt-2">
                नयाँ volunteers approved भएपछि यहाँ देखिनेछन्।
              </p>

            </div>
          )}


          {/* VOLUNTEER CARDS */}

          {!loading && volunteers.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {volunteers.map((volunteer) => (

                <div
                  key={volunteer.id}
                  className="bg-white rounded-2xl shadow-xl p-6 hover:-translate-y-1 hover:shadow-2xl transition duration-300"
                >

                  {/* ICON */}

                  <div className="flex items-center gap-4 mb-5">

                    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
                      🤝
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {volunteer.name}
                      </h3>

                      <span className="inline-block mt-1 text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        ✓ Approved Volunteer
                      </span>
                    </div>

                  </div>


                  {/* ADDRESS */}

                  <div className="border-t pt-4">

                    <div className="flex items-start gap-3">

                      <span className="text-xl">
                        📍
                      </span>

                      <div>
                        <p className="text-xs text-gray-400 uppercase font-semibold">
                          Address
                        </p>

                        <p className="text-gray-700 font-medium mt-1">
                          {volunteer.address || "Not provided"}
                        </p>
                      </div>

                    </div>


                    {/* SECTOR */}

                    <div className="flex items-start gap-3 mt-4">

                      <span className="text-xl">
                        🏢
                      </span>

                      <div>
                        <p className="text-xs text-gray-400 uppercase font-semibold">
                          Sector
                        </p>

                        <p className="text-blue-700 font-semibold mt-1">
                          {volunteer.area || "Not specified"}
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>
          )}


          {/* JOIN BUTTON */}

          <div className="text-center mt-10">

            <Link
              href="/volunteer"
              className="inline-block bg-white text-blue-700 hover:bg-gray-100 px-7 py-3 rounded-lg font-bold shadow-lg transition"
            >
              Join Our Volunteer Team →
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}