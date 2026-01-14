import { HeroSection } from "@/components/sections/Hero";
import { FeaturesBento } from "@/components/sections/features-bento";
import { PricingPlans } from "@/components/sections/pricing-plans";
import { Wifi6Banner } from "@/components/sections/wifi6-banner";
import { CoverageMapSection } from "@/components/sections/coverage-map-section";
import { FAQSection } from "@/components/sections/faq-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTAHighlight } from "@/components/sections/cta-highlight";
import { Footer } from "@/components/layout/footer";
import { getSiteContent } from "@/lib/content";

import { Metadata } from "next";
import { mapSeoConfig } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent();
  return mapSeoConfig(content.homeSeo);
}

export default async function Home() {
  const content = await getSiteContent();

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-display">
      {/* 1. Hero High Conversion */}
      <HeroSection content={content.hero} />

      {/* 2. Features (Diferenciales) */}
      <FeaturesBento content={content.features} />

      {/* 3. Pricing Plans */}
      <PricingPlans content={content.pricing} />

      {/* 3.5. Wifi 6 Banner */}
      <Wifi6Banner />

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
