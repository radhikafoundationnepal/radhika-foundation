"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getNews } from "@/lib/firestore";

type NewsItem = {
  id: string;
  title: string;
  excerpt?: string;
  content: string;
  imageUrl?: string;
};

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const data = await getNews();

        setNews(data as NewsItem[]);
      } catch (error) {
        console.error("News page load error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* =========================
          HEADER
      ========================== */}

      <section className="bg-blue-700 text-white py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="text-5xl mb-4">
            📰
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            Latest News
          </h1>

          <p className="text-blue-100 mt-4 text-lg">
            Radhika Foundation Nepal का पछिल्ला गतिविधि तथा समाचारहरू
          </p>

        </div>

      </section>


      {/* =========================
          NEWS LIST
      ========================== */}

      <section className="py-14">

        <div className="max-w-7xl mx-auto px-6">

          {/* LOADING */}

          {loading && (
            <div className="text-center py-16">

              <div className="w-10 h-10 border-4 border-blue-700 border-t-transparent rounded-full animate-spin mx-auto" />

              <p className="text-gray-500 mt-4">
                Loading news...
              </p>

            </div>
          )}


          {/* EMPTY */}

          {!loading && news.length === 0 && (
            <div className="bg-white rounded-2xl shadow p-10 text-center">

              <div className="text-5xl mb-5">
                📰
              </div>

              <h2 className="text-2xl font-bold text-gray-700">
                अहिले कुनै news उपलब्ध छैन।
              </h2>

              <p className="text-gray-500 mt-3">
                नयाँ news प्रकाशित भएपछि यहाँ देखिनेछ।
              </p>

            </div>
          )}


          {/* NEWS GRID */}

          {!loading && news.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {news.map((item) => (

                <article
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md border overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition"
                >

                  {/* IMAGE */}

                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-60 object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-60 bg-gray-100 flex items-center justify-center">
                      <span className="text-5xl">
                        📰
                      </span>
                    </div>
                  )}


                  {/* CONTENT */}

                  <div className="p-6">

                    <h2 className="text-2xl font-bold text-gray-800">
                      {item.title}
                    </h2>


                    {/* EXCERPT */}

                    {item.excerpt && (
                      <p className="text-gray-600 mt-4 leading-7">
                        {item.excerpt}
                      </p>
                    )}


                    {/* CONTENT PREVIEW */}

                    {item.content && (
                      <p className="text-gray-500 mt-3 leading-7 line-clamp-3 whitespace-pre-line">
                        {item.content}
                      </p>
                    )}


                    {/* READ MORE */}

                    <Link
                      href={`/news/${item.id}`}
                      className="inline-block mt-6 bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-lg font-semibold transition"
                    >
                      Read More →
                    </Link>

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