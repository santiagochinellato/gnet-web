"use client";

import { useState, useEffect } from "react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, UserCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Planes", href: "/planes" },
  { name: "Cobertura", href: "/#cobertura" },
  { name: "Seguridad Electrónica", href: "/seguridad" },
  { name: "Servicios ISP", href: "/isp" },
  { name: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isTransparentPage = pathname === "/" || pathname === "/isp";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showScrolledStyle = scrolled || !isTransparentPage;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        showScrolledStyle
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-2 dark:bg-slate-950/90 dark:border-slate-800"
          : "bg-transparent py-4"
      )}
    >
      <div className="px-4 md:px-8 flex items-center justify-between max-w-[1400px] mx-auto">
        {/* LOGO */}
        <Link href="/">
          {/* Use Gnet-black.png always, and invert it to white when needed (Top of page, or Dark Mode) */}
          <BrandLogo
            className={
              showScrolledStyle
                ? "dark:invert dark:brightness-0" // Scrolled: Invert only in Dark Mode (to make it white)
                : "invert brightness-0" // Top: Always invert (to make it white on transparent bg)
            }
            color="black"
          />
        </Link>

        {/* DESKTOP LINKS */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[var(--color-primary)]",
                showScrolledStyle
                  ? "text-slate-700 dark:text-slate-200"
                  : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA BUTTONS */}
        <div className="flex gap-3 items-center">
          {/* <button
            className={cn(
              "hidden lg:flex cursor-pointer items-center justify-center rounded-full h-10 px-5 text-sm font-bold transition-all border",
              scrolled
                ? "bg-gray-100 border-gray-200 text-slate-700 hover:bg-gray-200"
                : "bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
            )}
          >
            <Phone className="w-4 h-4 mr-2" />
            <span className="truncate">0800-GNET</span>
          </button> */}

          <button className="flex cursor-pointer items-center justify-center rounded-full h-10 px-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:opacity-90 text-white text-sm font-bold shadow-lg shadow-blue-500/20 transition-all">
            <span className="truncate">Sucursal Virtual</span>
          </button>

          {/* THEME TOGGLE */}
          <div className="hidden md:block">
            <ModeToggle
              className={
                !showScrolledStyle
                  ? "border-white/20 text-white hover:bg-white/10 dark:hover:bg-white/10"
                  : ""
              }
            />
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className={cn(
              "xl:hidden p-2 transition-colors",
              showScrolledStyle
                ? "text-slate-900 dark:text-white"
                : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-4 shadow-xl xl:hidden animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-semibold text-slate-800 py-3 border-b border-slate-100 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 mt-2">
              <button className="w-full bg-gray-100 dark:bg-slate-800 py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-slate-700 dark:text-slate-200">
                <Phone className="w-4 h-4" /> 0800-GNET
              </button>
              <div className="flex justify-center bg-gray-100 dark:bg-slate-800 p-2 rounded-xl">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
