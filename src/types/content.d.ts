export type IconName = "Headset" | "Zap" | "ShieldCheck" | "FileText" | "Phone" | "Mail" | "MapPin";

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  title: string;
  highlight: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
}

export interface FeatureItem {
  iconName: IconName;
  title: string;
  description: string;
}

export interface FeaturesContent {
  sectionTitle: string;
  headline: string;
  description: string;
  ctaText: string;
  items: FeatureItem[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContent {
  description: string;
  headings: {
    services: string;
    company: string;
    contact: string;
  };
  servicesLinks: FooterLink[];
  companyLinks: FooterLink[];
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  copyright: string;
  legalLinks: FooterLink[];
}

export interface SiteContent {
  navigation: NavLink[];
  hero: HeroContent;
  features: FeaturesContent;
  footer: FooterContent;
}
