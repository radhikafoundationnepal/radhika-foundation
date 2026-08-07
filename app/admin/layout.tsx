"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: "📊",
  },
  {
    name: "News",
    href: "/admin/news",
    icon: "📰",
  },
  {
    name: "Notices",
    href: "/admin/notice",
    icon: "📢",
  },
  {
    name: "Gallery",
    href: "/admin/gallery",
    icon: "🖼️",
  },
  {
    name: "Messages",
    href: "/admin/contacts",
    icon: "📩",
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* MOBILE HEADER */}

      <header className="lg:hidden bg-white shadow-sm h-16 flex items-center justify-between px-4 sticky top-0 z-40">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
            R
          </div>

          <div>
            <p className="font-bold text-blue-700">
              Radhika CMS
            </p>

            <p className="text-xs text-gray-500">
              Admin Panel
            </p>
          </div>

        </div>

        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-2xl text-gray-700"
        >
          {sidebarOpen ? "×" : "☰"}
        </button>

      </header>

      {/* MOBILE OVERLAY */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}

      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          h-screen
          w-64
          bg-white
          border-r
          transition-transform
          duration-300
          lg:translate-x-0
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* LOGO */}

        <div className="h-20 border-b flex items-center px-5">

          <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold">
            R
          </div>

          <div className="ml-3">

            <h1 className="font-bold text-blue-700">
              Radhika CMS
            </h1>

            <p className="text-xs text-gray-500">
              Administration
            </p>

          </div>

        </div>

        {/* MENU */}

        <nav className="p-4">

          <p className="text-xs font-bold text-gray-400 uppercase mb-3 px-3">
            Main Menu
          </p>

          <div className="space-y-1">

            {menuItems.map((item) => {

              const isActive =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() =>
                    setSidebarOpen(false)
                  }
                  className={`
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-lg
                    font-medium
                    transition
                    ${
                      isActive
                        ? "bg-blue-700 text-white"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    }
                  `}
                >

                  <span className="text-xl">
                    {item.icon}
                  </span>

                  <span>
                    {item.name}
                  </span>

                </Link>
              );
            })}

          </div>

        </nav>

        {/* BOTTOM */}

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">

          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
          >

            <span className="text-xl">
              🌐
            </span>

            <span className="font-medium">
              View Website
            </span>

          </Link>

        </div>

      </aside>

      {/* MAIN AREA */}

      <div className="lg:ml-64 min-h-screen">

        {/* DESKTOP TOP BAR */}

        <div className="hidden lg:flex h-20 bg-white border-b items-center justify-between px-8">

          <div>

            <p className="text-sm text-gray-500">
              Administration Panel
            </p>

            <h2 className="font-bold text-gray-800">
              Radhika Foundation Nepal
            </h2>

          </div>

          <Link
            href="/"
            className="text-blue-700 font-semibold hover:underline"
          >
            View Website →
          </Link>

        </div>

        {/* PAGE CONTENT */}

        <main className="p-4 md:p-8">
          {children}
        </main>

      </div>

    </div>
  );
}