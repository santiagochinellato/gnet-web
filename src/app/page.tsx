import { HeroModern } from "@/components/sections/hero-modern";
import { FeaturesBento } from "@/components/sections/features-bento";
import { PricingPlans } from "@/components/sections/pricing-plans";
import { CoverageMapSection } from "@/components/sections/coverage-map-section";
import { FAQSection } from "@/components/sections/faq-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTAHighlight } from "@/components/sections/cta-highlight";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-display">
      {/* 1. Hero High Conversion */}
      <HeroModern />

      {/* 2. Features (Diferenciales) */}
      <FeaturesBento />

      {/* 3. Pricing Plans */}
      <PricingPlans />

      {/* 4. Coverage Map */}
      <CoverageMapSection />

      {/* 5. FAQ */}
      <FAQSection />

      {/* 6. Testimonials */}
      <TestimonialsSection />

      {/* 7. CTA Highlight */}
      <CTAHighlight />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}
