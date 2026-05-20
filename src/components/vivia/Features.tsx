import {
  Fingerprint,
  Search,
  MessageCircle,
  Building2,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Búsqueda y Filtros Inteligentes",
    description: "Encuentra tu próximo hogar en segundos. Filtra por precio, ubicación, número de habitaciones y amenidades con un rendimiento ultrarrápido.",
    icon: Search,
    className: "md:col-span-2 md:row-span-1 bg-gradient-to-br from-card to-secondary/30",
    visual: (
      <div className="absolute right-0 bottom-0 opacity-10 blur-2xl transform translate-x-1/4 translate-y-1/4">
        <Sparkles className="w-64 h-64 text-primary" />
      </div>
    )
  },
  {
    title: "Gestión Sin Fricción",
    description: "Publica propiedades, sube fotos en alta resolución de manera inteligente y gestiona tus anuncios en una plataforma nativa.",
    icon: Building2,
    className: "md:col-span-1 md:row-span-1 bg-card",
    visual: null
  },
  {
    title: "Seguridad Biométrica",
    description: "Acceso protegido con tu huella dactilar o FaceID. Tu sesión e información personal siempre a salvo.",
    icon: Fingerprint,
    className: "md:col-span-1 md:row-span-1 bg-card",
    visual: null
  },
  {
    title: "Conexión Inmediata",
    description: "Recibe notificaciones en tiempo real sobre nuevas propiedades y contacta a los arrendadores directamente vía WhatsApp con un solo clic.",
    icon: MessageCircle,
    className: "md:col-span-2 md:row-span-1 bg-gradient-to-tl from-card to-primary/5 border-primary/20",
    visual: (
      <div className="absolute right-0 top-0 opacity-5 blur-2xl transform translate-x-1/4 -translate-y-1/4">
        <Zap className="w-64 h-64 text-primary" />
      </div>
    )
  }
];

export const Features = () => {
  return (
    <section id="funcionalidades" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="font-display text-4xl font-bold leading-tight text-ink md:text-6xl tracking-tight">
            Diseñado para la <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">velocidad.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Hemos resumido las herramientas más potentes del mercado inmobiliario en una experiencia fluida, rápida y segura. Todo a un tap de distancia.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 grid-cols-1 md:grid-cols-3 md:grid-rows-2">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group relative overflow-hidden rounded-3xl border border-border p-8 md:p-10 transition-smooth hover:border-primary/40 hover:shadow-card flex flex-col justify-between ${f.className}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {f.visual}
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow group-hover:scale-110 transition-smooth">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-ink mb-3">{f.title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
