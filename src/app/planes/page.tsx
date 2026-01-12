import { Suspense } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PlanesContent } from "@/components/sections/planes/planes-content";

export default function PlanesPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-display">
      <Navbar />
      <Suspense
        fallback={
          <div className="min-h-screen bg-slate-50 dark:bg-slate-950" />
        }
      >
        <PlanesContent />
      </Suspense>
      <Footer />
    </main>
  );
}
