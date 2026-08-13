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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    async function loadVolunteers() {
      try {
        const data = await getVolunteers();

        const approved = data as VolunteerItem[];

        setVolunteers(approved);
      } catch (error) {
        console.error("Volunteer error:", error);
      }
    }

    loadVolunteers();
  }, []);

  // Automatic slider
  useEffect(() => {
    if (volunteers.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % volunteers.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [volunteers.length]);

  function getVolunteer(index: number) {
    if (volunteers.length === 0) return null;

    return volunteers[index % volunteers.length];
  }

  return (
    <section
      id="volunteer"
      className="py-20 md:py-28 bg-blue-700"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ======================================
            APPROVED VOLUNTEERS
            BECOME A VOLUNTEER भन्दा ठीक माथि
        ======================================= */}

        {volunteers.length > 0 && (
          <div className="mb-10">

            <div className="text-center mb-7">

              <span className="text-yellow-300 font-bold uppercase tracking-widest text-sm">
                Our Volunteers
              </span>

              <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2">
                Meet Our Approved Volunteers
              </h2>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

              {/* CARD 1 */}
              {getVolunteer(current) && (
                <VolunteerCard
                  volunteer={getVolunteer(current)!}
                />
              )}

              {/* CARD 2 */}
              {volunteers.length > 1 && (
                <div className="hidden md:block">
                  <VolunteerCard
                    volunteer={getVolunteer(current + 1)!}
                  />
                </div>
              )}

              {/* CARD 3 */}
              {volunteers.length > 2 && (
                <div className="hidden lg:block">
                  <VolunteerCard
                    volunteer={getVolunteer(current + 2)!}
                  />
                </div>
              )}

            </div>


            {/* DOTS */}
            {volunteers.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">

                {volunteers.map((volunteer, index) => (
                  <button
                    key={volunteer.id}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === current
                        ? "w-8 bg-yellow-300"
                        : "w-2 bg-white/40"
                    `}
                    aria-label={`Volunteer ${index + 1}`}
                  />
                ))}

              </div>
            )}

          </div>
        )}


        {/* ======================================
            BECOME A VOLUNTEER
        ======================================= */}

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
                वातावरण तथा सामाजिक सेवाका क्षेत्रमा ठूलो योगदान
                पुर्‍याउन सक्छ।
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


/* ==========================================
   VOLUNTEER CARD
========================================== */

function VolunteerCard({
  volunteer,
}: {
  volunteer: VolunteerItem;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl">

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
          👤
        </div>

        <div className="min-w-0">

          <h3 className="text-xl font-extrabold text-gray-900 truncate">
            {volunteer.name || "Volunteer"}
          </h3>

          <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600 mt-1">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Approved Volunteer
          </span>

        </div>

      </div>


      <div className="mt-5 space-y-3">

        <div className="flex gap-3">

          <span className="text-lg">
            📍
          </span>

          <div>
            <p className="text-xs text-gray-400 font-bold uppercase">
              Address
            </p>

            <p className="text-gray-700 font-medium">
              {volunteer.address || "Not provided"}
            </p>
          </div>

        </div>


        <div className="flex gap-3">

          <span className="text-lg">
            🏷️
          </span>

          <div>
            <p className="text-xs text-gray-400 font-bold uppercase">
              Sector / Area
            </p>

            <p className="text-blue-700 font-bold">
              {volunteer.area || "General"}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
