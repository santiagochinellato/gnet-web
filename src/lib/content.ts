import { client } from "@/sanity/lib/client";
import { SiteContent } from "@/types/content";
import { groq } from "next-sanity";
import defaultContent from "@/data/site-content.json";

// Helper to extract URL from Sanity image object if projected correctly
const imgUrl = (source: any) => source?.asset?.url || "";

export const getSiteContent = async (): Promise<SiteContent> => {
  const query = groq`{
    "home": *[_type == "homePage"][0]{
      ...,
      seo,
      hero { ..., image { asset->{url} } },
      features { ..., items[] { ..., iconName } },
      pricing { ..., plans[] { ... } },
      coverage { ... },
      faq { ..., items[] { ... } },
      testimonials { ..., reviews[] { ..., "img": img.asset->url } },
      ctaHighlight { ... }
    },
    "settings": *[_type == "siteSettings"][0]{
      navigation[] { label, href },
      footer { 
        ..., 
        servicesLinks[] { label, href },
        companyLinks[] { label, href },
        legalLinks[] { label, href }
      }
    },
    "isp": *[_type == "ispPage"][0]{
      ...,
      seo,
      hero { ..., ctaPrimary, ctaSecondary },
      stats[] { test, ... }, 
      services { ..., items[] { ... } },
      caseStudies { ..., items[] { ..., image { asset->{url} } } },
      cta { ... }
    },
    "security": *[_type == "securityPage"][0]{
      ...,
      seo,
      hero { ..., "backgroundImage": backgroundImage.asset->url },
      solutions { ..., tabs[] { ..., image { asset->{url} } } },
      services { ..., items[] { ... } },
      gallery { ..., items[] { ..., image { asset->{url} } } },
      comparison { ..., rows[] { ... } }
    },
    "planes": *[_type == "planesPage"][0]{
      ...,
      seo,
      hero { ... },
      tabs { ... },
      categories {
        hogar { ..., plans[], benefits[] },
        turista { ..., plans[], benefits[] },
        comercios { ..., plans[], benefits[] }
      },
      faq { ..., items[] { ... } },
      cta { ... }
    },
    "contact": *[_type == "contactPage"][0]{
      ...,
      seo,
      hero { ... },
      cards[] { ... },
      sidebar { ..., emails[], address[], hours[] }
    }
  }`;

  // Safe fetch with try/catch fallback
  let data;
  try {
    data = await client.fetch(query, {}, { next: { revalidate: 60 } });
  } catch (error) {
    console.error("Sanity fetch failed, using default content:", error);
    data = {};
  }

  const home = data.home;
  const settings = data.settings;
  const isp = data.isp;
  const security = data.security;
  const planes = data.planes;
  const contact = data.contact;

  // Type assertion for default content
  const defaults = defaultContent as unknown as SiteContent;

  // Check if "Obtené wifi 6" exists in navigation, if not add it
  const navigation = settings?.navigation || defaults.navigation;
  const wifiLinkExists = navigation.some(link => link.label === "Obtené wifi 6");
  
  if (!wifiLinkExists) {
      // Insert it before the last item or at the end
      if (navigation.length > 0) {
          const lastItem = navigation[navigation.length - 1]; // Usually "Contacto" or similar
          // Insert before the last item for better visibility, or just push
          // Let's put it as the second to last item
         navigation.splice(navigation.length - 1, 0, { label: "Obtené wifi 6", href: "/wifi-6" });
      } else {
         navigation.push({ label: "Obtené wifi 6", href: "/wifi-6" });
      }
  }

  return {
    navigation,
    footer: settings?.footer || defaults.footer,
    
    // Home Sections
    hero: home ? {
      ...home.hero,
      imageSrc: imgUrl(home.hero?.image),
      highlight: home.hero?.highlight || ""
    } : defaults.hero,

    features: home?.features || defaults.features,
    pricing: home?.pricing || defaults.pricing,
    coverage: home?.coverage || defaults.coverage,
    faq: home?.faq || defaults.faq,
    
    testimonials: home?.testimonials ? {
      title: home.testimonials.title,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      reviews: (home.testimonials.reviews || []).map((r: any, i: number) => ({
        ...r,
        img: r.imgUrl || defaults.testimonials.reviews[i]?.img || "" 
      }))
    } : defaults.testimonials,

    ctaHighlight: home?.ctaHighlight || defaults.ctaHighlight,
    
    homeSeo: home?.seo,

    // Pages
    isp: isp ? {
      ...isp,
      hero: isp.hero,
      caseStudies: {
        ...isp.caseStudies,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        items: (isp.caseStudies?.items || []).map((i: any) => ({
          ...i,
          image: imgUrl(i.image)
        }))
      }
    } : defaults.isp,

    security: security ? {
      ...security,
      hero: {
        ...security.hero,
        backgroundImage: security.hero?.backgroundImage || ""
      },
      solutions: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        tabs: (security.solutions?.tabs || []).map((t: any) => ({
          ...t,
          image: imgUrl(t.image)
        }))
      },
      gallery: {
        ...security.gallery,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        items: (security.gallery?.items || []).map((g: any) => ({
          ...g,
          image: imgUrl(g.image)
        }))
      }
    } : defaults.security,

    planes: planes ? {
      ...planes,
      categories: planes.categories || { hogar: { plans: [], benefits: [], benefitsTitle: ""}, turista: { plans: [], benefits: [], benefitsTitle: ""}, comercios: { plans: [], benefits: [], benefitsTitle: ""} }
    } : defaults.planes,

    contact: contact ? {
      ...contact,
      cards: contact.cards || [],
      sidebar: contact.sidebar || { deptTitle: "", emails: [], officeTitle: "", address: [], hoursTitle: "", hours: [] }
    } : defaults.contact
  };
};
