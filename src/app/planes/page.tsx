import { Suspense } from "react";
import { Footer } from "@/components/layout/footer";
import { PlanesContent } from "@/components/sections/planes/planes-content";
import { getSiteContent } from "@/lib/content";

export default function PlanesPage() {
  const content = getSiteContent();
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
