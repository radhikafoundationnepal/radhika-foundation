"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getNews } from "@/lib/firestore";

type NewsItem = {
  id: string;
  title: string;
  excerpt?: string;
  content: string;
  imageUrl?: string;
};

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const data = await getNews();

        // Home page मा पछिल्ला 3 वटा मात्र
        setNews((data as NewsItem[]).slice(0, 3));
      } catch (error) {
        console.error("News load error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, []);

  return (
    <section
      id="news"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
            Latest News
          </h2>

          <p className="text-gray-600 mt-4">
            Radhika Foundation Nepal का पछिल्ला गतिविधि तथा समाचारहरू
          </p>

        </div>

        {/* LOADING */}
        {loading && (
          <div className="text-center py-10">
            <p className="text-gray-500">
              Loading news...
            </p>
          </div>
        )}

        {/* EMPTY */}
        {!loading && news.length === 0 && (
          <div className="bg-gray-50 rounded-2xl p-10 text-center">

            <h3 className="text-xl font-semibold text-gray-700">
              अहिले कुनै news उपलब्ध छैन।
            </h3>

            <p className="text-gray-500 mt-2">
              नयाँ news प्रकाशित भएपछि यहाँ देखिनेछ।
            </p>

          </div>
        )}

        {/* NEWS LIST */}
        {!loading && news.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {news.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-2xl transition"
              >

                {/* IMAGE */}
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />
                ) : (
                  <div className="w-full h-56 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400">
                      No Image
                    </span>
                  </div>
                )}

                {/* CONTENT */}
                <div className="p-7">

                  <h3 className="text-2xl font-bold text-gray-800">
                    {item.title}
                  </h3>

                  {item.excerpt && (
                    <p className="text-gray-600 mt-4">
                      {item.excerpt}
                    </p>
                  )}

                  {item.content && (
                    <p className="text-gray-500 mt-4 line-clamp-3 whitespace-pre-line">
                      {item.content}
                    </p>
                  )}

                  {/* READ MORE */}
                  <Link
                    href={`/news/${item.id}`}
                    className="inline-block mt-6 text-blue-700 font-bold hover:underline"
                  >
                    Read More →
                  </Link>

                </div>

              </article>
            ))}

          </div>
        )}

        {/* VIEW ALL NEWS */}
        {!loading && news.length > 0 && (
          <div className="text-center mt-12">

            <Link
              href="/news"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 rounded-lg font-bold transition"
            >
              View All News →
            </Link>

          </div>
        )}

      </div>
    </section>
  );
}