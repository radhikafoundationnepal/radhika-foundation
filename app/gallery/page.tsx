"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getPublishedGallery } from "@/lib/firestore";

type GalleryItem = {
  id: string;
  title: string;
  image: string;
};

export default function GalleryPage() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] =
    useState<GalleryItem | null>(null);

  useEffect(() => {
    async function loadGallery() {
      try {
        const data = await getPublishedGallery();

        setGallery(data as GalleryItem[]);
      } catch (error) {
        console.error("Gallery page load error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadGallery();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* =========================
          HEADER
      ========================== */}

      <section className="bg-blue-700 text-white py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="text-5xl mb-4">
            🖼️
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            Gallery
          </h1>

          <p className="text-blue-100 mt-4 text-lg">
            Radhika Foundation Nepal का कार्यक्रम तथा गतिविधिहरू
          </p>

        </div>

      </section>


      {/* =========================
          GALLERY
      ========================== */}

      <section className="py-14">

        <div className="max-w-7xl mx-auto px-6">

          {/* LOADING */}

          {loading && (
            <div className="text-center py-16">

              <div className="w-10 h-10 border-4 border-blue-700 border-t-transparent rounded-full animate-spin mx-auto" />

              <p className="text-gray-500 mt-4">
                Loading gallery...
              </p>

            </div>
          )}


          {/* EMPTY */}

          {!loading && gallery.length === 0 && (
            <div className="bg-white rounded-2xl shadow p-10 text-center">

              <div className="text-5xl mb-5">
                🖼️
              </div>

              <h2 className="text-2xl font-bold text-gray-700">
                अहिले Gallery मा कुनै photo छैन।
              </h2>

              <p className="text-gray-500 mt-3">
                नयाँ photo प्रकाशित भएपछि यहाँ देखिनेछ।
              </p>

            </div>
          )}


          {/* GALLERY GRID */}

          {!loading && gallery.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

              {gallery.map((item) => (

                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className="bg-white rounded-2xl shadow-md overflow-hidden text-left hover:shadow-2xl hover:-translate-y-1 transition group"
                >

                  {/* IMAGE */}

                  <div className="overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-60 object-cover group-hover:scale-105 transition duration-300"
                      loading="lazy"
                    />

                  </div>


                  {/* TITLE */}

                  <div className="p-4">

                    <h2 className="font-bold text-lg text-gray-800">
                      {item.title}
                    </h2>

                    <p className="text-sm text-blue-700 mt-2">
                      Click to view →
                    </p>

                  </div>

                </button>

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


      {/* =========================
          IMAGE POPUP
      ========================== */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white text-gray-800 text-2xl font-bold hover:bg-gray-200"
              aria-label="Close image"
            >
              ×
            </button>


            {/* IMAGE */}

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />


            {/* TITLE */}

            <div className="bg-white rounded-xl mt-4 p-4 text-center">

              <h2 className="text-xl font-bold text-gray-800">
                {selectedImage.title}
              </h2>

            </div>

          </div>

        </div>
      )}

    </main>
  );
}