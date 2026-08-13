"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getPublishedGallery } from "@/lib/firestore";

type GalleryItem = {
  id: string;
  title: string;
  image: string;
};

export default function Gallery() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedImage, setSelectedImage] =
    useState<GalleryItem | null>(null);

  useEffect(() => {
    async function loadGallery() {
      try {
        const data = await getPublishedGallery();

        // Home page मा पछिल्ला 4 वटा photo मात्र
        setGallery((data as GalleryItem[]).slice(0, 4));
      } catch (error) {
        console.error("Gallery load error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadGallery();
  }, []);

  // ESC key ले modal बन्द गर्ने
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  return (
    <section
      id="gallery"
      className="py-24 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
            Gallery
          </h2>

          <p className="text-gray-600 mt-3">
            Radhika Foundation Nepal का कार्यक्रम तथा गतिविधिहरू
          </p>

        </div>


        {/* LOADING */}

        {loading && (
          <div className="text-center py-10">

            <p className="text-gray-500">
              Loading gallery...
            </p>

          </div>
        )}


        {/* NO PHOTO */}

        {!loading && gallery.length === 0 && (
          <div className="bg-white rounded-2xl shadow p-10 text-center">

            <h3 className="text-xl font-semibold text-gray-700">
              अहिले Gallery मा कुनै photo छैन।
            </h3>

            <p className="text-gray-500 mt-2">
              नयाँ photo प्रकाशित भएपछि यहाँ देखिनेछ।
            </p>

          </div>
        )}


        {/* GALLERY */}

        {!loading && gallery.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            {gallery.map((item) => (

              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedImage(item)}
                className="group text-left bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >

                {/* IMAGE */}

                <div className="relative overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                    loading="lazy"
                  />

                  {/* VIEW */}

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">

                    <span className="opacity-0 group-hover:opacity-100 transition bg-white/90 text-gray-800 rounded-full px-4 py-2 font-semibold">
                      🔍 View
                    </span>

                  </div>

                </div>


                {/* TITLE */}

                <div className="p-4">

                  <h3 className="font-bold text-lg text-gray-800 line-clamp-2">
                    {item.title}
                  </h3>

                </div>

              </button>

            ))}

          </div>
        )}


        {/* VIEW ALL GALLERY */}

        {!loading && gallery.length > 0 && (
          <div className="text-center mt-12">

            <Link
              href="/gallery"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 rounded-lg font-bold transition"
            >
              View All Gallery →
            </Link>

          </div>
        )}

      </div>


      {/* =========================
          IMAGE MODAL
      ========================== */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 md:right-2 w-10 h-10 rounded-full bg-white text-gray-800 text-2xl font-bold hover:bg-gray-200 transition"
              aria-label="Close image"
            >
              ×
            </button>


            {/* LARGE IMAGE */}

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />


            {/* TITLE */}

            <div className="bg-white rounded-xl px-6 py-4 mt-4 max-w-2xl w-full text-center">

              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                {selectedImage.title}
              </h3>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}