"use client";

import { AlertCircle, Download, WifiOff } from "lucide-react";

export function ProblemSection() {
  return (
    <section id="problemas" className="w-full bg-[#020617] py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl text-center">
            ¿Te pasa esto en casa?
          </h2>
          <p className="max-w-2xl text-slate-400 md:mx-auto text-center font-medium text-lg">
            Problemas reales que WiFi 6 soluciona de verdad
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="glass-card group relative flex flex-col gap-4 overflow-hidden rounded-2xl p-8 hover:border-red-500/50 transition-colors duration-300 items-center text-center md:items-start md:text-left">
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
                ping en Fortnite, Valorant o CS2 significa estar muerto antes de
                ver al enemigo.
              </p>
            </div>
            <div className="mt-auto border-t border-white/5 pt-4">
              <span className="text-2xl font-black text-red-500">+150ms</span>
              <span className="text-xs uppercase text-slate-500 ml-2">
                = Game Over
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card group relative flex flex-col gap-4 overflow-hidden rounded-2xl p-8 hover:border-amber-500/50 transition-colors duration-300 items-center text-center md:items-start md:text-left">
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
          <div className="glass-card group relative flex flex-col gap-4 overflow-hidden rounded-2xl p-8 hover:border-orange-500/50 transition-colors duration-300 items-center text-center md:items-start md:text-left">
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
  );
}
