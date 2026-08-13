"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getPublishedNotices } from "@/lib/firestore";

type NoticeItem = {
  id: string;
  title: string;
  description: string;
};

export default function Notice() {
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNotices() {
      try {
        const data = await getPublishedNotices();

        // Home page मा पछिल्ला 3 वटा Notice मात्र
        setNotices((data as NoticeItem[]).slice(0, 3));
      } catch (error) {
        console.error("Notice load error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadNotices();
  }, []);

  return (
    <section
      id="notice"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
            Latest Notices
          </h2>

          <p className="text-gray-600 mt-3">
            Radhika Foundation Nepal का महत्वपूर्ण सूचनाहरू
          </p>

        </div>

        {/* LOADING */}
        {loading ? (
          <div className="text-center py-10">
            <p className="text-gray-500">
              Loading notices...
            </p>
          </div>
        ) : notices.length === 0 ? (

          /* NO NOTICE */

          <div className="bg-white rounded-2xl shadow p-10 text-center">

            <h3 className="text-xl font-semibold text-gray-700">
              अहिले कुनै सूचना उपलब्ध छैन।
            </h3>

            <p className="text-gray-500 mt-2">
              नयाँ सूचना प्रकाशित भएपछि यहाँ देखिनेछ।
            </p>

          </div>

        ) : (

          /* NOTICE LIST */

          <div className="space-y-5">

            {notices.map((notice) => (

              <div
                key={notice.id}
                className="bg-white rounded-2xl shadow-md p-6 md:p-8 border-l-4 border-blue-700 hover:shadow-lg transition"
              >

                <div className="flex gap-4">

                  <div className="text-2xl">
                    📢
                  </div>

                  <div className="flex-1">

                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                      {notice.title}
                    </h3>

                    <p className="text-gray-600 mt-3 whitespace-pre-line leading-7">
                      {notice.description}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

        {/* VIEW ALL */}
        {!loading && notices.length > 0 && (
          <div className="text-center mt-10">

            <Link
              href="/notice"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              View All Notices →
            </Link>

          </div>
        )}

      </div>
    </section>
  );
}