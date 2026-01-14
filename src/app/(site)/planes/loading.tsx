import { CardSkeleton, HeroSkeleton } from "@/components/skeletons";

export default function Loading() {
  return (
    <div className="w-full">
      <HeroSkeleton />
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
