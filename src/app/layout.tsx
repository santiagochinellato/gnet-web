import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Metadata, Viewport } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://gnet-web.vercel.app"
  ),
  title: "Gnet | Internet de Alta Velocidad en Bariloche",
  description: "Conexión estable y rápida diseñada para la Patagonia.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Gnet Telecomunicaciones",
    description: "Conexión estable y rápida diseñada para la Patagonia.",
    url: "/",
    siteName: "Gnet",
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1565c0",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://cdn.sanity.io"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://tiles.basemaps.cartocdn.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://tiles.basemaps.cartocdn.com" />
        <link rel="preconnect" href="https://www.transparenttextures.com" />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${poppins.variable} font-body antialiased bg-slate-50 dark:bg-slate-950 transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
