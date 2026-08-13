"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getVolunteers } from "@/lib/firestore";

type VolunteerItem = {
  id: string;
  name?: string;
  address?: string;
  area?: string;
  status?: string;
};

export default function Volunteer() {
  const [volunteers, setVolunteers] = useState<VolunteerItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadVolunteers() {
      try {
        const data = await getVolunteers();

        const approved = (data as VolunteerItem[]).filter(
          (item) => item.status === "approved"
        );

        setVolunteers(approved.slice(0, 6));
      } catch (error) {
        console.error("Volunteer loading error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadVolunteers();
  }, []);

  return (
    <section
      id="volunteer"
      className="py-20 md:py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* =====================================
            HEADER
        ====================================== */}
        <div className="text-center max-w-3xl mx-auto">

          <div className="flex items-center justify-center gap-3">
            <span className="w-10 h-1 bg-red-500 rounded-full" />

            <span className="uppercase tracking-widest text-sm font-bold text-blue-700">
              Our Volunteers
            </span>

            <span className="w-10 h-1 bg-red-500 rounded-full" />
          </div>

          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Together We Serve
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-8">
            समाज सेवाको अभियानमा Radhika Foundation Nepal सँग
            जोडिनुभएका हाम्रा स्वयंसेवकहरू।
          </p>

        </div>


        {/* =====================================
            TOP INFO
        ====================================== */}
        <div className="mt-10 flex justify-center">

          <div className="inline-flex items-center gap-4 bg-white px-7 py-4 rounded-2xl shadow-md border">

            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
              🤝
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Approved Volunteers
              </p>

              <p className="text-2xl font-extrabold text-blue-700">
                {loading ? "..." : volunteers.length}
                {volunteers.length >= 6 && "+"}
              </p>
            </div>

          </div>

        </div>


        {/* =====================================
            LOADING
        ====================================== */}
        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-6 shadow animate-pulse"
              >

                <div className="flex gap-4">

                  <div className="w-14 h-14 rounded-full bg-gray-200" />

                  <div className="flex-1">

                    <div className="h-5 bg-gray-200 rounded w-3/4" />

                    <div className="h-4 bg-gray-200 rounded mt-3 w-1/2" />

                    <div className="h-4 bg-gray-200 rounded mt-2 w-2/3" />

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}


        {/* =====================================
            NO APPROVED VOLUNTEERS
        ====================================== */}
        {!loading && volunteers.length === 0 && (
          <div className="mt-12 bg-white rounded-2xl shadow border border-gray-100 p-10 text-center">

            <div className="text-6xl">
              🤝
            </div>

            <h3 className="text-xl font-bold text-gray-800 mt-4">
              Become Our Volunteer
            </h3>

            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              हाम्रो समाजसेवा अभियानमा तपाईं पनि जोडिनुहोस्।
              तपाईंको समय, सीप र सहयोगले ठूलो परिवर्तन ल्याउन सक्छ।
            </p>

            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 mt-6 bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 rounded-lg font-bold shadow-lg transition"
            >
              Become a Volunteer
              <span>→</span>
            </Link>

          </div>
        )}


        {/* =====================================
            VOLUNTEER CARDS
        ====================================== */}
        {!loading && volunteers.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {volunteers.map((volunteer) => (

              <div
                key={volunteer.id}
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >

                {/* NAME */}
                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl shrink-0">
                    👤
                  </div>

                  <div className="min-w-0">

                    <h3 className="text-xl font-extrabold text-gray-900 truncate">
                      {volunteer.name || "Volunteer"}
                    </h3>

                    <span className="inline-flex items-center gap-1 mt-1 text-xs font-bold text-green-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full" />
                      Approved Volunteer
                    </span>

                  </div>

                </div>


                {/* DETAILS */}
                <div className="mt-6 space-y-3">

                  {/* ADDRESS */}
                  <div className="flex items-start gap-3">

                    <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                      📍
                    </div>

                    <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold">
                        Address
                      </p>

                      <p className="text-gray-700 font-medium">
                        {volunteer.address || "Not provided"}
                      </p>
                    </div>

                  </div>


                  {/* SECTOR / AREA */}
                  <div className="flex items-start gap-3">

                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      🏷️
                    </div>

                    <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold">
                        Sector / Area
                      </p>

                      <p className="text-blue-700 font-bold">
                        {volunteer.area || "General"}
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>
        )}


        {/* =====================================
            BOTTOM CTA
        ====================================== */}
        <div className="mt-14 bg-blue-700 rounded-3xl p-8 md:p-10 shadow-2xl">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>

              <p className="text-yellow-300 font-bold uppercase tracking-wider text-sm">
                Join Our Mission
              </p>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-2">
                तपाईं पनि स्वयंसेवक बन्नुहोस्।
              </h3>

              <p className="text-white/75 mt-2">
                समाजका लागि आफ्नो समय, सीप र सहयोग प्रदान गर्नुहोस्।
              </p>

            </div>


            <Link
              href="/volunteer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-700 px-7 py-4 rounded-xl font-extrabold shadow-lg transition shrink-0"
            >
              🤝 Become a Volunteer
              <span>→</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
