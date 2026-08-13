"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "News", href: "/news" },
    { name: "Notices", href: "/notice" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  // ESC थिच्दा popup बन्द गर्ने
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDonateOpen(false);
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* MAIN NAVBAR */}
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/images/logo.png"
                alt="Radhika Foundation Nepal Logo"
                width={64}
                height={64}
                className="w-14 h-14 md:w-16 md:h-16 object-contain"
                priority
              />

              <div className="leading-tight">
                <h1 className="font-bold text-lg md:text-xl text-blue-700">
                  Radhika Foundation
                </h1>

                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  Nepal
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-6">

              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 font-medium hover:text-blue-700 transition duration-200 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}

              {/* DONATE BUTTON */}
              <button
                type="button"
                onClick={() => setDonateOpen(true)}
                className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-lg font-bold transition duration-200 whitespace-nowrap shadow-sm hover:shadow-md"
              >
                ❤️ Donate
              </button>

            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-700 text-3xl leading-none p-2"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "×" : "☰"}
            </button>

          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <nav className="md:hidden border-t border-gray-100 py-4">

              <div className="flex flex-col gap-1">

                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-3 px-3 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 rounded-lg transition duration-200"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* MOBILE DONATE */}
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setDonateOpen(true);
                  }}
                  className="mt-3 bg-blue-700 hover:bg-blue-800 text-white text-center px-5 py-3 rounded-lg font-bold transition duration-200"
                >
                  ❤️ Donate
                </button>

              </div>

            </nav>
          )}

        </div>
      </header>

      {/* =========================
          DONATION QR POPUP
      ========================== */}
      {donateOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setDonateOpen(false)}
        >

          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setDonateOpen(false)}
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white shadow-md text-gray-700 text-2xl font-bold hover:bg-gray-100 transition"
              aria-label="Close donation popup"
            >
              ×
            </button>

            {/* HEADER */}
            <div className="bg-blue-700 text-white text-center px-6 py-5">
              <h2 className="text-2xl md:text-3xl font-bold">
                Support Radhika Foundation
              </h2>

              <p className="mt-2 text-blue-100">
                तपाईंको सानो सहयोगले ठूलो परिवर्तन ल्याउन सक्छ।
              </p>
            </div>

            {/* QR IMAGE */}
            <div className="p-6 text-center">

              <div className="flex justify-center">
                <Image
                  src="/images/donation-qr.png"
                  alt="Radhika Foundation Donation QR Code"
                  width={420}
                  height={420}
                  className="w-full max-w-[380px] h-auto rounded-xl object-contain"
                />
              </div>

              <p className="mt-4 text-gray-600 font-medium">
                Scan the QR code to make a donation
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Radhika Foundation Nepal
              </p>

            </div>

            {/* FOOTER */}
            <div className="bg-gray-50 px-6 py-4 text-center border-t">
              <button
                type="button"
                onClick={() => setDonateOpen(false)}
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold transition"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}