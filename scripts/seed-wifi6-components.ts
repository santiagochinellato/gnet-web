
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'tu_project_id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // Needs a token with write access
  useCdn: false,
});

async function main() {
  const doc = {
    _id: 'wifi6Page',
    _type: 'wifi6Page',
    hero: {
      badge: "WIFI 6 EARLY ADOPTER",
      title: "Internet que funciona para toda la familia",
      subtitle: "Tu hijo juega sin lag. Vos trabajás sin cortes. Todo al mismo tiempo.",
      pingValue: "4ms",
      ctaText: "Verificar si llega a mi casa"
    },
    problems: {
      title: "¿Te pasa esto en casa?",
      subtitle: "Problemas reales que WiFi 6 soluciona de verdad",
      cards: [
        {
            _key: 'p1',
          icon: "AlertCircle",
          title: "Partidas perdidas por ping alto",
          description: "Tu hijo tiene buenos reflejos, pero el internet no. 150ms de ping en Fortnite, Valorant o CS2 significa estar muerto antes de ver al enemigo.",
          statValue: "+150ms",
          statLabel: "= Game Over"
        },
        {
            _key: 'p2',
          icon: "Download",
          title: "Reuniones con INVAP cortadas",
          description: "Estás explicando un diseño crítico y el video se congela. Tu jefe te ve en 480p. La cámara se traba. No es profesional.",
          statValue: "Video lag",
          statLabel: "= mal laburo"
        },
        {
            _key: 'p3',
          icon: "WifiOff",
          title: "Solo 3 dispositivos y explota todo",
          description: "Tu hijo jugando, Netfix en 4k, vos en Zoom. La red WiFi tradicional elige quién sufre. Siempre sos vos.",
          statValue: "4 dispositivos",
          statLabel: "= caos"
        }
      ]
    },
    technology: {
      badge: "TECNOLOGÍA NASA/INVAP",
      title: "Por qué WiFi 6 no es solo \"internet más rápido\"",
      intro: "Te lo explico como si estuviéramos tomando un mate:",
      cards: [
        {
            _key: 't1',
          icon: "Cpu",
          title: "OFDMA",
          subtitle: "El \"delivery simultáneo\"",
          description: "Imaginate que antes tu WiFi era un delivery que va a una casa, entrega, y recién ahí va a la siguiente. Con OFDMA, reparte a 8 casas al mismo tiempo. \n\nTu hijo descarga un juego de 60GB, vos viendo Netflix 4K. Nadie espera. Nadie sufre.",
          stat: {
             value: "4x",
             label: "Más eficiente"
          }
        },
        {
            _key: 't2',
            icon: "Router",
            title: "MU-MIMO 8x8",
            subtitle: "8 conversaciones simultáneas",
            description: "Es como tener 8 bocas. El router WiFi 6 habla con 8 dispositivos a la vez sin perder velocidad. \n\nAntes era 1 a 1 (tu PlayStation esperaba que tu notebook terminara). Ahora todos hablan al mismo tiempo.",
            stat: {
                value: "8 dev",
                label: "= 0 lag"
            }
        },
        {
            _key: 't3',
            icon: "Wifi",
            title: "Autopista de 160 MHz",
            subtitle: "2x más ancho", 
            description: "WiFi 5 era una calle de 2 carriles. WiFi 6 es la Ruta 40 completa. Más datos viajan sin embotellamientos."
        },
        {
            _key: 't4',
            icon: "Zap",
            title: "Señal Láser",
            subtitle: "+40% señal", 
            description: "Antes el WiFi era como una lámpara que ilumina todo. Ahora es una linterna LED que apunta directo a tu dispositivo. Menos interferencia, más alcance."
        },
        {
            _key: 't5',
            icon: "BatteryCharging",
            title: "Ahorro Energético",
            subtitle: "7x menos batería", 
            description: "Los celulares y tablets duermen cuando no usan la red. Tu hijo no te pide el cargador cada 2 horas."
        },
        {
            _key: 't6',
            icon: "ShieldCheck",
            title: "Seguridad Militar",
            subtitle: "Inquebrantable", 
            description: "El mismo estándar que usan las redes de investigación científica (INVAP). Tu vecino no se engancha, los hackers tampoco."
        }
      ]
    },
    comparison: {
        title: "WiFi 5 VS WiFi 6",
        badge: "Comparación honesta sin marketing",
        features: [
            { _key:'c1', name: "Velocidad", wifi5: "3.5 Gbps (nunca llega)", wifi6: "9.6 Gbps" },
            { _key:'c2', name: "Latencia", wifi5: "30-50ms", wifi6: "4ms" },
            { _key:'c3', name: "Dispositivos", wifi5: "3-4", wifi6: "8-12" },
            { _key:'c4', name: "Eficiencia", wifi5: "❌ No tiene", wifi6: "✅ x4" },
            { _key:'c5', name: "Multitasking", wifi5: "Uno sufre", wifi6: "Perfecto" },
            { _key:'c6', name: "Descarga 60GB", wifi5: "2 horas", wifi6: "30 mins" },
            { _key:'c7', name: "Seguridad", wifi5: "WPA2 (Hackeable)", wifi6: "WPA3 (Blindado)" },
            { _key:'c8', name: "Streaming", wifi5: "720p", wifi6: "4K" },
        ]
    },
    testimonials: {
        title: "Lo que dicen los que ya tienen WiFi 6 en Bariloche",
        reviews: [
            { _key: 'r1', name: "Martín R.", role: "Ingeniero en INVAP • B. Jardín Botánico", text: "Trabajo con simulaciones 3D que pesan gigas. Antes tardaba 40 minutos en subir un archivo al servidor de INVAP. Con WiFi 6 de Gnet son 8 minutos. Mi hijo juega Fortnite en la pieza de al lado y yo ni me entero. Cero interferencia.", stars: 5 },
            { _key: 'r2', name: 'Sofi "HexaQueen" M.', role: "Gamer Competitiva • Centro Cívico", text: "Juego Valorant a nivel competitivo. Antes tenía 60ms de ping y perdía duelos que debería ganar. Contraté Gnet WiFi 6 y ahora estoy en 4-6ms constante. Subí de Platino a Diamante en 2 semanas. La diferencia es BRUTAL.", stars: 5 },
            { _key: 'r3', name: "Carlos D.", role: "Dueño de Cabañas • Km 5", text: "Mis huéspedes siempre se quejaban de que el WiFi se cortaba cuando todos se conectaban a la noche. Cambié al plan Turismo WiFi 6 y santo remedio. Ahora me dejan reseñas de 5 estrellas destacando la velocidad de internet.", stars: 5 },
        ]
    },
    faqs: {
        title: "Preguntas Frecuentes",
        items: [
            { _key: 'f1', question: "¿Mi hijo realmente necesita WiFi 6 para jugar?", answer: "Depende. Si juega Minecraft offline, no. Si juega competitivo (Fortnite, Valorant, CS2, LoL), SÍ. La diferencia entre 50ms y 4ms es literalmente ver al enemigo 46 milisegundos antes. En un tiroteo, eso es vida o muerte digital." },
            { _key: 'f2', question: "Trabajo para INVAP remoto. ¿WiFi 6 mejora las videollamadas?", answer: "Absolutamente. Zoom, Teams y Meet usan entre 2-4 Mbps en HD. Con WiFi tradicional, si tu hijo está descargando un juego, tu ancho de banda colapsa. Con WiFi 6 (OFDMA + MU-MIMO), cada dispositivo tiene su \"carril\" dedicado. Tu videollamada nunca se pixela." },
            { _key: 'f3', question: "¿Funciona con mis dispositivos viejos?", answer: "Sí. WiFi 6 es retrocompatible. Tu notebook vieja con WiFi 5 funciona igual que antes. Pero tus dispositivos nuevos (PlayStation 5, Xbox Series X, iPhone 11+, Samsung S10+) vuelan." },
            { _key: 'f4', question: "¿Por qué Gnet y no otra empresa?", answer: "Somos la primera ISP patagónica con WiFi 6 certificado. Fiber to the Home (FTTH) real, no promesas. Y soporte técnico local: llamás y te atiende alguien de Bariloche que entiende cómo es vivir acá." },
        ]
    },
    cta: {
        badge: "⚡ ÚLTIMA DECISIÓN INTELIGENTE DEL AÑO",
        title: "¿Tu hijo te pidió WiFi 6? \nTiene razón.",
        description: "No es un capricho. Es la diferencia entre trabajar bien o estar disculpándote en Zoom. Verificá si Gnet con WiFi 6 llega a tu dirección. Si llega, activás en 48 horas.",
    },
    seo: {
        metaTitle: "WiFi 6 en Bariloche - Gnet Fibra Óptica",
        metaDescription: "Internet de alta velocidad con tecnología WiFi 6 en San Carlos de Bariloche. Ping bajo para gaming, estabilidad para home office y streaming 4K.",
    }
  };

  console.log('Seeding data for wifi6Page...');
  
  try {
    const res = await client.createOrReplace(doc);
    console.log('Success! Document created:', res._id);
  } catch (err) {
    console.error('Seed failed:', err.message);
  }
}

main();
