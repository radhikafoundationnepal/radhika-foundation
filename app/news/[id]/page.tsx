"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getNewsById } from "@/lib/firestore";

type NewsItem = {
  id: string;
  title: string;
  excerpt?: string;
  content: string;
  imageUrl?: string;
};

export default function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function loadNews() {
      try {
        const { id } = await params;

        const data = await getNewsById(id);

        if (!data) {
          setNotFound(true);
          return;
        }

        setNews(data as NewsItem);
      } catch (error) {
        console.error("News detail load error:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, [params]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="w-10 h-10 border-4 border-blue-700 border-t-transparent rounded-full animate-spin mx-auto" />

          <p className="text-gray-500 mt-4">
            Loading news...
          </p>

        </div>

      </main>
    );
  }

  if (notFound || !news) {
    return (
      <main className="min-h-screen bg-gray-50 py-24">

        <div className="max-w-3xl mx-auto px-6 text-center">

          <div className="text-6xl mb-6">
            📰
          </div>

          <h1 className="text-3xl font-bold text-gray-800">
            News Not Found
          </h1>

          <p className="text-gray-500 mt-3">
            यो समाचार उपलब्ध छैन वा हटाइएको हुन सक्छ।
          </p>

          <Link
            href="/"
            className="inline-block mt-8 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold"
          >
            ← Back to Home
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16">

      <div className="max-w-4xl mx-auto px-6">

        {/* BACK BUTTON */}

        <Link
          href="/"
          className="inline-flex items-center text-blue-700 font-semibold hover:underline mb-8"
        >
          ← Back to News
        </Link>

        {/* NEWS ARTICLE */}

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* IMAGE */}

          {news.imageUrl ? (
            <img
              src={news.imageUrl}
              alt={news.title}
              className="w-full max-h-[500px] object-cover"
            />
          ) : (
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-lg">
                No Image
              </span>
            </div>
          )}

          {/* CONTENT */}

          <div className="p-6 md:p-10">

            {/* TITLE */}

            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
              {news.title}
            </h1>

            {/* EXCERPT */}

            {news.excerpt && (
              <p className="text-lg md:text-xl text-gray-600 mt-6 leading-8">
                {news.excerpt}
              </p>
            )}

            {/* DIVIDER */}

            <div className="border-t my-8" />

            {/* FULL CONTENT */}

            <div className="text-gray-700 text-lg leading-8 whitespace-pre-line">
              {news.content}
            </div>

          </div>

        </article>

        {/* BACK BUTTON */}

        <div className="text-center mt-10">

          <Link
            href="/"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </main>
  );
}