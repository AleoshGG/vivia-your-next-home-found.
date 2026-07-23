import { ImageOff, Users, PhoneOff } from "lucide-react";

const pains = [
  {
    title: "Anuncios Engañosos",
    quote: "Las fotos no se parecían en nada. Perdí la mañana y el pasaje.",
    text: "Descripciones deficientes y fotos que no muestran la realidad del inmueble.",
    icon: ImageOff,
  },
  {
    title: "Falta de Filtros",
    quote: "Pregunté en tres grupos de Facebook. Nadie sabía si el anuncio era real.",
    text: "Plataformas inundadas de perfiles falsos o no verificados que complican la comunicación.",
    icon: Users,
  },
  {
    title: "Riesgo Constante",
    quote: "Me pidieron depósito antes de ver la casa. Por poco caigo.",
    text: "Exposición a fraudes y estafas telefónicas al tener que dar tus datos personales desde el primer contacto.",
    icon: PhoneOff,
  }
];

export const Pains = () => {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-display text-4xl font-bold leading-[1.2] text-ink md:text-5xl tracking-tight">
            ¿Por qué rentar o comprar por internet da tanta <span className="text-destructive">inseguridad?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pains.map((pain) => (
            <div
              key={pain.title}
              className="relative group p-8 md:p-10 rounded-3xl bg-secondary/50 border border-border/50 hover:bg-white hover:shadow-card transition-all duration-500 flex flex-col"
            >
              <div className="w-14 h-14 bg-white border border-border rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:border-primary/30 transition-colors duration-500">
                <pain.icon className="w-6 h-6 text-ink group-hover:text-primary transition-colors" />
              </div>

              <blockquote className="font-display text-xl font-semibold text-ink leading-snug mb-6">
                “{pain.quote}”
              </blockquote>

              <div className="mt-auto pt-6 border-t border-border/60">
                <h3 className="text-sm font-bold uppercase tracking-widest text-destructive mb-2">{pain.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {pain.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
