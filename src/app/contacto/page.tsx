import { Footer } from "@/components/layout/footer";
import { ContactCards } from "@/components/sections/contact/contact-cards";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactSidebar } from "@/components/sections/contact/contact-sidebar";
import { getSiteContent } from "@/lib/content";

export default function ContactPage() {
  const content = getSiteContent();
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 flex flex-col font-display transition-colors duration-300">
      <section className="flex-1 bg-slate-50 dark:bg-slate-950/50 pt-16">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          {/* Page Heading */}
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Contáctanos
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Estamos para ayudarte. Elige el medio que prefieras para
              comunicarte con nosotros o envíanos un mensaje directo.
            </p>
          </div>

          <ContactCards />

          {/* Main Grid Layout (Form + Info Sidebar) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ContactForm />
            <ContactSidebar />
          </div>
        </div>
      </section>

      <Footer content={content.footer} />
    </main>
  );
}
