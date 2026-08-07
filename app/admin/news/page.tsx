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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Title र Description आवश्यक छ।");
      return;
    }

    try {
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

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-blue-700">
            News Management
          </h1>

          <p className="text-gray-600 mt-2">
            Add, edit and manage foundation news.
          </p>
        </div>
      </div>

      {/* Add / Edit Form */}

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
            className="w-full border rounded-lg p-3 mb-6"
          />

          <div className="flex gap-3">

            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-bold"
            >
              {editingId ? "Update News" : "Add News"}
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

      {/* News List */}

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

                <div className="flex flex-col md:flex-row gap-5 justify-between">

                  <div className="flex-1">

                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-2 whitespace-pre-line">
                      {item.description}
                    </p>

                    {item.image && (
                      <p className="text-sm text-blue-600 mt-3 break-all">
                        Image: {item.image}
                      </p>
                    )}

                  </div>

                  <div className="flex gap-2 items-start">

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

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}