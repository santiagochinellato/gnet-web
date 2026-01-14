import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <div className="w-full h-[600px] md:h-[800px] relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center gap-6">
        <Skeleton className="h-12 w-3/4 md:w-1/2 max-w-2xl" />
        <Skeleton className="h-6 w-full md:w-2/3 max-w-xl" />
        <div className="flex gap-4 mt-4">
          <Skeleton className="h-12 w-32 rounded-3xl" />
          <Skeleton className="h-12 w-32 rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

export function BentoSkeleton() {
  return (
    <div className="container mx-auto px-4 py-20 space-y-8">
      <div className="space-y-4 text-center mx-auto max-w-2xl">
        <Skeleton className="h-4 w-32 mx-auto" />
        <Skeleton className="h-10 w-3/4 mx-auto" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px] md:h-[500px]">
        <Skeleton className="md:col-span-2 md:row-span-2 rounded-3xl h-full w-full" />
        <Skeleton className="rounded-3xl h-full w-full" />
        <Skeleton className="rounded-3xl h-full w-full" />
      </div>
    </div>
  );
}

export function PricingSkeleton() {
  return (
    <div className="container mx-auto px-4 py-20 space-y-8">
      <div className="space-y-4 text-center mx-auto max-w-2xl">
        <Skeleton className="h-4 w-32 mx-auto" />
        <Skeleton className="h-10 w-3/4 mx-auto" />
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6"
          >
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-12 w-full" />
            <div className="space-y-3">
              {[1, 2, 3, 4].map((j) => (
                <Skeleton key={j} className="h-4 w-full" />
              ))}
            </div>
            <Skeleton className="h-12 w-full rounded-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function FaqSkeleton() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-20 w-full" />
        </div>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="border-b border-slate-200 dark:border-slate-800 py-4"
            >
              <Skeleton className="h-6 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="container mx-auto px-4 py-20 space-y-8">
      <div className="space-y-4 text-center mx-auto max-w-2xl">
        <Skeleton className="h-4 w-32 mx-auto" />
        <Skeleton className="h-10 w-3/4 mx-auto" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 space-y-4"
          >
            <div className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
            <Skeleton className="h-20 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function CtaSkeleton() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="rounded-3xl bg-slate-100 dark:bg-slate-900 p-8 md:p-16 text-center space-y-6 relative overflow-hidden">
        <Skeleton className="h-10 w-3/4 mx-auto" />
        <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
        <div className="flex justify-center gap-4 pt-4">
          <Skeleton className="h-12 w-40 rounded-full" />
          <Skeleton className="h-12 w-40 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function SectionSkeleton() {
  return (
    <section className="py-20 md:py-32 container mx-auto px-4 space-y-8">
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-10 w-full md:w-3/4 max-w-3xl" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4"
          >
            <Skeleton className="h-12 w-12 rounded-xl" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-20 w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}

export function CardSkeleton() {
  return (
    <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
      <Skeleton className="h-8 w-1/3" />
      <Skeleton className="h-12 w-1/2" />
      <div className="space-y-2 pt-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <Skeleton className="h-12 w-full rounded-xl mt-6" />
    </div>
  );
}

export function MapSkeleton() {
  return (
    <div className="w-full h-[500px] md:h-[600px] relative bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800">
      <div className="absolute top-4 left-4 z-10 space-y-2">
        <Skeleton className="h-10 w-64 rounded-xl" />
        <Skeleton className="h-10 w-48 rounded-xl" />
      </div>
      <div className="absolute bottom-10 right-10 z-10 space-y-2">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <Skeleton className="h-10 w-10 rounded-lg" />
      </div>
    </div>
  );
}

export function FullScreenMapSkeleton() {
  return (
    <div className="w-full h-[calc(100vh-64px)] relative bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="absolute top-4 left-4 z-10 space-y-2">
        <Skeleton className="h-10 w-64 rounded-xl" />
        <Skeleton className="h-10 w-48 rounded-xl" />
      </div>
    </div>
  );
}

export function ContactSkeleton() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 container mx-auto px-4 py-20">
      <div className="space-y-6">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-full" />
        <div className="space-y-4 mt-8">
          <Skeleton className="h-24 w-full rounded-2xl" />
          <Skeleton className="h-24 w-full rounded-2xl" />
          <Skeleton className="h-24 w-full rounded-2xl" />
        </div>
      </div>
      <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <Skeleton className="h-12 w-full rounded-xl" />
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
        <Skeleton className="h-12 w-full rounded-xl" />
        <Skeleton className="h-12 w-full rounded-xl" />
        <Skeleton className="h-32 w-full rounded-xl" />
        <Skeleton className="h-12 w-full rounded-xl" />
      </div>
    </div>
  );
}
