import Link from "next/link";
import { Unplug } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 text-center transition-colors duration-300">
      <div className="mb-6 rounded-full bg-slate-100 p-8 dark:bg-slate-900">
        <Unplug className="h-16 w-16 text-[var(--color-primary)]" />
      </div>

      <h1 className="mb-4 text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-600 sm:text-9xl">
        404
      </h1>

      <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
        Ruta no encontrada
      </h2>

      <p className="mb-8 max-w-md text-slate-600 dark:text-slate-400 text-lg">
        Parece que el enlace que buscas se ha desconectado o no existe.
      </p>

      <Link
        href="/"
        className="inline-flex h-12 items-center justify-center rounded-lg bg-[var(--color-primary)] px-8 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
