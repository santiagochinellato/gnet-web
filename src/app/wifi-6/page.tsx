"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wifi,
  Rocket,
  AlertCircle,
  Download,
  WifiOff,
  Cpu,
  Router,
  Zap,
  ShieldCheck,
  Gauge,
  Smartphone,
  BatteryCharging,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Star,
  MapPin,
  ArrowUpRight,
  ChevronDown,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/ui/brand-logo";
import { point } from "@turf/helpers";
import booleanPointInPolygon from "@turf/boolean-point-in-polygon";
import { COVERAGE_GEOJSON } from "@/lib/coverage-data";
import { CoverageCheckModal } from "./components/coverage-check-modal";

export default function Wifi6Page() {
  const [scrolled, setScrolled] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  // Coverage Logic State
  const [addressInput, setAddressInput] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    status: "covered" | "uncovered";
    address: string;
    coords: [number, number];
  }>({
    isOpen: false,
    status: "uncovered",
    address: "",
    coords: [0, 0],
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPercent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setCtaVisible(scrollPercent > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleVerifyCoverage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!addressInput.trim()) return;

    setIsVerifying(true);

    try {
      // 1. Geocode address (using Nominatim for demo purposes)
      // Restricting to Bariloche, Argentina
      const query = encodeURIComponent(
        `${addressInput}, San Carlos de Bariloche, Argentina`
      );
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=1`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        const coords: [number, number] = [lon, lat];

        // 2. Check Point in Polygon
        const pt = point(coords);
        let isCovered = false;

        for (const feature of COVERAGE_GEOJSON.features) {
          if (feature.geometry.type === "Polygon") {
            if (booleanPointInPolygon(pt, feature)) {
              isCovered = true;
              break;
            }
          }
        }

        // 3. Open Modal
        setModalState({
          isOpen: true,
          status: isCovered ? "covered" : "uncovered",
          address: addressInput,
          coords: coords,
        });
      } else {
        // Fallback for not found (treat as uncovered or handle specific error)
        // For simplicity, we'll open as uncovered with default center if geocoding fails,
        // implies "we couldn't find/reach exact spot"
        alert(
          "No pudimos encontrar esa dirección exacta. Intenta agregar más detalles (calle y altura)."
        );
      }
    } catch (error) {
      console.error("Verification error:", error);
      alert("Hubo un error al verificar. Por favor intenta nuevamente.");
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-wifi-bg)] text-white font-body selection:bg-[var(--color-wifi-primary)] selection:text-[var(--color-wifi-bg)]">
      {/* Navbar Substitute */}
      <header
        className={cn(
          "fixed top-0 z-50 w-full border-b border-white/10 transition-all duration-300",
          scrolled
            ? "bg-[#020617]/80 backdrop-blur-md shadow-lg shadow-[var(--color-wifi-primary)]/5"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 group">
            <BrandLogo color="white" priority={false} />
          </Link>
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
          <div className="flex items-center gap-4">
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
        </div>
      </header>

      <main className="relative flex flex-col items-center overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-20">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#020617]"></div>
            <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
            {/* Abstract glowing orbs */}
            <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[var(--color-wifi-primary)]/20 blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[var(--color-wifi-accent)]/10 blur-[100px]"></div>
            {/* Replaced generic image with abstract styling or a simpler div if no image available, but using the provided one if possible. 
                Using a gradient overlay for now to simulate the "image" effect without needing the external resource effectively. */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                WIFI 6 EARLY ADOPTER
              </span>
            </div>

            {/* Headline */}
            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-white sm:text-7xl glow-text">
              Internet que funciona <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-wifi-primary)] via-cyan-200 to-[var(--color-wifi-accent)]">
                para toda la familia
              </span>
            </h1>

            {/* Subhead */}
            <p className="max-w-2xl text-lg text-slate-400 sm:text-xl">
              Tu hijo juega sin lag. Vos trabajás sin cortes.{" "}
              <br className="hidden sm:block" />
              Todo al mismo tiempo.
            </p>

            {/* Speed Counter */}
            <div className="my-8 flex flex-col items-center justify-center">
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-4 border-slate-800 bg-slate-900/50 backdrop-blur-xl pulse-emerald">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-black text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]">
                    4<span className="text-xl text-emerald-500/80">ms</span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    PING
                  </span>
                </div>
                {/* SVG Circle */}
                <svg
                  className="absolute inset-0 h-full w-full -rotate-90 text-emerald-500"
                  viewBox="0 0 100 100"
                >
                  <circle
                    className="opacity-50"
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="280"
                    strokeDashoffset="40"
                  ></circle>
                </svg>
              </div>
              <span className="mt-4 text-sm font-medium text-emerald-400 max-w-sm">
                WiFi 6 es la tecnología que INVAP, el Balseiro y las empresas
                tech de Bariloche usan para trabajar en proyectos críticos.
                Ahora en tu casa.
              </span>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#cobertura"
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[var(--color-wifi-primary)] px-8 py-4 text-base font-bold text-[var(--color-wifi-bg)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(7,182,213,0.5)]"
              >
                <Rocket className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                Verificar si llega a mi casa
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:animate-shine group-hover:opacity-100"></div>
              </a>
            </div>

            {/* Microcopy */}
            <p className="text-xs text-slate-500 font-medium">
              ✓ Sin contrato de permanencia &nbsp; ✓ Router WiFi 6 incluido
              &nbsp; ✓ Instalación en 48hs
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-80 animate-pulse">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium">
              Seguí leyendo
            </span>
            <ChevronDown className="w-6 h-6 text-[var(--color-wifi-primary)] animate-bounce" />
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-[#020617] to-transparent"></div>
        </section>

        {/* Problem Section */}
        <section id="problemas" className="w-full bg-[#020617] py-24 relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="mb-12 flex flex-col gap-4 md:items-center md:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl text-center">
                ¿Te pasa esto en casa?
              </h2>
              <p className="max-w-2xl text-slate-400 md:mx-auto text-center font-medium text-lg">
                Problemas reales que WiFi 6 soluciona de verdad
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Card 1 */}
              <div className="glass-card group relative flex flex-col gap-4 overflow-hidden rounded-2xl p-8 hover:border-red-500/50 transition-colors duration-300">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-red-500/10 blur-xl transition-all group-hover:bg-red-500/20"></div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                  <AlertCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Partidas perdidas por ping alto
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Tu hijo tiene buenos reflejos, pero el internet no. 150ms de
                    ping en Fortnite, Valorant o CS2 significa estar muerto
                    antes de ver al enemigo.
                  </p>
                </div>
                <div className="mt-auto border-t border-white/5 pt-4">
                  <span className="text-2xl font-black text-red-500">
                    +150ms
                  </span>
                  <span className="text-xs uppercase text-slate-500 ml-2">
                    = Game Over
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="glass-card group relative flex flex-col gap-4 overflow-hidden rounded-2xl p-8 hover:border-amber-500/50 transition-colors duration-300">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-amber-500/10 blur-xl transition-all group-hover:bg-amber-500/20"></div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                  <Download className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Reuniones con INVAP cortadas
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Estás explicando un diseño crítico y el video se congela. Tu
                    jefe te ve en 480p. La cámara se traba. No es profesional.
                  </p>
                </div>
                <div className="mt-auto border-t border-white/5 pt-4">
                  <span className="text-xl font-black text-amber-500">
                    Video lag
                  </span>
                  <span className="text-xs uppercase text-slate-500 ml-2">
                    = mal laburo
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="glass-card group relative flex flex-col gap-4 overflow-hidden rounded-2xl p-8 hover:border-orange-500/50 transition-colors duration-300">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-orange-500/10 blur-xl transition-all group-hover:bg-orange-500/20"></div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                  <WifiOff className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Solo 3 dispositivos y explota todo
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Tu hijo jugando, Netfix en 4k, vos en Zoom. La red WiFi
                    tradicional elige quién sufre. Siempre sos vos.
                  </p>
                </div>
                <div className="mt-auto border-t border-white/5 pt-4">
                  <span className="text-xl font-black text-orange-500">
                    4 dispositivos
                  </span>
                  <span className="text-xs uppercase text-slate-500 ml-2">
                    = caos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech/Solution Section (Explainer) */}
        <section
          id="tecnologia"
          className="w-full py-24 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#081a24] to-[#020617]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-[var(--color-wifi-primary)]/5 rounded-full blur-[120px]"></div>

          <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="mb-20 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-wifi-primary)]/30 bg-[var(--color-wifi-primary)]/10 px-4 py-1.5 backdrop-blur-sm self-start shadow-[0_0_15px_rgba(7,182,213,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-wifi-primary)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-wifi-primary)]"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-wifi-primary)]">
                  TECNOLOGÍA NASA/INVAP
                </span>
              </div>

              <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl max-w-4xl leading-tight">
                Por qué WiFi 6 <br className="hidden md:block" />
                <span className="text-slate-500">no es solo</span> "internet más
                rápido"
                <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-wifi-primary)] via-cyan-200 to-blue-500 drop-shadow-[0_0_10px_rgba(7,182,213,0.3)]">
                  (Es mucho mejor que eso)
                </span>
              </h2>

              <div className="flex items-center gap-4 mt-2">
                <div className="h-px w-12 bg-[var(--color-wifi-primary)]"></div>
                <p className="text-xl text-slate-300 font-medium italic">
                  Te lo explico como si estuviéramos tomando un mate:
                </p>
              </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* OFDMA - Grande */}
              <div className="glass-card md:col-span-2 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center group overflow-hidden neon-border transition-all duration-300">
                <div className="flex-1">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-wifi-primary)] to-blue-600 shadow-lg text-white">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">OFDMA</h3>
                  <h4 className="text-lg text-[var(--color-wifi-primary)] font-medium mb-4">
                    El "delivery simultáneo"
                  </h4>
                  <p className="text-slate-400 leading-relaxed max-w-2xl">
                    Imaginate que antes tu WiFi era un delivery que va a una
                    casa, entrega, y recién ahí va a la siguiente. Con OFDMA,
                    reparte a 8 casas al mismo tiempo. <br />
                    <br />
                    Tu hijo descarga un juego de 60GB, vos viendo Netflix 4K.
                    Nadie espera. Nadie sufre.
                  </p>
                </div>
                <div className="shrink-0">
                  <div className="inline-flex flex-col items-center justify-center h-32 w-32 rounded-full border-4 border-[var(--color-wifi-primary)]/20 bg-[var(--color-wifi-primary)]/5 backdrop-blur-md">
                    <span className="text-4xl font-black text-white">4x</span>
                    <span className="text-xs uppercase font-bold text-[var(--color-wifi-primary)]">
                      Más eficiente
                    </span>
                  </div>
                </div>
              </div>

              {/* MU-MIMO - Grande */}
              <div className="glass-card md:col-span-2 rounded-3xl p-8 flex flex-col md:flex-row-reverse gap-8 items-center group overflow-hidden neon-border transition-all duration-300">
                <div className="flex-1 md:text-right">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg text-white md:ml-auto">
                    <Router className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    MU-MIMO 8x8
                  </h3>
                  <h4 className="text-lg text-purple-400 font-medium mb-4">
                    8 conversaciones simultáneas
                  </h4>
                  <p className="text-slate-400 leading-relaxed max-w-2xl md:ml-auto">
                    Es como tener 8 bocas. El router WiFi 6 habla con 8
                    dispositivos a la vez sin perder velocidad. <br />
                    <br />
                    Antes era 1 a 1 (tu PlayStation esperaba que tu notebook
                    terminara). Ahora todos hablan al mismo tiempo.
                  </p>
                </div>
                <div className="shrink-0">
                  <div className="inline-flex flex-col items-center justify-center h-32 w-32 rounded-full border-4 border-purple-500/20 bg-purple-500/5 backdrop-blur-md">
                    <span className="text-3xl font-black text-white text-center leading-none">
                      8 dev
                      <br />= 0 lag
                    </span>
                  </div>
                </div>
              </div>

              {/* Canales 160MHz */}
              <div className="glass-card rounded-3xl p-8 flex flex-col justify-between group neon-border transition-all duration-300 hover:bg-white/[0.02]">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-emerald-400">
                    <Wifi className="w-6 h-6" />
                    <span className="text-sm font-bold uppercase tracking-wider">
                      2x más ancho
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Autopista de 160 MHz
                  </h3>
                  <p className="text-sm text-slate-400 mt-2">
                    WiFi 5 era una calle de 2 carriles. WiFi 6 es la Ruta 40
                    completa. Más datos viajan sin embotellamientos.
                  </p>
                </div>
              </div>

              {/* Beamforming */}
              <div className="glass-card rounded-3xl p-8 flex flex-col justify-between group neon-border transition-all duration-300 hover:bg-white/[0.02]">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-amber-400">
                    <Zap className="w-6 h-6" />
                    <span className="text-sm font-bold uppercase tracking-wider">
                      +40% señal
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Señal Láser
                  </h3>
                  <p className="text-sm text-slate-400 mt-2">
                    Antes el WiFi era como una lámpara que ilumina todo. Ahora
                    es una linterna LED que apunta directo a tu dispositivo.
                    Menos interferencia, más alcance.
                  </p>
                </div>
              </div>

              {/* TWT */}
              <div className="glass-card rounded-3xl p-8 flex flex-col justify-between group neon-border transition-all duration-300 hover:bg-white/[0.02]">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-green-400">
                    <BatteryCharging className="w-6 h-6" />
                    <span className="text-sm font-bold uppercase tracking-wider">
                      7x menos batería
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Ahorro Energético
                  </h3>
                  <p className="text-sm text-slate-400 mt-2">
                    Los celulares y tablets duermen cuando no usan la red. Tu
                    hijo no te pide el cargador cada 2 horas.
                  </p>
                </div>
              </div>

              {/* WPA3 */}
              <div className="glass-card rounded-3xl p-8 flex flex-col justify-between group neon-border transition-all duration-300 hover:bg-white/[0.02]">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-slate-300">
                    <ShieldCheck className="w-6 h-6" />
                    <span className="text-sm font-bold uppercase tracking-wider">
                      Inquebrantable
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Seguridad Militar
                  </h3>
                  <p className="text-sm text-slate-400 mt-2">
                    El mismo estándar que usan las redes de investigación
                    científica (INVAP). Tu vecino no se engancha, los hackers
                    tampoco.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section id="velocidad" className="w-full bg-[#020617] py-24 relative">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                <span className="text-slate-500">WiFi 5</span>
                <span className="mx-4 text-2xl align-middle text-slate-700">
                  VS
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-wifi-primary)] to-blue-500">
                  WiFi 6
                </span>
              </h2>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <p className="text-sm font-bold tracking-wide text-slate-300 uppercase">
                  Comparación honesta sin marketing
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-sm shadow-2xl shadow-black/50">
              <div className="grid grid-cols-3 text-sm">
                {/* Header */}
                <div className="col-span-1 p-6 md:p-8 flex items-center text-slate-400 font-bold tracking-wider uppercase text-xs border-b border-white/10 bg-slate-900/80">
                  Característica
                </div>
                <div className="col-span-1 p-6 md:p-8 flex flex-col items-center justify-center border-b border-white/10 bg-slate-900/80 text-center gap-1">
                  <span className="text-slate-400 font-bold text-lg">
                    WiFi 5
                  </span>
                  <span className="text-xs text-slate-600 font-medium hidden md:block">
                    (Tu router actual)
                  </span>
                </div>
                <div className="col-span-1 p-6 md:p-8 flex flex-col items-center justify-center border-b border-[var(--color-wifi-primary)]/30 bg-[var(--color-wifi-primary)]/10 relative overflow-hidden text-center gap-1">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-wifi-primary)] shadow-[0_0_15px_var(--color-wifi-primary)]"></div>
                  <span className="text-[var(--color-wifi-primary)] font-black text-xl md:text-2xl drop-shadow-[0_0_10px_rgba(7,182,213,0.3)]">
                    WiFi 6
                  </span>
                  <span className="text-[10px] bg-[var(--color-wifi-primary)] text-black font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Recomendado
                  </span>
                </div>

                {/* Velocidad */}
                <div className="col-span-1 p-4 md:p-6 text-white font-medium border-b border-white/5 flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-slate-500 hidden md:block" />
                  Velocidad
                </div>
                <div className="col-span-1 p-4 md:p-6 text-slate-400 border-b border-white/5 text-center flex items-center justify-center">
                  <span className="md:hidden">3.5 G</span>
                  <span className="hidden md:inline">
                    3.5 Gbps (nunca llega)
                  </span>
                </div>
                <div className="col-span-1 p-4 md:p-6 text-white font-bold border-b border-[var(--color-wifi-primary)]/20 bg-[var(--color-wifi-primary)]/5 text-center flex items-center justify-center shadow-[inset_0_0_20px_rgba(7,182,213,0.05)]">
                  9.6 Gbps
                </div>

                {/* Latencia */}
                <div className="col-span-1 p-4 md:p-6 text-white font-medium border-b border-white/5 flex items-center gap-2">
                  <Router className="w-5 h-5 text-slate-500 hidden md:block" />
                  Latencia
                </div>
                <div className="col-span-1 p-4 md:p-6 text-slate-400 border-b border-white/5 text-center flex items-center justify-center">
                  30-50ms
                </div>
                <div className="col-span-1 p-4 md:p-6 text-white font-bold border-b border-[var(--color-wifi-primary)]/20 bg-[var(--color-wifi-primary)]/5 text-center flex items-center justify-center shadow-[inset_0_0_20px_rgba(7,182,213,0.05)]">
                  4ms
                </div>

                {/* Dispositivos */}
                <div className="col-span-1 p-4 md:p-6 text-white font-medium border-b border-white/5 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-slate-500 hidden md:block" />
                  Dispositivos
                </div>
                <div className="col-span-1 p-4 md:p-6 text-slate-400 border-b border-white/5 text-center flex items-center justify-center">
                  3-4
                </div>
                <div className="col-span-1 p-4 md:p-6 text-white font-bold border-b border-[var(--color-wifi-primary)]/20 bg-[var(--color-wifi-primary)]/5 text-center flex items-center justify-center shadow-[inset_0_0_20px_rgba(7,182,213,0.05)]">
                  8-12
                </div>

                {/* Eficiencia */}
                <div className="col-span-1 p-4 md:p-6 text-white font-medium border-b border-white/5 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-slate-500 hidden md:block" />
                  Eficiencia
                </div>
                <div className="col-span-1 p-4 md:p-6 text-slate-400 border-b border-white/5 text-center flex items-center justify-center">
                  ❌ No tiene
                </div>
                <div className="col-span-1 p-4 md:p-6 text-white font-bold border-b border-[var(--color-wifi-primary)]/20 bg-[var(--color-wifi-primary)]/5 text-center flex items-center justify-center shadow-[inset_0_0_20px_rgba(7,182,213,0.05)]">
                  ✅ x4
                </div>

                {/* Gaming + Zoom */}
                <div className="col-span-1 p-4 md:p-6 text-white font-medium border-b border-white/5 flex items-center gap-2">
                  <Wifi className="w-5 h-5 text-slate-500 hidden md:block" />
                  Multitasking
                </div>
                <div className="col-span-1 p-4 md:p-6 text-slate-400 border-b border-white/5 text-center flex items-center justify-center text-xs md:text-sm">
                  Uno sufre
                </div>
                <div className="col-span-1 p-4 md:p-6 text-white font-bold border-b border-[var(--color-wifi-primary)]/20 bg-[var(--color-wifi-primary)]/5 text-center flex items-center justify-center text-xs md:text-sm shadow-[inset_0_0_20px_rgba(7,182,213,0.05)]">
                  Perfecto
                </div>

                {/* Descarga */}
                <div className="col-span-1 p-4 md:p-6 text-white font-medium border-b border-white/5 flex items-center gap-2">
                  <Download className="w-5 h-5 text-slate-500 hidden md:block" />
                  Descarga 60GB
                </div>
                <div className="col-span-1 p-4 md:p-6 text-slate-400 border-b border-white/5 text-center flex items-center justify-center">
                  2 horas
                </div>
                <div className="col-span-1 p-4 md:p-6 text-white font-bold border-b border-[var(--color-wifi-primary)]/20 bg-[var(--color-wifi-primary)]/5 text-center flex items-center justify-center shadow-[inset_0_0_20px_rgba(7,182,213,0.05)]">
                  30 mins
                </div>

                {/* Seguridad */}
                <div className="col-span-1 p-4 md:p-6 text-white font-medium border-b border-white/5 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-slate-500 hidden md:block" />
                  Seguridad
                </div>
                <div className="col-span-1 p-4 md:p-6 text-slate-400 border-b border-white/5 text-center flex items-center justify-center text-xs md:text-sm">
                  WPA2 (Hackeable)
                </div>
                <div className="col-span-1 p-4 md:p-6 text-white font-bold border-b border-[var(--color-wifi-primary)]/20 bg-[var(--color-wifi-primary)]/5 text-center flex items-center justify-center text-xs md:text-sm shadow-[inset_0_0_20px_rgba(7,182,213,0.05)]">
                  WPA3 (Blindado)
                </div>

                {/* Calidad Stream */}
                <div className="col-span-1 p-4 md:p-6 text-white font-medium flex items-center gap-2">
                  <Star className="w-5 h-5 text-slate-500 hidden md:block" />
                  Streaming
                </div>
                <div className="col-span-1 p-4 md:p-6 text-slate-400 text-center flex items-center justify-center">
                  720p
                </div>
                <div className="col-span-1 p-4 md:p-6 text-white font-bold bg-[var(--color-wifi-primary)]/5 text-center flex items-center justify-center shadow-[inset_0_0_20px_rgba(7,182,213,0.05)]">
                  4K
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="w-full py-24 relative bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-white">
                Lo que dicen los que ya tienen WiFi 6 en Bariloche
              </h2>
              <div className="flex gap-2">
                <button className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[var(--color-wifi-primary)] hover:text-black transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[var(--color-wifi-primary)] hover:text-black transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full border-2 border-[var(--color-wifi-primary)]/50 bg-slate-800 flex items-center justify-center text-white font-bold">
                    MR
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Martín R.</h4>
                    <div className="text-xs text-slate-400">
                      Ingeniero en INVAP • B. Jardín Botánico
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 italic text-sm leading-relaxed">
                  "Trabajo con simulaciones 3D que pesan gigas. Antes tardaba 40
                  minutos en subir un archivo al servidor de INVAP. Con WiFi 6
                  de Gnet son 8 minutos. Mi hijo juega Fortnite en la pieza de
                  al lado y yo ni me entero. Cero interferencia."
                </p>
                <div className="mt-auto pt-4 flex gap-1 text-[var(--color-wifi-primary)] text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="glass-card p-6 rounded-2xl flex flex-col gap-4 bg-[var(--color-wifi-primary)]/5 border-[var(--color-wifi-primary)]/20">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full border-2 border-[var(--color-wifi-primary)]/50 bg-slate-800 flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div>
                    <h4 className="font-bold text-white">
                      Sofi "HexaQueen" M.
                    </h4>
                    <div className="text-xs text-slate-400">
                      Gamer Competitiva • Centro Cívico
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 italic text-sm leading-relaxed">
                  "Juego Valorant a nivel competitivo. Antes tenía 60ms de ping
                  y perdía duelos que debería ganar. Contraté Gnet WiFi 6 y
                  ahora estoy en 4-6ms constante. Subí de Platino a Diamante en
                  2 semanas. La diferencia es BRUTAL."
                </p>
                <div className="mt-auto pt-4 flex gap-1 text-[var(--color-wifi-primary)] text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial 3 */}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-24 relative">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Preguntas Frecuentes
            </h2>
            <div className="grid gap-6">
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="font-bold text-white text-lg mb-2">
                  ¿Mi hijo realmente necesita WiFi 6 para jugar?
                </h3>
                <p className="text-slate-400">
                  Depende. Si juega Minecraft offline, no. Si juega competitivo
                  (Fortnite, Valorant, CS2, LoL), SÍ. La diferencia entre 50ms y
                  4ms es literalmente ver al enemigo 46 milisegundos antes. En
                  un tiroteo, eso es vida o muerte digital.
                </p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="font-bold text-white text-lg mb-2">
                  Trabajo para INVAP remoto. ¿WiFi 6 mejora las videollamadas?
                </h3>
                <p className="text-slate-400">
                  Absolutamente. Zoom, Teams y Meet usan entre 2-4 Mbps en HD.
                  Con WiFi tradicional, si tu hijo está descargando un juego, tu
                  ancho de banda colapsa. Con WiFi 6 (OFDMA + MU-MIMO), cada
                  dispositivo tiene su "carril" dedicado. Tu videollamada nunca
                  se pixela.
                </p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="font-bold text-white text-lg mb-2">
                  ¿Funciona con mis dispositivos viejos?
                </h3>
                <p className="text-slate-400">
                  Sí. WiFi 6 es retrocompatible. Tu notebook vieja con WiFi 5
                  funciona igual que antes. Pero tus dispositivos nuevos
                  (PlayStation 5, Xbox Series X, iPhone 11+, Samsung S10+)
                  vuelan.
                </p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="font-bold text-white text-lg mb-2">
                  ¿Por qué Gnet y no otra empresa?
                </h3>
                <p className="text-slate-400">
                  Somos la primera ISP patagónica con WiFi 6 certificado. Fiber
                  to the Home (FTTH) real, no promesas. Y soporte técnico local:
                  llamás y te atiende alguien de Bariloche que entiende cómo es
                  vivir acá.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section
          id="cobertura"
          className="relative w-full border-t border-white/10 bg-[#020617] py-20"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-wifi-primary)]/5 to-transparent pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-12 border border-white/10 shadow-2xl shadow-[var(--color-wifi-primary)]/10 text-center">
              <span className="inline-block rounded-lg bg-[var(--color-wifi-primary)]/10 p-2 text-[var(--color-wifi-primary)] mb-6 text-xs font-bold uppercase tracking-wider border border-[var(--color-wifi-primary)]/20">
                ⚡ ÚLTIMA DECISIÓN INTELIGENTE DEL AÑO
              </span>
              <h2 className="text-3xl font-black text-white md:text-5xl mb-4">
                ¿Tu hijo te pidió WiFi 6? <br />
                <span className="text-[var(--color-wifi-primary)]">
                  Tiene razón.
                </span>
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto text-lg leading-relaxed">
                No es un capricho. Es la diferencia entre trabajar bien o estar
                disculpándote en Zoom. Verificá si Gnet con WiFi 6 llega a tu
                dirección. Si llega, activás en 48 horas.
              </p>

              <form
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-8"
                onSubmit={handleVerifyCoverage}
              >
                <div className="relative flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MapPin className="w-5 h-5 text-slate-500" />
                  </div>
                  <input
                    type="text"
                    value={addressInput}
                    onChange={(e) => setAddressInput(e.target.value)}
                    className="block w-full rounded-xl border-0 bg-slate-800 py-4 pl-10 pr-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-[var(--color-wifi-primary)] focus:bg-slate-900 transition-all font-mono text-sm shadow-sm"
                    placeholder="Ingresá tu dirección (ej: Beschtedt 1250)..."
                    disabled={isVerifying}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isVerifying}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-[var(--color-wifi-primary)] px-6 py-4 text-sm font-bold text-[var(--color-wifi-bg)] shadow-lg shadow-[var(--color-wifi-primary)]/25 hover:bg-[var(--color-wifi-glow)] hover:scale-105 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-wifi-primary)] cursor-pointer disabled:opacity-70 disabled:cursor-wait"
                >
                  {isVerifying ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Verificar Cobertura
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              <div className="flex flex-col gap-2 items-start max-w-sm mx-auto text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>
                    Router WiFi 6 sin costo adicional (valor: $80.000)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Instalación bonificada si contratás hoy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Soporte técnico local (hablás con gente de acá)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>
                    Primera empresa en traer WiFi 6 real a la Patagonia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky CTA */}
        <div
          className={cn(
            "fixed bottom-6 right-6 z-50 transition-all duration-500 transform",
            ctaVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0 pointer-events-none"
          )}
        >
          <a
            href="#cobertura"
            className="flex items-center gap-3 bg-[var(--color-wifi-primary)] text-[var(--color-wifi-bg)] px-6 py-3 rounded-full font-bold shadow-lg shadow-[var(--color-wifi-primary)]/40 hover:scale-105 transition-transform"
          >
            <div className="flex flex-col leading-none">
              <span className="text-[10px] uppercase tracking-wider opacity-80">
                ¿Listo para eliminar el lag?
              </span>
              <span className="text-sm">Verificar Cobertura</span>
            </div>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </main>

      <CoverageCheckModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        status={modalState.status}
        address={modalState.address}
        coords={modalState.coords}
      />
    </div>
  );
}
