import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const solutionImages = [
  `${import.meta.env.BASE_URL}app-chat-conversacion.jpeg`,
  `${import.meta.env.BASE_URL}app-perfil-premium.jpeg`,
  `${import.meta.env.BASE_URL}app-premium.jpeg`,
  `${import.meta.env.BASE_URL}app-historial-pago.jpeg`,
];

export const Solution = () => {
  return (
    <section id="solucion" className="bg-ink py-24 md:py-28 text-ink-foreground overflow-hidden">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="animate-fade-up">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-glow">
              Nuestro enfoque
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              La seguridad no es una función. <em className="text-primary-glow not-italic">Es la base.</em>
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Cada decisión dentro de VIVIA — desde la verificación con revisión humana hasta el chat
              que no expone tu número — existe para que rentar o vender en Chiapas vuelva a ser un
              trato entre personas de confianza.
            </p>
          </div>

          <div className="relative flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
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
                      <div className="aspect-[9/19] w-full overflow-hidden isolate rounded-[3rem] border-[12px] border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
                        <img
                          src={src}
                          alt={`Pantalla de VIVIA ${index + 1}`}
                          className="h-full w-full rounded-[2.25rem] object-cover"
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
