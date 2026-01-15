"use client";

interface FaqProps {
  data?: {
    title?: string;
    items?: {
      question: string;
      answer: string;
    }[];
  };
}

export function FaqSection({ data }: FaqProps) {
  const {
    title = "Preguntas Frecuentes",
    items = [
      {
        question: "¿Mi hijo realmente necesita WiFi 6 para jugar?",
        answer:
          "Depende. Si juega Minecraft offline, no. Si juega competitivo (Fortnite, Valorant, CS2, LoL), SÍ. La diferencia entre 50ms y 4ms es literalmente ver al enemigo 46 milisegundos antes. En un tiroteo, eso es vida o muerte digital.",
      },
      {
        question:
          "Trabajo para INVAP remoto. ¿WiFi 6 mejora las videollamadas?",
        answer:
          'Absolutamente. Zoom, Teams y Meet usan entre 2-4 Mbps en HD. Con WiFi tradicional, si tu hijo está descargando un juego, tu ancho de banda colapsa. Con WiFi 6 (OFDMA + MU-MIMO), cada dispositivo tiene su "carril" dedicado. Tu videollamada nunca se pixela.',
      },
      {
        question: "¿Funciona con mis dispositivos viejos?",
        answer:
          "Sí. WiFi 6 es retrocompatible. Tu notebook vieja con WiFi 5 funciona igual que antes. Pero tus dispositivos nuevos (PlayStation 5, Xbox Series X, iPhone 11+, Samsung S10+) vuelan.",
      },
      {
        question: "¿Por qué Gnet y no otra empresa?",
        answer:
          "Somos la primera ISP patagónica con WiFi 6 certificado. Fiber to the Home (FTTH) real, no promesas. Y soporte técnico local: llamás y te atiende alguien de Bariloche que entiende cómo es vivir acá.",
      },
    ],
  } = data || {};

  return (
    <section className="w-full py-24 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          {title}
        </h2>
        <div className="grid gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl text-center md:text-left"
            >
              <h3 className="font-bold text-white text-lg mb-2">
                {item.question}
              </h3>
              <p className="text-slate-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
