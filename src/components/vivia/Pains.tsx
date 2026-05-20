import { ImageOff, Users, PhoneOff } from "lucide-react";

const pains = [
  {
    title: "Anuncios Engañosos",
    text: "Descripciones deficientes y fotos que no muestran la realidad del inmueble.",
    icon: ImageOff,
    number: "01",
  },
  {
    title: "Falta de Filtros",
    text: "Plataformas inundadas de perfiles falsos o no verificados que complican la comunicación.",
    icon: Users,
    number: "02",
  },
  {
    title: "Riesgo Constante",
    text: "Exposición a fraudes y estafas telefónicas al tener que dar tus datos personales desde el primer contacto.",
    icon: PhoneOff,
    number: "03",
  }
];

export const Pains = () => {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-display text-4xl font-bold leading-[1.3] text-ink md:text-5xl tracking-tight">
            ¿Por qué rentar o comprar por internet da tanta <span className="relative whitespace-nowrap inline-block mt-2"><span className="relative z-10 text-white">inseguridad?</span><span className="absolute -inset-2 bg-destructive -rotate-2 -z-0 rounded-sm"></span></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pains.map((pain, index) => (
            <div 
              key={pain.title} 
              className="relative group p-8 md:p-10 rounded-3xl bg-secondary/50 border border-border/50 hover:bg-white hover:shadow-card transition-all duration-500 overflow-hidden"
            >
              {/* Huge background number */}
              <div className="absolute -right-4 -top-8 text-[180px] font-display font-black text-ink/[0.03] group-hover:text-primary/[0.05] transition-colors duration-500 pointer-events-none select-none leading-none">
                {pain.number}
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white border border-border rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:border-primary/30 group-hover:text-primary transition-colors duration-500">
                  <pain.icon className="w-6 h-6 text-ink group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-ink mb-4">{pain.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
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
