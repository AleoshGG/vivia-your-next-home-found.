import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-20 md:pt-28 md:pb-32 lg:min-h-[90vh] lg:flex lg:items-center">
      {/* Subtle decorative background elements */}
      <div className="pointer-events-none absolute right-0 top-0 -translate-y-1/3 translate-x-1/3 h-[800px] w-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_60%)] from-primary/15 to-transparent blur-3xl opacity-80" />
      <div className="pointer-events-none absolute left-0 bottom-0 translate-y-1/3 -translate-x-1/3 h-[600px] w-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_60%)] from-primary/5 to-transparent blur-3xl" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <div className="flex flex-col text-left animate-fade-up max-w-2xl">
            <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-primary-container/60 px-4 py-1.5 text-sm font-semibold text-primary">
              Hecha en Chiapas, para Chiapas
            </p>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-7xl lg:text-[76px]">
              Renta o vende <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow italic">sin miedo</span> a que<br />
              te estafen.
            </h1>

            <p className="mt-8 text-lg md:text-xl leading-relaxed text-muted-foreground">
              VIVIA verifica la identidad de cada arrendador y mantiene toda la conversación dentro de la app.
              <span className="font-semibold text-ink"> Buscar casa deja de ser un acto de fe.</span>
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {/* <Button
                size="lg"
                className="group h-14 gap-3 rounded-full bg-primary px-8 text-lg font-semibold text-white shadow-glow transition-all hover:bg-primary-glow hover:scale-[1.02] active:scale-95"
              >
                Explorar App
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button> */}
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-border bg-card/50 backdrop-blur-sm px-8 text-lg font-semibold text-ink transition-all hover:bg-accent/10 hover:border-accent/30 hover:text-primary active:scale-95"
              >
                Ver Demo Online
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tertiary/10">
                <ShieldCheck className="h-5 w-5 text-tertiary" />
              </div>
              <p>
                Cada arrendador se verifica con documento oficial y selfie,{" "}
                <span className="font-semibold text-ink">revisado por una persona real.</span>
              </p>
            </div>
          </div>

          {/* Right Side: Phone Mockups */}
          <div className="relative h-[500px] md:h-[650px] w-full">
            {/* Grounding shadow beneath the stack */}
            <div className="absolute left-1/2 bottom-6 -translate-x-1/2 h-10 w-2/3 rounded-full bg-ink/20 blur-2xl" />

            {/* Left Phone (Background) */}
            <PhoneFrame
              className="absolute left-0 lg:-left-8 top-20 -rotate-6 scale-[0.88] opacity-80 hover:opacity-100 hover:rotate-0 hover:z-30 transition-all duration-500 ease-out z-10"
              image={`${import.meta.env.BASE_URL}app-chats.jpeg`}
            />

            {/* Center Phone (Featured) */}
            <PhoneFrame
              className="absolute left-1/2 -translate-x-1/2 top-0 z-20 hover:-translate-y-4 transition-all duration-500 ease-out"
              image={`${import.meta.env.BASE_URL}app-home.jpeg`}
              featured
            />

            {/* Right Phone (Background) */}
            <PhoneFrame
              className="absolute right-0 lg:-right-2 top-16 rotate-6 scale-[0.9] opacity-90 hover:opacity-100 hover:rotate-0 hover:z-30 transition-all duration-500 ease-out z-10"
              image={`${import.meta.env.BASE_URL}app-notificaciones.jpeg`}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

const PhoneFrame = ({
  className = "",
  image,
  featured = false,
}: {
  className?: string;
  image: string;
  featured?: boolean;
}) => (
  <div className={`group ${className}`} style={{ animationDelay: featured ? "0s" : "0.5s" }}>
    <div
      className={`mx-auto aspect-[9/19] w-full max-w-[260px] md:max-w-[300px] overflow-hidden isolate rounded-[2.5rem] md:rounded-[3rem] border-8 md:border-[10px] border-ink bg-card shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] ${
        featured ? "ring-4 ring-primary/20" : ""
      } transform-gpu`}
    >
      <div className="absolute top-0 inset-x-0 h-6 bg-ink rounded-b-3xl w-1/2 mx-auto z-50 flex justify-center items-center gap-2">
        <div className="w-12 h-1.5 bg-background/20 rounded-full" />
      </div>
      <img
        src={image}
        alt="Vivia App Screenshot"
        className="h-full w-full rounded-[1.9rem] md:rounded-[2.3rem] object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  </div>
);
