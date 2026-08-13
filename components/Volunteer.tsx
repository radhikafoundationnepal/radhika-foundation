"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

import {
  addVolunteer,
  getApprovedVolunteers,
  type Volunteer as VolunteerType,
} from "@/lib/firestore";

type VolunteerForm = {
  name: string;
  phone: string;
  email: string;
  address: string;
  area: string;
  message: string;
  photoUrl: string;
};

const initialForm: VolunteerForm = {
  name: "",
  phone: "",
  email: "",
  address: "",
  area: "",
  message: "",
  photoUrl: "",
};

export default function Volunteer() {
  /* =====================================================
     STATE
  ===================================================== */

  const [form, setForm] = useState<VolunteerForm>(initialForm);

  const [volunteers, setVolunteers] = useState<VolunteerType[]>([]);

  const [loading, setLoading] = useState(true);

  const [submitting, setSubmitting] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const [current, setCurrent] = useState(0);

  /* =====================================================
     LOAD APPROVED VOLUNTEERS
  ===================================================== */

  useEffect(() => {
    async function loadVolunteers() {
      try {
        setLoading(true);

        const data = await getApprovedVolunteers();

        setVolunteers(data);

        setCurrent(0);
      } catch (err) {
        console.error("Volunteer loading error:", err);
        setError("Volunteer जानकारी load गर्न समस्या भयो।");
      } finally {
        setLoading(false);
      }
    }

    loadVolunteers();
  }, []);

  /* =====================================================
     AUTO SLIDER
  ===================================================== */

  useEffect(() => {
    if (volunteers.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrent((prev) => {
        return (prev + 1) % volunteers.length;
      });
    }, 3500);

    return () => {
      clearInterval(timer);
    };
  }, [volunteers.length]);

  /* =====================================================
     FORM CHANGE
  ===================================================== */

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear messages when user starts editing
    if (success) {
      setSuccess("");
    }

    if (error) {
      setError("");
    }
  }

  /* =====================================================
     SUBMIT FORM
  ===================================================== */

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSubmitting(true);
    setSuccess("");
    setError("");

    try {
      await addVolunteer({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        address: form.address.trim(),
        area: form.area.trim(),
        message: form.message.trim(),
        photoUrl: form.photoUrl.trim(),
      });

      setSuccess(
        "तपाईंको Volunteer आवेदन सफलतापूर्वक पठाइएको छ। Admin approval पछि तपाईंको profile यहाँ देखिनेछ।"
      );

      setForm(initialForm);
    } catch (err) {
      console.error("Volunteer submission error:", err);

      setError(
        "आवेदन पठाउन समस्या भयो। कृपया केही समयपछि फेरि प्रयास गर्नुहोस्।"
      );
    } finally {
      setSubmitting(false);
    }
  }

  /* =====================================================
     ACTIVE VOLUNTEER
  ===================================================== */

  const active =
    volunteers.length > 0
      ? volunteers[current] || volunteers[0]
      : null;

  /* =====================================================
     GO TO SLIDE
  ===================================================== */

  function goToSlide(index: number) {
    setCurrent(index);
  }

  /* =====================================================
     NEXT SLIDE
  ===================================================== */

  function nextSlide() {
    if (volunteers.length <= 1) {
      return;
    }

    setCurrent((prev) => (prev + 1) % volunteers.length);
  }

  /* =====================================================
     PREVIOUS SLIDE
  ===================================================== */

  function previousSlide() {
    if (volunteers.length <= 1) {
      return;
    }

    setCurrent((prev) =>
      prev === 0 ? volunteers.length - 1 : prev - 1
    );
  }

  /* =====================================================
     RETURN
  ===================================================== */

  return (
    <section
      id="volunteer"
      className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800"
    >
      {/* =================================================
          BACKGROUND DECORATION
      ================================================== */}

      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-400/5 blur-3xl" />

      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />
      </div>

      {/* =================================================
          MAIN CONTAINER
      ================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">
        {/* =================================================
            HEADER
        ================================================== */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
            🤝 Join Our Mission
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Become a Volunteer
          </h2>

          <div className="w-20 h-1 bg-yellow-400 rounded-full mx-auto mt-5" />

          <p className="mt-6 text-blue-100 text-base sm:text-lg md:text-xl leading-8">
            तपाईंको समय, सीप र सहयोगले कसैको जीवनमा
            सकारात्मक परिवर्तन ल्याउन सक्छ।
          </p>
        </div>

        {/* =================================================
            MAIN GRID
        ================================================== */}

        <div className="mt-14 grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* =================================================
              VOLUNTEER FORM
          ================================================== */}

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* FORM HEADER */}

            <div className="bg-gradient-to-r from-blue-700 to-blue-800 px-6 sm:px-8 py-6">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                Volunteer Registration
              </h3>

              <p className="text-blue-100 mt-2">
                आफ्नो विवरण भरेर हाम्रो अभियानमा जोडिनुहोस्।
              </p>
            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 space-y-5"
            >
              {/* =================================================
                  NAME
              ================================================== */}

              <div>
                <label
                  htmlFor="volunteer-name"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Full Name *
                </label>

                <input
                  id="volunteer-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="तपाईंको पूरा नाम"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                />
              </div>

              {/* =================================================
                  PHONE + EMAIL
              ================================================== */}

              <div className="grid sm:grid-cols-2 gap-5">
                {/* PHONE */}

                <div>
                  <label
                    htmlFor="volunteer-phone"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Phone *
                  </label>

                  <input
                    id="volunteer-phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                    placeholder="98XXXXXXXX"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="volunteer-email"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Email
                  </label>

                  <input
                    id="volunteer-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                  />
                </div>
              </div>

              {/* =================================================
                  ADDRESS + AREA
              ================================================== */}

              <div className="grid sm:grid-cols-2 gap-5">
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
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    autoComplete="street-address"
                    placeholder="तपाईंको ठेगाना"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                  />
                </div>

                {/* AREA */}

                <div>
                  <label
                    htmlFor="volunteer-area"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Area / Position
                  </label>

                  <input
                    id="volunteer-area"
                    type="text"
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                    placeholder="जस्तै: Social Work"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                  />
                </div>
              </div>

              {/* =================================================
                  PROFILE PHOTO URL
              ================================================== */}

              <div>
                <label
                  htmlFor="volunteer-photo"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  📷 Profile Photo URL
                </label>

                <input
                  id="volunteer-photo"
                  type="url"
                  name="photoUrl"
                  value={form.photoUrl}
                  onChange={handleChange}
                  placeholder="https://example.com/your-photo.jpg"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                />

                <p className="text-xs text-gray-500 mt-2">
                  आफ्नो online photo को direct URL यहाँ राख्नुहोस्।
                </p>

                {/* PHOTO PREVIEW */}

                {form.photoUrl.trim() && (
                  <div className="mt-4 flex items-center gap-4 p-3 rounded-xl bg-blue-50 border border-blue-100">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-100 flex-shrink-0">
                      <img
                        src={form.photoUrl}
                        alt="Volunteer photo preview"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>

                    <div>
                      <p className="text-blue-700 text-sm font-semibold">
                        Photo Preview
                      </p>

                      <p className="text-gray-500 text-xs mt-1">
                        URL सही भएमा photo यहाँ देखिन्छ।
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* =================================================
                  MESSAGE
              ================================================== */}

              <div>
                <label
                  htmlFor="volunteer-message"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Message
                </label>

                <textarea
                  id="volunteer-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="तपाईं किन Volunteer बन्न चाहनुहुन्छ?"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition resize-none"
                />
              </div>

              {/* =================================================
                  SUCCESS MESSAGE
              ================================================== */}

              {success && (
                <div
                  role="status"
                  className="rounded-xl bg-green-50 border border-green-200 text-green-700 px-4 py-4 text-sm leading-6"
                >
                  ✅ {success}
                </div>
              )}

              {/* =================================================
                  ERROR MESSAGE
              ================================================== */}

              {error && (
                <div
                  role="alert"
                  className="rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-4 text-sm leading-6"
                >
                  ❌ {error}
                </div>
              )}

              {/* =================================================
                  SUBMIT BUTTON
              ================================================== */}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed text-white py-4 rounded-xl font-extrabold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 disabled:hover:translate-y-0"
              >
                {submitting
                  ? "⏳ Submitting..."
                  : "🤝 Submit Volunteer Application"}
              </button>

              {/* =================================================
                  APPROVAL NOTE
              ================================================== */}

              <p className="text-center text-xs text-gray-500 leading-5">
                तपाईंको आवेदन Admin approval पछि मात्र सार्वजनिक रूपमा
                देखाइनेछ।
              </p>
            </form>
          </div>

          {/* =================================================
              APPROVED VOLUNTEERS
          ================================================== */}

          <div className="flex flex-col">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl flex-1">
              {/* TITLE */}

              <div className="text-center">
                <span className="text-yellow-300 font-bold text-sm uppercase tracking-widest">
                  Our Community
                </span>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                  Our Volunteers
                </h3>

                <p className="text-blue-100 mt-3">
                  सेवामा जोडिनुभएका हाम्रा समर्पित सदस्यहरू
                </p>
              </div>

              {/* =================================================
                  LOADING
              ================================================== */}

              {loading && (
                <div className="mt-12 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-white/10 animate-pulse" />

                  <div className="h-5 w-40 bg-white/10 rounded mt-6 animate-pulse" />

                  <div className="h-4 w-28 bg-white/10 rounded mt-3 animate-pulse" />

                  <div className="h-3 w-52 bg-white/10 rounded mt-6 animate-pulse" />
                </div>
              )}

              {/* =================================================
                  NO VOLUNTEERS
              ================================================== */}

              {!loading && !active && (
                <div className="mt-12 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-5xl">
                    🤝
                  </div>

                  <h4 className="text-xl font-bold text-white mt-6">
                    Join Our Volunteer Team
                  </h4>

                  <p className="text-blue-100 mt-3 leading-7">
                    तपाईं पहिलो volunteer मध्ये एक बन्न सक्नुहुन्छ।
                  </p>
                </div>
              )}

              {/* =================================================
                  ACTIVE VOLUNTEER
              ================================================== */}

              {!loading && active && (
                <div className="mt-10">
                  <div
                    key={active.id}
                    className="text-center animate-[fadeIn_0.7s_ease-in-out]"
                  >
                    {/* =================================================
                        ROUND PHOTO
                    ================================================== */}

                    <div className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44">
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-yellow-300 via-white to-cyan-300 opacity-70 blur-sm" />

                      <div className="relative w-full h-full rounded-full border-4 border-white overflow-hidden bg-blue-800 shadow-2xl">
                        {active.photoUrl ? (
                          <img
                            src={active.photoUrl}
                            alt={active.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              const parent =
                                e.currentTarget.parentElement;

                              if (parent) {
                                parent.classList.add(
                                  "flex",
                                  "items-center",
                                  "justify-center"
                                );

                                const fallback =
                                  document.createElement("div");

                                fallback.className = "text-6xl";
                                fallback.textContent = "👤";

                                parent.appendChild(fallback);
                              }
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-6xl">
                            👤
                          </div>
                        )}
                      </div>
                    </div>

                    {/* =================================================
                        NAME
                    ================================================== */}

                    <h4 className="text-2xl sm:text-3xl font-extrabold text-white mt-7">
                      {active.name}
                    </h4>

                    {/* =================================================
                        AREA
                    ================================================== */}

                    {active.area && (
                      <div className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full bg-yellow-400/15 border border-yellow-300/30 text-yellow-300 font-bold text-sm">
                        🤝 {active.area}
                      </div>
                    )}

                    {/* =================================================
                        MESSAGE
                    ================================================== */}

                    {active.message && (
                      <p className="max-w-xl mx-auto text-blue-100 leading-7 mt-6 text-sm sm:text-base">
                        “{active.message}”
                      </p>
                    )}
                  </div>

                  {/* =================================================
                      PREVIOUS / NEXT BUTTONS
                  ================================================== */}

                  {volunteers.length > 1 && (
                    <div className="flex justify-center items-center gap-4 mt-8">
                      <button
                        type="button"
                        onClick={previousSlide}
                        aria-label="Previous volunteer"
                        className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition flex items-center justify-center"
                      >
                        ←
                      </button>

                      {/* SLIDER DOTS */}

                      <div className="flex justify-center items-center gap-2">
                        {volunteers.map((volunteer, index) => (
                          <button
                            key={volunteer.id}
                            type="button"
                            onClick={() => goToSlide(index)}
                            aria-label={`Show volunteer ${index + 1}`}
                            aria-current={
                              index === current ? "true" : undefined
                            }
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                              index === current
                                ? "w-8 bg-yellow-300"
                                : "w-2.5 bg-white/40 hover:bg-white/70"
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={nextSlide}
                        aria-label="Next volunteer"
                        className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition flex items-center justify-center"
                      >
                        →
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* =================================================
                  VOLUNTEER COUNT
              ================================================== */}

              {!loading && volunteers.length > 0 && (
                <div className="mt-10 pt-6 border-t border-white/15 text-center">
                  <span className="text-white/70 text-sm">
                    Proudly supported by
                  </span>

                  <div className="text-2xl font-extrabold text-yellow-300 mt-1">
                    {volunteers.length}+ Volunteers
                  </div>
                </div>
              )}
            </div>

            {/* =================================================
                BOTTOM MESSAGE
            ================================================== */}

            <div className="mt-6 rounded-2xl bg-white px-6 py-5 shadow-xl text-center">
              <p className="text-gray-700 font-semibold">
                ❤️ सेवा, सहयोग र सकारात्मक परिवर्तनका लागि
                <span className="text-blue-700">
                  {" "}
                  हामीसँग जोडिनुहोस्।
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          ANIMATION
      ================================================== */}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
