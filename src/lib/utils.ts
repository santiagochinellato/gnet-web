import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function isSucursalVirtualLink(link: { label?: string; href?: string }) {
  const label = link.label?.toLowerCase() ?? "";
  const href = link.href?.toLowerCase() ?? "";
  return (
    label.includes("sucursal virtual") || href.includes("/portal/sign_in")
  );
}

export function isHomeOfficeLink(link: { label?: string; href?: string }) {
  const label = link.label?.toLowerCase() ?? "";
  const href = link.href?.toLowerCase() ?? "";
  return (
    label.includes("homeoffice") ||
    label.includes("acceso empleados") ||
    href.includes("10.1.1.6:3200")
  );
}
