"use client";

import { useEffect, useState } from "react";
import { addVolunteer, getVolunteers } from "@/lib/firestore";

type VolunteerItem = {
  id: string;
  name: string;
  address: string;
  area?: string;
  photoUrl?: string;
  status?: string;
};

export default function Volunteer() {
  /* =========================================
     FORM STATE
  ========================================== */

  const [form, setForm] = useState({
    name: "",
    address: "",
    area: "",
    photoUrl: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  /* =========================================
     APPROVED VOLUNTEERS
  ========================================== */

  const [volunteers, setVolunteers] = useState<VolunteerItem[]>([]);
  const [loading, setLoading] = useState(true);

  /* =========================================
     SLIDER
  ========================================== */

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  /* =========================================
     LOAD APPROVED VOLUNTEERS
  ========================================== */

  useEffect(() => {
    async function loadVolunteers() {
      try {
        setLoading(true);

        const data = await getVolunteers();

        const approved = (data as VolunteerItem[]).filter(
          (item) =>
            item.status?.toLowerCase() === "approved"
        );

        setVolunteers(approved);

        if (approved.length > 0) {
          setCurrent(0);
        }
      } catch (err) {
        console.error("Volunteer loading error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadVolunteers();
  }, []);

  /* =========================================
     AUTO SLIDER
  ========================================== */

  useEffect(() => {
    if (paused || volunteers.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % volunteers.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [paused, volunteers.length]);

  /* =========================================
     PREVIOUS
  ========================================== */

  function previousVolunteer() {
    if (volunteers.length === 0) return;

    setCurrent(
      (prev) =>
        (prev - 1 + volunteers.length) %
        volunteers.length
    );
  }

  /* =========================================
     NEXT
  ========================================== */

  function nextVolunteer() {
    if (volunteers.length === 0) return;

    setCurrent(
      (prev) =>
        (prev + 1) % volunteers.length
    );
  }

  /* =========================================
     FORM SUBMIT
  ========================================== */

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setMessage("");
    setError("");

    /* BASIC VALIDATION */

    if (!form.name.trim()) {
      setError("कृपया आफ्नो नाम लेख्नुहोस्।");
      return;
    }

    if (!form.address.trim()) {
      setError("कृपया आफ्नो ठेगाना लेख्नुहोस्।");
      return;
    }

    if (!form.area.trim()) {
      setError("कृपया Sector / Area लेख्नुहोस्।");
      return;
    }

    if (!form.photoUrl.trim()) {
      setError("कृपया आफ्नो Photo URL राख्नुहोस्।");
      return;
    }

    /* URL VALIDATION */

    try {
      new URL(form.photoUrl);
    } catch {
      setError(
        "Photo URL सही छैन। कृपया पूरा image URL राख्नुहोस्।"
      );
      return;
    }

    try {
      setSubmitting(true);

      await addVolunteer({
        name: form.name.trim(),
        address: form.address.trim(),
        area: form.area.trim(),
        photoUrl: form.photoUrl.trim(),
      });

      setMessage(
        "धन्यवाद! तपाईंको Volunteer आवेदन सफलतापूर्वक पठाइएको छ। Admin बाट approve भएपछि तपाईंको profile यहाँ देखिनेछ।"
      );

      /* RESET FORM */

      setForm({
        name: "",
        address: "",
        area: "",
        photoUrl: "",
      });
    } catch (err) {
      console.error("Volunteer submit error:", err);

      setError(
        "Volunteer आवेदन पठाउन समस्या भयो। कृपया फेरि प्रयास गर्नुहोस्।"
      );
    } finally {
      setSubmitting(false);
    }
  }

  /* =========================================
     FORM INPUT HANDLER
  ========================================== */

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-700 via-blue-700 to-blue-800 py-20 md:py-28">

      {/* =====================================
          BACKGROUND DECORATIONS
      ====================================== */}

      <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />

      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-white/5 rounded-full blur-3xl" />


      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

        {/* =====================================
            SECTION HEADER
        ====================================== */}

        <div className="text-center max-w-3xl mx-auto mb-14">

          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-100 px-5 py-2 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest backdrop-blur">
            🤝 Volunteer With Us
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Be a Part of the Change
          </h2>

          <p className="mt-5 text-blue-100 text-base md:text-lg leading-8">
            तपाईंको समय, सीप र सहयोगले समाजमा सकारात्मक परिवर्तन
            ल्याउन सक्छ। आजै Radhika Foundation Nepal सँग
            स्वयंसेवकको रूपमा जोडिनुहोस्।
          </p>

        </div>


        {/* =====================================
            TWO COLUMN
        ====================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">


          {/* ===================================
              VOLUNTEER FORM
          =================================== */}

          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden">

            {/* FORM HEADER */}

            <div className="bg-gradient-to-r from-blue-700 to-blue-800 px-6 sm:px-8 py-6">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl">
                  🙋
                </div>

                <div>

                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Become a Volunteer
                  </h3>

                  <p className="text-blue-100 text-sm mt-1">
                    Volunteer registration form
                  </p>

                </div>

              </div>

            </div>


            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 space-y-5"
            >

              {/* NAME */}

              <div>

                <label
                  htmlFor="volunteer-name"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Full Name
                </label>

                <input
                  id="volunteer-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="तपाईंको पूरा नाम"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                />

              </div>


              {/* ADDRESS */}

              <div>

                <label
                  htmlFor="volunteer-address"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Address
                </label>

                <input
                  id="volunteer-address"
                  name="address"
                  type="text"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="तपाईंको ठेगाना"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                />

              </div>


              {/* AREA */}

              <div>

                <label
                  htmlFor="volunteer-area"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Sector / Area
                </label>

                <input
                  id="volunteer-area"
                  name="area"
                  type="text"
                  value={form.area}
                  onChange={handleChange}
                  placeholder="जस्तै: Education, Health, Social Service"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                />

              </div>


              {/* PHOTO URL */}

              <div>

                <label
                  htmlFor="volunteer-photo"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Profile Photo URL
                </label>

                <input
                  id="volunteer-photo"
                  name="photoUrl"
                  type="url"
                  value={form.photoUrl}
                  onChange={handleChange}
                  placeholder="https://example.com/your-photo.jpg"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                />

                <p className="text-xs text-gray-500 mt-2 leading-5">
                  आफ्नो फोटोको direct image URL राख्नुहोस्।
                  Admin approval पछि यही फोटो Volunteer profile मा देखिनेछ।
                </p>

              </div>


              {/* PHOTO PREVIEW */}

              {form.photoUrl && (
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50 border border-blue-100">

                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-200 shrink-0">

                    <img
                      src={form.photoUrl}
                      alt="Photo preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                  </div>

                  <div>

                    <p className="text-sm font-bold text-blue-800">
                      Photo Preview
                    </p>

                    <p className="text-xs text-blue-600 mt-1">
                      यही फोटो approval पछि profile मा देखिनेछ।
                    </p>

                  </div>

                </div>
              )}


              {/* ERROR */}

              {error && (
                <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3">

                  <p className="text-sm text-red-700 font-semibold">
                    ⚠️ {error}
                  </p>

                </div>
              )}


              {/* SUCCESS */}

              {message && (
                <div className="rounded-xl bg-green-50 border border-green-200 px-4 py-4">

                  <p className="text-sm text-green-700 font-semibold leading-6">
                    ✅ {message}
                  </p>

                </div>
              )}


              {/* SUBMIT */}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed text-white py-4 rounded-xl font-black text-base shadow-lg hover:shadow-xl transition-all"
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending Application...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Submit Volunteer Application
                    <span>→</span>
                  </span>
                )}
              </button>


              {/* NOTE */}

              <p className="text-center text-xs text-gray-400 leading-5">
                तपाईंको आवेदन Admin approval पछि मात्र
                सार्वजनिक Volunteer list मा देखिनेछ।
              </p>

            </form>

          </div>


          {/* ===================================
              APPROVED VOLUNTEERS
          =================================== */}

          <div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] shadow-2xl p-6 sm:p-8 md:p-10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >

            {/* HEADER */}

            <div className="flex items-start justify-between gap-4 mb-8">

              <div>

                <span className="text-yellow-300 text-xs font-black uppercase tracking-[0.2em]">
                  Our Volunteers
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-2">
                  Meet Our Approved Volunteers
                </h3>

                <p className="text-blue-100 text-sm mt-2">
                  हाम्रो सेवामा योगदान पुर्‍याउने समर्पित स्वयंसेवकहरू
                </p>

              </div>


              {/* NUMBER */}

              {!loading && volunteers.length > 0 && (
                <div className="hidden sm:flex shrink-0 w-14 h-14 rounded-2xl bg-white/10 border border-white/20 items-center justify-center">

                  <span className="text-white font-black text-lg">
                    {String(current + 1).padStart(2, "0")}
                  </span>

                </div>
              )}

            </div>


            {/* LOADING */}

            {loading && (
              <div className="min-h-[390px] flex items-center justify-center">

                <div className="text-center">

                  <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto" />

                  <p className="text-blue-100 mt-4 text-sm">
                    Volunteers loading...
                  </p>

                </div>

              </div>
            )}


            {/* EMPTY */}

            {!loading && volunteers.length === 0 && (
              <div className="min-h-[390px] flex items-center justify-center">

                <div className="text-center">

                  <div className="w-24 h-24 mx-auto rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-5xl">
                    🤝
                  </div>

                  <h4 className="text-xl font-black text-white mt-6">
                    Volunteers Coming Soon
                  </h4>

                  <p className="text-blue-100 text-sm mt-2 max-w-sm mx-auto leading-6">
                    अहिले approved volunteer उपलब्ध छैनन्।
                    तपाईं पनि volunteer भएर हामीसँग जोडिनुहोस्।
                  </p>

                </div>

              </div>
            )}


            {/* ACTIVE VOLUNTEER */}

            {!loading && volunteers.length > 0 && (
              <div className="relative min-h-[390px] flex items-center justify-center">

                {/* DECORATIVE CIRCLE */}

                <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-white/5" />

                <div
                  key={activeVolunteer(volunteers, current).id}
                  className="relative z-10 text-center w-full animate-volunteer-fade"
                >

                  {/* ROUND PHOTO */}

                  <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48">

                    {/* OUTER RING */}

                    <div className="absolute -inset-3 rounded-full border-2 border-dashed border-white/30 animate-[spin_15s_linear_infinite]" />

                    {/* PHOTO */}

                    <div className="relative w-full h-full rounded-full overflow-hidden border-[7px] border-white shadow-2xl bg-blue-100">

                      {activeVolunteer(
                        volunteers,
                        current
                      ).photoUrl ? (
                        <img
                          src={
                            activeVolunteer(
                              volunteers,
                              current
                            ).photoUrl
                          }
                          alt={
                            activeVolunteer(
                              volunteers,
                              current
                            ).name
                          }
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-6xl">
                          👤
                        </div>
                      )}

                    </div>


                    {/* APPROVED BADGE */}

                    <div className="absolute bottom-1 right-0 w-10 h-10 rounded-full bg-green-500 border-4 border-white shadow-lg flex items-center justify-center text-white">
                      ✓
                    </div>

                  </div>


                  {/* NAME */}

                  <h4 className="mt-8 text-2xl sm:text-3xl font-black text-white">
                    {activeVolunteer(
                      volunteers,
                      current
                    ).name}
                  </h4>


                  {/* APPROVED */}

                  <div className="inline-flex items-center gap-2 mt-3 bg-green-500/15 border border-green-300/30 text-green-200 px-4 py-2 rounded-full text-xs font-bold">

                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />

                    Approved Volunteer

                  </div>


                  {/* ADDRESS */}

                  <div className="mt-6 space-y-2">

                    <p className="text-blue-100 text-sm">

                      📍{" "}

                      <span className="font-semibold text-white">
                        Address:
                      </span>{" "}

                      {activeVolunteer(
                        volunteers,
                        current
                      ).address}

                    </p>


                    {activeVolunteer(
                      volunteers,
                      current
                    ).area && (
                      <p className="text-blue-100 text-sm">

                        🎯{" "}

                        <span className="font-semibold text-white">
                          Sector:
                        </span>{" "}

                        {
                          activeVolunteer(
                            volunteers,
                            current
                          ).area
                        }

                      </p>
                    )}

                  </div>

                </div>

              </div>
            )}


            {/* =================================
                SLIDER CONTROLS
            ================================== */}

            {!loading && volunteers.length > 1 && (
              <>

                {/* ARROWS */}

                <div className="flex justify-center gap-3 mt-4">

                  <button
                    type="button"
                    onClick={previousVolunteer}
                    className="w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white hover:text-blue-700 transition shadow-lg"
                    aria-label="Previous volunteer"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={nextVolunteer}
                    className="w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white hover:text-blue-700 transition shadow-lg"
                    aria-label="Next volunteer"
                  >
                    →
                  </button>

                </div>


                {/* DOTS */}

                <div className="flex justify-center items-center gap-2 mt-6">

                  {volunteers.map((volunteer, index) => (
                    <button
                      key={volunteer.id}
                      type="button"
                      onClick={() => setCurrent(index)}
                      aria-label={`Show volunteer ${index + 1}`}
                      className={`rounded-full transition-all duration-300 ${
                        current === index
                          ? "w-8 h-2.5 bg-yellow-300"
                          : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
                      }`}
                    />
                  ))}

                </div>

              </>
            )}


            {/* AUTO SLIDE INFO */}

            {!loading && volunteers.length > 1 && (
              <p className="text-center text-blue-200/70 text-xs mt-5">
                {paused
                  ? "Slider paused"
                  : "Volunteers automatically changing"}
              </p>
            )}

          </div>

        </div>


        {/* =====================================
            BOTTOM MESSAGE
        ====================================== */}

        <div className="text-center mt-12">

          <p className="text-blue-100 text-sm sm:text-base">
            ❤️ तपाईंको सानो प्रयासले कसैको जीवनमा ठूलो परिवर्तन
            ल्याउन सक्छ।
          </p>

        </div>

      </div>


      {/* =====================================
          ANIMATIONS
      ====================================== */}

      <style jsx global>{`
        @keyframes volunteerFade {
          from {
            opacity: 0;
            transform: translateY(15px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-volunteer-fade {
          animation: volunteerFade 0.6s ease-out;
        }
      `}</style>

    </section>
  );
}


/* =========================================
   ACTIVE VOLUNTEER HELPER
========================================= */

function activeVolunteer(
  volunteers: VolunteerItem[],
  index: number
): VolunteerItem {
  return volunteers[index] || volunteers[0];
}
