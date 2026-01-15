import { client } from "@/sanity/lib/client";
import { Wifi6PageClient } from "./components/wifi6-page-client";
import { Metadata } from "next";

// GROQ Query
const WIFI6_PAGE_QUERY = `*[_type == "wifi6Page"][0] {
  hero,
  problems,
  technology,
  plans,
  comparison,
  testimonials,
  faqs,
  cta,
  seo {
    metaTitle,
    metaDescription,
    ogImage
  }
}`;

// Dynamic Metadata
export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch(WIFI6_PAGE_QUERY);
  const { seo } = data || {};

  return {
    title:
      seo?.metaTitle ||
      "WiFi 6 con Gnet | El Nuevo Estándar de Internet en Bariloche",
    description:
      seo?.metaDescription ||
      "Descubrí el poder de WiFi 6. Velocidad, estabilidad y cobertura para toda tu casa. Tecnología de punta ahora disponible en Bariloche.",
    openGraph: {
      images: seo?.ogImage ? [seo.ogImage] : [],
    },
  };
}

export default async function Wifi6Page() {
  const data = await client.fetch(WIFI6_PAGE_QUERY);

  return <Wifi6PageClient data={data} />;
}
