"use client";

import { useState } from "react";
import { point } from "@turf/helpers";
import booleanPointInPolygon from "@turf/boolean-point-in-polygon";
import { COVERAGE_GEOJSON } from "@/lib/coverage-data";
import { CoverageCheckModal } from "./components/coverage-check-modal";
import { Wifi6Navbar } from "./components/wifi6-navbar";
import { HeroSection } from "./components/hero-section";
import { ProblemSection } from "./components/problem-section";
import { TechnologySection } from "./components/technology-section";
import { PlansSection } from "./components/plans-section";
import { ComparisonSection } from "./components/comparison-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { FaqSection } from "./components/faq-section";
import { CtaFooter } from "./components/cta-footer";
import { StickyCta } from "./components/sticky-cta";

export default function Wifi6Page() {
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
        // Fallback for not found
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
      <Wifi6Navbar />

      <main className="relative flex flex-col items-center overflow-x-hidden">
        <HeroSection />
        <ProblemSection />
        <TechnologySection />
        <PlansSection />
        <ComparisonSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaFooter
          onVerify={handleVerifyCoverage}
          isVerifying={isVerifying}
          addressInput={addressInput}
          setAddressInput={setAddressInput}
        />
        <StickyCta />
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
