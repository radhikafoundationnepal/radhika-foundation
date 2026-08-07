"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Notice", href: "/notice" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}

          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >

            <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold">
              R
            </div>

            <div>
              <h1 className="font-bold text-lg text-blue-700">
                Radhika Foundation
              </h1>

              <p className="text-xs text-gray-500">
                Nepal
              </p>
            </div>

          </Link>

          {/* DESKTOP MENU */}

          <nav className="hidden md:flex items-center gap-6">

            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 font-medium hover:text-blue-700 transition"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/donate"
              className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-lg font-bold transition"
            >
              Donate
            </Link>

          </nav>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 text-3xl"
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>

        </div>

        {/* MOBILE MENU */}

        {menuOpen && (
          <nav className="md:hidden border-t py-4">

            <div className="flex flex-col">

              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-2 text-gray-700 font-medium hover:bg-gray-50 hover:text-blue-700 rounded"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/donate"
                onClick={() => setMenuOpen(false)}
                className="mt-3 bg-blue-700 hover:bg-blue-800 text-white text-center px-5 py-3 rounded-lg font-bold"
              >
                Donate
              </Link>

            </div>

          </nav>
        )}

      </div>

    </header>
  );
}