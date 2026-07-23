import { TrendingDown, AlertCircle } from "lucide-react";

export const Problem = () => {
  return (
    <section id="el-problema" className="bg-ink py-28 md:py-36 relative overflow-hidden">
       {/* Background subtle noise/glow */}
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-ink to-ink opacity-80 pointer-events-none" />

       <div className="container relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            
            {/* Left col: Hook & Data */}
            <div className="flex flex-col gap-10 animate-fade-up">
               <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white tracking-tight">
                 El mercado digital inmobiliario <span className="text-transparent bg-clip-text bg-gradient-to-r from-destructive to-orange-400 italic">necesita cambiar.</span>
               </h2>
               
               {/* Data Card */}
               <div className="bg-card/5 border border-white/10 rounded-[2rem] p-8 md:p-10 backdrop-blur-sm relative overflow-hidden group transition-smooth hover:border-white/20 hover:bg-card/10 h-full flex flex-col justify-center">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-700">
                    <TrendingDown className="w-32 h-32 text-white" />
                  </div>
                  
                  <div className="relative z-10">
                    <p className="text-xl md:text-2xl text-white/90 leading-[1.6] font-light">
                      ¿Sabías que en un solo año se registraron más de <span className="font-bold text-white text-3xl md:text-4xl bg-white/10 px-2 py-1 rounded-lg ml-1">3,800 casos</span> de fraudes inmobiliarios en México?
                    </p>
                    
                    <div className="mt-8 flex items-center gap-5 bg-black/20 p-5 rounded-2xl border border-white/5">
                       <div className="bg-gradient-to-br from-destructive to-red-600 p-4 rounded-xl shadow-[0_0_30px_-5px_rgba(220,38,38,0.4)]">
                          <span className="text-2xl md:text-3xl font-display font-bold text-white">70%</span>
                       </div>
                       <p className="text-sm md:text-base text-white/70 leading-relaxed flex-1">
                          De estos fraudes ocurren en <strong className="text-white font-medium">plataformas digitales</strong> convencionales.<br/>
                          <span className="text-xs uppercase tracking-widest text-white/40 mt-1 block">(Datos de AMPI, 2024)</span>
                       </p>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Right col: The Impact/Manifesto */}
            <div className="relative p-8 md:p-12 lg:p-14 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden flex flex-col justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
               {/* Decorative glows */}
               <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
               <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-destructive/10 rounded-full blur-[100px] pointer-events-none" />
               
               <AlertCircle className="w-10 h-10 text-primary mb-8 opacity-80" />
               
               <p className="font-display text-xl md:text-2xl leading-[1.6] text-white/90 text-justify">
                 Sin una plataforma como Vivia, el impacto negativo en el sector inmobiliario mexicano <strong className="text-white">seguiría agravándose</strong>, dejando a miles de usuarios vulnerables ante una crisis creciente de fraudes.
               </p>

               <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed font-light text-justify">
                 La proliferación de estafas, combinada con publicaciones de baja calidad, alimenta un entorno de profunda desconfianza que paraliza las transacciones, alarga los ciclos comerciales y dificulta enormemente la conexión entre propietarios y compradores.
               </p>

               <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-lg md:text-xl font-bold text-white leading-relaxed text-justify">
                    Por eso construimos Vivia: no como una simple alternativa tecnológica, sino como una <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow italic">herramienta de protección urgente y necesaria</span>, diseñada para frenar la pérdida de patrimonio y agilizar la oferta y demanda inmobiliaria.
                  </p>
               </div>
            </div>

         </div>
       </div>
    </section>
  );
};
