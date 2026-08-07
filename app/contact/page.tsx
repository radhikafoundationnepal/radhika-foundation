"use client";

import { useState } from "react";
import { addContactMessage } from "@/lib/firestore";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Name, Email र Message आवश्यक छ।");
      return;
    }

    try {
      setSending(true);
      setSuccess("");

      await addContactMessage(
        name,
        email,
        phone,
        message
      );

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      setSuccess(
        "तपाईंको message सफलतापूर्वक पठाइयो। धन्यवाद!"
      );
    } catch (error) {
      console.error(error);
      alert(
        "Message पठाउन समस्या भयो। कृपया फेरि प्रयास गर्नुहोस्।"
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-12">

          <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
            Contact Us
          </h1>

          <p className="text-gray-600 mt-3">
            हामीसँग सम्पर्क गर्नुहोस्
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* CONTACT INFORMATION */}

          <div className="bg-blue-700 text-white rounded-2xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              Radhika Foundation Nepal
            </h2>

            <p className="text-blue-100 leading-8 mb-8">
              तपाईंको सुझाव, प्रश्न, सहयोग वा अन्य जानकारीका लागि
              हामीलाई सम्पर्क गर्नुहोस्।
            </p>

            <div className="space-y-6">

              <div>
                <p className="text-blue-200 text-sm">
                  Address
                </p>

                <p className="font-semibold mt-1">
                  Nepal
                </p>
              </div>

              <div>
                <p className="text-blue-200 text-sm">
                  Email
                </p>

                <p className="font-semibold mt-1">
                  info@radhikafoundation.org
                </p>
              </div>

              <div>
                <p className="text-blue-200 text-sm">
                  Phone
                </p>

                <p className="font-semibold mt-1">
                  +977-XXXXXXXXXX
                </p>
              </div>

            </div>

          </div>

          {/* CONTACT FORM */}

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h2>

            {success && (
              <div className="bg-green-100 text-green-700 rounded-lg p-4 mb-6">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              {/* NAME */}

              <label className="block font-semibold mb-2">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="Your full name"
                className="w-full border rounded-lg p-3 mb-5"
                required
              />

              {/* EMAIL */}

              <label className="block font-semibold mb-2">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="your@email.com"
                className="w-full border rounded-lg p-3 mb-5"
                required
              />

              {/* PHONE */}

              <label className="block font-semibold mb-2">
                Phone
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                placeholder="Your phone number"
                className="w-full border rounded-lg p-3 mb-5"
              />

              {/* MESSAGE */}

              <label className="block font-semibold mb-2">
                Message
              </label>

              <textarea
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                placeholder="Write your message..."
                rows={6}
                className="w-full border rounded-lg p-3 mb-6"
                required
              />

              {/* SEND */}

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg"
              >
                {sending
                  ? "Sending..."
                  : "Send Message"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </main>
  );
}