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

  async function handleRead(id: string) {
    try {
      await markContactAsRead(id);
      await loadMessages();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(id: string) {
    const confirmDelete = window.confirm(
      "यो message delete गर्ने हो?"
    );

    if (!confirmDelete) return;

    try {
      await deleteContactMessage(id);

      alert("Message deleted!");

      await loadMessages();
    } catch (error) {
      console.error(error);
      alert("Message delete गर्न समस्या भयो।");
    }
  }

  return (
    <div>

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-blue-700">
          Contact Messages
        </h1>

        <p className="text-gray-600 mt-2">
          Website बाट आएका messages हेर्नुहोस्।
        </p>

      </div>

      {loading ? (
        <p>Loading messages...</p>
      ) : messages.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <p className="text-gray-500">
            अहिले कुनै message छैन।
          </p>
        </div>
      ) : (
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

                <div className="flex-1">

                  <div className="flex items-center gap-3">

                    <h2 className="text-xl font-bold">
                      {item.name}
                    </h2>

                    {!item.read && (
                      <span className="bg-blue-700 text-white text-xs px-3 py-1 rounded-full">
                        New
                      </span>
                    )}

                  </div>

                  <p className="text-gray-600 mt-2">
                    Email: {item.email}
                  </p>

                  {item.phone && (
                    <p className="text-gray-600">
                      Phone: {item.phone}
                    </p>
                  )}

                  <div className="mt-5 bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 whitespace-pre-line">
                      {item.message}
                    </p>
                  </div>

                </div>

                <div className="flex md:flex-col gap-2">

                  {!item.read && (
                    <button
                      onClick={() =>
                        handleRead(item.id)
                      }
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                    >
                      Mark Read
                    </button>
                  )}

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
  );
}