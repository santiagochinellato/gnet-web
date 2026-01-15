"use client";

import {
  Cpu,
  Router,
  Wifi,
  Zap,
  BatteryCharging,
  ShieldCheck,
} from "lucide-react";

export function TechnologySection() {
  return (
    <section id="tecnologia" className="w-full py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#081a24] to-[#020617]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-[var(--color-wifi-primary)]/5 rounded-full blur-[120px]"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-20 flex flex-col gap-6 items-center text-center md:items-start md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-wifi-primary)]/30 bg-[var(--color-wifi-primary)]/10 px-4 py-1.5 backdrop-blur-sm self-center md:self-start shadow-[0_0_15px_rgba(7,182,213,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-wifi-primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-wifi-primary)]"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-wifi-primary)]">
              TECNOLOGÍA NASA/INVAP
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl max-w-4xl leading-tight text-center md:text-left">
            Por qué WiFi 6 <br className="hidden md:block" />
            <span className="text-slate-400">no es solo</span>{" "}
            <br className="hidden md:block" />
            &quot;internet más rápido&quot;
            <span className="block mt-2 md:mt-6 text-2xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-wifi-primary)] via-cyan-200 to-blue-500 drop-shadow-[0_0_10px_rgba(7,182,213,0.3)]">
              (Es mucho mejor que eso)
            </span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-4 mt-2 justify-center md:justify-start">
            <div className="h-1 w-12 md:h-px md:w-12 bg-[var(--color-wifi-primary)] rounded-full"></div>
            <p className="text-xl text-slate-300 font-medium italic">
              Te lo explico como si estuviéramos tomando un mate:
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* OFDMA - Grande */}
          <div className="glass-card md:col-span-2 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center group overflow-hidden neon-border transition-all duration-300">
            <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-wifi-primary)] to-blue-600 shadow-lg text-white">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">OFDMA</h3>
              <h4 className="text-lg text-[var(--color-wifi-primary)] font-medium mb-4">
                El &quot;delivery simultáneo&quot;
              </h4>
              <p className="text-slate-400 leading-relaxed max-w-2xl">
                Imaginate que antes tu WiFi era un delivery que va a una casa,
                entrega, y recién ahí va a la siguiente. Con OFDMA, reparte a 8
                casas al mismo tiempo. <br />
                <br />
                Tu hijo descarga un juego de 60GB, vos viendo Netflix 4K. Nadie
                espera. Nadie sufre.
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
            <div className="flex-1 md:text-right flex flex-col items-center text-center md:items-end">
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
                Es como tener 8 bocas. El router WiFi 6 habla con 8 dispositivos
                a la vez sin perder velocidad. <br />
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
          <div className="glass-card rounded-3xl p-8 flex flex-col justify-between group neon-border transition-all duration-300 hover:bg-white/[0.02] items-center text-center md:items-start md:text-left">
            <div>
              <div className="flex items-center gap-3 mb-4 text-emerald-400 justify-center md:justify-start">
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
          <div className="glass-card rounded-3xl p-8 flex flex-col justify-between group neon-border transition-all duration-300 hover:bg-white/[0.02] items-center text-center md:items-start md:text-left">
            <div>
              <div className="flex items-center gap-3 mb-4 text-amber-400 justify-center md:justify-start">
                <Zap className="w-6 h-6" />
                <span className="text-sm font-bold uppercase tracking-wider">
                  +40% señal
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Señal Láser</h3>
              <p className="text-sm text-slate-400 mt-2">
                Antes el WiFi era como una lámpara que ilumina todo. Ahora es
                una linterna LED que apunta directo a tu dispositivo. Menos
                interferencia, más alcance.
              </p>
            </div>
          </div>

          {/* TWT */}
          <div className="glass-card rounded-3xl p-8 flex flex-col justify-between group neon-border transition-all duration-300 hover:bg-white/[0.02] items-center text-center md:items-start md:text-left">
            <div>
              <div className="flex items-center gap-3 mb-4 text-green-400 justify-center md:justify-start">
                <BatteryCharging className="w-6 h-6" />
                <span className="text-sm font-bold uppercase tracking-wider">
                  7x menos batería
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Ahorro Energético
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                Los celulares y tablets duermen cuando no usan la red. Tu hijo
                no te pide el cargador cada 2 horas.
              </p>
            </div>
          </div>

          {/* WPA3 */}
          <div className="glass-card rounded-3xl p-8 flex flex-col justify-between group neon-border transition-all duration-300 hover:bg-white/[0.02] items-center text-center md:items-start md:text-left">
            <div>
              <div className="flex items-center gap-3 mb-4 text-slate-300 justify-center md:justify-start">
                <ShieldCheck className="w-6 h-6" />
                <span className="text-sm font-bold uppercase tracking-wider">
                  Inquebrantable
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Seguridad Militar
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                El mismo estándar que usan las redes de investigación científica
                (INVAP). Tu vecino no se engancha, los hackers tampoco.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
