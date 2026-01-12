import CoverageMap from "@/components/coverage/coverage-map";

export default function CoveragePage() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col font-display">
      <div className="pt-16 flex-1 relative">
        <CoverageMap />
      </div>
    </main>
  );
}
