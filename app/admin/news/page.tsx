"use client";

import { useEffect, useState } from "react";

import {
  addNews,
  getNews,
  updateNews,
  deleteNews,
} from "@/lib/firestore";

type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
};

export default function NewsAdminPage() {
  const [news, setNews] = useState<NewsItem[]>([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function loadNews() {
    try {
      const data = await getNews();

      setNews(data as NewsItem[]);
    } catch (error) {
      console.error(error);
      alert("News load गर्न समस्या भयो।");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadNews();
  }, []);

  function resetForm() {
    setTitle("");
    setExcerpt("");
    setContent("");
    setImageUrl("");
    setEditingId(null);
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Title र Content आवश्यक छ।");
      return;
    }

    try {
      setSaving(true);

      if (editingId) {
        await updateNews(
          editingId,
          title,
          excerpt,
          content,
          imageUrl
        );

        alert("News successfully updated!");
      } else {
        await addNews(
          title,
          excerpt,
          content,
          imageUrl
        );

        alert("News successfully added!");
      }

      resetForm();

      await loadNews();
    } catch (error) {
      console.error(error);
      alert("News save गर्न समस्या भयो।");
    } finally {
      setSaving(false);
    }
  }

  function handleEdit(item: NewsItem) {
    setEditingId(item.id);

    setTitle(item.title || "");
    setExcerpt(item.excerpt || "");
    setContent(item.content || "");
    setImageUrl(item.imageUrl || "");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function handleDelete(id: string) {
    const confirmDelete = window.confirm(
      "यो news delete गर्ने हो?"
    );

    if (!confirmDelete) {
      return;
    }

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

      {/* PAGE HEADER */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-blue-700">
          News Management
        </h1>

        <p className="text-gray-600 mt-2">
          Website का news यहाँबाट manage गर्नुहोस्।
        </p>

      </div>

      {/* ADD / EDIT FORM */}

      <div className="bg-white rounded-2xl shadow p-6 mb-8">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold text-gray-800">
            {editingId
              ? "Edit News"
              : "Add New News"}
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
            News Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            placeholder="Enter news title"
            className="w-full border rounded-lg p-3 mb-5"
            required
          />

          {/* EXCERPT */}

          <label className="block font-semibold mb-2">
            Short Description
          </label>

          <textarea
            value={excerpt}
            onChange={(e) =>
              setExcerpt(e.target.value)
            }
            placeholder="Short description of the news"
            rows={3}
            className="w-full border rounded-lg p-3 mb-5"
          />

          {/* CONTENT */}

          <label className="block font-semibold mb-2">
            News Content
          </label>

          <textarea
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
            placeholder="Write full news content..."
            rows={8}
            className="w-full border rounded-lg p-3 mb-5"
            required
          />

          {/* IMAGE URL */}

          <label className="block font-semibold mb-2">
            Image URL
          </label>

          <input
            type="url"
            value={imageUrl}
            onChange={(e) =>
              setImageUrl(e.target.value)
            }
            placeholder="https://example.com/image.jpg"
            className="w-full border rounded-lg p-3 mb-6"
          />

          {/* BUTTON */}

          <button
            type="submit"
            disabled={saving}
            className="bg-blue-700 hover:bg-blue-800 disabled:bg-gray-400 text-white font-bold px-6 py-3 rounded-lg"
          >
            {saving
              ? "Saving..."
              : editingId
              ? "Update News"
              : "Add News"}
          </button>

        </form>

      </div>

      {/* NEWS LIST */}

      <div>

        <h2 className="text-2xl font-bold text-gray-800 mb-5">
          All News
        </h2>

        {loading ? (
          <p className="text-gray-500">
            Loading news...
          </p>
        ) : news.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-8 text-center">

            <p className="text-gray-500">
              अहिलेसम्म कुनै news छैन।
            </p>

          </div>
        ) : (
          <div className="space-y-5">

            {news.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-xl shadow p-6"
              >

                <div className="flex flex-col md:flex-row gap-6">

                  {/* IMAGE */}

                  {item.imageUrl && (
                    <div className="w-full md:w-48 h-32 flex-shrink-0">

                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg"
                      />

                    </div>
                  )}

                  {/* CONTENT */}

                  <div className="flex-1">

                    <h3 className="text-xl font-bold text-gray-800">
                      {item.title}
                    </h3>

                    {item.excerpt && (
                      <p className="text-gray-600 mt-2">
                        {item.excerpt}
                      </p>
                    )}

                    <p className="text-gray-500 mt-3 line-clamp-3 whitespace-pre-line">
                      {item.content}
                    </p>

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

              </div>

            ))}

          </div>
        )}

      </div>

    </div>
  );
}