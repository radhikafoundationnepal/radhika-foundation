"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getPublishedNotices } from "@/lib/firestore";

type NoticeItem = {
  id: string;
  title?: string;
  description?: string;
  createdAt?: {
    seconds?: number;
  };
};

export default function Notice() {
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNotices() {
      try {
        const data = await getPublishedNotices();

        setNotices((data as NoticeItem[]).slice(0, 5));
      } catch (error) {
        console.error("Notice loading error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadNotices();
  }, []);

  function formatDate(createdAt?: { seconds?: number }) {
    if (!createdAt?.seconds) {
      return "Latest";
    }

    return new Date(createdAt.seconds * 1000).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
      }
    );
  }

  return (
    <section className="py-20 md:py-28 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* =====================================
            HEADER
        ====================================== */}
        <div className="text-center max-w-3xl mx-auto">

          <div className="flex items-center justify-center gap-3">

            <span className="w-10 h-1 bg-red-500 rounded-full" />

            <span className="uppercase tracking-widest text-sm font-bold text-blue-700">
              Notice Board
            </span>

            <span className="w-10 h-1 bg-red-500 rounded-full" />

          </div>

          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Latest Notices
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-8">
            Radhika Foundation Nepal का महत्वपूर्ण सूचना,
            कार्यक्रम तथा आवश्यक जानकारीहरू।
          </p>

        </div>


        {/* =====================================
            LOADING
        ====================================== */}
        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-6 shadow animate-pulse"
              >

                <div className="w-14 h-14 bg-gray-200 rounded-xl" />

                <div className="h-5 bg-gray-200 rounded mt-5 w-4/5" />

                <div className="h-4 bg-gray-200 rounded mt-3" />

                <div className="h-4 bg-gray-200 rounded mt-2 w-5/6" />

              </div>
            ))}

          </div>
        )}


        {/* =====================================
            EMPTY
        ====================================== */}
        {!loading && notices.length === 0 && (
          <div className="mt-12 bg-white rounded-2xl shadow border border-gray-100 p-10 text-center">

            <div className="text-5xl">
              📢
            </div>

            <h3 className="text-xl font-bold text-gray-800 mt-4">
              No Notices Available
            </h3>

            <p className="text-gray-500 mt-2">
              नयाँ सूचना चाँडै प्रकाशित हुनेछ।
            </p>

          </div>
        )}


        {/* =====================================
            NOTICE CARDS
        ====================================== */}
        {!loading && notices.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {notices.map((notice, index) => (

              <article
                key={notice.id}
                className={`group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${
                  index === 0
                    ? "lg:col-span-2"
                    : ""
                }`}
              >

                <div className="flex items-start gap-5">

                  {/* ICON */}
                  <div
                    className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${
                      index === 0
                        ? "bg-blue-100"
                        : "bg-gray-100"
                    }`}
                  >
                    {index === 0 ? "📢" : "📄"}
                  </div>


                  {/* CONTENT */}
                  <div className="flex-1 min-w-0">

                    {/* DATE */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">

                      <span>
                        📅
                      </span>

                      <span>
                        {formatDate(notice.createdAt)}
                      </span>

                    </div>


                    {/* TITLE */}
                    <h3
                      className={`mt-2 font-extrabold leading-7 ${
                        index === 0
                          ? "text-xl md:text-2xl text-gray-900 group-hover:text-blue-700"
                          : "text-lg text-gray-800 group-hover:text-blue-700"
                      } transition`}
                    >
                      {notice.title || "Foundation Notice"}
                    </h3>


                    {/* DESCRIPTION */}
                    <p className="mt-3 text-gray-500 text-sm leading-6 line-clamp-3">
                      {notice.description ||
                        "Radhika Foundation Nepal को महत्वपूर्ण सूचना।"}
                    </p>

                  </div>

                </div>


                {/* IMPORTANT BADGE */}
                {index === 0 && (
                  <div className="mt-5">

                    <span className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-xs font-bold">
                      <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                      Latest Notice
                    </span>

                  </div>
                )}

              </article>

            ))}

          </div>
        )}


        {/* =====================================
            VIEW ALL
        ====================================== */}
        {!loading && notices.length > 0 && (
          <div className="mt-12 text-center">

            <Link
              href="/notice"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 rounded-lg font-bold shadow-lg transition"
            >
              View All Notices
              <span>→</span>
            </Link>

          </div>
        )}

      </div>

    </section>
  );
}
