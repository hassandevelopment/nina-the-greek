"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/private-events", label: "Private Events" },
  { href: "/careers", label: "Careers" },
  { href: "/reserve", label: "Reserve" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Transparent-over-hero treatment only applies on the homepage (dark hero).
  // Every other page starts on a light background, so the header is shown in
  // its solid blurred-cream state immediately — keeping the nav visible.
  const isHome = pathname === "/";
  const solid = scrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300"
      style={
        solid
          ? {
              backgroundColor: "rgba(250,248,245,.94)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderBottom: "1px solid rgba(26,75,140,.16)",
            }
          : {
              backgroundColor: "transparent",
            }
      }
    >
      <nav className="container-narrow flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src={solid ? "/assets/mark-blue.png" : "/assets/mark-cream.png"}
            alt="Nina The Greek medallion"
            width={36}
            height={36}
            className="transition-opacity duration-300"
          />
          <span
            className={`font-serif text-xl md:text-2xl tracking-wide transition-colors duration-300 ${
              solid ? "text-nina-blue" : "text-nina-cream"
            }`}
          >
            nina the greek
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase" as const,
                    color: solid
                      ? isActive
                        ? "#4a7bc5"
                        : "#1a4b8c"
                      : isActive
                        ? "#ffffff"
                        : "#faf8f5",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = solid
                      ? "#4a7bc5"
                      : "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = solid
                      ? isActive
                        ? "#4a7bc5"
                        : "#1a4b8c"
                      : isActive
                        ? "#ffffff"
                        : "#faf8f5";
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-0.5 transition-transform duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
            style={{
              backgroundColor: solid || mobileOpen ? "#1a4b8c" : "#faf8f5",
            }}
          />
          <span
            className={`block w-6 h-0.5 transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
            style={{
              backgroundColor: solid || mobileOpen ? "#1a4b8c" : "#faf8f5",
            }}
          />
          <span
            className={`block w-6 h-0.5 transition-transform duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
            style={{
              backgroundColor: solid || mobileOpen ? "#1a4b8c" : "#faf8f5",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu — slide-down animation via max-height transition */}
      <div
        className="md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
        style={{
          maxHeight: mobileOpen ? "400px" : "0px",
          opacity: mobileOpen ? 1 : 0,
          backgroundColor: "rgba(250,248,245,.96)",
          backdropFilter: "blur(10px)",
          borderTop: mobileOpen ? "1px solid rgba(26,75,140,.16)" : "none",
        }}
      >
        <ul className="container-narrow flex flex-col py-6 gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase" as const,
                    color: isActive ? "#4a7bc5" : "#1a4b8c",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
