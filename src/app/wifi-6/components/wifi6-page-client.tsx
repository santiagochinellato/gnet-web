"use client";

import { useState } from "react";
import { point } from "@turf/helpers";
import booleanPointInPolygon from "@turf/boolean-point-in-polygon";
import { COVERAGE_GEOJSON } from "@/lib/coverage-data";
import { CoverageCheckModal } from "./coverage-check-modal";
import { Wifi6Navbar } from "./wifi6-navbar";
import { HeroSection } from "./hero-section";
import { ProblemSection } from "./problem-section";
import { TechnologySection } from "./technology-section";
import { PlansSection } from "./plans-section";
import { ComparisonSection } from "./comparison-section";
import { TestimonialsSection } from "./testimonials-section";
import { FaqSection } from "./faq-section";
import { CtaFooter } from "./cta-footer";
import { StickyCta } from "./sticky-cta";
import { FloatingPingBadge } from "./floating-ping-badge";

interface Wifi6PageClientProps {
  data: {
    hero?: {
      badge?: string;
      title?: string;
      subtitle?: string;
      pingValue?: string;
      pingDescription?: string;
      ctaText?: string;
      ctaSecondaryText?: string;
      ctaSecondaryLink?: string;
      microcopy?: string;
    };
    problems?: {
      title?: string;
      subtitle?: string;
      cards?: Array<{
        icon: string;
        title: string;
        description: string;
        statValue: string;
        statLabel: string;
      }>;
    };
    technology?: {
      badge?: string;
      title?: string;
      intro?: string;
      cards?: Array<{
        icon: string;
        title: string;
        subtitle?: string;
        description: string;
        stat?: {
          value: string;
          label: string;
        };
      }>;
    };
    comparison?: {
      title?: string;
      badge?: string;
      features?: Array<{
        name: string;
        wifi5: string;
        wifi6: string;
      }>;
    };
    testimonials?: {
      title?: string;
      reviews?: Array<{
        name: string;
        role: string;
        text: string;
        stars: number;
        initials?: string;
      }>;
    };
    faqs?: {
      title?: string;
      items?: Array<{
        question: string;
        answer: string;
      }>;
    };
    cta?: {
      badge?: string;
      title?: string;
      description?: string;
    };
    plans?: {
      title?: string;
      subtitle?: string;
      plans?: Array<{
        name: string;
        description: string;
        price: string;
        period: string;
        features: string[];
        ctaText: string;
        ctaLink: string;
        isPopular?: boolean;
        badge?: string;
      }>;
    };
    stickyCta?: {
      topLabel?: string;
      buttonText?: string;
    };
  } | null;
}

export function Wifi6PageClient({ data }: Wifi6PageClientProps) {
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
        `${addressInput}, San Carlos de Bariloche, Argentina`,
      );
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=1`,
      );
      const geoData = await response.json();

      if (geoData && geoData.length > 0) {
        const lat = parseFloat(geoData[0].lat);
        const lon = parseFloat(geoData[0].lon);
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
          "No pudimos encontrar esa dirección exacta. Intenta agregar más detalles (calle y altura).",
        );
      }
    } catch (error) {
      console.error("Verification error:", error);
      alert("Hubo un error al verificar. Por favor intenta nuevamente.");
    } finally {
      setIsVerifying(false);
    }
  };

  const {
    hero,
    problems,
    technology,
    comparison,
    testimonials,
    faqs,
    cta,
    plans,
    stickyCta,
  } = data || {};

  return (
    <div className="min-h-screen bg-[var(--color-wifi-bg)] text-white font-body selection:bg-[var(--color-wifi-primary)] selection:text-[var(--color-wifi-bg)]">
      <Wifi6Navbar />

      {/* Floating Ping Badge */}
      <FloatingPingBadge />

      <main className="relative flex flex-col items-center overflow-x-hidden">
        <HeroSection
          data={
            hero
              ? {
                  badge: hero.badge,
                  headline: hero.title,
                  subheadline: hero.subtitle,
                  pingValue: hero.pingValue,
                  pingDescription: hero.pingDescription,
                  ctaText: hero.ctaText,
                  ctaSecondaryText: hero.ctaSecondaryText,
                  ctaSecondaryLink: hero.ctaSecondaryLink,
                  microcopy: hero.microcopy,
                }
              : undefined
          }
        />
        <ProblemSection data={problems} />
        <TechnologySection data={technology} />
        <PlansSection data={plans} />
        <ComparisonSection data={comparison} />
        <TestimonialsSection data={testimonials} />
        <FaqSection data={faqs} />
        <CtaFooter
          onVerify={handleVerifyCoverage}
          isVerifying={isVerifying}
          addressInput={addressInput}
          setAddressInput={setAddressInput}
          data={cta}
        />
        <StickyCta data={stickyCta} />
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
