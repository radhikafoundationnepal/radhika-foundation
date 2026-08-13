"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPublishedGallery } from "@/lib/firestore";

type GalleryItem = {
  id: string;
  title?: string;
  image?: string;
  createdAt?: {
    seconds?: number;
  };
};

export default function Gallery() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGallery() {
      try {
        const data = await getPublishedGallery();

        setGallery((data as GalleryItem[]).slice(0, 6));
      } catch (error) {
        console.error("Gallery loading error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadGallery();
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================================
            HEADER
        ================================= */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">
              <span className="w-10 h-1 bg-red-500 rounded-full" />

              <span className="uppercase tracking-widest text-sm font-bold text-blue-700">
                Our Gallery
              </span>
            </div>

            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Moments That Matter
            </h2>

            <p className="mt-5 text-gray-600 text-lg leading-8">
              Radhika Foundation Nepal का कार्यक्रम,
              सेवा तथा सामाजिक गतिविधिका केही सम्झनायोग्य
              तस्बिरहरू।
            </p>

          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 shrink-0 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-bold shadow-md transition"
          >
            View Full Gallery
            <span>→</span>
          </Link>

        </div>


        {/* ================================
            LOADING
        ================================= */}
        {loading && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-12">

            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="h-56 md:h-72 bg-gray-100 rounded-2xl animate-pulse"
              />
            ))}

          </div>
        )}


        {/* ================================
            EMPTY
        ================================= */}
        {!loading && gallery.length === 0 && (
          <div className="mt-12 bg-gray-50 border border-gray-100 rounded-2xl p-12 text-center">

            <div className="text-6xl">
              🖼️
            </div>

            <h3 className="text-xl font-bold text-gray-800 mt-4">
              Gallery Coming Soon
            </h3>

            <p className="text-gray-500 mt-2">
              हाम्रो कार्यक्रम तथा गतिविधिका तस्बिरहरू
              चाँडै यहाँ प्रकाशित हुनेछन्।
            </p>

          </div>
        )}


        {/* ================================
            GALLERY GRID
        ================================= */}
        {!loading && gallery.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-12">

            {gallery.map((item, index) => (

              <Link
                key={item.id}
                href="/gallery"
                className={`
                  group relative overflow-hidden rounded-2xl
                  shadow-lg hover:shadow-2xl
                  transition-all duration-500
                  bg-gray-100
                  ${
                    index === 0
                      ? "md:row-span-2 h-80 md:h-[600px]"
                      : "h-56 md:h-72"
                  }
                `}
              >

                {/* IMAGE */}
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title || "Radhika Foundation Gallery"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                    <div className="text-center">
                      <div className="text-5xl">
                        🖼️
                      </div>

                      <p className="text-blue-700 font-semibold mt-2">
                        Radhika Foundation
                      </p>
                    </div>
                  </div>
                )}

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition" />


                {/* CONTENT */}
                <div className="absolute left-0 right-0 bottom-0 p-5 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">

                  <div className="flex items-center gap-2 text-white/80 text-xs uppercase tracking-wider font-semibold">
                    <span>📷</span>
                    <span>Radhika Foundation</span>
                  </div>

                  <h3 className="mt-2 text-white text-lg md:text-xl font-extrabold">
                    {item.title || "Our Activities"}
                  </h3>

                  <div className="mt-3 inline-flex items-center gap-2 text-yellow-300 font-bold text-sm">
                    View Gallery
                    <span className="group-hover:translate-x-1 transition">
                      →
                    </span>
                  </div>

                </div>

              </Link>

            ))}

          </div>
        )}


        {/* ================================
            BOTTOM CTA
        ================================= */}
        {!loading && gallery.length > 0 && (
          <div className="mt-12 text-center">

            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-7 py-3 rounded-lg font-bold transition"
            >
              Explore More Photos
              <span>→</span>
            </Link>

          </div>
        )}

      </div>
    </section>
  );
}
