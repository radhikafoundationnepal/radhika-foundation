"use client";

import { useEffect, useState } from "react";

import {
  addNotice,
  getNotices,
  updateNotice,
  deleteNotice,
} from "@/lib/firestore";

type NoticeItem = {
  id: string;
  title: string;
  description: string;
  published: boolean;
};

export default function NoticeAdminPage() {
  const [notices, setNotices] = useState<NoticeItem[]>([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(true);

  async function loadNotices() {
    try {
      const data = await getNotices();

      setNotices(data as NoticeItem[]);
    } catch (error) {
      console.error(error);
      alert("Notice load गर्न समस्या भयो।");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadNotices();
  }, []);

  function resetForm() {
    setTitle("");
    setDescription("");
    setPublished(true);
    setEditingId(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Title र Description आवश्यक छ।");
      return;
    }

    try {
      setSaving(true);

      if (editingId) {
        await updateNotice(
          editingId,
          title,
          description,
          published
        );

        alert("Notice successfully updated!");
      } else {
        await addNotice(
          title,
          description,
          published
        );

        alert("Notice successfully added!");
      }

      resetForm();

      await loadNotices();
    } catch (error) {
      console.error(error);
      alert("Notice save गर्न समस्या भयो।");
    } finally {
      setSaving(false);
    }
  }

  function handleEdit(notice: NoticeItem) {
    setEditingId(notice.id);

    setTitle(notice.title || "");
    setDescription(notice.description || "");
    setPublished(notice.published ?? true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function handleDelete(id: string) {
    const confirmDelete = window.confirm(
      "यो notice delete गर्ने हो?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteNotice(id);

      alert("Notice deleted!");

      await loadNotices();
    } catch (error) {
      console.error(error);
      alert("Notice delete गर्न समस्या भयो।");
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">

      <div className="max-w-6xl mx-auto">

        {/* PAGE HEADER */}

        <div className="mb-8">

          <h1 className="text-4xl font-bold text-blue-700">
            Notice Management
          </h1>

          <p className="text-gray-600 mt-2">
            Website का notices यहाँबाट manage गर्नुहोस्।
          </p>

        </div>

        {/* ADD / EDIT FORM */}

        <div className="bg-white rounded-2xl shadow p-6 mb-10">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-bold text-gray-800">
              {editingId
                ? "Edit Notice"
                : "Add New Notice"}
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
              Notice Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              placeholder="Enter notice title"
              className="w-full border rounded-lg p-3 mb-5"
              required
            />

            {/* DESCRIPTION */}

            <label className="block font-semibold mb-2">
              Notice Description
            </label>

            <textarea
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              placeholder="Write notice details..."
              rows={6}
              className="w-full border rounded-lg p-3 mb-5"
              required
            />

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
                Publish this notice
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
                ? "Update Notice"
                : "Add Notice"}
            </button>

          </form>

        </div>

        {/* ALL NOTICES */}

        <div>

          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            All Notices
          </h2>

          {loading ? (
            <p className="text-gray-500">
              Loading notices...
            </p>
          ) : notices.length === 0 ? (
            <div className="bg-white rounded-xl shadow p-8 text-center">

              <p className="text-gray-500">
                अहिलेसम्म कुनै notice छैन।
              </p>

            </div>
          ) : (
            <div className="space-y-5">

              {notices.map((notice) => (

                <div
                  key={notice.id}
                  className="bg-white rounded-xl shadow p-6"
                >

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">

                    {/* CONTENT */}

                    <div className="flex-1">

                      <div className="flex items-center gap-3 flex-wrap">

                        <h3 className="text-xl font-bold text-gray-800">
                          {notice.title}
                        </h3>

                        {notice.published ? (
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                            Published
                          </span>
                        ) : (
                          <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold">
                            Unpublished
                          </span>
                        )}

                      </div>

                      <p className="text-gray-600 mt-3 whitespace-pre-line leading-7">
                        {notice.description}
                      </p>

                    </div>

                    {/* ACTIONS */}

                    <div className="flex gap-3 flex-shrink-0">

                      <button
                        type="button"
                        onClick={() =>
                          handleEdit(notice)
                        }
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleDelete(notice.id)
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