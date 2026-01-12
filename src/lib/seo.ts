import { Metadata } from "next";
import { SeoConfig } from "@/types/content";

export function mapSeoConfig(seo?: SeoConfig): Metadata {
  if (!seo) return {};

  // Helper to determine the OG Image URL
  // FIX: Ensure ogImage is a valid string URL. If Sanity returns an object, ignore it.
  const ogImageRaw = seo?.ogImage;
  const isValidUrl = typeof ogImageRaw === 'string' && ogImageRaw.startsWith('http');
  
  const ogImageUrl = isValidUrl
    ? ogImageRaw 
    : `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/og?title=${encodeURIComponent(seo?.title || 'Gnet Telecomunicaciones')}`;

  const images = [{ url: ogImageUrl, width: 1200, height: 630, alt: seo?.title || 'Gnet' }];

  return {
    title: seo?.title,
    description: seo?.description,
    keywords: seo?.keywords,
    openGraph: {
      type: "website",
      siteName: "Gnet Telecomunicaciones",
      title: seo?.title,
      description: seo?.description,
      images: images,
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.title,
      description: seo?.description,
      images: images,
    },
  };
}
