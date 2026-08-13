"use client";

import { useEffect, useState } from "react";
import {
  deleteVolunteer,
  getVolunteers,
  updateVolunteerStatus,
} from "@/lib/firestore";

type Volunteer = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  area: string;
  message?: string;
  status?: string;
  createdAt?: unknown;
};

export default function AdminVolunteersPage() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadVolunteers() {
    try {
      const data = await getVolunteers();
      setVolunteers(data as Volunteer[]);
    } catch (error) {
      console.error("Volunteer load error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadVolunteers();
  }, []);

  async function changeStatus(
    id: string,
    status: string
  ) {
    try {
      await updateVolunteerStatus(id, status);

      setVolunteers((current) =>
        current.map((item) =>
          item.id === id
            ? { ...item, status }
            : item
        )
      );
    } catch (error) {
      console.error("Status update error:", error);
      alert("Status update हुन सकेन।");
    }
  }

  async function handleDelete(id: string) {
    const confirmDelete = confirm(
      "के तपाईं यो volunteer application delete गर्न चाहनुहुन्छ?"
    );

    if (!confirmDelete) return;

    try {
      await deleteVolunteer(id);

      setVolunteers((current) =>
        current.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error("Volunteer delete error:", error);
      alert("Delete हुन सकेन।");
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              🤝 Volunteers
            </h1>

            <p className="text-gray-500 mt-2">
              Volunteer registration applications
            </p>
          </div>

          <div className="bg-white rounded-xl shadow px-6 py-4">
            <span className="text-gray-500">
              Total Volunteers
            </span>

            <span className="ml-3 text-2xl font-bold text-blue-700">
              {volunteers.length}
            </span>
          </div>

        </div>

        {/* LOADING */}
        {loading && (
          <div className="bg-white rounded-2xl shadow p-10 text-center">
            <p className="text-gray-500">
              Loading volunteers...
            </p>
          </div>
        )}

        {/* EMPTY */}
        {!loading && volunteers.length === 0 && (
          <div className="bg-white rounded-2xl shadow p-12 text-center">

            <div className="text-5xl mb-4">
              🤝
            </div>

            <h2 className="text-xl font-bold text-gray-700">
              No volunteer applications yet
            </h2>

            <p className="text-gray-500 mt-2">
              नयाँ volunteer registration आएपछि यहाँ देखिनेछ।
            </p>

          </div>
        )}

        {/* VOLUNTEER LIST */}
        {!loading && volunteers.length > 0 && (
          <div className="space-y-6">

            {volunteers.map((volunteer) => (

              <div
                key={volunteer.id}
                className="bg-white rounded-2xl shadow-md p-6"
              >

                {/* TOP */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {volunteer.name}
                    </h2>

                    <p className="text-blue-700 font-semibold mt-1">
                      🎯 {volunteer.area}
                    </p>
                  </div>

                  {/* STATUS */}
                  <select
                    value={volunteer.status || "pending"}
                    onChange={(e) =>
                      changeStatus(
                        volunteer.id,
                        e.target.value
                      )
                    }
                    className="border rounded-lg px-4 py-2 font-semibold outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="pending">
                      Pending
                    </option>

                    <option value="approved">
                      Approved
                    </option>

                    <option value="rejected">
                      Rejected
                    </option>
                  </select>

                </div>

                {/* DETAILS */}
                <div className="grid md:grid-cols-2 gap-4 mt-6">

                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">
                      Phone
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      📱 {volunteer.phone}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">
                      Email
                    </p>

                    <p className="font-semibold text-gray-800 mt-1 break-all">
                      ✉️ {volunteer.email || "Not provided"}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">
                      Address
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      📍 {volunteer.address || "Not provided"}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">
                      Status
                    </p>

                    <p className="font-semibold text-gray-800 mt-1 capitalize">
                      {volunteer.status || "pending"}
                    </p>
                  </div>

                </div>

                {/* MESSAGE */}
                {volunteer.message && (
                  <div className="mt-5 bg-blue-50 rounded-xl p-5">

                    <p className="text-sm text-blue-700 font-semibold">
                      Message
                    </p>

                    <p className="text-gray-700 mt-2 whitespace-pre-line">
                      {volunteer.message}
                    </p>

                  </div>
                )}

                {/* ACTIONS */}
                <div className="mt-6 pt-5 border-t flex justify-end">

                  <button
                    type="button"
                    onClick={() =>
                      handleDelete(volunteer.id)
                    }
                    className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-semibold transition"
                  >
                    🗑️ Delete
                  </button>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>

    </main>
  );
}