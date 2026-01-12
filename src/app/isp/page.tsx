import { HeroISP } from "@/components/sections/isp/hero-isp";
import { StatsISP } from "@/components/sections/isp/stats-isp";
import { ServicesGridISP } from "@/components/sections/isp/services-grid-isp";
import { CaseStudiesISP } from "@/components/sections/isp/case-studies-isp";
import { CTAISP } from "@/components/sections/isp/cta-isp";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function ISPPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <HeroISP
        badge="Servicios B2B"
        title="Soluciones Integrales para ISP, WISP y FTTH"
        subtitle="Delegá la complejidad técnica. Nos ocupamos desde la atención a tus abonados hasta la ingeniería de tu backbone, para que vos te enfoques en crecer."
      />
      <StatsISP />
      <ServicesGridISP />
      <CaseStudiesISP />
      <CTAISP />
      <Footer />
    </main>
  );
}
