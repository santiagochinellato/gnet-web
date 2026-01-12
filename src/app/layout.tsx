import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll"; // Reusing existing SmoothScroll or will check if it needs update
import { Navbar } from "@/components/layout/navbar"; // Keeping existing Navbar for now, might need update later

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

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
  title: "Gnet | Internet de Alta Velocidad en Bariloche",
  description: "Conexión estable y rápida diseñada para la Patagonia.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${poppins.variable} font-body antialiased bg-slate-50 dark:bg-slate-950 transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <Navbar />
            {children}
            <Toaster
              position="top-right"
              richColors
              toastOptions={{
                classNames: {
                  toast:
                    "group toast group-[.toaster]:bg-white dark:group-[.toaster]:bg-slate-950 group-[.toaster]:text-slate-950 dark:group-[.toaster]:text-slate-50 group-[.toaster]:border-slate-200 dark:group-[.toaster]:border-slate-800 group-[.toaster]:shadow-lg",
                  description:
                    "group-[.toast]:text-slate-500 dark:group-[.toast]:text-slate-400",
                  actionButton:
                    "group-[.toast]:bg-slate-900 group-[.toast]:text-slate-50 dark:group-[.toast]:bg-slate-50 dark:group-[.toast]:text-slate-900",
                  cancelButton:
                    "group-[.toast]:bg-slate-100 group-[.toast]:text-slate-500 dark:group-[.toast]:bg-slate-800 dark:group-[.toast]:text-slate-400",
                },
              }}
            />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
