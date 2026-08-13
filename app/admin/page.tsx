"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { getDashboardStats } from "@/lib/firestore";

type DashboardStats = {
  news: number;
  notices: number;
  gallery: number;
  contacts: number;
  unreadContacts: number;
  volunteers: number;
  pendingVolunteers: number;
  approvedVolunteers: number;
  rejectedVolunteers: number;
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    news: 0,
    notices: 0,
    gallery: 0,
    contacts: 0,
    unreadContacts: 0,
    volunteers: 0,
    pendingVolunteers: 0,
    approvedVolunteers: 0,
    rejectedVolunteers: 0,
  });

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function loadDashboard(showRefresh = false) {
    try {
      if (showRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const data = await getDashboardStats();

      setStats(data);
    } catch (error) {
      console.error("Dashboard load error:", error);
      alert("Dashboard data load हुन सकेन।");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  return (
    <div>
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700">
            Radhika CMS Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Website content र messages manage गर्नुहोस्।
          </p>
        </div>

        <button
          type="button"
          onClick={() => loadDashboard(true)}
          disabled={refreshing}
          className="bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white px-5 py-3 rounded-lg font-semibold transition"
        >
          {refreshing ? "Refreshing..." : "↻ Refresh"}
        </button>
      </div>

      {/* MAIN STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* NEWS */}
        <div className="bg-white rounded-2xl shadow p-6 border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">News</p>

              <p className="text-4xl font-bold text-blue-700 mt-2">
                {loading ? "..." : stats.news}
              </p>
            </div>

            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
              📰
            </div>
          </div>

          <Link
            href="/admin/news"
            className="inline-block mt-5 text-blue-700 font-semibold hover:underline"
          >
            Manage News →
          </Link>
        </div>

        {/* NOTICES */}
        <div className="bg-white rounded-2xl shadow p-6 border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Notices</p>

              <p className="text-4xl font-bold text-green-600 mt-2">
                {loading ? "..." : stats.notices}
              </p>
            </div>

            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-2xl">
              📢
            </div>
          </div>

          <Link
            href="/admin/notice"
            className="inline-block mt-5 text-green-600 font-semibold hover:underline"
          >
            Manage Notices →
          </Link>
        </div>

        {/* GALLERY */}
        <div className="bg-white rounded-2xl shadow p-6 border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Gallery</p>

              <p className="text-4xl font-bold text-purple-600 mt-2">
                {loading ? "..." : stats.gallery}
              </p>
            </div>

            <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
              🖼️
            </div>
          </div>

          <Link
            href="/admin/gallery"
            className="inline-block mt-5 text-purple-600 font-semibold hover:underline"
          >
            Manage Gallery →
          </Link>
        </div>

        {/* MESSAGES */}
        <div className="bg-white rounded-2xl shadow p-6 border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Messages</p>

              <p className="text-4xl font-bold text-orange-600 mt-2">
                {loading ? "..." : stats.contacts}
              </p>
            </div>

            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
              📩
            </div>
          </div>

          <Link
            href="/admin/contacts"
            className="inline-block mt-5 text-orange-600 font-semibold hover:underline"
          >
            View Messages →
          </Link>
        </div>
      </div>

      {/* VOLUNTEER STATS */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">
          Volunteer Statistics
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* TOTAL */}
          <div className="bg-white rounded-2xl shadow p-6 border">
            <p className="text-gray-500">Total Volunteers</p>

            <p className="text-4xl font-bold text-blue-700 mt-2">
              {loading ? "..." : stats.volunteers}
            </p>

            <Link
              href="/admin/volunteers"
              className="inline-block mt-5 text-blue-700 font-semibold hover:underline"
            >
              Manage Volunteers →
            </Link>
          </div>

          {/* PENDING */}
          <div className="bg-white rounded-2xl shadow p-6 border">
            <p className="text-gray-500">Pending</p>

            <p className="text-4xl font-bold text-yellow-600 mt-2">
              {loading ? "..." : stats.pendingVolunteers}
            </p>
          </div>

          {/* APPROVED */}
          <div className="bg-white rounded-2xl shadow p-6 border">
            <p className="text-gray-500">Approved</p>

            <p className="text-4xl font-bold text-green-600 mt-2">
              {loading ? "..." : stats.approvedVolunteers}
            </p>
          </div>

          {/* REJECTED */}
          <div className="bg-white rounded-2xl shadow p-6 border">
            <p className="text-gray-500">Rejected</p>

            <p className="text-4xl font-bold text-red-600 mt-2">
              {loading ? "..." : stats.rejectedVolunteers}
            </p>
          </div>
        </div>
      </div>

      {/* UNREAD MESSAGES */}
      <div className="mt-8 bg-white rounded-2xl shadow border p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-800">
                Unread Messages
              </h2>

              {!loading && stats.unreadContacts > 0 && (
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  New
                </span>
              )}
            </div>

            <p className="text-gray-500 mt-1">
              Visitor बाट आएका नपढिएका messages
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-red-600">
              {loading ? "..." : stats.unreadContacts}
            </div>

            <Link
              href="/admin/contacts"
              className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-lg font-semibold"
            >
              Open Messages
            </Link>
          </div>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          <Link
            href="/admin/news"
            className="bg-white hover:bg-blue-50 border rounded-xl p-6 transition"
          >
            <div className="text-3xl mb-3">📰</div>

            <h3 className="font-bold text-lg">
              Add News
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              नयाँ news प्रकाशित गर्नुहोस्।
            </p>
          </Link>

          <Link
            href="/admin/notice"
            className="bg-white hover:bg-green-50 border rounded-xl p-6 transition"
          >
            <div className="text-3xl mb-3">📢</div>

            <h3 className="font-bold text-lg">
              Add Notice
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              नयाँ सूचना थप्नुहोस्।
            </p>
          </Link>

          <Link
            href="/admin/gallery"
            className="bg-white hover:bg-purple-50 border rounded-xl p-6 transition"
          >
            <div className="text-3xl mb-3">🖼️</div>

            <h3 className="font-bold text-lg">
              Add Photo
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Gallery मा photo थप्नुहोस्।
            </p>
          </Link>

          <Link
            href="/admin/volunteers"
            className="bg-white hover:bg-yellow-50 border rounded-xl p-6 transition"
          >
            <div className="text-3xl mb-3">🤝</div>

            <h3 className="font-bold text-lg">
              Volunteers
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Volunteer applications हेर्नुहोस्।
            </p>
          </Link>
        </div>
      </div>

      {/* WEBSITE SHORTCUT */}
      <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <h2 className="text-xl font-bold text-blue-800">
              🌐 Website
            </h2>

            <p className="text-gray-600 mt-1">
              Public website हेर्नुहोस्।
            </p>
          </div>

          <Link
            href="/"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold"
          >
            View Website →
          </Link>
        </div>
      </div>
    </div>
  );
}