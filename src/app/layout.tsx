import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "maplibre-gl/dist/maplibre-gl.css";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://basemaps.cartocdn.com" />
        <link rel="dns-prefetch" href="https://basemaps.cartocdn.com" />
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
