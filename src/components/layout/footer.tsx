import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/brand-logo";

export function Footer() {
  return (
    <footer
      className="bg-[#0b1116] text-slate-400 py-12 border-t border-slate-800"
      id="contacto"
    >
      <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="inline-block mb-4">
            <BrandLogo color="white" className="w-32 h-10" />
          </Link>
          <p className="text-sm">
            Conectando Bariloche con el mundo a través de la mejor tecnología de
            fibra óptica.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Servicios</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:text-[var(--color-primary)]" href="#">
                Internet Hogar
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--color-primary)]" href="#">
                Internet Empresas
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--color-primary)]" href="#">
                Cámaras de Seguridad
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Compañía</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:text-[var(--color-primary)]" href="#">
                Nosotros
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--color-primary)]" href="#">
                Cobertura
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--color-primary)]" href="#">
                Trabajá con nosotros
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> 0800-GNET (4638)
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> hola@gnet.com.ar
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Mitre 123, Bariloche
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-10 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© 2024 Gnet Telecomunicaciones. Todos los derechos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link className="hover:text-white" href="#">
            Términos y Condiciones
          </Link>
          <Link className="hover:text-white" href="#">
            Política de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
