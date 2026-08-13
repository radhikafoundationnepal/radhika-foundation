"use client";

import { useEffect, useState } from "react";

import {
  addGalleryItem,
  getGallery,
  updateGalleryItem,
  deleteGalleryItem,
} from "@/lib/firestore";

type GalleryItem = {
  id: string;
  title: string;
  image: string;
  published: boolean;
};

export default function GalleryAdminPage() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [published, setPublished] = useState(true);

  async function loadGallery() {
    try {
      const data = await getGallery();

      setGallery(data as GalleryItem[]);
    } catch (error) {
      console.error(error);
      alert("Gallery load गर्न समस्या भयो।");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadGallery();
  }, []);

  function resetForm() {
    setTitle("");
    setImage("");
    setPublished(true);
    setEditingId(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim() || !image.trim()) {
      alert("Title र Image URL आवश्यक छ।");
      return;
    }

    try {
      setSaving(true);

      if (editingId) {
        await updateGalleryItem(
          editingId,
          title,
          image,
          published
        );

        alert("Gallery item successfully updated!");
      } else {
        await addGalleryItem(
          title,
          image,
          published
        );

        alert("Gallery item successfully added!");
      }

      resetForm();

      await loadGallery();
    } catch (error) {
      console.error(error);
      alert("Gallery save गर्न समस्या भयो।");
    } finally {
      setSaving(false);
    }
  }

  function handleEdit(item: GalleryItem) {
    setEditingId(item.id);

    setTitle(item.title || "");
    setImage(item.image || "");
    setPublished(item.published ?? true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function handleDelete(id: string) {
    const confirmDelete = window.confirm(
      "यो photo gallery बाट delete गर्ने हो?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteGalleryItem(id);

      alert("Gallery item deleted!");

      await loadGallery();
    } catch (error) {
      console.error(error);
      alert("Gallery item delete गर्न समस्या भयो।");
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">

      <div className="max-w-6xl mx-auto">

        {/* PAGE HEADER */}

        <div className="mb-8">

          <h1 className="text-4xl font-bold text-blue-700">
            Gallery Management
          </h1>

          <p className="text-gray-600 mt-2">
            Website का photos यहाँबाट manage गर्नुहोस्।
          </p>

        </div>

        {/* ADD / EDIT FORM */}

        <div className="bg-white rounded-2xl shadow p-6 mb-10">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-bold text-gray-800">
              {editingId
                ? "Edit Gallery Item"
                : "Add New Photo"}
            </h2>

            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="text-gray-600 hover:text-gray-900 font-semibold"
              >
                Cancel Edit
              </button>
            )}

          </div>

          <form onSubmit={handleSubmit}>

            {/* TITLE */}

            <label className="block font-semibold mb-2">
              Photo Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              placeholder="Enter photo title"
              className="w-full border rounded-lg p-3 mb-5"
              required
            />

            {/* IMAGE URL */}

            <label className="block font-semibold mb-2">
              Image URL
            </label>

            <input
              type="url"
              value={image}
              onChange={(e) =>
                setImage(e.target.value)
              }
              placeholder="https://example.com/photo.jpg"
              className="w-full border rounded-lg p-3 mb-5"
              required
            />

            {/* IMAGE PREVIEW */}

            {image && (
              <div className="mb-6">

                <p className="font-semibold mb-2">
                  Image Preview
                </p>

                <img
                  src={image}
                  alt="Preview"
                  className="w-full max-w-md h-64 object-cover rounded-xl border"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

              </div>
            )}

            {/* PUBLISHED */}

            <div className="flex items-center gap-3 mb-6">

              <input
                id="published"
                type="checkbox"
                checked={published}
                onChange={(e) =>
                  setPublished(e.target.checked)
                }
                className="w-5 h-5"
              />

              <label
                htmlFor="published"
                className="font-semibold"
              >
                Publish this photo
              </label>

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={saving}
              className="bg-blue-700 hover:bg-blue-800 disabled:bg-gray-400 text-white font-bold px-6 py-3 rounded-lg"
            >
              {saving
                ? "Saving..."
                : editingId
                ? "Update Photo"
                : "Add Photo"}
            </button>

          </form>

        </div>

        {/* ALL GALLERY */}

        <div>

          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            All Gallery Photos
          </h2>

          {loading ? (
            <p className="text-gray-500">
              Loading gallery...
            </p>
          ) : gallery.length === 0 ? (
            <div className="bg-white rounded-xl shadow p-8 text-center">

              <p className="text-gray-500">
                अहिलेसम्म कुनै photo छैन।
              </p>

            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {gallery.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow overflow-hidden"
                >

                  {/* IMAGE */}

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />

                  {/* CONTENT */}

                  <div className="p-5">

                    <div className="flex items-start justify-between gap-3">

                      <h3 className="text-xl font-bold text-gray-800">
                        {item.title}
                      </h3>

                      {item.published ? (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                          Published
                        </span>
                      ) : (
                        <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                          Unpublished
                        </span>
                      )}

                    </div>

                    {/* ACTIONS */}

                    <div className="flex gap-3 mt-5">

                      <button
                        type="button"
                        onClick={() =>
                          handleEdit(item)
                        }
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleDelete(item.id)
                        }
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>
          )}

        </div>

      </div>

    </main>
  );
}