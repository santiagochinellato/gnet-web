import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type IconName =
  | "Headset"
  | "Zap"
  | "ShieldCheck"
  | "FileText"
  | "Phone"
  | "Mail"
  | "MapPin"
  | "CheckCircle"
  | "Star"
  | "Quote"
  | "BadgeCheck"
  | "Calendar"
  | "Server"
  | "Globe"
  | "Shield"
  | "PcCase"
  | "ArrowRight"
  | "Store"
  | "Building2"
  | "Home"
  | "Video"
  | "Fingerprint"
  | "Wrench"
  | "Bell"
  | "Cable"
  | "Settings"
  | "AtSign"
  | "Clock"
  | "ChevronDown"
  | "MessageCircle";

export interface NavLink {
  href: string;
  label: string;
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
  brandDescription: string;
  servicesTitle: string;
  servicesLinks: FooterLink[];
  companyTitle: string;
  companyLinks: FooterLink[];
  contactTitle: string;
  contactInfo: {
    address: string;
    phone: string;
    email: string;
  };
  copyright: string;
  legalLinks: FooterLink[];
}

// --- NEW SECTIONS ---

export interface PricingPlan {
  title: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  recommended?: boolean;
  color?: "primary" | "secondary";
  badge?: string;
}

export interface PricingSection {
  badge: string;
  title: string;
  description: string;
  plans: PricingPlan[];
}

export interface CoverageSection {
  badge: string;
  title: string;
  description: string;
  barriosTitle: string;
  barrios: string[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQSection {
  title: string;
  description: string;
  items: FAQItem[];
}

export interface TestimonialItem {
  text: string;
  name: string;
  zone: string;
  img: string;
}

export interface TestimonialsSection {
  title: string;
  reviews: TestimonialItem[];
}

export interface CTAHighlight {
  title: string;
  text: string;
  ctaPrimary: { text: string; link: string };
  ctaSecondary: { text: string; link: string };
}

// --- ISP PAGE ---

export interface StatsItem {
  iconName: IconName;
  value: string;
  label: string;
}

export interface ServiceGridItem {
  iconName: IconName;
  title: string;
  description: string;
}

export interface CaseStudyItem {
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
}

export interface ISPContent {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: { text: string; link: string };
    ctaSecondary: { text: string; link: string };
  };
  stats: StatsItem[];
  services: {
    title: string;
    description: string;
    items: ServiceGridItem[];
  };
  caseStudies: {
    title: string;
    description: string;
    linkText: string;
    items: CaseStudyItem[];
  };
  cta: {
    title: string;
    text: string;
    ctaPrimary: { text: string; link: string };
    ctaSecondary: { text: string; link: string };
  };
}

// --- SECURITY PAGE ---

export interface SecuritySolutionTab {
  key: string;
  iconName: IconName;
  label: string;
  title: string;
  description: string;
  image: string;
}

export interface SecurityServiceItem {
  iconName: IconName;
  title: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  image: string;
}

export interface ComparisonRow {
  label: string;
  valueStandard: string;
  valuePro: string;
}

export interface SecurityContent {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaText: string;
    backgroundImage: string;
  };
  solutions: {
    tabs: SecuritySolutionTab[];
  };
  services: {
    title: string;
    description: string;
    items: SecurityServiceItem[];
  };
  gallery: {
    title: string;
    linkText: string;
    items: ProjectItem[];
  };
  comparison: {
    title: string;
    description: string;
    brandStandard: string;
    brandPro: string;
    rows: ComparisonRow[];
  };
}

// --- PLANES PAGE ---

export interface PlanBenefit {
  title: string;
  text: string;
}

export interface PlanesCategoryContent {
  plans: PricingPlan[];
  benefitsTitle: string;
  benefits: PlanBenefit[];
  ctaBox?: {
      title: string;
      description: string;
      ctaText: string;
  };
}

export interface PlanesContent {
  hero: {
    title: string;
    description: string;
  };
  tabs: {
    hogar: string;
    turista: string;
    comercios: string;
  };
  categories: {
    hogar: PlanesCategoryContent;
    turista: PlanesCategoryContent;
    comercios: PlanesCategoryContent;
  };
  faq: FAQSection;
  cta: {
    title: string;
    text: string;
    whatsappText: string;
  }
}

// --- CONTACT PAGE ---

export interface ContactCard {
  iconName: IconName;
  title: string;
  value: string;
  subtext: string;
  ctaText: string;
  action: string; // "tel:..." or "mailto:..." or link
}

export interface DeptEmail {
  label: string;
  email: string;
}

export interface ContactContent {
  hero: {
    title: string;
    description: string;
  };
  cards: ContactCard[];
  sidebar: {
    deptTitle: string;
    emails: DeptEmail[];
    officeTitle: string;
    address: string[]; 
    hoursTitle: string;
    hours: string[];
  };
}

export interface SiteContent {
  navigation: NavLink[];
  hero: HeroContent;
  features: FeaturesContent;
  pricing: PricingSection;
  coverage: CoverageSection;
  faq: FAQSection;
  testimonials: TestimonialsSection;
  ctaHighlight: CTAHighlight;
  footer: FooterContent;
  isp: ISPContent;
  security: SecurityContent;
  planes: PlanesContent;
  contact: ContactContent;
}
