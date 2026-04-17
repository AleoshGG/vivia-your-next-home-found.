import { CheckCircle2 } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const points = [
  "Entorno digital exclusivo para bienes raíces",
  "Conexión directa entre oferta y demanda",
  "Cero monetización interna: enlaces externos a WhatsApp",
  "Arquitectura ágil, segura y sin chat nativo (sin distracciones)",
];

const solutionImages = [
  `${import.meta.env.BASE_URL}Screenshot_20260415-190441.png`,
  `${import.meta.env.BASE_URL}Screenshot_20260415-190508.png`,
  `${import.meta.env.BASE_URL}Screenshot_20260415-190529.png`,
  `${import.meta.env.BASE_URL}Screenshot_20260415-190544.png`,
];

export const Solution = () => {
  return (
    <section id="solucion" className="bg-ink py-28 text-ink-foreground overflow-hidden">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="animate-fade-up">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-glow">
              La solución
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
              Un espacio diseñado <em className="text-primary-glow italic not-italic font-display">solo para ti.</em>
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              VIVIA elimina el ruido y conecta de manera directa y eficiente la oferta con la
              demanda, permitiéndote encontrar exactamente lo que necesitas en tiempo récord.
            </p>

            <ul className="mt-10 space-y-5">
              {points.map((p) => (
                <li key={p} className="group flex items-start gap-4 transition-colors hover:text-white">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 group-hover:bg-primary/40">
                    <CheckCircle2 className="h-4 w-4 text-primary-glow" />
                  </div>
                  <span className="text-white/80 transition-colors group-hover:text-white">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-[100px]" />
            
            <div className="relative w-full max-w-[320px]">
              <Carousel 
                className="w-full" 
                opts={{ loop: true }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
              >
                <CarouselContent>
                  {solutionImages.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-[9/19] w-full overflow-hidden rounded-[3rem] border-[12px] border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
                        <img 
                          src={src} 
                          alt={`Solution Step ${index + 1}`} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute -bottom-12 left-1/2 flex -translate-x-1/2 gap-4">
                  <CarouselPrevious className="static translate-y-0 bg-white/10 border-white/20 text-white hover:bg-white/20" />
                  <CarouselNext className="static translate-y-0 bg-white/10 border-white/20 text-white hover:bg-white/20" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
