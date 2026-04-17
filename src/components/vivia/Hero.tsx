import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-primary-glow/15 blur-3xl" />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Nueva era del arrendamiento digital
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-7xl lg:text-8xl">
            Encuentra tu hogar{" "}
            <em className="font-display not-italic">
              <span className="bg-gradient-to-br from-primary to-primary-glow bg-clip-text italic text-transparent">
                sin distracciones.
              </span>
            </em>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Adiós al ruido de las redes sociales. VIVIA es un entorno exclusivo, seguro y enfocado
            netamente en lo que importa:{" "}
            <span className="font-semibold text-foreground">tu próximo inmueble.</span>
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group h-14 gap-2 rounded-full bg-gradient-primary px-8 text-base font-semibold shadow-glow animate-pulse-glow"
            >
              <Smartphone className="h-5 w-5" />
              Explorar App
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-2 px-8 text-base font-semibold"
            >
              Ver Demo Online
            </Button>
          </div>
        </div>

        {/* Mockups placeholder */}
        <div className="relative mx-auto mt-20 grid max-w-6xl grid-cols-1 items-end gap-6 md:grid-cols-3">
          <PhoneFrame className="md:translate-y-8" label="Pega aquí mockup 1" />
          <PhoneFrame className="md:-translate-y-4 md:scale-110 z-10" label="Pega aquí mockup 2" featured />
          <PhoneFrame className="md:translate-y-8" label="Pega aquí mockup 3" />
        </div>
      </div>
    </section>
  );
};

const PhoneFrame = ({
  className = "",
  label,
  featured = false,
}: {
  className?: string;
  label: string;
  featured?: boolean;
}) => (
  <div className={`relative ${className} animate-float`} style={{ animationDelay: featured ? "0s" : "1s" }}>
    <div
      className={`mx-auto aspect-[9/19] w-full max-w-[260px] overflow-hidden rounded-[2.5rem] border-[10px] border-ink bg-muted shadow-card ${
        featured ? "shadow-glow" : ""
      }`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-secondary to-muted p-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground font-display font-bold shadow-glow">
          V
        </div>
        <p className="text-xs font-medium text-muted-foreground">{label}</p>
      </div>
    </div>
  </div>
);
