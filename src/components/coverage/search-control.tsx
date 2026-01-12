"use client";

import { useState, useEffect } from "react";
import { Search, Loader2 } from "lucide-react";
// Actually, I'll implement a simple debounce/effect inline to avoid creating extra files not requested.

interface SearchControlProps {
  onSelectAddress: (coords: [number, number], address: string) => void;
}

export function SearchControl({ onSelectAddress }: SearchControlProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Debounce logic
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.length > 2) {
        setIsLoading(true);
        try {
          // Constrain search to Bariloche/Argentina for better relevance
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
              query + ", San Carlos de Bariloche, Argentina"
            )}&limit=5`
          );
          const data = await response.json();
          setResults(data);
          setShowResults(true);
        } catch (error) {
          console.error("Search error:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setResults([]);
        setShowResults(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = (result: any) => {
    const lat = parseFloat(result.lat);
    const lon = parseFloat(result.lon);
    // Use display_name or a shorter version
    onSelectAddress([lon, lat], result.display_name.split(",")[0]);
    setShowResults(false);
    setQuery(result.display_name.split(",")[0]); // Set input to selected address
  };

  return (
    <div className="absolute top-4 lg:left-4 lg:right-4 z-[100] max-w-md mx-auto md:left-8 md:right-auto w-full px-4 md:px-0 md:w-[400px]">
      <div className="relative shadow-xl">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Search className="w-5 h-5" />
          )}
        </div>
        <input
          className="w-full h-14 pl-11 pr-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all shadow-sm font-medium"
          placeholder="Buscá tu dirección o barrio..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            if (results.length > 0) setShowResults(true);
          }}
        />

        {showResults && results.length > 0 && (
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">
            {results.map((result) => (
              <button
                key={result.place_id}
                onClick={() => handleSelect(result)}
                className="w-full text-left p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex flex-col"
              >
                <span className="font-medium text-slate-900 dark:text-white truncate w-full">
                  {result.display_name.split(",")[0]}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 truncate w-full">
                  {result.display_name}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
