import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { FooterContent } from "@/types/content";
import { cn } from "@/lib/utils";

export function Footer({ content }: { content: FooterContent }) {
  return (
    <footer
      className="bg-[#0b1116] text-slate-400 py-12 border-t border-slate-800"
      id="contacto"
    >
      <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8 text-center lg:text-left">
        <div className="col-span-1 lg:col-span-1 flex flex-col items-center lg:items-center text-center lg:text-center">
          <Link href="/" className="mb-4 w-80 flex justify-center">
            <BrandLogo
              color="white"
              className="w-30 h-32 justify-center"
              priority={false}
            />
          </Link>
          <p className="mt-4 text-base text-slate-400 max-w-sm">
            {content.brandDescription}
          </p>
        </div>

        <div className="col-span-1 lg:col-span-2 md:grid md:grid-cols-2 md:gap-8 min-[1281px]:pl-14">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">
              {content.servicesTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {content.servicesLinks.map((item) => {
                const isWifi6 =
                  item.href === "/wifi-6" ||
                  item.label?.toLowerCase().includes("wifi 6");
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm leading-6 transition-colors",
                        isWifi6
                          ? "text-[var(--color-wifi-primary)] font-bold hover:text-[var(--color-wifi-primary)] hover:brightness-110"
                          : "text-slate-400 hover:text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">
              {content.companyTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {content.companyLinks.map((item) => {
                const isWifi6 =
                  item.href === "/wifi-6" ||
                  item.label?.toLowerCase().includes("wifi 6");
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm leading-6 transition-colors",
                        isWifi6
                          ? "text-[var(--color-wifi-primary)] font-bold hover:text-[var(--color-wifi-primary)] hover:brightness-110"
                          : "text-slate-400 hover:text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col min-[1281px]:pl-14">
          <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">
            {content.contactTitle}
          </h3>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start justify-center md:justify-start gap-3 text-sm leading-6 text-slate-400">
              <MapPin className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
              <span>{content.contactInfo.address}</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3 text-sm leading-6 text-slate-400">
              <Phone className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
              <a
                href={`tel:${content.contactInfo.phone.replace(
                  /[^0-9+]/g,
                  "",
                )}`}
                className="hover:text-white transition-colors"
              >
                {content.contactInfo.phone}
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3 text-sm leading-6 text-slate-400">
              <Mail className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
              <a
                href={`mailto:${content.contactInfo.email}`}
                className="hover:text-white transition-colors"
              >
                {content.contactInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-10 border-t border-slate-800 pt-8 flex flex-col lg:flex-row justify-between items-center text-xs text-center lg:text-left">
        <p>{content.copyright}</p>
        <div className="flex gap-4 mt-4 lg:mt-0">
          {content.legalLinks.map((link) => (
            <Link
              key={link.label}
              className="hover:text-white"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-10 mt-4 text-center text-xs text-slate-500">
        <p>
          Web diseñada y creada por{" "}
          <a
            href="https://portfolio-santiago-chinellato.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] hover:text-white transition-colors"
          >
            Santiago Chinellato
          </a>
        </p>
      </div>
    </footer>
  );
}
