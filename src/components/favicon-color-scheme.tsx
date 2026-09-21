"use client";

import { useEffect } from "react";

const LIGHT_ICON = "/icon-48.png";
const DARK_ICON = "/icon-dark-48.png";

export function FaviconColorScheme() {
  useEffect(() => {
    const apply = (isDark: boolean) => {
      const href = isDark ? DARK_ICON : LIGHT_ICON;
      document
        .querySelectorAll<HTMLLinkElement>(
          'link[rel="icon"], link[rel="shortcut icon"]',
        )
        .forEach((link) => link.remove());

      const link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/png";
      link.sizes = "48x48";
      link.href = href;
      document.head.appendChild(link);
    };

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    apply(media.matches);
    const onChange = (event: MediaQueryListEvent) => apply(event.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return null;
}
