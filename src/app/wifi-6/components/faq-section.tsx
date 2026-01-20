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
        question: "garantizamos un ping de menos de 20ms en todos los juegos?",
        answer:
          "Nosotros te entregamos la menor latencia posible desde tu casa hasta nuestra salida a internet mediante fibra óptica. Sin embargo, el ping final depende en gran medida de la ubicación y el estado de los servidores del juego (por ejemplo, si el servidor de Valorant está en Brasil o EE.UU.). Gnet elimina el 'cuello de botella' en tu hogar, pero no puede controlar la distancia física hacia servidores externos o la saturacion que estos mismo tienen.",
      },
      {
        question: "Trabajo remoto. WiFi 6 mejora las videollamadas?",
        answer:
          "Totalmente. El problema de las videollamadas no es solo la velocidad, sino la congestión. WiFi 6 usa tecnologías (OFDMA y MU-MIMO) que crean 'carriles exclusivos' para cada dispositivo. Si alguien está descargando un juego pesado en otra habitación, tu reunión de Zoom o Meet no se pixelará ni se cortará",
      },
      {
        question: "¿Funciona con mis dispositivos viejos?",
        answer:
          "Sí. WiFi 6 es retrocompatible. Tu notebook vieja con WiFi 5 funciona igual que antes. Pero tus dispositivos nuevos (PlayStation 5, Xbox Series X, iPhone 11+, Samsung S10+) vuelan.",
      },
      {
        question: "Por qué elegirnos?",
        answer:
          "Porque somos locales y entendemos la Patagonia. No hablas con un bot ni con alguien que no sabe dónde queda Bariloche. Te ofrecemos WiFi 6 certificado, fibra óptica real (FTTH) y soporte técnico humano que habla tu mismo idioma.",
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
