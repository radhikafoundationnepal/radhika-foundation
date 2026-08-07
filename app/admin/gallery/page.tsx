"use client";

import { useEffect, useState } from "react";
import { getPublishedGallery } from "@/lib/firestore";

type GalleryItem = {
  id: string;
  title: string;
  image: string;
};

export default function GalleryPage() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGallery() {
      try {
        const data = await getPublishedGallery();
        setGallery(data as GalleryItem[]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadGallery();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">

          <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
            Gallery
          </h1>

          <p className="text-gray-600 mt-3">
            Radhika Foundation Nepal का कार्यक्रम तथा गतिविधिहरू
          </p>

        </div>

        {loading ? (
          <div className="text-center">
            <p className="text-gray-500">
              Loading gallery...
            </p>
          </div>
        ) : gallery.length === 0 ? (
          <div className="bg-white rounded-2xl shadow p-10 text-center">

            <h2 className="text-xl font-semibold text-gray-700">
              अहिले Gallery मा कुनै photo छैन।
            </h2>

            <p className="text-gray-500 mt-2">
              नयाँ photo प्रकाशित भएपछि यहाँ देखिनेछ।
            </p>

          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {gallery.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-5">

                  <h2 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h2>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </main>
  );
}