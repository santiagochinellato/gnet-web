"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { cn } from "@/lib/utils";

export function Wifi6Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full border-b border-white/10 transition-all duration-300",
          scrolled
            ? "bg-[#020617]/80 backdrop-blur-md shadow-lg shadow-[var(--color-wifi-primary)]/5"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 group z-50 relative"
          >
            <BrandLogo color="white" priority={false} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Volver a la home
            </Link>
            <Link
              href="#beneficios"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Beneficios
            </Link>
            <Link
              href="#tecnologia"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Tecnología
            </Link>
            <Link
              href="#velocidad"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Comparativa
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://gnetbari.wispro.co/"
              className="hidden sm:flex h-9 items-center justify-center rounded-lg bg-[var(--color-wifi-primary)]/10 px-4 text-sm font-semibold text-[var(--color-wifi-primary)] ring-1 ring-inset ring-[var(--color-wifi-primary)]/20 hover:bg-[var(--color-wifi-primary)]/20 transition-all"
            >
              ¡Contratar Ahora!
            </Link>
            <a
              href="#cobertura"
              className="flex h-9 items-center justify-center rounded-lg bg-[var(--color-wifi-primary)] px-4 text-sm font-bold text-[var(--color-wifi-bg)] shadow-[0_0_15px_rgba(7,182,213,0.4)] hover:shadow-[0_0_25px_rgba(7,182,213,0.6)] hover:scale-105 transition-all duration-300"
            >
              Verificar Cobertura
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-[#020617] bg-opacity-95 backdrop-blur-xl z-40 transition-all duration-300 flex flex-col items-center justify-center gap-8 md:hidden",
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none",
          )}
        >
          <nav className="flex flex-col items-center gap-8 text-xl font-bold">
            <Link
              href="/"
              className="text-slate-300 hover:text-[var(--color-wifi-primary)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Volver a la home
            </Link>
            <Link
              href="#beneficios"
              className="text-slate-300 hover:text-[var(--color-wifi-primary)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Beneficios
            </Link>
            <Link
              href="#tecnologia"
              className="text-slate-300 hover:text-[var(--color-wifi-primary)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tecnología
            </Link>
            <Link
              href="#velocidad"
              className="text-slate-300 hover:text-[var(--color-wifi-primary)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Comparativa
            </Link>
            <Link
              href="#cobertura"
              className="text-[var(--color-wifi-primary)] hover:text-white transition-colors mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Verificar Cobertura
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
