"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getNews } from "@/lib/firestore";

type NewsItem = {
  id: string;
  title?: string;
  excerpt?: string;
  content?: string;
  imageUrl?: string;
  createdAt?: {
    seconds?: number;
  };
};

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const data = await getNews();

        setNews((data as NewsItem[]).slice(0, 3));
      } catch (error) {
        console.error("News loading error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
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
    <section className="py-20 md:py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* =========================================
            SECTION HEADER
        ========================================== */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">

              <span className="w-10 h-1 bg-red-500 rounded-full" />

              <span className="uppercase tracking-widest text-sm font-bold text-blue-700">
                Latest News
              </span>

            </div>

            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
              News & Updates
            </h2>

            <p className="mt-5 text-gray-600 text-lg leading-8">
              Radhika Foundation Nepal का पछिल्ला गतिविधि,
              कार्यक्रम तथा सामाजिक सेवासम्बन्धी समाचारहरू।
            </p>

          </div>


          {/* VIEW ALL */}
          <Link
            href="/news"
            className="inline-flex items-center gap-2 shrink-0 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-bold shadow-md transition"
          >
            View All News
            <span>→</span>
          </Link>

        </div>


        {/* =========================================
            LOADING
        ========================================== */}
        {loading && (
          <div className="grid md:grid-cols-3 gap-7 mt-12">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-100 rounded-2xl overflow-hidden animate-pulse"
              >

                <div className="h-56 bg-gray-200" />

                <div className="p-6">

                  <div className="h-4 bg-gray-200 rounded w-1/3" />

                  <div className="h-6 bg-gray-200 rounded mt-4" />

                  <div className="h-4 bg-gray-200 rounded mt-3" />

                  <div className="h-4 bg-gray-200 rounded mt-2 w-4/5" />

                </div>

              </div>
            ))}

          </div>
        )}


        {/* =========================================
            EMPTY
        ========================================== */}
        {!loading && news.length === 0 && (
          <div className="mt-12 bg-gray-50 border border-gray-100 rounded-2xl p-10 text-center">

            <div className="text-5xl">
              📰
            </div>

            <h3 className="text-xl font-bold text-gray-800 mt-4">
              No News Available
            </h3>

            <p className="text-gray-500 mt-2">
              नयाँ समाचार तथा updates चाँडै प्रकाशित हुनेछन्।
            </p>

          </div>
        )}


        {/* =========================================
            NEWS CARDS
        ========================================== */}
        {!loading && news.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">

            {news.map((item) => (

              <article
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >

                {/* IMAGE */}
                <Link
                  href={`/news/${item.id}`}
                  className="block"
                >

                  <div className="relative h-56 bg-gray-100 overflow-hidden">

                    {item.imageUrl ? (

                      <Image
                        src={item.imageUrl}
                        alt={item.title || "Radhika Foundation News"}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                    ) : (

                      <div className="absolute inset-0 flex items-center justify-center bg-blue-50">

                        <div className="text-center">

                          <div className="text-5xl">
                            📰
                          </div>

                          <p className="text-blue-700 font-semibold mt-2">
                            Radhika Foundation
                          </p>

                        </div>

                      </div>

                    )}

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  </div>

                </Link>


                {/* CONTENT */}
                <div className="p-6">

                  {/* DATE */}
                  <div className="flex items-center gap-2 text-sm">

                    <span className="text-red-600">
                      📅
                    </span>

                    <span className="text-gray-500">
                      {formatDate(item.createdAt)}
                    </span>

                  </div>


                  {/* TITLE */}
                  <Link href={`/news/${item.id}`}>

                    <h3 className="mt-4 text-xl font-extrabold text-gray-900 leading-7 group-hover:text-blue-700 transition">

                      {item.title || "Radhika Foundation News"}

                    </h3>

                  </Link>


                  {/* EXCERPT */}
                  <p className="mt-3 text-gray-500 text-sm leading-6 line-clamp-3">

                    {item.excerpt ||
                      item.content ||
                      "Radhika Foundation Nepal का गतिविधि तथा सामाजिक सेवासम्बन्धी जानकारी।"}

                  </p>


                  {/* READ MORE */}
                  <Link
                    href={`/news/${item.id}`}
                    className="inline-flex items-center gap-2 mt-5 text-blue-700 font-bold hover:text-blue-900 transition"
                  >
                    Read More

                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>

                </div>

              </article>

            ))}

          </div>
        )}


        {/* =========================================
            BOTTOM CTA
        ========================================== */}
        {!loading && news.length > 0 && (
          <div className="mt-12 text-center">

            <Link
              href="/news"
              className="inline-flex items-center gap-2 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-7 py-3 rounded-lg font-bold transition"
            >
              Explore All News
              <span>→</span>
            </Link>

          </div>
        )}

      </div>

    </section>
  );
}
