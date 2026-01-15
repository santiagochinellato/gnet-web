"use client";

export function FaqSection() {
  return (
    <section className="w-full py-24 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Preguntas Frecuentes
        </h2>
        <div className="grid gap-6">
          <div className="glass-card p-6 rounded-2xl text-center md:text-left">
            <h3 className="font-bold text-white text-lg mb-2">
              ¿Mi hijo realmente necesita WiFi 6 para jugar?
            </h3>
            <p className="text-slate-400">
              Depende. Si juega Minecraft offline, no. Si juega competitivo
              (Fortnite, Valorant, CS2, LoL), SÍ. La diferencia entre 50ms y 4ms
              es literalmente ver al enemigo 46 milisegundos antes. En un
              tiroteo, eso es vida o muerte digital.
            </p>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center md:text-left">
            <h3 className="font-bold text-white text-lg mb-2">
              Trabajo para INVAP remoto. ¿WiFi 6 mejora las videollamadas?
            </h3>
            <p className="text-slate-400">
              Absolutamente. Zoom, Teams y Meet usan entre 2-4 Mbps en HD. Con
              WiFi tradicional, si tu hijo está descargando un juego, tu ancho
              de banda colapsa. Con WiFi 6 (OFDMA + MU-MIMO), cada dispositivo
              tiene su &quot;carril&quot; dedicado. Tu videollamada nunca se
              pixela.
            </p>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center md:text-left">
            <h3 className="font-bold text-white text-lg mb-2">
              ¿Funciona con mis dispositivos viejos?
            </h3>
            <p className="text-slate-400">
              Sí. WiFi 6 es retrocompatible. Tu notebook vieja con WiFi 5
              funciona igual que antes. Pero tus dispositivos nuevos
              (PlayStation 5, Xbox Series X, iPhone 11+, Samsung S10+) vuelan.
            </p>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center md:text-left">
            <h3 className="font-bold text-white text-lg mb-2">
              ¿Por qué Gnet y no otra empresa?
            </h3>
            <p className="text-slate-400">
              Somos la primera ISP patagónica con WiFi 6 certificado. Fiber to
              the Home (FTTH) real, no promesas. Y soporte técnico local: llamás
              y te atiende alguien de Bariloche que entiende cómo es vivir acá.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
