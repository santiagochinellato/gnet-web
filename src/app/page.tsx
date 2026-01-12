import { HeroSection } from "@/components/sections/Hero";
import { FeaturesBento } from "@/components/sections/features-bento";
import { PricingPlans } from "@/components/sections/pricing-plans";
import { CoverageMapSection } from "@/components/sections/coverage-map-section";
import { FAQSection } from "@/components/sections/faq-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTAHighlight } from "@/components/sections/cta-highlight";
import { Footer } from "@/components/layout/footer";
import { getSiteContent } from "@/lib/content";

export default function Home() {
  const content = getSiteContent();

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-display">
      {/* 1. Hero High Conversion */}
      <HeroSection content={content.hero} />

      {/* 2. Features (Diferenciales) */}
      <FeaturesBento content={content.features} />

      {/* 3. Pricing Plans */}
      <PricingPlans content={content.pricing} />

      {/* 4. Coverage Map */}
      <CoverageMapSection content={content.coverage} />

      {/* 5. FAQ */}
      <FAQSection content={content.faq} />

      {/* 6. Testimonials */}
      <TestimonialsSection content={content.testimonials} />

      {/* 7. CTA Highlight */}
      <CTAHighlight content={content.ctaHighlight} />

      {/* 8. Footer */}
      <Footer content={content.footer} />
    </main>
  );
}
