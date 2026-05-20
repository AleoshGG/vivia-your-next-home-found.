import { AlertCircle } from "lucide-react";

export const Impact = () => {
  return (
    <section className="bg-ink md:bg-background pt-8 pb-16 md:py-24 relative">
      {/* Seamless transition on mobile, padded box on desktop */}
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] bg-ink text-white overflow-hidden shadow-2xl md:border border-white/10">
             
             {/* Decorative glows */}
             <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
             <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-destructive/10 rounded-full blur-[100px] pointer-events-none" />

             <AlertCircle className="w-10 h-10 md:w-12 md:h-12 text-primary mb-8 opacity-80" />
             
             <p className="font-display text-xl md:text-2xl lg:text-3xl leading-[1.6] text-white/90">
               Si Vivia no se construye, el impacto negativo en el sector inmobiliario mexicano <strong className="text-white">seguirá agravándose</strong>, dejando a miles de usuarios vulnerables ante una crisis creciente de fraudes que ya superó los 3,800 casos en 2024, con un 70% de ellos ocurriendo en medios digitales.
             </p>
             
             <p className="mt-6 md:mt-8 text-lg md:text-xl text-white/70 leading-relaxed font-light">
               Sin esta plataforma, la proliferación de estafas combinada con publicaciones de baja calidad continuará alimentando un entorno de profunda desconfianza que paraliza las transacciones, alarga los ciclos comerciales y dificulta enormemente la conexión entre propietarios y compradores.
             </p>
             
             <div className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-white/10">
                <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                  Por lo tanto, el proyecto está plenamente justificado: Vivia deja de ser una simple alternativa tecnológica para convertirse en una <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow italic">herramienta de protección urgente y necesaria</span>, diseñada para frenar la pérdida de patrimonio, garantizar la seguridad en el mercado y agilizar de manera real la oferta y la demanda inmobiliaria.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
