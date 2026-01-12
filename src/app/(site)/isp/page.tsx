import { HeroISP } from "@/components/sections/isp/hero-isp";
import { StatsISP } from "@/components/sections/isp/stats-isp";
import { ServicesGridISP } from "@/components/sections/isp/services-grid-isp";
import { CaseStudiesISP } from "@/components/sections/isp/case-studies-isp";
import { CTAISP } from "@/components/sections/isp/cta-isp";
import { Footer } from "@/components/layout/footer";
import { getSiteContent } from "@/lib/content";

import { Metadata } from "next";
import { mapSeoConfig } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent();
  return mapSeoConfig(content.isp.seo);
}

export default async function ISPPage() {
  const content = await getSiteContent();
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-black overflow-x-hidden">
      <HeroISP content={content.isp.hero} />
      <StatsISP content={content.isp.stats} />
      <ServicesGridISP content={content.isp.services} />
      <CaseStudiesISP content={content.isp.caseStudies} />
      <CTAISP content={content.isp.cta} />
      <Footer content={content.footer} />
    </main>
  );
}
