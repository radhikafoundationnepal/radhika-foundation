"use client";

import { useEffect, useState } from "react";
import {
  addNews,
  deleteNews,
  getNews,
  updateNews,
} from "@/lib/firestore";

type NewsItem = {
  id: string;
  title: string;
  description: string;
  image?: string;
};

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  async function loadNews() {
    try {
      const data = await getNews();
      setNews(data as NewsItem[]);
    } catch (error) {
      console.error(error);
      alert("News load हुन सकेन।");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadNews();
  }, []);

  function clearForm() {
    setTitle("");
    setDescription("");
    setImage("");
    setEditingId(null);
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Title र Description आवश्यक छ।");
      return;
    }

    try {
      setSaving(true);

      if (editingId) {
        await updateNews(
          editingId,
          title,
          description,
          image
        );

        alert("News updated successfully!");
      } else {
        await addNews(
          title,
          description,
          image
        );

        alert("News added successfully!");
      }

      clearForm();
      await loadNews();

    } catch (error) {
      console.error(error);
      alert("News save गर्न समस्या भयो।");
    } finally {
      setSaving(false);
    }
  }

  function editNews(item: NewsItem) {
    setEditingId(item.id);
    setTitle(item.title);
    setDescription(item.description);
    setImage(item.image || "");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function handleDelete(id: string) {
    const confirmDelete = window.confirm(
      "यो News delete गर्ने हो?"
    );

    if (!confirmDelete) return;

    try {
      await deleteNews(id);

      alert("News deleted!");

      await loadNews();
    } catch (error) {
      console.error(error);
      alert("News delete गर्न समस्या भयो।");
    }
  }

  return (
    <div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-blue-700">
          News Management
        </h1>

        <p className="text-gray-600 mt-2">
          Add, edit and manage foundation news.
        </p>
      </div>

      {/* FORM */}

      <div className="bg-white rounded-xl shadow p-6 mb-8">

        <h2 className="text-2xl font-bold mb-6">
          {editingId ? "Edit News" : "Add New News"}
        </h2>

        <form onSubmit={handleSubmit}>

          <label className="block font-semibold mb-2">
            News Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter news title"
            className="w-full border rounded-lg p-3 mb-5"
          />

          <label className="block font-semibold mb-2">
            Description
          </label>

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            placeholder="Enter news description"
            rows={6}
            className="w-full border rounded-lg p-3 mb-5"
          />

          <label className="block font-semibold mb-2">
            Image URL
          </label>

          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="w-full border rounded-lg p-3"
          />

          {/* IMAGE PREVIEW */}

          {image && (
            <div className="mt-4 mb-6">

              <p className="font-semibold mb-2">
                Image Preview
              </p>

              <img
                src={image}
                alt="News preview"
                className="w-full max-w-md h-52 object-cover rounded-lg border"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

            </div>
          )}

          <div className="flex gap-3 mt-6">

            <button
              type="submit"
              disabled={saving}
              className="bg-blue-700 hover:bg-blue-800 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-bold"
            >
              {saving
                ? "Saving..."
                : editingId
                ? "Update News"
                : "Add News"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={clearForm}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg"
              >
                Cancel
              </button>
            )}

          </div>

        </form>
      </div>

      {/* NEWS LIST */}

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-bold mb-6">
          All News
        </h2>

        {loading ? (
          <p>Loading news...</p>
        ) : news.length === 0 ? (
          <p className="text-gray-500">
            अहिले कुनै News छैन।
          </p>
        ) : (
          <div className="space-y-5">

            {news.map((item) => (
              <div
                key={item.id}
                className="border rounded-xl p-5"
              >

                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-w-md h-52 object-cover rounded-lg mb-4"
                  />
                )}

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-2 whitespace-pre-line">
                  {item.description}
                </p>

                <div className="flex gap-2 mt-5">

                  <button
                    onClick={() => editNews(item)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(item.id)
                    }
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}