"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 text-center transition-colors duration-300">
      <div className="mb-6 rounded-full bg-amber-100 p-6 dark:bg-amber-900/20">
        <AlertTriangle className="h-12 w-12 text-amber-500" />
      </div>

      <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
        Error de Sistema
      </h2>

      <p className="mb-2 max-w-md text-slate-600 dark:text-slate-300 text-lg font-medium">
        Hemos detectado una interrupción inesperada en el protocolo.
      </p>

      {/* Show error message safely if needed, mostly for dev contexts or if acceptable */}
      <p className="mb-8 max-w-md text-sm text-slate-500 dark:text-slate-500">
        {error.message || "Algo salió mal. Por favor intentá nuevamente."}
      </p>

      <button
        onClick={() => reset()}
        className="inline-flex h-12 items-center justify-center rounded-lg bg-slate-900 px-8 text-sm font-bold text-white transition-all hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
      >
        Reintentar conexión
      </button>
    </div>
  );
}
