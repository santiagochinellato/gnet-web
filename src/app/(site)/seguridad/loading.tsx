import { HeroSkeleton, SectionSkeleton } from "@/components/skeletons";

export default function Loading() {
  return (
    <div className="w-full">
      <HeroSkeleton />
      <SectionSkeleton />
    </div>
  );
}
