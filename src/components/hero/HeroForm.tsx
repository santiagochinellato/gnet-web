"use client";

import { useState } from "react";
import { type Feature, type Polygon } from "geojson";
import { MapPin, Smartphone, User, Loader2 } from "lucide-react";
import { point } from "@turf/helpers";
import booleanPointInPolygon from "@turf/boolean-point-in-polygon";
import { COVERAGE_GEOJSON } from "@/lib/coverage-data";
import { LeadModal } from "../coverage/lead-modal";

interface NominatimResult {
  lat: string;
  lon: string;
  display_name: string;
  address?: {
    road?: string;
    house_number?: string;
  };
}

export function HeroForm() {
  const [loading, setLoading] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    status: "covered" | "uncovered";
    address: string;
    coords: [number, number];
    defaultName: string;
    defaultPhone: string;
  }>({
    isOpen: false,
    status: "uncovered",
    address: "",
    coords: [0, 0],
    defaultName: "",
    defaultPhone: "",
  });

  const checkCoverage = (latitude: number, longitude: number) => {
    const pt = point([longitude, latitude]);
    let isInside = false;

    for (const feature of COVERAGE_GEOJSON.features) {
      if (feature.geometry.type === "Polygon") {
        if (booleanPointInPolygon(pt, feature as Feature<Polygon>)) {
          isInside = true;
          break;
        }
      }
    }
    return isInside ? "covered" : "uncovered";
  };

  const getFormattedAddress = (result: NominatimResult) => {
    if (result.address) {
      const { road, house_number } = result.address;
      if (road && house_number) return `${road} ${house_number}`;
      if (road) return road;
    }
    return result.display_name.split(",")[0];
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const address = formData.get("address") as string;
    const phone = formData.get("phone") as string;
    const name = formData.get("name") as string;

    try {
      // 1. Geocode the address
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${encodeURIComponent(
          address + ", San Carlos de Bariloche, Argentina",
        )}&limit=1`,
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const result = data[0];
        const lat = parseFloat(result.lat);
        const lon = parseFloat(result.lon);
        const coords: [number, number] = [lon, lat];

        // Format the address properly
        const formattedAddress = getFormattedAddress(result);

        // 2. Check coverage
        const status = checkCoverage(lat, lon);

        // 3. Open Modal
        setModalState({
          isOpen: true,
          status,
          address: formattedAddress,
          coords,
          defaultName: name,
          defaultPhone: phone,
        });
      } else {
        alert(
          "No pudimos encontrar esa dirección. Por favor intentá ser más específico (ej: Calle y Número).",
        );
      }
    } catch (error) {
      console.error("Error checking coverage:", error);
      alert(
        "Ocurrió un error al verificar la cobertura. Por favor intentá nuevamente.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        className="flex flex-col gap-3 w-full max-w-xl"
        onSubmit={handleSubmit}
      >
        <div className="relative w-full">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300">
            <User className="w-5 h-5" />
          </div>
          <input
            name="name"
            className="w-full h-12 pl-10 pr-4 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
            placeholder="Tu nombre completo"
            type="text"
            required
          />
        </div>

        <div className="relative w-full">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300">
            <MapPin className="w-5 h-5" />
          </div>
          <input
            name="address"
            className="w-full h-12 pl-10 pr-4 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
            placeholder="Dirección (Calle y Altura)"
            type="text"
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300">
              <Smartphone className="w-5 h-5" />
            </div>
            <input
              name="phone"
              className="w-full h-12 pl-10 pr-4 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
              placeholder="Tu WhatsApp"
              type="tel"
              required
            />
          </div>
          <button
            className="h-12 px-6 bg-[var(--color-primary)] hover:bg-blue-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-blue-500/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <span>Consultar Cobertura</span>
            )}
          </button>
        </div>
      </form>

      <LeadModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        status={modalState.status}
        address={modalState.address}
        coords={modalState.coords}
        defaultName={modalState.defaultName}
        defaultPhone={modalState.defaultPhone}
      />
    </>
  );
}
