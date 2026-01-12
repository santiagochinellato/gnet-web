"use client";

import { useState, useEffect } from "react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Planes", href: "/planes" },
  { name: "Empresas", href: "/empresas" },
  { name: "Cobertura", href: "/cobertura" },
  { name: "Soporte", href: "/soporte" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Efecto para detectar scroll y "compactar" el navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-0",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <nav
        className={cn(
          "max-w-5xl mx-auto flex items-center justify-between transition-all duration-300",
          // Glassmorphism condicional: Más intenso al scrollear
          scrolled
            ? "bg-white/80 backdrop-blur-lg border border-white/20 shadow-lg rounded-full pl-6 pr-2 py-2"
            : "bg-transparent border-transparent"
        )}
      >
        {/* LOGO */}
        <Link href="/">
          <BrandLogo />
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-teal transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <button
            className={cn(
              "px-5 py-2 rounded-full font-semibold text-sm transition-all",
              scrolled
                ? "bg-slate-900 text-white hover:bg-slate-800"
                : "bg-white text-slate-900 shadow-sm hover:shadow-md"
            )}
          >
            Sucursal Virtual
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden p-2 text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* MOBILE MENU (Simple Overlay) */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 p-4 bg-white/95 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl flex flex-col gap-4 md:hidden animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-semibold text-slate-800 py-2 border-b border-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full bg-brand-teal text-white py-3 rounded-xl font-bold mt-2">
            Ingresar a Sucursal Virtual
          </button>
        </div>
      )}
    </header>
  );
}
