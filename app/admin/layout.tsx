import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white">
        <div className="p-6 border-b border-blue-500">
          <h1 className="text-2xl font-bold">
            Radhika CMS
          </h1>
        </div>

        <nav className="p-4 space-y-2">

          <Link
            href="/admin"
            className="block p-3 rounded hover:bg-blue-600"
          >
            Dashboard
          </Link>

          <Link
            href="/admin/banner"
            className="block p-3 rounded hover:bg-blue-600"
          >
            Banner
          </Link>

          <Link
            href="/admin/news"
            className="block p-3 rounded hover:bg-blue-600"
          >
            News
          </Link>

          <Link
            href="/admin/notice"
            className="block p-3 rounded hover:bg-blue-600"
          >
            Notices
          </Link>

          <Link
            href="/admin/gallery"
            className="block p-3 rounded hover:bg-blue-600"
          >
            Gallery
          </Link>

          <Link
            href="/admin/donation"
            className="block p-3 rounded hover:bg-blue-600"
          >
            Donation
          </Link>

        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}