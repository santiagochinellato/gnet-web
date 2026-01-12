// Imports from parent directory need adjustment
import "../globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { getSiteContent } from "@/lib/content";

// ... other imports ...

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = await getSiteContent();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SmoothScroll>
        <Navbar links={content.navigation} />
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
        <WhatsAppFloat />
        <SpeedInsights />
      </SmoothScroll>
    </ThemeProvider>
  );
}
