"use client";

import { useEffect, useState } from "react";
import { getPublishedNotices } from "@/lib/firestore";

type NoticeItem = {
  id: string;
  title: string;
  description: string;
};

export default function NoticePage() {
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNotices() {
      try {
        const data = await getPublishedNotices();
        setNotices(data as NoticeItem[]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadNotices();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">

          <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
            Notices
          </h1>

          <p className="text-gray-600 mt-3">
            Radhika Foundation Nepal का महत्वपूर्ण सूचनाहरू
          </p>

        </div>

        {loading ? (
          <div className="text-center">
            <p className="text-gray-500">
              Loading notices...
            </p>
          </div>
        ) : notices.length === 0 ? (
          <div className="bg-white rounded-2xl shadow p-10 text-center">

            <h2 className="text-xl font-semibold text-gray-700">
              अहिले कुनै सूचना उपलब्ध छैन।
            </h2>

            <p className="text-gray-500 mt-2">
              नयाँ सूचना प्रकाशित भएपछि यहाँ देखिनेछ।
            </p>

          </div>
        ) : (
          <div className="space-y-6">

            {notices.map((notice) => (
              <article
                key={notice.id}
                className="bg-white rounded-2xl shadow-md p-6 md:p-8 border-l-4 border-blue-700"
              >

                <h2 className="text-2xl font-bold text-gray-800">
                  {notice.title}
                </h2>

                <p className="text-gray-600 mt-4 whitespace-pre-line leading-7">
                  {notice.description}
                </p>

              </article>
            ))}

          </div>
        )}

      </div>

    </main>
  );
}