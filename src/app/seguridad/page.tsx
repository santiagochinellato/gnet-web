import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSecurity } from "@/components/sections/security/hero-security";
import { SolutionsTabs } from "@/components/sections/security/solutions-tabs";
import { ServicesGridSecurity } from "@/components/sections/security/services-grid-security";
import { GallerySecurity } from "@/components/sections/security/gallery-security";
import { ComparisonTableSecurity } from "@/components/sections/security/comparison-table-security";

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 flex flex-col font-display transition-colors duration-300">
      <Navbar />
      <HeroSecurity />
      <SolutionsTabs />
      <ServicesGridSecurity />
      <GallerySecurity />
      <ComparisonTableSecurity />
      <Footer />
    </main>
  );
}
