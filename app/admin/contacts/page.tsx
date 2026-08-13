"use client";

import { useEffect, useState } from "react";

import {
  deleteContactMessage,
  getContactMessages,
  markContactAsRead,
} from "@/lib/firestore";

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  read: boolean;
};

export default function ContactsAdminPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function loadMessages() {
    try {
      const data = await getContactMessages();

      setMessages(data as ContactMessage[]);
    } catch (error) {
      console.error(error);
      alert("Messages load हुन सकेन।");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMessages();
  }, []);

  async function handleRefresh() {
    try {
      setRefreshing(true);
      await loadMessages();
    } finally {
      setRefreshing(false);
    }
  }

  async function handleRead(id: string) {
    try {
      await markContactAsRead(id);
      await loadMessages();
    } catch (error) {
      console.error(error);
      alert("Message read गर्न समस्या भयो।");
    }
  }

  async function handleDelete(id: string) {
    const confirmDelete = window.confirm(
      "यो message delete गर्ने हो?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteContactMessage(id);

      alert("Message deleted!");

      await loadMessages();
    } catch (error) {
      console.error(error);
      alert("Message delete गर्न समस्या भयो।");
    }
  }

  const unreadCount = messages.filter(
    (item) => !item.read
  ).length;

  return (
    <div>

      {/* PAGE HEADER */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>

          <h1 className="text-4xl font-bold text-blue-700">
            Contact Messages
          </h1>

          <p className="text-gray-600 mt-2">
            Website बाट आएका messages हेर्नुहोस्।
          </p>

        </div>

        <button
          type="button"
          onClick={handleRefresh}
          disabled={refreshing}
          className="bg-blue-700 hover:bg-blue-800 disabled:bg-gray-400 text-white font-semibold px-5 py-3 rounded-lg"
        >
          {refreshing ? "Refreshing..." : "Refresh"}
        </button>

      </div>

      {/* STATS */}

      {!loading && messages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

          <div className="bg-white rounded-xl shadow p-5">
            <p className="text-gray-500">
              Total Messages
            </p>

            <p className="text-3xl font-bold text-gray-800 mt-2">
              {messages.length}
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl shadow p-5">
            <p className="text-blue-600">
              Unread Messages
            </p>

            <p className="text-3xl font-bold text-blue-700 mt-2">
              {unreadCount}
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl shadow p-5">
            <p className="text-green-600">
              Read Messages
            </p>

            <p className="text-3xl font-bold text-green-700 mt-2">
              {messages.length - unreadCount}
            </p>
          </div>

        </div>
      )}

      {/* LOADING */}

      {loading ? (
        <div className="bg-white rounded-xl shadow p-8 text-center">

          <p className="text-gray-500">
            Loading messages...
          </p>

        </div>
      ) : messages.length === 0 ? (

        /* EMPTY */

        <div className="bg-white rounded-xl shadow p-10 text-center">

          <div className="text-5xl mb-4">
            📭
          </div>

          <h2 className="text-xl font-semibold text-gray-700">
            अहिले कुनै message छैन।
          </h2>

          <p className="text-gray-500 mt-2">
            Website बाट contact message आएपछि यहाँ देखिनेछ।
          </p>

        </div>

      ) : (

        /* MESSAGE LIST */

        <div className="space-y-5">

          {messages.map((item) => (

            <div
              key={item.id}
              className={
                item.read
                  ? "bg-white rounded-xl shadow p-6"
                  : "bg-blue-50 border border-blue-200 rounded-xl shadow p-6"
              }
            >

              <div className="flex flex-col md:flex-row justify-between gap-5">

                {/* MESSAGE CONTENT */}

                <div className="flex-1">

                  <div className="flex items-center gap-3 flex-wrap">

                    <h2 className="text-xl font-bold text-gray-800">
                      {item.name}
                    </h2>

                    {item.read ? (
                      <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                        Read
                      </span>
                    ) : (
                      <span className="bg-blue-700 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        New
                      </span>
                    )}

                  </div>

                  {/* EMAIL */}

                  <p className="text-gray-600 mt-3">
                    <strong>Email:</strong>{" "}
                    {item.email}
                  </p>

                  {/* PHONE */}

                  {item.phone && (
                    <p className="text-gray-600 mt-1">
                      <strong>Phone:</strong>{" "}
                      {item.phone}
                    </p>
                  )}

                  {/* MESSAGE */}

                  <div className="mt-5 bg-gray-50 rounded-lg p-4 border">

                    <p className="text-gray-700 whitespace-pre-line leading-7">
                      {item.message}
                    </p>

                  </div>

                </div>

                {/* ACTIONS */}

                <div className="flex md:flex-col gap-2">

                  {!item.read && (
                    <button
                      type="button"
                      onClick={() =>
                        handleRead(item.id)
                      }
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
                    >
                      Mark Read
                    </button>
                  )}

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
  );
}