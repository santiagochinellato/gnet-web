import { Suspense } from "react";
import { Footer } from "@/components/layout/footer";
import { PlanesContent } from "@/components/sections/planes/planes-content";
import { getSiteContent } from "@/lib/content";

import { Metadata } from "next";
import { mapSeoConfig } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent();
  return mapSeoConfig(content.planes.seo);
}

export default async function PlanesPage() {
  const content = await getSiteContent();
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-display">
      <Suspense
        fallback={
          <div className="min-h-screen bg-slate-50 dark:bg-slate-950" />
        }
      >
        <PlanesContent content={content.planes} />
      </Suspense>
      <Footer content={content.footer} />
    </main>
  );
}
