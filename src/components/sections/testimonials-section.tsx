import { Star, Quote } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    text: "Vivo en el Km 8 y siempre tuve problemas con el viento hasta que contraté Gnet. La fibra no se corta nunca.",
    name: "María González",
    zone: "Barrio Pinar del Lago",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCictHp7GusfXE8H3pDVTBFvn2zDbs8rpVUK-sCY80nmYtEePsYjQdiTlIfn0WAtN0xihnEBXQXAuQPq5t98DEEkum4jc7z5XyQOmKr02AiLt6bIJmbeNsn3KeaojbC-gPEVSevLDsRv3a6ixmnbZjGD5jNLrCaaXrW4lYOw_X7JGSrFWAiZeTxeAnficq3LUReUfpaJu9fPn-JVvaQ6P8xkfQtP4Sfwe0ZVkaWQWsUX9ZGVGfHJXYkjesLA2UoZq8cC4RHihOML9fE",
  },
  {
    text: "Tengo cabañas para turismo y el servicio short-term es genial. Activo y desactivo según la temporada.",
    name: "Pablo Rossi",
    zone: "Cabañas El Mirador",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwfR4-k_ffdCaKNavI30OxbH2k8id9EDMbgajofFsCP5yX4mj6tDuR3vvZw9USQuC6XsydW8J43DZHGZ3daeegwTaTHQO8wl4tWBCp17eUQI2gJiPT5SOqBOPQowbLFLn1IGSXLgSOvhkjqjXqQb7KxPCMMtbJg-u4jRhM4jNp0LMENSb2NdZRCOB8fd13XzuZHP_n-J5ur4GRKhdQ5eUSNANyu7UtT8HQnnVykhqIY7MYce4TK3O0f01wG9S0HyAN-5w26Mrm-f5Z",
  },
  {
    text: "El soporte técnico es excelente. Llamás y te atiende alguien de acá, no una máquina.",
    name: "Luciana M.",
    zone: "Centro Cívico",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAetxIB-_a_rH6N5vBNg6nenhpUdm8UI9lRMD0QpT8WyitbPxhW924VICrBo2dOBxiwIjcOF_s3pRZeac5TSJy1agXRAG2MTNDGSh3VRKPELUoT_0buZZUF3UW5y9eKFFwWRmwj3x6EjYKD7CCfLm-2iHZNJwkmGVyGA56_tiwsrrr-HUMklJHU-eJoWCh5__WkoxCVjZbyssezlSfT_UBYiP5wcHEqHldoWOkukqDgVasB0zKaoaig9otn_hjPoGqBhKR-1JcxCNkO",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Lo que dicen nuestros vecinos
        </h2>
        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-[350px] snap-center bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col relative"
            >
              <div className="absolute top-6 right-6 text-[var(--color-primary)]/10">
                <Quote className="w-10 h-10 rotate-180" />
              </div>
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-slate-300 mb-6 italic flex-1 relative z-10 font-medium leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-slate-200 overflow-hidden relative">
                  <Image
                    src={review.img}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-sm text-gray-900 dark:text-white">
                    {review.name}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-slate-400">
                    {review.zone}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
