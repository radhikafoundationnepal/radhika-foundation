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
  const [current, setCurrent] = useState(0);

  // ==========================================
  // LOAD APPROVED VOLUNTEERS
  // ==========================================
  useEffect(() => {
    async function loadVolunteers() {
      try {
        const data = await getVolunteers();

        const approved = (data as VolunteerItem[]).filter(
          (item) => item.status === "approved"
        );

        setVolunteers(approved);
      } catch (error) {
        console.error("Volunteer loading error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadVolunteers();
  }, []);

  // ==========================================
  // AUTO SLIDER
  // ==========================================
  useEffect(() => {
    if (volunteers.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % volunteers.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [volunteers.length]);

  // ==========================================
  // GET VISIBLE VOLUNTEERS
  // ==========================================
  function getVisibleVolunteers() {
    if (volunteers.length === 0) {
      return [];
    }

    // Desktop मा 3 वटा देखाउने
    // Tablet मा 2 वटा
    // Mobile मा CSS ले 1 वटा देखाउँछ
    const result = [];

    for (let i = 0; i < Math.min(3, volunteers.length); i++) {
      result.push(
        volunteers[(current + i) % volunteers.length]
      );
    }

    return result;
  }

  const visibleVolunteers = getVisibleVolunteers();

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
            APPROVED VOLUNTEER SLIDER
        ====================================== */}
        <div className="mt-12">

          {loading ? (

            <div className="grid md:grid-cols-3 gap-6">

              {[1, 2, 3].map((item) => (

                <div
                  key={item}
                  className="bg-white rounded-2xl p-6 shadow animate-pulse"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-full bg-gray-200" />

                    <div className="flex-1">

                      <div className="h-5 bg-gray-200 rounded w-3/4" />

                      <div className="h-4 bg-gray-200 rounded mt-3 w-1/2" />

                    </div>

                  </div>

                  <div className="h-4 bg-gray-200 rounded mt-6" />

                  <div className="h-4 bg-gray-200 rounded mt-3 w-4/5" />

                </div>

              ))}

            </div>

          ) : volunteers.length === 0 ? (

            /* ==================================
               NO APPROVED VOLUNTEER
            =================================== */
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-8 text-center">

              <div className="text-5xl">
                🤝
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-4">
                Our Volunteer Family
              </h3>

              <p className="text-gray-500 mt-2">
                स्वयंसेवक बन्न चाहनुहुन्छ?
                तपाईं पनि हाम्रो अभियानमा जोडिनुहोस्।
              </p>

            </div>

          ) : (

            <>
              {/* ==================================
                  SLIDER CARDS
              =================================== */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {visibleVolunteers.map((volunteer) => (

                  <div
                    key={volunteer.id}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500"
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
                    <div className="mt-6 space-y-4">

                      {/* ADDRESS */}
                      <div className="flex items-start gap-3">

                        <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                          📍
                        </div>

                        <div className="min-w-0">

                          <p className="text-xs text-gray-400 uppercase font-bold">
                            Address
                          </p>

                          <p className="text-gray-700 font-medium mt-1 break-words">
                            {volunteer.address || "Not provided"}
                          </p>

                        </div>

                      </div>


                      {/* SECTOR */}
                      <div className="flex items-start gap-3">

                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                          🏷️
                        </div>

                        <div className="min-w-0">

                          <p className="text-xs text-gray-400 uppercase font-bold">
                            Sector / Area
                          </p>

                          <p className="text-blue-700 font-bold mt-1">
                            {volunteer.area || "General"}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                ))}

              </div>


              {/* ==================================
                  SLIDER DOTS
              =================================== */}
              {volunteers.length > 1 && (

                <div className="flex justify-center items-center gap-2 mt-7">

                  {volunteers.map((_, index) => (

                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrent(index)}
                      aria-label={`Go to volunteer ${index + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === current
                          ? "w-8 bg-blue-700"
                          : "w-2.5 bg-gray-300 hover:bg-blue-400"
                      }`}
                    />

                  ))}

                </div>

              )}

            </>
          )}

        </div>


        {/* =====================================
            BECOME A VOLUNTEER
            APPROVED SLIDER को ठीक तल
        ====================================== */}
        <div className="mt-10 bg-blue-700 rounded-3xl p-8 md:p-10 shadow-2xl">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>

              <p className="text-yellow-300 font-bold uppercase tracking-wider text-sm">
                Join Our Mission
              </p>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-2">
                Become a Volunteer
              </h3>

              <p className="text-white/75 mt-2 leading-7">
                तपाईंको समय, सीप र सहयोगले समाजमा सकारात्मक
                परिवर्तन ल्याउन सक्छ।
              </p>

            </div>


            <Link
              href="/volunteer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-700 px-7 py-4 rounded-xl font-extrabold shadow-lg transition shrink-0"
            >
              🤝 Join Us
              <span>→</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
