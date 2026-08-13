"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getPublishedNotices } from "@/lib/firestore";

type NoticeItem = {
  id: string;
  title: string;
  description: string;
};

export default function NoticesPage() {
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNotices() {
      try {
        const data = await getPublishedNotices();

        setNotices(data as NoticeItem[]);
      } catch (error) {
        console.error("Notice page load error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadNotices();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HEADER */}

      <section className="bg-blue-700 text-white py-16">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="text-5xl mb-4">
            📢
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            Latest Notices
          </h1>

          <p className="text-blue-100 mt-4 text-lg">
            Radhika Foundation Nepal का महत्वपूर्ण सूचनाहरू
          </p>

        </div>

      </section>


      {/* NOTICE LIST */}

      <section className="py-14">

        <div className="max-w-5xl mx-auto px-6">

          {/* LOADING */}

          {loading && (
            <div className="text-center py-16">

              <div className="w-10 h-10 border-4 border-blue-700 border-t-transparent rounded-full animate-spin mx-auto" />

              <p className="text-gray-500 mt-4">
                Loading notices...
              </p>

            </div>
          )}


          {/* EMPTY */}

          {!loading && notices.length === 0 && (
            <div className="bg-white rounded-2xl shadow p-10 text-center">

              <div className="text-5xl mb-5">
                📢
              </div>

              <h2 className="text-2xl font-bold text-gray-700">
                अहिले कुनै सूचना उपलब्ध छैन।
              </h2>

              <p className="text-gray-500 mt-3">
                नयाँ सूचना प्रकाशित भएपछि यहाँ देखिनेछ।
              </p>

            </div>
          )}


          {/* NOTICES */}

          {!loading && notices.length > 0 && (
            <div className="space-y-6">

              {notices.map((notice) => (

                <article
                  key={notice.id}
                  className="bg-white rounded-2xl shadow-md border-l-4 border-blue-700 p-6 md:p-8 hover:shadow-xl transition"
                >

                  <div className="flex gap-5">

                    {/* ICON */}

                    <div className="flex-shrink-0">

                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                        📢
                      </div>

                    </div>


                    {/* CONTENT */}

                    <div className="flex-1">

                      <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                        {notice.title}
                      </h2>

                      <p className="text-gray-600 mt-4 leading-7 whitespace-pre-line">
                        {notice.description}
                      </p>

                    </div>

                  </div>

                </article>

              ))}

            </div>
          )}


          {/* BACK HOME */}

          <div className="text-center mt-12">

            <Link
              href="/"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 rounded-xl font-semibold transition"
            >
              ← Back to Home
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}