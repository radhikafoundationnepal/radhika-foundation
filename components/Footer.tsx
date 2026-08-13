import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* =========================
              FOUNDATION
          ========================== */}

          <div>

            <div className="flex items-center gap-3 mb-6">

              <Image
                src="/images/logo.png"
                alt="Radhika Foundation Nepal Logo"
                width={72}
                height={72}
                className="w-16 h-16 object-contain"
              />

              <h2 className="text-2xl font-bold">
                Radhika Foundation Nepal
              </h2>

            </div>

            <p className="text-blue-100 leading-8 max-w-md">
              Together We Build Better Communities. We are committed
              to education, healthcare, empowerment, environmental
              protection and sustainable development.
            </p>

          </div>


          {/* =========================
              QUICK LINKS
          ========================== */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                href="/"
                className="text-blue-100 hover:text-white transition"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-blue-100 hover:text-white transition"
              >
                About Us
              </Link>

              <Link
                href="/programs"
                className="text-blue-100 hover:text-white transition"
              >
                Our Programs
              </Link>

              <Link
                href="/news"
                className="text-blue-100 hover:text-white transition"
              >
                News
              </Link>

              <Link
                href="/notice"
                className="text-blue-100 hover:text-white transition"
              >
                Notices
              </Link>

              <Link
                href="/gallery"
                className="text-blue-100 hover:text-white transition"
              >
                Gallery
              </Link>

              <Link
                href="/contact"
                className="text-blue-100 hover:text-white transition"
              >
                Contact
              </Link>

            </div>

          </div>


          {/* =========================
              CONTACT
          ========================== */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5 text-blue-100">

              <p className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                Nepal
              </p>

              <p className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                Contact us for more information
              </p>

              <p className="flex items-center gap-3">
                <span className="text-xl">🤝</span>
                Join us in making a difference
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =========================
          COPYRIGHT
      ========================== */}

      <div className="border-t border-blue-700">

        <div className="max-w-7xl mx-auto px-6 py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-blue-200 text-sm text-center md:text-left">
              © 2026 Radhika Foundation Nepal. All Rights Reserved.
            </p>

            <p className="text-blue-200 text-sm">
              Together We Build Better Communities ❤️
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}