import {
  HeroSkeleton,
  BentoSkeleton,
  PricingSkeleton,
  MapSkeleton,
  FaqSkeleton,
  TestimonialSkeleton,
  CtaSkeleton,
} from "@/components/skeletons";

export default function Loading() {
  return (
    <div className="w-full">
      <HeroSkeleton />
      <BentoSkeleton />
      <PricingSkeleton />
      <MapSkeleton />
      <FaqSkeleton />
      <TestimonialSkeleton />
      <CtaSkeleton />
    </div>
  );
}
