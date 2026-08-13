"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "News", href: "/news" },
    { name: "Notices", href: "/notice" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  /* =========================
      SCROLL EFFECT
  ========================== */

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================
      ESC KEY
  ========================== */

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

  /* =========================
      BODY SCROLL LOCK
  ========================== */

  useEffect(() => {
    if (menuOpen || donateOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, donateOpen]);

  /* =========================
      ACTIVE MENU
  ========================== */

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      {/* =====================================================
          TOP CONTACT BAR
      ====================================================== */}

      <div className="hidden lg:block bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex h-10 items-center justify-between">

            {/* LEFT CONTACT */}

            <div className="flex items-center gap-6 text-xs">

              <a
                href="tel:9800822224"
                className="flex items-center gap-2 text-blue-100 hover:text-white transition"
              >
                <span>📞</span>
                <span>
                  9800822224 / 9841424995
                </span>
              </a>

              <a
                href="mailto:radhikafoundation2078@gmail.com"
                className="flex items-center gap-2 text-blue-100 hover:text-white transition"
              >
                <span>✉️</span>
                <span>
                  radhikafoundation2078@gmail.com
                </span>
              </a>

            </div>


            {/* RIGHT SIDE */}

            <div className="flex items-center gap-5">

              <span className="text-blue-200 text-xs">
                Kanakai-6, Manasapur, Jhapa, Nepal
              </span>

              <div className="h-4 w-px bg-white/20" />

              {/* SOCIAL */}

              <div className="flex items-center gap-3">

                <a
                  href="https://www.facebook.com/radhikafoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="font-bold text-blue-100 hover:text-white transition"
                >
                  f
                </a>

                <a
                  href="https://www.youtube.com/@radhikadaasiofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="font-bold text-blue-100 hover:text-white transition"
                >
                  ▶
                </a>

                <a
                  href="https://www.tiktok.com/@radhikadaasiofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="font-bold text-blue-100 hover:text-white transition"
                >
                  ♪
                </a>

              </div>

            </div>

          </div>

        </div>
      </div>


      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-gray-200 bg-white/95 shadow-xl backdrop-blur-md"
            : "border-gray-100 bg-white shadow-sm"
        }`}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled
                ? "h-[74px]"
                : "h-[86px] md:h-[92px]"
            }`}
          >

            {/* =================================================
                LOGO
            ================================================== */}

            <Link
              href="/"
              onClick={closeMenu}
              className="group flex shrink-0 items-center gap-3"
            >

              {/* LOGO IMAGE */}

              <div className="relative shrink-0">

                <Image
                  src="/images/logo.png"
                  alt="Radhika Foundation Nepal Logo"
                  width={90}
                  height={90}
                  priority
                  className={`object-contain transition-all duration-300 ${
                    scrolled
                      ? "h-14 w-14"
                      : "h-[68px] w-[68px] md:h-[76px] md:w-[76px]"
                  }`}
                />

              </div>


              {/* LOGO TEXT */}

              <div className="leading-none">

                <h1
                  className="
                    whitespace-nowrap
                    text-xl
                    sm:text-2xl
                    md:text-[28px]
                    lg:text-[30px]
                    font-black
                    tracking-tight
                    text-blue-700
                    transition-all
                    duration-300
                    group-hover:text-blue-800
                  "
                >
                  Radhika Foundation
                </h1>


                <div className="mt-2 flex items-center gap-2">

                  <span className="h-1.5 w-8 rounded-full bg-red-500" />

                  <p
                    className="
                      text-xs
                      sm:text-sm
                      font-extrabold
                      tracking-[0.28em]
                      text-gray-500
                    "
                  >
                    NEPAL
                  </p>

                </div>

              </div>

            </Link>


            {/* =================================================
                DESKTOP MENU
            ================================================== */}

            <nav className="hidden lg:flex items-center gap-1">

              {menuItems.map((item) => {

                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      group
                      relative
                      px-3.5
                      xl:px-4
                      py-3.5
                      text-base
                      xl:text-[17px]
                      font-extrabold
                      tracking-tight
                      whitespace-nowrap
                      transition-all
                      duration-300
                      ${
                        active
                          ? "text-blue-700"
                          : "text-gray-700 hover:text-blue-700"
                      }
                    `}
                  >

                    {item.name}

                    {/* ACTIVE / HOVER LINE */}

                    <span
                      className={`
                        absolute
                        bottom-0
                        left-3
                        right-3
                        h-[3px]
                        rounded-full
                        bg-blue-700
                        transition-all
                        duration-300
                        ${
                          active
                            ? "opacity-100 scale-x-100"
                            : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                        }
                      `}
                    />

                  </Link>
                );

              })}

            </nav>


            {/* =================================================
                DONATE BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={() => setDonateOpen(true)}
              className="
                hidden
                lg:inline-flex
                items-center
                gap-2
                rounded-full
                bg-red-600
                px-6
                xl:px-7
                py-3.5
                text-base
                font-extrabold
                text-white
                shadow-lg
                shadow-red-600/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-red-700
                hover:shadow-xl
              "
            >
              <span>❤️</span>
              <span>Donate Now</span>
            </button>


            {/* =================================================
                MOBILE MENU BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                lg:hidden
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-blue-50
                text-blue-700
                transition
                hover:bg-blue-100
              "
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >

              {menuOpen ? (
                <span className="text-3xl leading-none">
                  ×
                </span>
              ) : (
                <span className="text-2xl leading-none">
                  ☰
                </span>
              )}

            </button>

          </div>


          {/* =================================================
              MOBILE MENU
          ================================================== */}

          {menuOpen && (

            <div className="lg:hidden border-t border-gray-100 py-4">

              <nav className="flex flex-col gap-1">

                {menuItems.map((item) => {

                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3.5
                        text-base
                        font-extrabold
                        transition
                        ${
                          active
                            ? "bg-blue-50 text-blue-700"
                            : "text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                        }
                      `}
                    >

                      <span>
                        {item.name}
                      </span>

                      <span
                        className={
                          active
                            ? "text-blue-700"
                            : "text-gray-300"
                        }
                      >
                        →
                      </span>

                    </Link>
                  );
                })}


                {/* MOBILE DONATE */}

                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setDonateOpen(true);
                  }}
                  className="
                    mt-3
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-red-600
                    px-5
                    py-3.5
                    text-base
                    font-extrabold
                    text-white
                    shadow-lg
                    transition
                    hover:bg-red-700
                  "
                >
                  ❤️ Donate Now
                </button>

              </nav>


              {/* MOBILE CONTACT */}

              <div className="mt-5 rounded-2xl bg-blue-50 p-5">

                <p className="text-xs font-extrabold uppercase tracking-widest text-blue-700">
                  Contact Us
                </p>

                <div className="mt-3 space-y-3 text-sm">

                  <a
                    href="tel:9800822224"
                    className="flex items-center gap-3 font-semibold text-gray-700"
                  >
                    <span>📞</span>
                    9800822224 / 9841424995
                  </a>

                  <a
                    href="mailto:radhikafoundation2078@gmail.com"
                    className="flex items-center gap-3 break-all font-semibold text-gray-700"
                  >
                    <span>✉️</span>
                    radhikafoundation2078@gmail.com
                  </a>

                  <p className="flex items-start gap-3 font-semibold text-gray-700">
                    <span>📍</span>
                    Kanakai-6, Manasapur, Jhapa
                  </p>

                </div>


                {/* MOBILE SOCIAL */}

                <div className="mt-5 flex items-center gap-3">

                  <a
                    href="https://www.facebook.com/radhikafoundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      font-bold
                      text-blue-700
                      shadow-sm
                      transition
                      hover:-translate-y-1
                      hover:shadow-md
                    "
                  >
                    f
                  </a>

                  <a
                    href="https://www.youtube.com/@radhikadaasiofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      font-bold
                      text-red-600
                      shadow-sm
                      transition
                      hover:-translate-y-1
                      hover:shadow-md
                    "
                  >
                    ▶
                  </a>

                  <a
                    href="https://www.tiktok.com/@radhikadaasiofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      font-bold
                      text-gray-800
                      shadow-sm
                      transition
                      hover:-translate-y-1
                      hover:shadow-md
                    "
                  >
                    ♪
                  </a>

                </div>

              </div>

            </div>

          )}

        </div>

      </header>


      {/* =====================================================
          DONATION QR POPUP
      ====================================================== */}

      {donateOpen && (

        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/75
            p-4
            backdrop-blur-sm
          "
          onClick={() => setDonateOpen(false)}
        >

          <div
            className="
              relative
              max-h-[95vh]
              w-full
              max-w-lg
              overflow-auto
              rounded-3xl
              bg-white
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={() => setDonateOpen(false)}
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white
                text-2xl
                font-bold
                text-gray-700
                shadow-lg
                transition
                hover:bg-gray-100
              "
              aria-label="Close donation popup"
            >
              ×
            </button>


            {/* POPUP HEADER */}

            <div className="bg-gradient-to-r from-blue-800 to-blue-700 px-6 py-7 text-center text-white">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-2xl">
                ❤️
              </div>

              <h2 className="mt-4 text-2xl md:text-3xl font-extrabold">
                Support Radhika Foundation
              </h2>

              <p className="mt-2 text-sm md:text-base text-blue-100">
                तपाईंको सानो सहयोगले ठूलो परिवर्तन ल्याउन सक्छ।
              </p>

            </div>


            {/* QR IMAGE */}

            <div className="p-6 sm:p-8 text-center">

              <div className="mx-auto flex max-w-[380px] items-center justify-center rounded-2xl border border-gray-100 bg-white p-3 shadow-md">

                <Image
                  src="/images/donation-qr.png"
                  alt="Radhika Foundation Donation QR Code"
                  width={420}
                  height={420}
                  className="h-auto w-full rounded-xl object-contain"
                />

              </div>

              <p className="mt-5 font-bold text-gray-700">
                Scan the QR code to make a donation
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Radhika Foundation Nepal
              </p>

            </div>


            {/* POPUP FOOTER */}

            <div className="border-t bg-gray-50 px-6 py-5 text-center">

              <button
                type="button"
                onClick={() => setDonateOpen(false)}
                className="
                  rounded-xl
                  bg-blue-700
                  px-7
                  py-3
                  font-bold
                  text-white
                  shadow-md
                  transition
                  hover:bg-blue-800
                "
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
